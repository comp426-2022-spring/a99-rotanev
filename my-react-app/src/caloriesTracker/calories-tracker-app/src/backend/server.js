var express = require("express")
var app = express()
const db = require("./database.js")
const log = require("./database_log.js")
var md5 = require("md5")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var HTTP_PORT = 5000

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    res.header("Content-Type", "application/json");
    next();
  });

// Start the server
const server = app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

// READ (HTTP method GET) at root endpoint /app/
app.get("/app/", (req, res, next) => {
    console.log("Root endpoint works");
    res.json({"message":"The API works! (200)"});
	res.status(200);
});

//DO ALL OF THIS
// Define other CRUD API endpoints using express.js and better-sqlite3
// CREATE a new user (HTTP method POST) at endpoint /app/new/

app.post("/app/adduser", (req, res) => {
    console.log("adduser endpoint reached");
    let data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        birthday: req.body.birthday,
        password: req.body.password
    }
    const stmt = db.prepare('INSERT INTO user (firstname, lastname, email, birthday, password) VALUES (?, ?, ?, ?, ?)')
    const info = stmt.run(data.firstname, data.lastname, data.email, data.birthday, data.password);
    res.status(200).json(info)
});

app.post("/app/emailexists/", (req, res, next) => {
    const email = req.body.email;
    let stmt = db
      .prepare(`SELECT COUNT(*) AS COUNT FROM user WHERE email = '${email}'`)
      .all();
    if (stmt[0]["COUNT"] == 0) {
        console.log("account doesn't exist");
      res.status(200).json("account doesn't exist");
    } else {
        res.status("account found!");
    }
  });


app.post("/app/accountexists/", (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log("start of endpoint");
    let stmt = db
      .prepare(`SELECT COUNT(*) AS COUNT FROM user WHERE email = '${email}'`)
      .all();
    if (stmt[0]["COUNT"] == 0) {
        console.log("account doesn't exist");
        alert("account doesn't exist!");
      res.status(200).json("account doesn't exist");
    } else {
        console.log("got in here");
        let stmt = db
        .prepare(`SELECT COUNT(*) AS COUNT FROM user WHERE email = '${email}' AND password='${password}'`)
        .all();
        if (stmt[0]["COUNT"] == 0) {
            res.status(200).json("your password is invalid!");
        }
        else {
            res.status(200).json("account found!");
        }
    }
  });

app.post("/app/delete/", (req, res, next) => {
    const email = req.body.email;
    console.log(email+" is being deleted from the database!");
    const stmt = db.prepare("DELETE FROM user WHERE email= ?");
    const info = stmt.run(email);
    res.status(200).json(info);
});

app.put("/app/update/", (req, res, next) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const birthday = req.body.birthday;
    const password = req.body.password;
    const stmt = db.prepare(
      "UPDATE user SET firstname = ?, lastname = ?, email = ?, birthday = ?, password = ? WHERE email = ?"
    );
    const info = stmt.run(firstname, lastname, email, birthday, password, email);
    res.status(200).json(info);
  });

// READ a list of users (HTTP method GET) at endpoint /app/users/
app.get("/app/users/", (req, res, next) => {	
    console.log("here");
    try {
        const stmt = db.prepare('SELECT * FROM user').all()
        res.status(200).json(stmt)
    } catch {
        console.error(e)
    }
});

/*

// READ a single user (HTTP method GET) at endpoint /app/user/:id
app.get("/app/user/:id", (req, res) => {
    try {
        const stmt = db.prepare('SELECT * FROM user WHERE id = ?').get(req.params.id);
        res.status(200).json(stmt)
    } catch (e) {
        console.error(e)
    }

});

// UPDATE a single user (HTTP method PATCH) at endpoint /app/update/user/:id
app.patch("/app/update/user/:id", (req, res) => {
    let data = {
        user: req.body.username,
        pass: req.body.password
    }
    const stmt = db.prepare('UPDATE user SET username = COALESCE(?,username), password = COALESCE(?,password) WHERE id = ?')
    const info = stmt.run(data.user, data.pass, req.params.id)
    res.status(200).json(info)
});

// DELETE a single user (HTTP method DELETE) at endpoint /app/delete/user/:id
app.delete("/app/delete/user/:id", (req, res) => {
    const stmt = db.prepare('DELETE FROM user WHERE id = ?')
    const info = stmt.run(req.params.id)
    res.status(200).json(info)
});
*/

app.get("/app/interactions", (req, res, next) => {
    const stmt = log.prepare("SELECT * FROM log").all();
    res.status(200).json(stmt);
});

// Default response for any other request
app.use(function(req, res){
	res.json({"message":"Endpoint not found. (404)"});
    res.status(404);
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Server stopped')
    })
})