let passwordValue = ""; // Variable to store the generated password

function copyToClipboard() {
    const passwordText = document.getElementById('password').textContent.split(": ")[1];
    if (passwordText && passwordText !== "Your secure password will appear here!") {
        navigator.clipboard.writeText(passwordText);
        alert("Password copied to clipboard!");
    } else {
        alert("Please generate a password first!");
    }
}

function generatePassword() {
    const length = document.getElementById('length').value;
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_-+=<>?";
    const allCharacters = uppercase + lowercase + numbers + symbols;
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    document.getElementById('password').textContent = `Password: ${password}`;
    checkPasswordStrength(password);
    document.getElementById('showPassword').checked = false; // Reset the checkbox
}

function checkPasswordStrength(password) {
    let strength = "Weak";
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_\-+=<>?]/.test(password);

    const criteriaMet = [hasUppercase, hasLowercase, hasNumbers, hasSymbols].filter(Boolean).length;

    if (password.length >= 12 && criteriaMet >= 3) strength = "Strong";
    else if (password.length >= 8 && criteriaMet >= 2) strength = "Medium";

    document.getElementById("strength").textContent = `Strength: ${strength}`;
}

/*function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const isChecked = document.getElementById("showPassword").checked;
    const passwordText = passwordField.textContent.split(": ")[1];

    if (isChecked) {
        passwordField.textContent = passwordValue; // Show only the password
    } else {
        passwordField.textContent = `Password: ${passwordValue}`; // Show with label
    }
}*/
