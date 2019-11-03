const express = require('express');
const router = express.Router();
const data = require('../data.json');
const {
    projects
} = data;


router.get('/fr', (req, res) => {

    const render = [];

    projects.forEach(project => {
        render.push([project.id, project.project_name, project.image_urls[0]])
    });

    res.render('index', {
        render
    })

})

router.get('/en', (req, res) => {

    const render = [];

    projects.forEach(project => {
        render.push([project.id, project.project_name_en, project.image_urls[0]])
    });

    res.render('index_en', {
        render
    })

})



module.exports = router;