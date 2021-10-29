const email_input = document.getElementById('email');
const form = document.getElementById('notify__form');


function validateEmail(email) 
    {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

form.addEventListener('submit', (e) => {

    if(validateEmail(email_input.value) === false){

        const error = document.querySelector('.error');

        email_input.classList.add("form__input--error");
        error.innerHTML = "Please provide a valid email adress";
        e.preventDefault();
   } 
})
