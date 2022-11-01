const mysql = require('mysql2/promise');
const config = require('../config/database');

async function executarNoBanco() {
    const conexao = await mysql.createConnectioN({
        host: config.DB_HOST,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        database: config.DB_NAME,
    });

    const [results, ] = await conexao.execute();

    return results;
}
