// Book Data
let books = JSON.parse(localStorage.getItem("books")) || [];


// Show Books
function showBooks() {
    let list = document.getElementById("bookList");
    if (!list) return;
    let html = "";
    books.forEach((book, index) => {
        html += `
        <div class="card">
            <img src="${book.image}" width="150" height="200">
            <h3>${book.name}</h3>
            <p>Book No : ${index + 1}</p>
        </div>
        `;
    });
    list.innerHTML = html;
}
showBooks();

// Submit
function submitBook() {
    let operation = document.getElementById("operation").value;
    let name = document.getElementById("bookName").value.trim();
    let imageFile = document.getElementById("bookImage").files[0];
    switch (operation) {
        case "add":
            if (name == "" || !imageFile) {
                alert("Enter Book Name and Select Image");
                return;
            }
            let reader = new FileReader();
            reader.onload = function () {
                books.push({
                    name: name,
                    image: reader.result
                });
                localStorage.setItem("books", JSON.stringify(books));
                alert("Book Added Successfully");
                window.location.href = "book.html";
            };
            reader.readAsDataURL(imageFile);
            break;

//REMOVE
        case "remove":
            books = books.filter(book =>
                book.name.toLowerCase() !== name.toLowerCase()
            );
            localStorage.setItem("books", JSON.stringify(books));
            alert("Book Removed");
            window.location.href = "book.html";
            break;

//COPY
        case "copy":
            let copyBook = books.find(book =>
                book.name.toLowerCase() === name.toLowerCase()
            );
            if (!copyBook) {
                alert("Book Not Found");
                return;
            }
            books.push({
                name: copyBook.name,
                image: copyBook.image
            });
            localStorage.setItem("books", JSON.stringify(books));
            alert("Book Copied");
            window.location.href = "book.html";
            break;

 //SLICE
        case "slice":
            books = books.slice(0, 3);
            localStorage.setItem("books", JSON.stringify(books));
            alert("Showing First 3 Books");
            window.location.href = "book.html";
            break;

//CONCAT
        case "concat":
            if (name == "" || !imageFile) {
                alert("Enter Book Name");
                return;
            }
            let reader2 = new FileReader();
            reader2.onload = function () {
                let newBook = [
                    {
                        name: name,
                        image: reader2.result
                    }
                ];
                books = books.concat(newBook);
                localStorage.setItem("books", JSON.stringify(books));
                alert("New Arrival Added");
                window.location.href = "book.html";
            };
            reader2.readAsDataURL(imageFile);
            break;

//FLAT
        case "flat":
            books = [books].flat();
            localStorage.setItem("books", JSON.stringify(books));
            alert("Flat Category Complete");
            window.location.href = "book.html";
            break;

 // UPDATE
        case "update":
            let index = books.findIndex(book =>
                book.name.toLowerCase() === name.toLowerCase()
            );
            if (index == -1) {
                alert("Book Not Found");
                return;
            }
            if (imageFile) {
                let reader3 = new FileReader();
                reader3.onload = function () {
                    books[index].image = reader3.result;
                    localStorage.setItem("books", JSON.stringify(books));
                    alert("Book Updated");
                    window.location.href = "book.html";
                };
                reader3.readAsDataURL(imageFile);
            }
            else {
                books[index].name = name;
                localStorage.setItem("books", JSON.stringify(books));
                alert("Book Updated");
                window.location.href = "book.html";
            }
            break;
    }
}

// Form
function addBook() {
    let form = document.getElementById("bookForm");
    if (form) {
        form.style.display = "block";
    }
}

function closeForm() {
    let form = document.getElementById("bookForm");
    if (form) {
        form.style.display = "none";
    }
}

window.onload = function () {
    addBook();
};

function setOperation(type) {
    document.getElementById("bookForm").style.display = "block";
    document.getElementById("operation").value = type;
}


