const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); //req.body

// ROUTES

// Sign Up
app.post("/register", async(req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await pool.query("SELECT * FROM reguser WHERE email = $1", [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: "User with this email already exists." });
        }

        const newUser = await pool.query("INSERT INTO reguser (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, password]);
        res.json(newUser.rows[0]);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Internal server error" });
    }
})

// Login
app.get("/login", async(req, res) => {
    try {
        const { email, password } = req.body;

        const user = await pool.query("SELECT * FROM reguser WHERE email = $1", [email]);
        if (user.rows.length === 0) {
            return res.status(400).json({ error: "No account found with this email." });
        }

        const validPass = user.rows[0].password === password;
        if (!validPass) {
            return res.status(400).json({ error: "Invalid password." });
        } 

        res.json({ message: "Login successful." });
        
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Internal server error" });
    }
})

// Get All User Passwords
app.get("/")



// Add Password

// Update Password

// Delete Password



app.listen(5000, () => {
    console.log("server has started on port 5000");
});