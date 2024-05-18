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
    window.location.href = 'http://127.0.0.1:5501/index.html';
});


const projectDescription = document.querySelector('.project_description')
const readMore = document.querySelector('.read__more')

let toggle = false

const originalText = projectDescription.textContent
const shortText = projectDescription.textContent.substring(0,349)
projectDescription.textContent = shortText
readMore.addEventListener('click', ()=>{
    if(!toggle){
        projectDescription.textContent = originalText
        readMore.style.display = 'none'
        toggle = true

    }else{
        projectDescription.textContent = shortText
        toggle = false
    }
})


