const db = require('../data/db-config');

function getProjects() {
    return db('Projects');
}

function addProjects(projectData) {
    return db('Projects')
        .insert(projectData, 'id');
}

module.exports = {
    getProjects,
    addProjects
}