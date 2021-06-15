const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req)
    // res.write('Welcome to home page')
    // res.end()
    if(req.url === '/'){
        res.end("Welcome to Home Page")
    }
    if(req.url === '/about'){
        res.end("Welcome to About Page")
    }
    res.end(`
        <h1>Opps!</h1>
        <p>We cant find the page you are looking for</p>
        <a href="/">Back Home</a>
    `)
})

server.listen(5000)