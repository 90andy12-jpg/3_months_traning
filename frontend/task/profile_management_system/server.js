import express from "express";

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static("public"));

// Temporary user data
let users = [
    {
        id: 1,
        name: "andy",
        age: 23,
        role: "Developer"
    }
];


// ======================================
// GET API - View User Profile
// ======================================

app.get("/api/users", (req, res) => {

    res.json({
        success: true,
        users: users
    });

});


// ======================================
// POST API - Create User Profile
// ======================================

app.post("/api/users", (req, res) => {

    const { name, age, role } = req.body;

    // Check fields
    if (!name || !age || !role) {

        return res.status(400).json({
            success: false,
            message: "Please fill all fields"
        });

    }

    // Create new user
    const newUser = {
        id: users.length + 1,
        name: name,
        age: Number(age),
        role: role
    };

    // Store user
    users.push(newUser);

    // Success response
    res.status(201).json({
        success: true,
        message: "User profile created successfully!",
        user: newUser
    });

});


// Start server
app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});