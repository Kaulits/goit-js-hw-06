const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const user = {};

    formData.forEach((email, password) => {
       user[email] = password;
       
    });

    if (user.email === '' || user.password === '') {
        alert('All fields must be filled')
    } else {
        console.log(user);
        loginFormEl.reset();
    }
}
