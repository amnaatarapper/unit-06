const express = require('express');
const router = express.Router();
const data = require('../data.json');
const { projects } = data;


router.get('/', (req, res) => {

    const render = [];

    projects.forEach( project => { render.push([project.id, project.project_name, project.image_urls[0]])
        
    });

    res.render('index', { render })

    
  
})


module.exports = router;