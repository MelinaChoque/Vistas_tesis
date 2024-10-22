
const togglePassword2 = document.querySelector('#togglePassword2');
const password2 = document.querySelector('#id_password2');

togglePassword2.addEventListener('click', function(e) {
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);
    if (type === 'password') {
        togglePassword2.classList.remove('fa-eye-slash');
        togglePassword2.classList.add('fa-eye');
    } else {
            togglePassword2.classList.remove('fa-eye');
        togglePassword2.classList.add('fa-eye-slash');
    }
});
