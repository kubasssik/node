const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const Post = require('./models/post')
const parse = require('./xlsx/xlsx') 

const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 80 ;

const db = 'mongodb+srv://kubasik:Qwerty_123@cluster0.2ykvm.mongodb.net/gvv-metall?retryWrites=true&w=majority'

mongoose.set( "strictQuery", false );
mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology:true})
.then((res)=> console.log('База данных подключена'))
.catch((error)=> console.log(error));


const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`)

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`подключон порт ${PORT}`);
});


app.use(morgan ( ' :method :url :status :res[content-length] - :response-time ms ' ));
app.use(express.urlencoded({extended: false}));
app.use('/style', express.static('style'))
app.use('/img', express.static('img'))
app.use('/js', express.static('js'))


  app.get('/x', (req, res) => { 
    res.send(parse('./xlsx/demo.xlsx'))
  })

app.get('/', (req, res) => {
   const title = 'Металлопрокат Симферополь';
    Post
    .find()
    .sort({createdAt:-1})
    .then((posts) =>   res.render(createPath('index'), { posts, title }))
    .catch((error) => {
        console.log(error);
        res.render(createPath('error'), {title: 'error'},)
    });
});



app.post('/', (req, res) => {
    const {  author, text } = req.body;
  const post = new Post({author,text});
  post 
  .save()
  .then((result) => res.redirect('/'))
  .catch((error) => {
      console.log(error);
      res.render(createPath('error'), {title: 'error'},)
  });        
});

app.use((req, res) => {
    const title = '404';
    res.status(404);
    res.render(createPath('error'), {title});
});
