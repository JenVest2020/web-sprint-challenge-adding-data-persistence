
exports.up = function (knex) {
    return knex.schema
        .createTable('Resources', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable()
            tbl.string('description');
        })
        .createTable('Projects', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable();
            tbl.string('description');
            tbl.boolean('completed').defaultTo(false).notNullable();
        })
        .createTable('Tasks', tbl => {
            tbl.increments();
            tbl.string('description').notNullable();
            tbl.string('notes');
            tbl.boolean('completed').defaultTo(false).notNullable();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('Projects.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('Projects_Resources_Tasks', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('Projects.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('Resources.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('task_id')
                .unsigned()
                .notNullable()
                .references('Tasks.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Projects_Resources_Tasks')
        .dropTableIfExists('Tasks')
        .dropTableIfExists('Projects')
        .dropTableIfExists('Resources');
};
