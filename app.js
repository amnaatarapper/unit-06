const express = require('express');
const data = require('./data.json');

const app = express();

app.set('view engine', 'pug')

app.use('/static', express.static('public'))

// routes

const index = require('./routes')
app.use(index);

const projects = require('./routes/project')
app.use(projects);

const about = require('./routes/about')
app.use(about);


// error handling middleware
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

// code to execute in case express didnt find a matching get request
app.use((err, req, res, next) => {
    res.status(err.status);
    res.render('error', { error: err });
})


app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});