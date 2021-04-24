const lessons = [
    {
        header: 'Открытый урок',
        title: 'Широкая Масленица',
        text: 'Возрождение русских национальных традиций, воспитание у учащихся патриотизма',
        summary_link: 'https://disk.yandex.ru/i/hpGyRO5tKlETtw',
        type: 'word',
    },
    {
        header: 'Презентация',
        title: 'Широкая Масленица',
        text: '',
        summary_link: 'https://disk.yandex.ru/i/bpMaAI0n24f1gg',
        type: 'ppoint',
    },
    {
        header: 'Открытый урок',
        title: 'О чем плачут лошади',
        text: '',
        summary_link: 'https://disk.yandex.ru/i/SyDsM4CeODRDMg',
        type: 'word',
    },
    {
        header: 'Презентация',
        title: 'О чем плачут лошади',
        text: '',
        summary_link: 'https://disk.yandex.ru/i/Zk8O1vFIMPfGUQ',
        type: 'ppoint',
    },
    {
        header: 'Конспект урока',
        title: 'Виды глагола 5 кл.',
        text: '',
        summary_link: 'https://disk.yandex.ru/i/UuoVeYM4nPRA5A',
        type: 'word',
    },
    {
        header: 'Презентация',
        title: 'Виды глагола 5 кл.',
        text: '',
        summary_link: 'https://disk.yandex.ru/i/4VKsWt1z__nCgg',
        type: 'ppoint',
    },
    {
        header: 'Конспект урока',
        title: 'Тоже, также, зато, чтобы',
        text: '',
        summary_link: 'https://disk.yandex.ru/i/J1msnmZ0n4ObTw',
        type: 'word',
    },
    {
        header: 'Презентация',
        title: 'Тоже, также, зато, чтобы',
        text: '',
        summary_link: 'https://disk.yandex.ru/i/3BPHY3x-CfPApg',
        type: 'ppoint',
    },
    {
        header: 'Конспект урока',
        title: 'Окончание и основа слова',
        text: '',
        summary_link: 'https://disk.yandex.ru/i/ofNOZ6a3BPo8fg',
        type: 'word',
    },
    {
        header: 'Презентация',
        title: 'Окончание и основа слова',
        text: '',
        summary_link: 'https://disk.yandex.ru/i/LN-GTRV5wE6I1g',
        type: 'ppoint',
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
        table.timestamps(true, true);
    });

    await knex('russian').insert(lessons);
};

exports.down = async function (knex) {
    await knex.schema.dropTable('russian');
};
