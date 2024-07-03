const Blogs = require('../Blogs/blog')

const index_page = (req,res)=>{
    Blogs.find()
    .then((result)=>{
        res.render('index', { title : "Home Page", blog : result })
    })
    .catch((err)=>{
        console.log(err)
    })
}

const Create_Blog = (req,res)=>{
    res.render("create" , {title : "Create Blog"})  
}

const post_Blog = (req,res)=>{
    const blog = new Blogs(req.body)
    blog.save()
    .then(()=>{
        res.redirect('/blogs')
    })
    .catch((err)=>{
        console.log(err)
    })
}

const get_Blog_details = (req,res)=>{
    const id = req.params.id;
    Blogs.findById(id)
    .then(result => {
        res.render('Details', { title : "Details Page" , blog : result})
    })
}

const Delete_Blog =  (req,res)=>{
    const id = req.params.id;
    Blogs.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect : "/blogs"})
    })
    .catch(err => console.log(err))
}

module.exports = {
    index_page,
    Create_Blog,
    post_Blog,
    get_Blog_details,
    Delete_Blog

}