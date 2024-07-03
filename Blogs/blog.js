const mongoose = require('mongoose')
const schema = mongoose.Schema;

const BlogSchema = schema({
    title : {
        type : String,
        require : true
    },
    author : {
        type : String,
        require : true
    },
    content : {
        type : String,
        require : true
    }
}, { timestamps : true })

const Blogs = mongoose.model('Blog' , BlogSchema);

module.exports = Blogs;