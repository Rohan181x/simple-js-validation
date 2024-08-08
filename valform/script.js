document.getElementById('myForm').addEventListener('submit', function(event) {
    let valid = true;

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('countryError').textContent = '';
    document.getElementById('genderError').textContent = '';

    // Username validation
    const username = document.getElementById('username').value;
    if (username.length < 4) {
        document.getElementById('usernameError').textContent = 'Username must be at least 4 characters long.';
        valid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain at least one uppercase letter, one digit, and one special character.';
        valid = false;
    }

    // Country validation
    const country = document.getElementById('country').value;
    if (!country) {
        document.getElementById('countryError').textContent = 'Please select a country.';
        valid = false;
    }

    // Gender validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender || (gender.value !== 'male' && gender.value !== 'female')) {
        document.getElementById('genderError').textContent = 'Please select a valid gender.';
        valid = false;
    }

    // If any validation fails, prevent form submission
    if (!valid) {
        event.preventDefault();
    }
});
