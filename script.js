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
const colorInfo = document.getElementById('colorInfo')

const formSet = new Set()
const colorSet = new Set()
const inspirationSet = new Set()

const logoInfo = {
    form: formSet,
    color: colorSet,
    inspiration: inspirationSet
}

setInterval(() => {
    console.log(logoInfo)
}, 1000);

const colorData = colorInfo.textContent = colorSet
// Button 1



let toggleCode1 = false
secretButtonCode1.addEventListener('click', ()=>{
    if (!toggleCode1){
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
        contentCode1.style.visibility = ''
        contentCode1.style.opacity = '0'
        contentCode1.style.transition = '0.5s'
    }
    
})

const contentHeight = contentCode2.scrollHeight;

// Button 2
let toggleCode2 = false;

secretButtonCode2.addEventListener('click', () => {
    if (!toggleCode2) {
        // Get the height of the content inside contentCode2
        const contentHeight = contentCode2.scrollHeight;
        
        // Set the height of buttonCode2 to the height of the content
        buttonCode2.style.height = contentHeight + 100 + 'px';
        
        arrowCode2.style.transform = 'rotate(90deg)';
        toggleCode2 = true;
        contentCode2.style.visibility = 'visible';
        contentCode2.style.opacity = '1';
        contentCode2.style.transition = '1s ease-out';
    } else {
        buttonCode2.style.height = ''; // Reset height to default (auto)
        toggleCode2 = false;
        arrowCode2.style.transform = '';
        contentCode2.style.opacity = '0';
        contentCode2.style.transition = '0.5s';
    }
});



// Button 3
let toggleCode3 = false
secretButtonCode3.addEventListener('click', ()=>{
    if (!toggleCode3){
        buttonCode3.style.height = '300px'
        arrowCode3.style.transform = 'rotate(90deg)'
        toggleCode3 = true
        contentCode3.style.visibility = 'visible'
        contentCode3.style.opacity = '1'
        contentCode3.style.transition = '1s ease-out'
       
}
        else{
            buttonCode3.style.height = ''
            toggleCode3 = false
            arrowCode3.style.transform = ''
            contentCode3.style.visibility = ''
            contentCode3.style.opacity = '0'
            contentCode3.style.transition = '0.5s'
        }

    }
    
)




function socialClickable(){
const socialCode1= document.getElementById('socialCode1')
const socialCode2= document.getElementById('socialCode2')
const socialCode3= document.getElementById('socialCode3')
const socialCode4= document.getElementById('socialCode4')
const socialCode5= document.getElementById('socialCode5')
socialCode1.addEventListener('click', ()=>{
    window.open('https://dribbble.com/NikoDOla')
    console.log('ej')
})
socialCode1.addEventListener('click', ()=>{
    window.open('https://dribbble.com/NikoDOla')
    console.log('ej')
})
socialCode2.addEventListener('click', ()=>{
    window.open('https://www.behance.net/nikodola/appreciated')
    console.log('ej')
})
socialCode3.addEventListener('click', ()=>{
    window.open('https://www.instagram.com/niko_dola/?hl=en')
    console.log('ej')
})
socialCode4.addEventListener('click', ()=>{
    window.open('https://www.linkedin.com/in/nikola-dolovski-b932b0ba/?originalSubdomain=mk')
    console.log('ej')
})
socialCode5.addEventListener('click', ()=>{
    window.open('https://www.youtube.com/@Niko_Dola')
    console.log('ej')
})
}
socialClickable()

console.log(contentCode2.scrollHeight )