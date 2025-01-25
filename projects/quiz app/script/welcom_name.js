// Get the username from the query parameters
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");

// Display the welcome message
if (username) {
    document.getElementById("welcomeMessage").textContent = `Welcome, ${username}!`;
} else {
    document.getElementById("welcomeMessage").textContent = "Welcome, Guest!";
}

// Prevent navigation to this page via browser back button
window.addEventListener("pageshow", (event) => {
    if (event.persisted && !sessionStorage.getItem("username")) {
        sessionStorage.removeItem("username");
        window.location.href = "login.html";
    }
});
