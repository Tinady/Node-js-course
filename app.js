const express = require('express');
const  mongoose  = require('mongoose');
const Blog= require ("./models/blog")

const app = express();

const MONGOURL = 'mongodb+srv://tinady:ydanit@cluster0.tvjpthi.mongodb.net/node?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(MONGOURL)
.then((result) => {app.listen(3000)
                 console.log("connected") })
.catch((error)=>console.log(error))


app.get('/add-blog' , (req, res)=>{
   const blog= new Blog ({
      title:"THOSe",
      snippet:"people",
      body:"are"


   })

  
})


app.set('view engine', 'ejs')
app.use(express.static('public'));





app.get('/', (req, res) => {
   const blogs = [
      { title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur" },
      { title: "Tina finds stars", snippet: "Lorem ipsum dolor sit amet consectetur" },
      { title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur" }
   ]

   res.render('index', { title: 'Home', blogs })
})



app.get('/about', (req, res) => {
   res.render('about')
})

app.get('/blogs/create', (req, res) => {
   res.render('create')
})



app.use((req, res) => {
   res.render('404')
})