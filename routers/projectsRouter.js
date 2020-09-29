const { response } = require('express');
const express = require('express');
const db = require('../models/projectsModel');


const router = express.Router();

router.get('/', (req, res) => {
    db.getProjects()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ message: 'error retrieving data', error: err });
        });
});

router.post('/', (req, res) => {
    const projectData = req.body;
    db.addProjects(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Error creating new project', error: err });
        });
});

module.exports = router;