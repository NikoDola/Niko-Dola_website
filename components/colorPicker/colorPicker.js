

function colorPicker(name, description, imagePath){
    const picker = document.getElementById('colorPicker')

    const checkMark = document.createElement('img')
    const checkMarkBg = document.createElement('div')
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
    checkMarkBg.style.width = '50px'
    checkMarkBg.style.height = '50px'
    checkMarkBg.style.background = 'black'
    checkMarkBg.style.position = 'relative'
    checkMarkBg.style.display = 'none'

    imageDiv.style.position ='relative'
    imageDiv.style.height = '165px'
    imageDiv.style.width = '165px'
    imageDiv.style.backgroundImage = `url('${imagePath}')`
    imageDiv.style.backgroundSize = 'cover'
    bodyText.style.marginTop = '-15px'
    bodyText.style.width = '165px'

    let toggleCode5 = false

    imageDiv.addEventListener('click', function(){
        if (!toggleCode5 && infoSet.size <4){
            checkMarkBg.style.display='block'
            infoSet.add(name)
            toggleCode5 = true
            imageDiv.style.outline = 'solid var(--main-color)'
        }

        else if (toggleCode5){
            checkMarkBg.style.display='none'
            infoSet.delete(name)
            toggleCode5 = false
            imageDiv.style.outline=''
        }

        if (infoSet.size === 4 ){
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

colorPicker('Reds', 'Knowledge', '/assets/colors/reds.jpg')
colorPicker('Blues','Knowledge', '/assets/colors/blues.jpg')
colorPicker('Aquuas','Knowledge', '/assets/colors/Aquas.jpg')
colorPicker('Browns','Knowledge', '/assets/colors/browns.jpg')
colorPicker('Oranges','Knowledge', '/assets/colors/oranges.jpg')
colorPicker('Pinks', 'Knowledge','/assets/colors/pinks.jpg')
colorPicker('Purples','Knowledge', '/assets/colors/purples.jpg')
colorPicker('Greens', 'Knowledge','/assets/colors/greens.jpg')
colorPicker('Designer_choice', 'Knowledge','/assets/colors/designer_choice.jpg')