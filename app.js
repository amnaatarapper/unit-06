const express = require('express');
const data = require('./data.json');

const app = express();

app.set('view engine', 'pug')

// serve static files
app.use('/static', express.static('public'))

// routes

// Redirects the user based on his system language
app.get('/', (req, res) => {
    const userLang = req.headers["accept-language"].slice(6, 8);

    res.redirect(`/${userLang}`);
});

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
        res.render('error', {
            error: err
        })

        let errorMessage = "Request message: " + err.message;
        errorMessage += "\nRequest status: " + err.status;
        // errorMessage += "\nError stack: " + err.stack;

        console.log(errorMessage);
    }) &



    // dev server address
    app.listen(process.env.PORT || 3000, () => {
        console.log('server is up on localhost:3000')
    })