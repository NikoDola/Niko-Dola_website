
  const emailInput = document.getElementById('email');
  const nameInput = document.getElementById('name');
  const submitButton = document.getElementById('submitBtn');

  function updateButtonState() {
      submitButton.disabled = !(emailInput.value && nameInput.value && emailInput.value);
  }

  emailInput.addEventListener('input', updateButtonState);
  nameInput.addEventListener('input', updateButtonState);

