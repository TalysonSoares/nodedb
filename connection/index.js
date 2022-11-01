const mysql = require('mysql2/promise');
const config = require('../config/database');

async function executarNoBanco(query) {
    const conexao = await mysql.createConnection({
        host: config.DB_HOST,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        database: config.DB_NAME,
    });

    const [results, ] = await conexao.execute(query);

    return results;
}

module.exports = {
    executarNoBanco
};