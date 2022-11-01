-- Criando banco de dados --
CREATE DATABASE db_comercio;

--Selecionando banco para ser usado --
USE db_comercio;

-- Criando tabela de categoria --
CREATE TABLE tb_categoria (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(100)
);