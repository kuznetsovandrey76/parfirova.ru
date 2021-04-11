const lesson = {
    header: 'Открытый урок',
    title: 'Широкая масленица',
    text: 'Возрождение русских национальных традиций, воспитание у учащихся патриотизма',
    summary_link: 'https://disk.yandex.ru/i/hpGyRO5tKlETtw',
    presentation_link: '',
};

exports.up = async function (knex) {
    await knex.schema.createTable('russian', (table) => {
        table.increments('id').primary().unique();
        table.text('header').notNullable();
        table.text('title').notNullable();
        table.text('text').notNullable();
        table.text('summary_link').notNullable();
        table.text('presentation_link').notNullable();
        table.timestamps(true, true);
    });

    await knex('russian').insert(lesson);
};

exports.down = async function (knex) {
    await knex.schema.dropTable('russian');
};
