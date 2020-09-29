
exports.seed = function (knex, Promise) {
  return knex('Resources').insert([
    { name: 'Project Lead', description: 'Boss and helper to all, answers only to the client' },
    { name: 'Visual Studio Code', description: 'The prefered code editor used for all projects at this company' },
    { name: 'Zoom', description: 'The prefered video conferencing tool used at this company' }
  ]);
};
