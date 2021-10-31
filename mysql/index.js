const mysql = require('mysql')

//创建连接对象
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
})

//开始连接
connection.connect()

// 执行 sql 语句 创建数据库 没有则创建，有则相反
const sql = `CREATE DATABASE IF NOT EXISTS zhu;`
connection.query(sql, (err, result) => {
    if (err) console.error(err)
    console.log('result', result)
})

// 创建表
    const createTableSql = `CREATE TABLE blog(
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    content LONGTEXT NOT NULL,
    author VARCHAR(20) NOT NULL,
    createdAt BIGINT(20) NOT NULL,
);`
    connection.query(createTableSql, (err, result) => {
        if (err) console.error(err)
        console.log('result', result)
    })

//关闭连接
connection.end()