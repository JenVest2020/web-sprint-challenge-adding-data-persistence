const db = require('../data/db-config');

function getResources() {
    return db('Resources');
}

function addResources(resourceData) {
    return db('Resources')
        .insert(resourceData, 'id');
}

module.exports = {
    getResources,
    addResources
}