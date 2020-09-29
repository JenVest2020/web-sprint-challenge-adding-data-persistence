
exports.seed = function (knex, Promise) {
  return knex('Projects').insert([
    { name: 'Node-db1-project', description: 'Writing basic queries', completed: true },
    { name: 'Node-db2-project', description: 'Writing an API that uses a Relational Database', completed: true },
    { name: 'Node-db3-project', description: 'Writing Multi Table Queries', completed: true },
  ]);
};
