document.addEventListener('DOMContentLoaded', function(){
    const numberOfStars = 100;
    const body = document.body;

    // Create falling star effect
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${2 + Math.random() * 8}s`;
        star.style.animationDelay = `${Math.random() * 5}s`; // Add random delay to stagger animations
        body.appendChild(star);
    }

    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameIcon = document.getElementById('usernameIcon');
    const passwordIcon = document.getElementById('passwordIcon');

    loginForm.addEventListener('submit', function(event) {
        let hasError = false;

        if (!usernameInput.value.trim()) {
            usernameIcon.classList.add('error'); // Change icon color to red
            usernameInput.classList.add('error'); // Change input box border to red
            hasError = true;
        } else {
            usernameIcon.classList.remove('error'); // Revert icon color
            usernameInput.classList.remove('error'); // Revert input box border
        }

        if (!passwordInput.value.trim()) {
            passwordIcon.classList.add('error'); // Change icon color to red
            passwordInput.classList.add('error'); // Change input box border to red
            hasError = true;
        } else {
            passwordIcon.classList.remove('error'); // Revert icon color
            passwordInput.classList.remove('error'); // Revert input box border
        }

        if (hasError) {
            event.preventDefault(); // Prevent form submission if there are errors
        } else {
            event.preventDefault(); // Prevent default form submission
			window.location.href = 'index.html'; // Redirect to index.html
        }
    });

    // Optional: Reset icon colors and error messages on input focus
    usernameInput.addEventListener('focus', function() {
        usernameIcon.classList.remove('error'); // Revert icon color
        usernameInput.classList.remove('error'); // Revert input box border
    });

    passwordInput.addEventListener('focus', function() {
        passwordIcon.classList.remove('error'); // Revert icon color
        passwordInput.classList.remove('error'); // Revert input box border
    });

    togglePassword.addEventListener("click", function() {
        // Toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);

        this.classList.toggle("fa-eye-slash");
        this.classList.toggle("fa-eye");
    });
});