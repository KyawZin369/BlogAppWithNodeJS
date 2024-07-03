const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const blogRoute = require('./Router/BlogRouter')

const app = express();

const mongoURL = "mongodb://KyawKyaw:Kzt9182736455Kzt$@ac-vsknloe-shard-00-00.ixejqmp.mongodb.net:27017,ac-vsknloe-shard-00-01.ixejqmp.mongodb.net:27017,ac-vsknloe-shard-00-02.ixejqmp.mongodb.net:27017/?replicaSet=atlas-e78wgl-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=BlogApp"
mongoose.connect(mongoURL)
.then((result)=>{ 
    app.listen(3000)
})
.catch(err=>console.log(err))

app.set('view engine' , 'ejs')

//Middleware and static file 
app.use(express.static('Style'))

app.use(morgan('dev'))

app.use(express.urlencoded({extended : true}))

//save to database 

app.get('/add-blog',(req, res)=>{
    const blog = new Blogs({
        title : "New Blog",
        author : "Kyaw Doe",
        content : `Hiking is a fantastic way to connect with nature and stay active. Whether you're hitting the trails for the first time or looking to expand your outdoor adventures, here are some essential tips for beginners`
    });

    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/all-blog',(req,res)=>{
    Blogs.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/single-blog',(req , res)=>{
    Blogs.findById('667e8e125a0400bbcb7c5b1b')
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

//Route

app.get("/",(req,res)=>{
    res.redirect('/blogs')
})


app.get("/about",(req,res)=>{
    res.render("about" , {title : "About"})  
})

//Blog route

app.use('/blogs',blogRoute)

//redirect 

app.get("/about-us" , (req, res) => {
    res.redirect("/about")
})

//404

app.use((req,res)=>{
    res.status(404).render("404"  , {title : "404"})
})