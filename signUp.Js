document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Sign-Up Successful! Welcome to the Song App 🎵");
        // You can redirect or store user details here
    }
});
