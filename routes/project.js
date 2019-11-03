const express = require('express');
const router = express.Router();
const data = require('../data.json');
const {
    projects
} = data;

router.get('/fr/project/:index', (req, res) => {


    const index = req.params.index - 1;
    const project = projects[index];
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


    const index = req.params.index - 1;
    const project = projects[index];
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
    res.render('project_en', templateData)
})

module.exports = router;