const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }

getAllDepartments() {
    return this.connection.query('SELECT * FROM department');
}
} 
module.exports = new DB(connection);