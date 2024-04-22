


const form = document.getElementById('form');
const message = document.getElementById('success-message');

function validateEmail(email) {
    //
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


  form.addEventListener('submit', function(event) {
   
    event.preventDefault();

    const email = document.getElementById('email').value;

  if (validateEmail(email)) {
   
      message.textContent = 'Email is valid!';
      message.style.color = 'green';
  } else {

      message.textContent = 'Invalid email address. Please try again.';
      message.style.color = 'red';
  }});
