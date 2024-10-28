document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from actually submitting (useful if you don’t have a server connection here)

    // Set the 'connected' value to true in localStorage
    localStorage.setItem("connected", "true");

    // Optional: Redirect to a new page or show a message
    console.log("User is now connected.");
  });
