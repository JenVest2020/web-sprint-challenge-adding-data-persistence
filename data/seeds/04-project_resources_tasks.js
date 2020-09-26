
exports.seed = function (knex, Promise) {
  return knex('Projects_Resources_Tasks').insert([
    { project_id: 1, resource_id: 3, task_id: 1 },
    { project_id: 1, resource_id: 2, task_id: 2 },
    { project_id: 1, resource_id: 1, task_id: 3 },
    { project_id: 2, resource_id: 3, task_id: 1 },
    { project_id: 2, resource_id: 2, task_id: 2 },
    { project_id: 2, resource_id: 1, task_id: 3 },
    { project_id: 3, resource_id: 3, task_id: 1 },
    { project_id: 3, resource_id: 2, task_id: 2 },
    { project_id: 3, resource_id: 1, task_id: 3 },
  ]);
};
