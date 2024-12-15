let subscribeBtn = document.getElementById("subscribe-btn");

let successModal = document.getElementById("success-modal");
let closeBtn = document.getElementById("close-btn");

subscribeBtn.addEventListener('click', function (event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();

    const emailError = document.getElementById("email-error");
    const nameError = document.getElementById("name-error");

    emailError.textContent = "";
    nameError.textContent = "";

    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const nameRegex = /^[a-zA-Zá-üÁ-ÜçÇ]{2,20}$/;

    // Validação
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    
    if (!nameRegex.test(name)) {
        nameError.textContent = "Please enter a valid name with at least two characters.";
        isValid = false;
    }

    
    if (isValid) {   

    localStorage.setItem("subscription", JSON.stringify({ email, name }));
    successModal.style.display = "block";
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    }
});

closeBtn.addEventListener('click', function () {
    successModal.style.display = "none";
});


window.addEventListener('click', function (event) {
    if (event.target === successModal) {
        successModal.style.display = "none";
    }
});
