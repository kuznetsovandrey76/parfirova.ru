require('dotenv').config();

module.exports = {
    client: 'mysql2',
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'migrations',
    },
    connection: {
        host: process.env.HOST || '127.0.0.1',
        port: process.env.PORT || 3306,
        database: process.env.DB,
        user: process.env.DB,
        password: process.env.PASS,
    },
};
