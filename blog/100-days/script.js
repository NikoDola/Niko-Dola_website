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