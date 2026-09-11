// Mobile menu

let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Show more projects

let showMoreBtn = document.getElementById("showMoreBtn");
let projectContainer = document.getElementById("projectContainer");

showMoreBtn.addEventListener("click", function () {

    let newProject = document.createElement("div");

    newProject.classList.add("project");

    newProject.innerHTML = `
        <h3>Frontend Project</h3>
        <p>
            A responsive frontend project created while
            learning HTML, CSS and JavaScript.
        </p>
        <a href="#" class="project-btn">View Project</a>
    `;

    projectContainer.appendChild(newProject);

    showMoreBtn.textContent = "Project Added";

    showMoreBtn.disabled = true;

});


// Contact form validation

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    let successMessage = document.getElementById("successMessage");

    // Clear previous messages

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    let isValid = true;


    // Name validation

    if (name === "") {

        nameError.textContent = "Please enter your name.";
        isValid = false;

    }


    // Email validation

    if (email === "") {

        emailError.textContent = "Please enter your email.";
        isValid = false;

    }
    else if (!email.includes("@") || !email.includes(".")) {

        emailError.textContent = "Please enter a valid email.";
        isValid = false;

    }


    // Message validation

    if (message === "") {

        messageError.textContent = "Please enter a message.";
        isValid = false;

    }
    else if (message.length < 10) {

        messageError.textContent =
            "Message should contain at least 10 characters.";

        isValid = false;

    }


    // Success

    if (isValid) {

        successMessage.textContent =
            "Thank you! Your message has been submitted.";

        contactForm.reset();

    }

});