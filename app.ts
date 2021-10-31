import { handleBlogRoute } from './src/router/blog';

function serverHandler(req, res) {
  //设置响应头
  res.setHeader('Content-Type', 'application/json')
  const url = req.url
  req.path = url.split('?')[0]

  req.query = new URLSearchParams(url.split('?')[1])

  const blogData = handleBlogRoute(req, res)

  if(blogData){
    res.end(JSON.stringify((blogData)))
    return
  }
  res.writeHead(404,{'Content-Type':'text/plain'})
  res.write('404 Not Found')
  res.end()
}

module.exports = serverHandler