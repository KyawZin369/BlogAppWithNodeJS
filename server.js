// const http = require('http')
// const fs = require('fs')
// const _ = require('lodash')

// const server = http.createServer((req , res)=>{
    
//     const num = _.random(10 , 20)
//     console.log(num)

//     let path = './view/';
//     switch(req.url){
//         case "/" : 
//             path += 'index.html';
//             res.statusCode = 200
//         break
//         case "/about" :
//             path += 'about.html';
//             res.statusCode = 200
//             break
//         case "/about-me" :
//             res.statusCode = 301
//             res.setHeader('Location' , '/about')
//             res.end();
//             break
//         default : 
//             path += '404.html';
//             res.statusCode = 404
//             break
//     }

//     fs.readFile( path , (err , data) => {
//         if(err){
//             console.log(err)
//         }else{
//             // res.write()
//             res.end(data)
//         }
//     })

// })

// server.listen("4000","Localhost",()=>{
//     console.log("Listening to server")
// })

