// Require all necessary packages
"use strict";
const Database = require('better-sqlite3');
const db = new Database('database.db');

let stmt=null;
stmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='user';`);

let row = stmt.get();
if (row == undefined) {
    console.log('Your user database appears to be empty. I will initialize it now.');
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
    console.log('Your user database has been initialized.');
} else {
    console.log('User database exists.')
}


stmt = db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';`
    );

row = stmt.get();

if (row === undefined) {
    console.log('Your logs database appears to be empty. I will initialize it now.');
    const sqlInit = `
    CREATE TABLE accesslog ( id INTEGER PRIMARY KEY, 
        remoteaddr TEXT, 
        remoteuser TEXT, 
        time TEXT, 
        method TEXT, 
        url TEXT,  
        protocol TEXT,
        httpversion TEXT,
        secure TEXT, 
        status TEXT, 
        referer TEXT, 
        useragent TEXT);`;
    db.exec(sqlInit);
    console.log('Your logs database has been initialized.');
} else {
    console.log('Logs Database exists.')
}
// Export all of the above as a module so that we can use it elsewhere.
module.exports = db