const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) =>{

    // lodash

    const num = _.random(100, 10000);
    console.log(num)


    const greet =  _.once(() =>{
        console.log('hello there')
    })

    greet();
    greet();

//set header content type
res.setHeader('Content-Type', 'text/html');




let path = './views/'

switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html'
        res.statusCode = 200;
        break;
    case '/about-me':
        res.statusCode = 301;
        res.setHeader('Location', '/about')
        res.end();
        break;
    default:
        path += '404.html';
        res.statusCode = 404;
        break;

}








//send html file to the browser

fs.readFile(path, (err, data) =>{
    if(err){
        console.log(err)
        res.end()
    }else{
        res.write(data)
        res.end()
    }
})


});








server.listen(3000, 'localhost', () => {
console.log('server listening on port 3000')
})