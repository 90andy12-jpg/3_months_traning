
// =====================================================
// SET
// Unique emails store karega
// =====================================================

const users = new Set();


// =====================================================
// MAP
// User ka complete data store karega
// =====================================================

const userData = new Map();


// =====================================================
// HISTORY
// =====================================================

let historyData = [];


// =====================================================
// GENERATOR
// U001, U002, U003...
// =====================================================

function* idGenerator() {

    let count = 1;

    while (true) {

        yield "U" + String(count).padStart(3, "0");

        count++;
    }
}

let generator = idGenerator();


// =====================================================
// ADD USER
// =====================================================

function addUser() {

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const score =
        document.getElementById("score").value.trim();

    const courses =
        document.getElementById("courses").value.trim();


    if (name === "" || email === "") {

        alert("Please enter Name and Email!");

        showMessage("Please enter Name and Email.");

        return;
    }


    if (users.has(email)) {

        alert("User already exists!");

        showMessage("User already exists.");

        addHistory(
            "ADD FAILED",
            "User already exists: " + email
        );

        return;
    }


    // Generate ID

    const id = generator.next().value;


    // Add email to Set

    users.add(email);


    // Add user to Map

    userData.set(email, {

        id: id,

        name: name,

        email: email,

        score: score,

        courses: courses

    });


    alert(
        "User Added Successfully!\n\n" +
        "ID: " + id +
        "\nName: " + name +
        "\nEmail: " + email +
        "\nCourses: " + courses
    );


    showMessage(
        "User added successfully! ID: " + id
    );


    addHistory(
        "USER ADDED",
        name + " (" + id + ")"
    );


    clearInputs();

    displayUsers();
}


// =====================================================
// UPDATE USER
// =====================================================

function updateUserData() {

    const email =
        document.getElementById("email").value.trim();

    const score =
        document.getElementById("score").value.trim();

    const courses =
        document.getElementById("courses").value.trim();


    if (email === "") {

        alert("Please enter Email!");

        showMessage("Please enter Email.");

        return;
    }


    if (!users.has(email)) {

        alert("User does not exist!");

        showMessage("User does not exist!");

        addHistory(
            "UPDATE FAILED",
            "User not found: " + email
        );

        return;
    }


    // Get user

    const user = userData.get(email);


    // Update score

    if (score !== "") {

        user.score = score;
    }


    // Update courses

    if (courses !== "") {

        user.courses = courses;
    }


    // Save updated data

    userData.set(email, user);


    alert(
        "User Updated Successfully!\n\n" +
        "ID: " + user.id +
        "\nName: " + user.name +
        "\nEmail: " + user.email +
        "\nScore: " + user.score +
        "\nCourses: " + user.courses
    );


    showMessage("User updated successfully!");


    addHistory(
        "USER UPDATED",
        user.name + " (" + user.id + ")"
    );


    clearInputs();

    displayUsers();
}


// =====================================================
// SEARCH USER
// =====================================================

function searchUser() {

    const email =
        document.getElementById("email").value.trim();


    if (email === "") {

        alert("Please enter Email to search!");

        showMessage("Please enter Email.");

        return;
    }


    if (!users.has(email)) {

        alert("User not found!");

        showMessage("User not found!");

        addHistory(
            "SEARCH FAILED",
            email
        );

        return;
    }


    const user = userData.get(email);


    document.getElementById("output").innerHTML = `

        <div class="user-card">

            <h3>Search Result</h3>

            <p>
                <b>ID:</b> ${user.id}
            </p>

            <p>
                <b>Name:</b> ${user.name}
            </p>

            <p>
                <b>Email:</b> ${user.email}
            </p>

            <p>
                <b>Score:</b> ${user.score}
            </p>

            <p>
                <b>Courses:</b> ${user.courses}
            </p>

        </div>

    `;


    alert(
        "User Found!\n\n" +
        "ID: " + user.id +
        "\nName: " + user.name +
        "\nEmail: " + user.email +
        "\nScore: " + user.score +
        "\nCourses: " + user.courses
    );


    showMessage("User found!");


    addHistory(
        "USER SEARCHED",
        user.name + " (" + user.id + ")"
    );
}


// =====================================================
// REMOVE USER
// =====================================================

function removeUser() {

    const email =
        document.getElementById("email").value.trim();


    if (email === "") {

        alert("Please enter Email!");

        showMessage("Please enter Email.");

        return;
    }


    if (!users.has(email)) {

        alert("User does not exist!");

        showMessage("User does not exist!");

        addHistory(
            "REMOVE FAILED",
            email
        );

        return;
    }


    const user = userData.get(email);


    const confirmDelete = confirm(
        "Are you sure you want to remove this user?\n\n" +
        "Name: " + user.name +
        "\nID: " + user.id
    );


    if (!confirmDelete) {

        alert("Remove operation cancelled.");

        return;
    }


    // Remove from Set

    users.delete(email);


    // Remove from Map

    userData.delete(email);


    alert(
        "User Removed Successfully!\n\n" +
        "Name: " + user.name +
        "\nID: " + user.id
    );


    showMessage("User removed successfully!");


    addHistory(
        "USER REMOVED",
        user.name + " (" + user.id + ")"
    );


    clearInputs();

    displayUsers();
}


// =====================================================
// DISPLAY ALL USERS
// =====================================================

function displayUsers() {

    const output =
        document.getElementById("output");


    output.innerHTML = "";


    if (userData.size === 0) {

        output.innerHTML =
            "<p>No users available.</p>";

        return;
    }


    userData.forEach(function(user) {

        output.innerHTML += `

            <div class="user-card">

                <h3>${user.name}</h3>

                <p>
                    <b>ID:</b> ${user.id}
                </p>

                <p>
                    <b>Email:</b> ${user.email}
                </p>

                <p>
                    <b>Score:</b> ${user.score}
                </p>

                <p>
                    <b>Courses:</b> ${user.courses}
                </p>

            </div>

        `;

    });
}


// =====================================================
// ADD HISTORY
// =====================================================

function addHistory(action, details) {

    const historyObject = {

        id: Date.now(),

        action: action,

        details: details,

        time: new Date().toLocaleTimeString()

    };


    historyData.unshift(historyObject);

    displayHistory();
}


// =====================================================
// DISPLAY HISTORY
// =====================================================

function displayHistory() {

    const history =
        document.getElementById("history");


    history.innerHTML = "";


    if (historyData.length === 0) {

        history.innerHTML = `

            <p class="empty-history">
                No history yet
            </p>

        `;

        return;
    }


    historyData.forEach(function(item) {

        history.innerHTML += `

            <div class="history-item">

                <button
                    class="history-delete"
                    onclick="deleteHistory(${item.id})">
                    X
                </button>

                <p>
                    <b>${item.action}</b>
                </p>

                <p>
                    ${item.details}
                </p>

                <p>
                    <small>${item.time}</small>
                </p>

            </div>

        `;

    });
}


// =====================================================
// DELETE ONE HISTORY
// =====================================================

function deleteHistory(id) {

    const confirmDelete = confirm(
        "Delete this history item?"
    );


    if (!confirmDelete) {

        alert("History delete cancelled.");

        return;
    }


    historyData =
        historyData.filter(function(item) {

            return item.id !== id;

        });


    alert("History item deleted successfully!");

    displayHistory();
}


// =====================================================
// CLEAR ALL HISTORY
// =====================================================

function clearHistory() {

    if (historyData.length === 0) {

        alert("History is already empty!");

        return;
    }


    const confirmClear = confirm(
        "Are you sure you want to clear all history?"
    );


    if (!confirmClear) {

        alert("Clear history cancelled.");

        return;
    }


    historyData = [];


    alert("All history cleared successfully!");

    showMessage("History cleared!");

    displayHistory();
}


// =====================================================
// RESET SYSTEM
// =====================================================

function resetSystem() {

    const confirmReset = confirm(
        "Are you sure you want to reset the complete system?\n\n" +
        "All users and data will be removed."
    );


    if (!confirmReset) {

        alert("System reset cancelled.");

        return;
    }


    // Clear Set

    users.clear();


    // Clear Map

    userData.clear();


    // Restart Generator

    generator = idGenerator();


    addHistory(
        "SYSTEM RESET",
        "All users and data were cleared"
    );


    alert(
        "System Reset Successfully!"
    );


    showMessage(
        "System reset successfully!"
    );


    clearInputs();

    displayUsers();
}


// =====================================================
// CLEAR INPUTS
// =====================================================

function clearInputs() {

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("score").value = "";

    document.getElementById("courses").value = "";
}


// =====================================================
// SHOW MESSAGE
// =====================================================

function showMessage(message) {

    document.getElementById("message").innerText =
        message;
}


// =====================================================
// INITIAL LOAD
// =====================================================

displayUsers();

displayHistory();

