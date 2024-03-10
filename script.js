


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

const infoSet = new Set()

// Button 1
let toggleCode1 = false
secretButtonCode1.addEventListener('click', ()=>{
    if (!toggleCode1){
        buttonCode1.style.height = '1400px'
        arrowCode1.style.transform = 'rotate(45deg)'
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

// Button 2
// let toggleCode2 = false
// secretButtonCode2.addEventListener('click', ()=>{
//     if (!toggleCode2){
//         buttonCode2.style.height = '1400px'
//         arrowCode2.style.transform = 'rotate(45deg)'
//         toggleCode2 = true
//         contentCode2.style.visibility = 'visible'
//         contentCode2.style.opacity = '1'
//         contentCode2.style.transition = '1s ease-out'
        
//     }
//     else{
//         buttonCode2.style.height = ''
//         toggleCode2 = false
//         arrowCode2.style.transform = ''
//         contentCode2.style.visibility = ''
//         contentCode2.style.opacity = '0'
//         contentCode2.style.transition = '0.5s'
//     }
    
// })


// Button 3
let toggleCode3 = false
secretButtonCode3.addEventListener('click', ()=>{
    if (!toggleCode3){
        buttonCode3.style.height = '1400px'
        arrowCode3.style.transform = 'rotate(45deg)'
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


function colorPicker(name, description, imagePath){

    const picker = document.getElementById('colorPicker')
    const checkMark = document.createElement('img')

    const mainDiv = document.createElement('div')
    const imageDiv = document.createElement('div')
    const textDiv= document.createElement('div')
    const tittle = document.createElement('h3')
    const bodyText = document.createElement('p')
    


    tittle.textContent = name
    bodyText.textContent = description

    checkMark.src = 'assets/icons/check_mark.png'
    checkMark.style.position = 'absolute'
    checkMark.style.height = '30px'
    checkMark.style.top = '10px'
    checkMark.style.left = '10px'
    checkMark.style.display = 'none'
    imageDiv.style.position ='relative'
    imageDiv.style.height = '170px'
    imageDiv.style.width = '170px'
    imageDiv.style.backgroundImage = `url('${imagePath}')`
    imageDiv.style.backgroundSize = 'cover'
    bodyText.style.marginTop = '-15px'
    bodyText.style.width = '170px'

    let toggleCode5 = false
    



    imageDiv.addEventListener('click', function(){
        if (!toggleCode5 && infoSet.size <2){
            checkMark.style.display='block'
            infoSet.add(name)
            toggleCode5 = true
        }

        else if (toggleCode5){
            checkMark.style.display='none'
            infoSet.delete(name)
            toggleCode5 = false
        }

        if (infoSet.size === 2 ){
            picker.style.opacity = '0.7'
        }
        else{
           picker.style.opacity = '1' 
        }
        
    })
    imageDiv.appendChild(checkMark)
    textDiv.appendChild(tittle)
    textDiv.appendChild(bodyText)
    mainDiv.appendChild(imageDiv)
    mainDiv.append(textDiv)
    // picker.appendChild(mainDiv)

}



colorPicker('Reds', 'Knowledge', '/assets/colors/reds.jpg')
colorPicker('Blues','Knowledge', '/assets/colors/Blues.jpg')
colorPicker('Aquuas','Knowledge', '/assets/colors/Aquas.jpg')
colorPicker('Browns','Knowledge', '/assets/colors/Browns.jpg')
colorPicker('Oranges','Knowledge', '/assets/colors/Oranges.jpg')
colorPicker('Pinks', 'Knowledge','/assets/colors/Pinks.jpg')
colorPicker('Purples','Knowledge', '/assets/colors/Purples.jpg')
colorPicker('Greens', 'Knowledge','/assets/colors/Greens.jpg')
colorPicker('Designer_choice', 'Knowledge','/assets/colors/Designer_choice.jpg')



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