document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelector('.image-container').classList.add('animate');
        document.querySelector('.SignUpForm img').classList.add('animate');
        document.querySelector('.SignUpForm form').classList.add('animate');
    }, 100);
});

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';

    password.setAttribute('type', type);

    this.src = type === 'password' ? '../images/HideIcon-01.svg' : '../images/ViewIcon-01.svg';
});

const confirmpassword = document.querySelector('#confirm-password');
const toggleConPassword = document.querySelector('#toggleConPassword');
toggleConPassword.addEventListener('click', function () {
    const type = confirmpassword.getAttribute('type') === 'password' ? 'text' : 'password';

    confirmpassword.setAttribute('type', type);

    this.src = type === 'password' ? '../images/HideIcon-01.svg' : '../images/ViewIcon-01.svg';
});
