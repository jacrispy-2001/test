var prop = require("./product");

var mysql = require("mysql");

module.exports = {
    getConnection: () => {
        return mysql.createConnection(prop);
    }
}