const express = require('express');

//listen for requests
const app = express();

app.set('view engine', 'ejs')

app.listen(3000);

// routes

app.get('/', (req, res) =>{
    const blogs = [
        {title: 'dhdhdhdhdhdd', snippet: 'jdjdjdj'},
        {title: 'dhdhdhdhdhdd', snippet: 'jdjdjdj'},
        {title: 'dhdhdhdhdhdd', snippet: 'jdjdjdj'},
    ]
    res.render('index', { title: 'Home', blogs}, );
})

app.get('/about', (req, res) =>{

    res.render('about', { title: 'about'})
})



app.get('/blogs/create', (req, res) =>{
   res.render('create',  { title: 'create'})
})




// error page

app.use((req, res) =>{
    res.status(404).render('404', { title: '404'})
})