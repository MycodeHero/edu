const mysql = require('mysql')

const client = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  database: 'yz_online',
  user: 'root',
  password: ''
})

client.connect(function(err){
  if (err) {
    console.error('连接错误: ' + err.stack)
    return;
  }

  console.log("连接成功，可以访问数据库")
  global.mysql = client
})