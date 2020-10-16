var product = require("./product");

var mysql = require("mysql");

module.exports = {
    getConnection: () => {
        return mysql.createConnection(product);
    }
}
