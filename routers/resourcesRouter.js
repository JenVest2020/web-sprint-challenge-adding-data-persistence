const express = require('express');
const db = require('../models/resourcesModel.js');
const { resource } = require('../server');


const router = express.Router();

router.get('/', (req, res) => {
    db.getResources()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ message: 'error retrieving data', error: err });
        });
});

router.post('/', (req, res) => {
    const resourceData = req.body;
    db.addResources(resourceData)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Error creating new resource', error: err });
        });
});

module.exports = router;