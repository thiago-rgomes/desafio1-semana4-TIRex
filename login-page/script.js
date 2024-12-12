let subscribeBtn = document.getElementById("login-btn");

subscribeBtn.addEventListener('click', function (event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^[a-zA-Zá-üÁ-ÜçÇ0-9@#$%^&*()_\+\-=\[\]{};:'",.<>\/?|\\`~]{8,16}$/;  // permite: @#$%^&*()_+-=[]{};:'",.<>/?|\~`



    // Validação do email
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Please enter a valid password with characters between 8 and 20."
        isValid = false;
    }

    
    if (isValid) {   

    localStorage.setItem("subscription", JSON.stringify({ email, password }));
    alert("Subscription successful!");

    window.location.href = "../kanban-page/index.html";

    }
});