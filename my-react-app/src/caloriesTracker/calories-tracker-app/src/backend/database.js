"use strict";
const Database = require('better-sqlite3');
const db = new Database('user.db');

const stmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='userinfo';`);

let row = stmt.get();
if (row == undefined) {
    console.log('Your database appears to be empty. I will initialize it now.');
    const sqlInit = `
        CREATE TABLE user ( 
            id INTEGER PRIMARY KEY, 
            firstname TEXT, 
            lastname TEXT,
            email TEXT,
            birthday DATE,
            password TEXT
        );
    `;

    db.exec(sqlInit);
    console.log('Your database has been initialized with a new table and two entries containing a username and password.');
} else {
    console.log('Database exists.')
}

// Export all of the above as a module so that we can use it elsewhere.
module.exports = db