document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    let isValid = true;
  
    document.getElementById("nameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("messageError").style.display = "none";
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (name === "") {
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    }
  
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }
  
    if (message === "") {
      document.getElementById("messageError").style.display = "block";
      isValid = false;
    }
  
    if (isValid) {
      window.location.href = "thanks.html";
    }
});