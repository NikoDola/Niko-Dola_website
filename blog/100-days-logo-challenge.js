document.addEventListener('DOMContentLoaded', (event) => {
    const parent = document.getElementById('logo__parent');

    function scrolling(){
        const gridImage1 = document.getElementById('gridImage1')
        const day1 = document.getElementById('day1')
        gridImage1.addEventListener('click', () => {
        day1.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to day1
        });

        const gridImage2 = document.getElementById('gridImage2')
        const day2 = document.getElementById('day2')
        gridImage2.addEventListener('click', () => {
        day2.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to day1
        });

        const gridImage3 = document.getElementById('gridImage3')
        const day3 = document.getElementById('day3')
        gridImage3.addEventListener('click', () => {
        day3.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to day1
        });

        const gridImage4 = document.getElementById('gridImage4')
        const day4 = document.getElementById('day4')
        gridImage4.addEventListener('click', () => {
        day4.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to day1
        });
        
        const gridImage5 = document.getElementById('gridImage5')
        const day5 = document.getElementById('day5')
        gridImage5.addEventListener('click', () => {
        day5.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to day1
        });
        
        const gridImage6 = document.getElementById('gridImage6')
        const day6 = document.getElementById('day6')
        gridImage6.addEventListener('click', () => {
        day6.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to day1
        });

        const gridImage7 = document.getElementById('gridImage7')
        const day7 = document.getElementById('day7')
        gridImage7.addEventListener('click', () => {
        day7.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to day1
        });

        const gridImage8 = document.getElementById('gridImage8')
        const day8 = document.getElementById('day8')
        gridImage8.addEventListener('click', () => {
        day8.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to day1
        });

        const gridImage9 = document.getElementById('gridImage9')
        const day9 = document.getElementById('day9')
        gridImage8.addEventListener('click', () => {
        day8.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to day1
        });
        
    }
    scrolling()
  

 


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


