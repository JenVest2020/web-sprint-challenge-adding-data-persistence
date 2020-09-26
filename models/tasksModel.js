const db = require('../data/db-config');

function getTasks() {
    return db('Tasks as t')
        .join('Projects as p')
        .where('p.id', 't.project_id')
        .select('t.description', 'p.name', 'p.description')
        .orderBy('p.id')

}

function addTasks(taskData) {
    return db('Tasks')
        .insert(taskData, 'id');
}

module.exports = {
    getTasks,
    addTasks
}