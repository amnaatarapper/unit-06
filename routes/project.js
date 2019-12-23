const express = require('express');
const router = express.Router();
const data = require('../data.json');
const {
    projects
} = data;

router.get('/fr/project/:index', (req, res) => {


    const index = req.params.index;
    const project = projects.filter( project => project.id == index)[0];

    if (!project) {
        res.send('<h1 style="font-size: 10rem;">You had to test that, right? :D</h1>')
    }

    const title = project.project_name;
    const desc = project.description;
    const technologies = project.technologies;
    const live = project.live_link;
    const github = project.github_link;
    const banner = project.image_urls[1];


    const templateData = {
        title,
        desc,
        technologies,
        live,
        github,
        banner
    }
    res.render('project', templateData)
})


router.get('/en/project/:index', (req, res) => {


   const index = req.params.index;
    const project = projects.filter( project => project.id == index)[0];

    if (!project) {
        res.send('<h1 style="font-size: 10rem;">You had to test that, right? :D</h1>')
    }

    const title = project.project_name_en;
    const desc = project.description_en;
    const technologies = project.technologies;
    const live = project.live_link;
    const github = project.github_link;
    const banner = project.image_urls[1];


    const templateData = {
        title,
        desc,
        technologies,
        live,
        github,
        banner
    }
    res.render('project_en', templateData)
})

module.exports = router;