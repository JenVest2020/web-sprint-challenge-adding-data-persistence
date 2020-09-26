const express = require('express');
const db = require('../models/TasksModel.js');
const { resource } = require('../server');


const router = express.Router();

router.get('/', (req, res) => {
    db.getTasks()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ message: 'error retrieving data', error: err });
        });
});

router.post('/', (req, res) => {
    const taskData = req.body;
    db.addTasks(taskData)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({ message: 'Error creating new task', error: err });
        });
});

module.exports = router;