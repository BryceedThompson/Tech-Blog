const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');
const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    const blogs = await Promise.all(
      blogData.map(async (blog) => {
        const randomUserIndex = Math.floor(Math.random() * users.length);
        const createdBlog = await Blog.create({
          ...blog,
          user_id: users[randomUserIndex].id,
        });
        return createdBlog;
      })
    );
  
    await Promise.all(
      commentData.map(async (comment) => {
        const randomUserIndex = Math.floor(Math.random() * users.length);
        const randomBlogIndex = Math.floor(Math.random() * blogs.length);
        await Comment.create({
          ...comment,
          user_id: users[randomUserIndex].id,
          blog_id: blogs[randomBlogIndex].id,
        });
      })
    );
  
    process.exit(0);
  };
  
  seedDatabase();