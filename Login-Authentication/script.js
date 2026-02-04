function register() {
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;


    if (username === "" || password === "") {
        alert("All fields are required");
        return;
    }


    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Registration successful");
    window.location.href = "index.html";
}


function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;


    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");


    if (username === storedUser && password === storedPass) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
}


function checkAuth() {
    if (localStorage.getItem("loggedIn") !== "true") {
        alert("Unauthorized access");
        window.location.href = "index.html";
    }
}


function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}