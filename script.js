// scripts.js

function checkPassword() {
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    
    if (password === "catalina") {
        var loginContainer = document.querySelector(".login-container");
        var anniversaryContainer = document.querySelector(".anniversary-container");

        loginContainer.classList.remove("visible");
        loginContainer.classList.add("hidden");

        setTimeout(function() {
            loginContainer.style.display = "none";
            anniversaryContainer.style.display = "block";
            setTimeout(function() {
                anniversaryContainer.classList.remove("hidden");
                anniversaryContainer.classList.add("visible");
            }, 10);
        }, 1000);
    } else {
        errorMessage.textContent = "No bebé, contraseña incorrecta.";
    }
}

function expandInput() { // Añadido
    var inputContainer = document.querySelector(".input-container");
    inputContainer.style.height = "60px"; // Ajusta esta altura según sea necesario
}

document.addEventListener("DOMContentLoaded", function() {
    var loginContainer = document.querySelector(".login-container");
    var anniversaryContainer = document.querySelector(".anniversary-container");
    loginContainer.classList.add("visible");
    anniversaryContainer.classList.add("hidden");
});
