document.addEventListener('DOMContentLoaded', (event) => {
    const parent = document.getElementById('logo__parent');

    // Select all child divs with the class 'main__blog' within the parent div
    const childDivsNodeList = parent.querySelectorAll('.main__blog');

    // Convert the NodeList to an array
    const childDivsArray = Array.from(childDivsNodeList);

    // Iterate over each child div
    childDivsArray.forEach((childDiv) => {
        // Select the .statusLog div within the current child div
        const statusLog = childDiv.querySelector('.statusLog');

        // Get the aria-disabled attribute value
        const statusBool = statusLog.getAttribute('aria-disabled');


        // Add text content to the statusLog div based on aria-disabled value
        if (statusBool === 'true') {
         
            // Create and append new elements for available status
            const text = document.createElement('p');
            const alink = document.createElement('a');
            alink.className = 'email__contact';
            alink.href = 'mailto:nikodola@gmail.com';
            text.textContent = 'The logo is available for purchase. For more information, feel free to contact me at ';
            alink.textContent = 'nikodola@gmail.com';
            text.appendChild(alink);
            statusLog.appendChild(text);

        } else if (statusBool === 'false') {
            // Create and append new elements for not available status
            const text = document.createElement('p');
            const alink = document.createElement('a');
            alink.className = 'email__contact';
            alink.href = 'mailto:nikodola@gmail.com';
            text.textContent = 'The logo is sold! For custom logo design, feel free to contact me at ';
            alink.textContent = 'nikodola@gmail.com';
            text.appendChild(alink);
            statusLog.appendChild(text);
        }
    });

    // Highlight the logo if there's a hash in the URL
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            target.style.border = "2px solid red"; // Highlight the logo
        }
    }

    // Add click event listener to the sticky element
    const sticky = document.querySelector('.sticky');
    sticky.addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5501/index.html';
    });

    // Read more functionality
    const projectDescription = document.querySelector('.project_description');
    const readMore = document.querySelector('.read__more');

    let toggle = false;

    const originalText = projectDescription.textContent;
    // const shortText = originalText.substring(0, 349);
    projectDescription.textContent = shortText;

    // readMore.addEventListener('click', () => {
    //     if (!toggle) {
    //         projectDescription.textContent = originalText;
    //         readMore.style.display = 'none';
    //         toggle = true;
    //     } else {
    //         projectDescription.textContent = shortText;
    //         toggle = false;
    //     }
    // });
});
