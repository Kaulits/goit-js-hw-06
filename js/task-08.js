const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    
    const {email, password} = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        alert('All fields must be filled');
        return;
    } else {
         const form = {
        email: email.value,
        password: password.value
    }
        console.log(form);
        loginFormEl.reset();
    }
}
