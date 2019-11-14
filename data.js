const MySQL = require ('mysql');

const connection = MySQL.createConnection({
    host: '127.0.0.1:3306',
    database: 'db_agenda_contato',
    user: 'root',
    password: 'Ab10203040.'
});

connection.connect(function(err){
    if(err) throw err;

    console.log("Connected to MySQL Server!");
});

module.exports = connection;
