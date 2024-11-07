document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email');
  const messageDiv = document.getElementById('message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (email) {
      messageDiv.textContent = `Thank you! Your email address "${email}" has been added to our mailing list!`;
      emailInput.value = '';
    } else {
      messageDiv.textContent = 'Please enter a valid email address.';
    }
  });
});