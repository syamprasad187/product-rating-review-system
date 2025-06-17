const db = require('../config/db');

exports.register = (user, callback) => {
    db.query('INSERT INTO users SET ?', user, callback);
};

exports.login = (email, password, callback) => {
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], callback)
};