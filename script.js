const buttonCode1 = document.getElementById('buttonCode1')
const buttonCode2 = document.getElementById('buttonCode2')
const buttonCode3 = document.getElementById('buttonCode3')

const arrowCode1 = document.getElementById('arrowCode1')
const arrowCode2= document.getElementById('arrowCode2')
const arrowCode3 = document.getElementById('arrowCode3')

const contentCode1 = document.getElementById('contentCode1')
const contentCode2 = document.getElementById('contentCode2')
const contentCode3 = document.getElementById('contentCode3')

const secretButtonCode1 = document.getElementById('secretButtonCode1')
const secretButtonCode2 = document.getElementById('secretButtonCode2')
const secretButtonCode3 = document.getElementById('secretButtonCode3')



const submit = document.getElementById('submit')

const formSet = new Set();
const colorSet = new Set();
const inspirationSet = new Set();
logoChangeColors()
// const logoInfo = {
//     companyName: companyNameInput.value,
//     tagline: taglineInput.value,
//     has: hasInput.value,
//     hasNot: hasNotInput.value,
//     color: colorSet,
//     inspiration:inspirationSet,
//     name: nameInput.value,
//     email: emailInput.value
// };

// setInterval(() => {
//     console.log(logoInfo)
// }, 1000);

// function Submiting(companyName, tagline, has, hasNot, colorSet, inspiration, name, email){
//     submit.addEventListener('click', () => {
//         // Update logoInfo object properties inside the event listener
//         logoInfo.companyName = companyNameInput.value;
//         logoInfo.tagline = taglineInput.value;
//         logoInfo.has = hasInput.value;
//         logoInfo.hasNot = hasNotInput.value;
//         // Assuming you will collect 'color' and 'inspiration' the same way
//         logoInfo.name = nameInput.value;
//         logoInfo.email = emailInput.value;
    
//         // Now, log the updated logoInfo object
//         console.log(logoInfo);
//     });
    
// }



const colorData = colorInfo.textContent = colorSet
// Button 1



let toggleCode1 = false
secretButtonCode1.addEventListener('click', ()=>{
    if (!toggleCode1){
        contentCode1.style.display = 'block'
        buttonCode1.style.height = '2000px'
        arrowCode1.style.transform = 'rotate(90deg)'
        toggleCode1 = true
        contentCode1.style.visibility = 'visible'
        contentCode1.style.opacity = '1'
        contentCode1.style.transition = '1s ease-out'
        
    }
    else{
        
        buttonCode1.style.height = ''
        toggleCode1 = false
        arrowCode1.style.transform = ''
        contentCode1.style.display = ''
        contentCode1.style.visibility = ''
        contentCode1.style.opacity = ''
        contentCode1.style.transition = '0.5s'
    }
    
})

const contentHeight = contentCode2.scrollHeight;

// Button 2
let toggleCode2 = false;

secretButtonCode2.addEventListener('click', () => {
    if (!toggleCode2) {
        contentCode2.style.display = 'block';
        contentCode2.style.visibility = 'visible';
        const contentHeight = contentCode2.scrollHeight;
        buttonCode2.style.height = contentHeight + 100 + 'px';
        arrowCode2.style.transform = 'rotate(90deg)';
        toggleCode2 = true;
        contentCode2.style.opacity = '1';
        contentCode2.style.transition = '2s ease-out';
    } else {
        buttonCode2.style.height = ''; // Reset height to default (auto)
        buttonCode2.style.height = '';
        toggleCode2 = false;
        arrowCode2.style.transform = '';
        contentCode2.style.transition = '0';
        contentCode2.style.display = '';
        contentCode2.style.visibility = '';
        contentCode2.style.opacity = '0';
        
    }
});



let toggleCode3 = false;

secretButtonCode3.addEventListener('click', () => {
    if (!toggleCode3) {
        contentCode3.style.display = 'block';
        const contentHeight = contentCode3.scrollHeight;
        buttonCode3.style.height = contentHeight + 100 + 'px';
        arrowCode3.style.transform = 'rotate(90deg)';
        toggleCode3 = true;
        contentCode3.style.visibility = 'visible';
        contentCode3.style.opacity = '1';
        contentCode3.style.transition = '1s ease-out';
    } else {
        buttonCode3.style.height = ''; // Reset height to default (auto)
        toggleCode3 = false;
        arrowCode3.style.transform = '';
        contentCode3.style.display = '';
        contentCode3.style.visibility = '';
        contentCode3.style.opacity = '0';
        contentCode3.style.transition = '0.5s';
    }
});



function logoChangeColors(){
const logo = document.getElementById('logo')
const instagram = document.getElementById('instagram')


instagram.addEventListener('mouseover', ()=>{
    logo.style.background='#f56319'
})
instagram.addEventListener('mouseout', ()=>{
    logo.style.background = '#87CFD3';
})

youtube.addEventListener('mouseover', ()=>{
    logo.style.background='red'
})
youtube.addEventListener('mouseout', ()=>{
    logo.style.background = '#87CFD3';
})

pinterest.addEventListener('mouseover', ()=>{
    logo.style.background='red'
})
pinterest.addEventListener('mouseout', ()=>{
    logo.style.background = '#87CFD3';
})

linkedin.addEventListener('mouseover', ()=>{
    logo.style.background='#0A66C2'
})
linkedin.addEventListener('mouseout', ()=>{
    logo.style.background = '#87CFD3';
})

dribbble.addEventListener('mouseover', ()=>{
    logo.style.background='#EA4C89'
})
dribbble.addEventListener('mouseout', ()=>{
    logo.style.background = '#87CFD3';
})

beehance.addEventListener('mouseout', ()=>{
    logo.style.background = '#87CFD3';
})

beehance.addEventListener('mouseover', ()=>{
    logo.style.background='#0A66C2'
})

}



const contactName = document.getElementById('contactName')
const contactEmail = document.getElementById('contactEmail')
const contactMessage = document.getElementById('contactMessage')
const companyNameInput = document.getElementById('companyName')
const taglineInput = document.getElementById('tagline')
const hasInput = document.getElementById('has')
const hasNotInput = document.getElementById('hasNot')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')





console.log(contactEmail.value);


function ContactEmail(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nikodola@gmail.com",
        Password : "A15A80FEFB7C3FF1665E521EDB3C1500EFA6",
        To : 'dolovska@hotmail.com',
        From : "nikodola@gmail.com",
        Subject : "Contact US ",
        Body : `Message: ${contactMessage.value}, 
        Email: ${contactEmail.value}, Name: ${contactName.value}`
    }).then(
      message => alert(message)
    );
}

function LogoEmail(){
    // Convert the Sets to Arrays and join them into strings right here
    const colorAray = Array.from(colorSet).join(', '); // Ensure this variable is defined within this function
    const inspirationAray = Array.from(inspirationSet).join(', '); // Same for this variable

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nikodola@gmail.com",
        Password : "A15A80FEFB7C3FF1665E521EDB3C1500EFA6",
        To : 'dolovska@hotmail.com',
        From : "nikodola@gmail.com",
        Subject : "LogoOrder",
        Body : 
        `Name: ${nameInput.value}<br><br>
         Email: ${emailInput.value}<br><br>
        I would like to see in the logo: ${hasInput.value}<br><br>
        I do not like to have: ${hasNotInput.value}<br><br>
        colors that i like are: ${colorAray}<br><br>
        inspiration images: ${inspirationAray}`
    }).then(
      () => alert('Message sent')
    );
}




