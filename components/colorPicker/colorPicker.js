
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