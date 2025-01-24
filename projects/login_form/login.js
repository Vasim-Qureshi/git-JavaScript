// Predefined user data
const users = [
    { username: "vasim qureshi" },
    { username: "prakash sharma" },
    { username: "john deo" },
  ];
  
  // Event listener for the login form
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const usernameInput = document.getElementById("username").value.trim();
    const messageDiv = document.getElementById("message");
  
    // Check if the username exists in the users array
    const user = users.find((u) => u.username.toLowerCase() === usernameInput.toLowerCase());
  
    if (user) {
    // messageDiv.textContent = `Welcome, ${user.username}!`;
    // messageDiv.style.color = "green";
      // Navigate to the next page and pass the username as a query parameter
    //   window.location.href = `welcome.html?username=${encodeURIComponent(user.username)}`;
      // Display the anchor tag and set the href dynamically
      nextPageLink.href = `../quiz app/quiz.html?username=${encodeURIComponent(user.username)}`;
      nextPageLink.style.display = "inline-block";
      messageDiv.textContent = `Login successful! Click below to continue.`;
      messageDiv.style.color = "green";
    } else {
      nextPageLink.style.display = "none"; // Hide the link if login fails
      messageDiv.textContent = "User not found. Please try again.";
      messageDiv.style.color = "red";
    }
  
    // Clear the input field
    document.getElementById("username").value = "";
  });
  