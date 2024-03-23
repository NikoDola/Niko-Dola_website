document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('submitForm')) {
        // We're on the form page
        document.getElementById('submitForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission

            // Capture the form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            // Store the data in Local Storage
            localStorage.setItem('formData', JSON.stringify({ name, email }));

            // Redirect to the display page
            window.location.href = 'display.html';
        });
        
    } else if (document.getElementById('formData')) {
        // We're on the display page
        const formDataDiv = document.getElementById('formData');
        const formData = JSON.parse(localStorage.getItem('formData'));

        if (formData) {
            // Dynamically create and append the <p> tags
            const nameParagraph = document.createElement('p');
            nameParagraph.textContent = `Name: ${formData.name}`;
            formDataDiv.appendChild(nameParagraph);

            const emailParagraph = document.createElement('p');
            emailParagraph.textContent = `Email: ${formData.email}`;
            formDataDiv.appendChild(emailParagraph);
        } else {
            formDataDiv.textContent = 'No data submitted.';
        }
    }
});
