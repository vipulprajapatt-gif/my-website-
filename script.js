
const body = document.body;

const pullCord = document.getElementById("pullCord");

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const formTitle = document.getElementById("formTitle");
const subtitle = document.querySelector(".subtitle");
const submitBtn = document.querySelector(".submit-btn");

const nameInput = document.getElementById("name");
const authForm = document.getElementById("authForm");
const message = document.getElementById("message");

// Lamp ON / OFF
function toggleLamp() {
    const isOn = body.dataset.on === "true";

    body.dataset.on = isOn ? "false" : "true";

    message.textContent = "";
}

// Click on pull string
pullCord.addEventListener("click", toggleLamp);

// Keyboard support
pullCord.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleLamp();
    }
});

// Login mode
function showLogin() {
    formTitle.textContent = "Welcome Back!";
    subtitle.textContent = "Login to your account";

    loginTab.classList.add("active");
    signupTab.classList.remove("active");

    nameInput.style.display = "none";
    nameInput.required = false;

    submitBtn.textContent = "Login";

    message.textContent = "";
}

// Signup mode
function showSignup() {
    formTitle.textContent = "Create Account";
    subtitle.textContent = "Join us today!";

    signupTab.classList.add("active");
    loginTab.classList.remove("active");

    nameInput.style.display = "block";
    nameInput.required = true;

    submitBtn.textContent = "Signup";

    message.textContent = "";
}

// Tab events
loginTab.addEventListener("click", showLogin);
signupTab.addEventListener("click", showSignup);

// Form submit
authForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (body.dataset.on !== "true") {
        message.textContent = "Please turn on the lamp first!";
        return;
    }

    if (signupTab.classList.contains("active")) {
        const name = nameInput.value;

        message.textContent =
            "Welcome " + name + "! Signup demo successful.";

    } else {
        message.textContent =
            "Login demo successful! Welcome back.";
    }

    console.log("Email:", email);
    console.log("Password entered:", password);

    authForm.reset();
});
