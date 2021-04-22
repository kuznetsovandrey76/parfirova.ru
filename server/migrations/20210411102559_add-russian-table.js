const lessons = [
    {
        header: 'Открытый урок',
        title: 'Широкая масленица',
        text: 'Возрождение русских национальных традиций, воспитание у учащихся патриотизма',
        summary_link: 'https://disk.yandex.ru/i/hpGyRO5tKlETtw',
        type: 'word',
        presentation_link: '',
    },
    {
        header: 'Excel',
        title: 'Широкая масленица',
        text: 'Возрождение русских национальных традиций, воспитание у учащихся патриотизма',
        summary_link: 'https://disk.yandex.ru/i/hpGyRO5tKlETtw',
        type: 'excel',
        presentation_link: '',
    },
    {
        header: 'Power Point',
        title: 'Широкая масленица',
        text: 'Возрождение русских национальных традиций, воспитание у учащихся патриотизма',
        summary_link: 'https://disk.yandex.ru/i/hpGyRO5tKlETtw',
        type: 'ppoint',
        presentation_link: '',
    },
    {
        header: 'Default',
        title: 'Широкая масленица',
        text: 'Возрождение русских национальных традиций, воспитание у учащихся патриотизма',
        summary_link: 'https://disk.yandex.ru/i/hpGyRO5tKlETtw',
        type: '',
        presentation_link: '',
    },
];

exports.up = async function (knex) {
    await knex.schema.createTable('russian', (table) => {
        table.increments('id').primary().unique();
        table.text('header').notNullable();
        table.text('title').notNullable();
        table.text('text').notNullable();
        table.text('type').notNullable();
        table.text('summary_link').notNullable();
        table.text('presentation_link').notNullable();
        table.timestamps(true, true);
    });

    await knex('russian').insert(lessons);
};

exports.down = async function (knex) {
    await knex.schema.dropTable('russian');
};
