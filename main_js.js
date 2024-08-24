const bar=document.getElementById('bar');
const nav= document.getElementById('navbar');
const close=document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

document.addEventListener('DOMContentLoaded', function() {
    showTab('login'); // Default to login tab

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const errorMessage = document.getElementById('loginError');

        if (!username || !password) {
            errorMessage.textContent = 'Please fill in both fields.';
            return;
        }

        // Example login check (replace with actual authentication)
        if (username === 'user' && password === 'password') {
            alert('Login successful!');
            window.location.href = 'main.html'; // Redirect to main page or dashboard
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
    });

    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const errorMessage = document.getElementById('signupError');

        if (!username || !email || !password) {
            errorMessage.textContent = 'Please fill in all fields.';
            return;
        }

        // Example sign-up check (replace with actual sign-up logic)
        alert('Sign up successful!');
        window.location.href = 'main.html'; // Redirect to main page or dashboard
    });
});

function showTab(tabName) {
    document.querySelectorAll('.auth-form').forEach(function(form) {
        form.classList.remove('active');
    });
    document.querySelectorAll('.tab-button').forEach(function(button) {
        button.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`).classList.add('active');
}
