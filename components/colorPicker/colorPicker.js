const ColorPicker = []


function colorPicker(name, description, imagePath){
    const picker = document.getElementById('colorPicker')

    const checkMark = document.createElement('div')
    
    checkMark.className = 'checkMark'
    const checkMarkBg = document.createElement('div')
    checkMarkBg.className = 'checkMarkBg'
    const mainDiv = document.createElement('div')
    const imageDiv = document.createElement('div')
    const textDiv= document.createElement('div')
    const tittle = document.createElement('h3')
    const bodyText = document.createElement('p')
    tittle.textContent = name
    bodyText.textContent = description






    imageDiv.className = 'imageDiv'
    imageDiv.style.position ='relative'
    imageDiv.style.height = '165px'
    imageDiv.style.width = '165px'
    imageDiv.style.backgroundImage = `url('${imagePath}')`
    imageDiv.style.backgroundSize = 'cover'
    imageDiv.style.boxSizing = ' border-box'
    bodyText.style.marginTop = '-15px'
    bodyText.style.width = '165px'

    let toggleCode5 = false

    imageDiv.addEventListener('click', function(){
        if (!toggleCode5 && colorSet.size <4){
            checkMarkBg.style.display='block'
            colorSet.add(`${name}`)
            toggleCode5 = true
            imageDiv.style.border = 'solid var(--main-color)'
        }

        else if (toggleCode5){
            checkMarkBg.style.display='none'
            colorSet.delete(name)
            toggleCode5 = false
            imageDiv.style.border=''
        }

        if (colorSet.size === 4 ){
            picker.style.opacity = '0.5'
        }
        else{
           picker.style.opacity = '1' 
        }
        
    })
    checkMarkBg.appendChild(checkMark)
    imageDiv.appendChild(checkMarkBg)
    textDiv.appendChild(tittle)
    textDiv.appendChild(bodyText)
    mainDiv.appendChild(imageDiv)
    mainDiv.append(textDiv)
    picker.appendChild(mainDiv)

}

colorPicker('Reds', 'Energy, action, passion, and love', '/assets/colors/reds.jpg')
colorPicker('Blues','Knowledge, trust, calm, and honesty', '/assets/colors/blues.jpg')
colorPicker('Aquuas','Empathy, Compassion, clarity, and precision', '/assets/colors/Aquas.jpg')
colorPicker('Browns','Knowledge', '/assets/colors/browns.jpg')
colorPicker('Oranges','Creativity, advneture and happiness', '/assets/colors/oranges.jpg')
colorPicker('Pinks', 'Intimacy, love, calm and nurture','/assets/colors/pinks.jpg')
colorPicker('Purples','Knowledge', '/assets/colors/purples.jpg')
colorPicker('Greens', 'Knowledge','/assets/colors/greens.jpg')
colorPicker('Designer_choice', 'Knowledge','/assets/colors/designer_choice.jpg')




function imgPicker(name, description, imagePath){
    const picker = document.getElementById('imgPicker')

    const checkMark = document.createElement('div')
    checkMark.className = 'checkMark'

    const checkMarkBg = document.createElement('div')
    checkMarkBg.className = 'checkMarkBg'

    const input = document.createElement('textarea')
    input.id = 'inspirationTextarea'
    input.className = 'imgInput'


    
    input.placeholder = 'you can leve a note here'
    
    

    
    const mainDiv = document.createElement('div')
    const imageDiv = document.createElement('div')
    const textDiv= document.createElement('div')
    const tittle = document.createElement('h3')
    const bodyText = document.createElement('p')
    tittle.textContent = name
    bodyText.textContent = description
    mainDiv.className = 'mainDiv'
   
 


    imageDiv.className = 'imageDiv'
    imageDiv.style.position ='relative'
    imageDiv.style.height = '165px'
    imageDiv.style.width = '165px'
    imageDiv.style.backgroundImage = `url('${imagePath}')`
    imageDiv.style.backgroundSize = 'cover'
    imageDiv.style.boxSizing = ' border-box'
    bodyText.style.marginTop = '-15px'
    bodyText.style.width = '165px'

    let toggleCode5 = false

    imageDiv.addEventListener('click', function(){
        if (!toggleCode5 && inspirationSet.size <4){
           
            checkMarkBg.style.display='block'
            inspirationSet.add(`${name} ${input.value}`)
            toggleCode5 = true
            imageDiv.style.border = 'solid var(--main-color)'
            input.style.display = 'block'
        }

        else if (toggleCode5){
            checkMarkBg.style.display='none'
            inspirationSet.delete(name)
            toggleCode5 = false
            imageDiv.style.border=''
            input.style.display = 'none'
        }

        if (inspirationSet.size === 4 ){
            picker.style.opacity = '0.5'
        }
        else{
           picker.style.opacity = '1' 
        }
        
    })
    checkMarkBg.appendChild(checkMark)
    imageDiv.appendChild(checkMarkBg)
    
    textDiv.appendChild(tittle)
    textDiv.appendChild(bodyText)
    mainDiv.appendChild(imageDiv)
    mainDiv.appendChild(textDiv)
    mainDiv.appendChild(input)
    picker.appendChild(mainDiv)

}


imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_8b.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_8b.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_8b.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_8b.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_8b.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_8b.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_8b.png')
