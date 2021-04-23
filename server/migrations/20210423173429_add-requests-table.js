const requests = [
    {
        email: 'admin@admin.ru',
        name: 'Andrey',
        phone: '88002000500',
        message: 'Hi',
    },
    {
        email: 'admin@admin.ru',
        name: 'Andrey',
        phone: '',
        message: 'Hi',
    },
];

exports.up = async function (knex) {
    await knex.schema.createTable('requests', (table) => {
        table.increments('id').primary().unique();
        table.string('email').notNullable();
        table.string('name').notNullable();
        table.string('phone');
        table.string('message').notNullable();
        table.timestamps(true, true);
    });

    await knex('requests').insert(requests);
};

exports.down = async function (knex) {
    await knex.schema.dropTable('requests');
};
