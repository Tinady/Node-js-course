const express= require('express')

const app=express();

const MONGOURL= 'mongodb+srv://tinady:ydanit@cluster0.tvjpthi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.listen(3000);


app.get('/', (req,res)=>{
   const blogs=[
      {title: "Yoshi finds eggs", snippet:"Lorem ipsum dolor sit amet consectetur"},
      {title: "Tina finds stars", snippet:"Lorem ipsum dolor sit amet consectetur"},
      {title: "How to defeat bowser", snippet:"Lorem ipsum dolor sit amet consectetur"}
      ]

  res.render('index', {title:'Home', blogs})
})



app.get('/about', (req,res)=>{
   res.render('about')
})

app.get('/blogs/create', (req,res)=>{
   res.render('create')
})



app.use((req,res)=>{
   res.render('404')
})