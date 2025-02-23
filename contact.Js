

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); 
        alert("Sign-In Successful!"); 
    });

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseMessage = document.getElementById("response-message");

    if (name === "" || email === "" || message === "") {
        responseMessage.textContent = "⚠️ Please fill in all fields.";
        responseMessage.style.color = "red";
        return;
    }

    
    responseMessage.textContent = "✅ Your request has been submitted!";
    responseMessage.style.color = "#1DB954";

    console.log({ name, email, message });

    
    document.getElementById("contact-form").reset();


function playGIF() {
    document.getElementById("gif-image").src = "your-animation.gif";
}






