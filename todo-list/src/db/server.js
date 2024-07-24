const express = require('express');
const cors = require('cors');
const db = require('better-sqlite3')('database.db');
const app = express();
const port = 3001;
app.use(cors());

app.use(express.json());
// Create the table
const createTables = () => {
    const userTables = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            username TEXT,
            password TEXT
        )`;
    const todoTable = `
        CREATE TABLE IF NOT EXISTS todo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            todo TEXT,
            description TEXT,
            priority INTEGER
        )`
    db.prepare(userTables).run();
    db.prepare(todoTable).run();
};
createTables();

// Insert a new user
app.post('/users',async (req, res) => {
    const { name, username, password } = req.body;
    const adduser = `
    INSERT INTO users (name, username, password)
    VALUES (?, ?, ?)`;
    // console.log(req.body)
    const checkUser = `
        SELECT * FROM users
        WHERE username = ?
    `
    const row =  db.prepare(checkUser).get(username)
    console.log('lee',row)
    if (row){
        res.status(400).json({ error: 'User already exists' });
    }else{
        const info =  db.prepare(adduser).run(name, username, password);
        res.status(201).json({ id: info.lastInsertRowid });
    }
});

// Get all users
app.get('/users', (req, res) => {

    const {username,password} = res.body 
    const sql = `SELECT * FROM user where username = ?, password = ?`;
    const rows = db.prepare(sql).get(username,password);
    res.json(rows);
});

// Get a todo by id
app.get('/todo', (req, res) => {
    const sql = `
        SELECT * FROM todo
    `;
    const row = db.prepare(sql).all();
    if (row) {
        res.json(row);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

//Add todos
app.post('/todo',(req,res)=>{
    const {todo,description,priority} = req.body
    const sql = `
        INSERT INTO todo (todo,description,priority) 
        VALUES(?,?,?)
    `
    const info = db.prepare(sql).run(todo,description,priority)
    res.status(201).json({ id: info.lastInsertRowid });
})

// Update a todo by id
app.put('/todo/:id', (req, res) => {
    const { id } = req.params;
    const { todo, description, priority } = req.body;
    const sql = `
        UPDATE todo
        SET todo = ?, description = ?, priority = ?
        WHERE id = ?
        `;
    const info = db.prepare(sql).run(todo, description, priority, id);
    if (info.changes > 0) {
        res.json({ message: 'todo updated successfully' });
    } else {
        res.status(404).json({ error: 'todo not found' });
    }
});

// Delete a user by id
app.delete('/todo/:id', (req, res) => {
    const { id } = req.params;
    const sql = `
        DELETE FROM todo
        WHERE id = ?
    `;
    const info = db.prepare(sql).run(id);
    if (info.changes > 0) {
        res.json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
