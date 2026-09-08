// ==========================================
// GET - VIEW USER PROFILE
// ==========================================

const viewBtn = document.getElementById("viewBtn");

const profile = document.getElementById("profile");


viewBtn.addEventListener("click", async () => {

    try {

        const response = await fetch("/api/users");

        const data = await response.json();


        profile.innerHTML = "";


        data.users.forEach(user => {

            profile.innerHTML += `

                <div class="profile-box">

                    <p>
                        <strong>ID:</strong>
                        ${user.id}
                    </p>

                    <p>
                        <strong>Name:</strong>
                        ${user.name}
                    </p>

                    <p>
                        <strong>Age:</strong>
                        ${user.age}
                    </p>

                    <p>
                        <strong>Role:</strong>
                        ${user.role}
                    </p>

                </div>

            `;

        });

    } catch (error) {

        console.log("Error:", error);

    }

});



// ==========================================
// POST - CREATE USER PROFILE
// ==========================================

const userForm = document.getElementById("userForm");

const message = document.getElementById("message");


userForm.addEventListener("submit", async (event) => {

    event.preventDefault();


    const name = document.getElementById("name").value;

    const age = document.getElementById("age").value;

    const role = document.getElementById("role").value;


    try {

        const response = await fetch("/api/users", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                name: name,

                age: age,

                role: role

            })

        });


        const data = await response.json();


        // Show success message

        message.style.display = "block";

        message.textContent = data.message;


        // Clear form

        userForm.reset();


        // Hide message after 3 seconds

        setTimeout(() => {

            message.style.display = "none";

        }, 3000);


    } catch (error) {

        console.log("Error:", error);

        message.style.display = "block";

        message.textContent = "Something went wrong!";

    }

});