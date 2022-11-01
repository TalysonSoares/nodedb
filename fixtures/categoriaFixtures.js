const {executarNoBanco} = require('../connection');

for (let x = 1; x <= 100; x++) {
    let query = `
        INSERT INTO tb_categoria (nome, descricao)
        VALUES ('Categoria Teste ${x}', 'Descricao da categoria Teste ${x}');
        `

    executarNoBanco(query);
}


    console.log('100 novas categoria inserida')