const router = require('express').Router();
const { Blog, User ,Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all projects and user data
      const blogData = await Blog.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
          
          {
            model: Comment,
            attributes: ['content', 'date_created', 'user_id'],
            include: [
              {
                model: User,
                attributes: ['name'],
              },
            ],
          },
        ]
      
      });

       // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
       console.log(JSON.stringify(blogs,null,2));
       console.log(req.session.logged_in)
   
    // Pass serialized data and session flag into template
    res.render('home', { blogs, logged_in: req.session.logged_in,});
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blog = blogData.get({ plain: true });
    console.log(blog)
    res.render('blog', {
      ...blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find logged in user
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });
    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {

  res.render('signup');
});

module.exports = router;