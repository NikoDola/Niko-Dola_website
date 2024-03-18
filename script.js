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

const submit = document.getElementById('submit')

const formSet = new Set()
const colorSet = new Set()
const inspirationSet = new Set()

const logoInfo = {
    form: formSet,
    color: colorSet,
    inspiration: inspirationSet
}

const jsonString = JSON.stringify(logoInfo)

const filePath = 'data.son';

submit.addEventListener('click', ()=>{
    fs.writeFile(filePath, jsonString, (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        console.log('JSON data has been written to', filePath);
      });
})

logoInfo.string

setInterval(() => {
    console.log(logoInfo)
}, 1000);

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
        const contentHeight = contentCode2.scrollHeight;
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
        contentCode2.style.display = '';
        contentCode2.style.visibility = '';
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




