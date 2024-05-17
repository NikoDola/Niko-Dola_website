// Create a new paragraph element
const available = document.querySelector('.available');
const notAvailable = document.querySelector('.notAvailable');
const statusLog = document.querySelector('.statusLog');
const statusBool = statusLog.getAttribute('aria-disabled');

if (statusBool === 'true') {
    const text = document.createElement('p')
    const alink = document.createElement('a')
    alink.className = 'email__contact'
    alink.href = 'mailto:nikodola@gmail.com'
    text.textContent = 'The logo is available for purchase. for more information feel free to contact me at '
    alink.textContent = 'nikodola@gmail.com'
    text.appendChild(alink)
    statusLog.appendChild(text)

} else if (statusBool === 'false') {
    const text = document.createElement('p')
    const alink = document.createElement('a')
    alink.className = 'email__contact'
    alink.href = 'mailto:nikodola@gmail.com'
    text.textContent = 'The logo is Sold! For custom logo design feel free to contact me at:  '
    alink.textContent = 'nikodola@gmail.com'
    text.appendChild(alink)
    statusLog.appendChild(text)

}

if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
        target.style.border = "2px solid red"; // Highlight the logo
    }
};

const sticky = document.querySelector('.sticky')

sticky.addEventListener('click', () => {
    const newWindow = window.open('http://127.0.0.1:5501/index.html');

    newWindow.onload = () => {
        const contentCode2 = newWindow.document.getElementById('contentCode2');
        const secretButtonCode2 = newWindow.document.getElementById('secretButtonCode3');
        const arrowCode2 = newWindow.document.getElementById('arrowCode2');
        const buttonCode2 = newWindow.document.getElementById('buttonCode2');

        contentCode2.style.display = 'block';
        contentCode2.style.visibility = 'visible';
        const contentHeight = contentCode2.scrollHeight;
        buttonCode2.style.height = contentHeight + 100 + 'px';
        arrowCode2.style.transform = 'rotate(90deg)';
        toggleCode2 = true;
        contentCode2.style.opacity = '1';
        contentCode2.style.transition = '2s ease-out';
    }
});



