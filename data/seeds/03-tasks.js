
exports.seed = function (knex, Promise) {
  return knex('Tasks').insert([
    { description: 'Fork and Clone Repository', notes: 'make sure to clone your forked version of the project', completed: true, project_id: 1 },
    { description: 'Read all of the ReadMe instructions carefully', notes: 'make sure to make note of the MVP requirements of the project', completed: true, project_id: 2 },
    { description: 'Take advantage of the 20 minute rule', completed: true, project_id: 3 },
  ]);
};
