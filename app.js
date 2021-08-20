const qs = require('querystring');
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');

const serverHandle = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const url = req.url;
  req.path = url.split('?')[0];

  // 处理query
  req.query = qs.parse(url.split('?')[1]);

  // 处理blog路由数据
  const blogData = handleBlogRouter(req, res);
  if (blogData) {
    res.end(JSON.stringify(blogData));
    return;
  }

  // 处理user路由数据
  const userData = handleUserRouter(req, res);
  if (userData) {
    res.end(JSON.stringify(userData));
    return;
  }

  //返回404
  res.writeHead(404, { 'Content-type': 'text/plain' });
  res.write('404 Not Found\n');
  res.end();
};

module.exports = serverHandle;

//process.env.NODE_ENV