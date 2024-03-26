

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
    tittle.style.marginTop= '10px'
    bodyText.textContent = description






    imageDiv.className = 'imageDiv'
    imageDiv.style.position ='relative'
    imageDiv.style.height = '165px'
    imageDiv.style.width = '165px'
    imageDiv.style.backgroundImage = `url('${imagePath}')`
    imageDiv.style.backgroundSize = 'cover'
    imageDiv.style.boxSizing = ' border-box'
    bodyText.style.width = '165px'
    bodyText.style.marginLeft = '0'
    bodyText.style.padding = '0'

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
    tittle.style.marginTop= '10px'
    bodyText.textContent = description
    bodyText.style.marginLeft='0'
    mainDiv.className = 'mainDiv'
   
 


    imageDiv.className = 'imageDiv'
    imageDiv.style.position ='relative'
    imageDiv.style.height = '165px'
    imageDiv.style.width = '165px'
    imageDiv.style.backgroundImage = `url('${imagePath}')`
    imageDiv.style.backgroundSize = 'cover'
    imageDiv.style.boxSizing = ' border-box'
    
    bodyText.style.width = '165px'

    let toggleCode5 = false

    let selected = false
    imageDiv.addEventListener('click', function(){
        if (!toggleCode5 && inspirationSet.size <4){
            checkMarkBg.style.display='block'
            toggleCode5 = true
            imageDiv.style.border = 'solid var(--main-color)'
            input.style.display = 'block'
            selected = true
        }

        else if (toggleCode5){
            checkMarkBg.style.display='none'
            toggleCode5 = false
            imageDiv.style.border=''
            input.style.display = 'none'
            selected = false
        }

        if (inspirationSet.size === 10 ){
            picker.style.opacity = '0.5'
        }
        else{
           picker.style.opacity = '1' 
        }
        
    })
    submit.addEventListener('click', ()=>{
        if(selected){
            inspirationSet.add(` image ${name}, text: ${input.value}`)
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
imgPicker( 'BEE - 3D', '#creative #playful  #modern #3d', '/assets/inspiration_Images/logo_bee-3d.png')
imgPicker( 'Banana', '#creative #playful #cartoonish, #youthful', '/assets/inspiration_Images/logo_banana.png')
imgPicker( '8b', '#Monogram, #classic, #minimal, #playful', '/assets/inspiration_Images/logo_8b.png')
imgPicker( 'Astronaut beer', 'Minimal Logo design', '/assets/inspiration_Images/logo_Astronaut_beer.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_bear.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_bee.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_BH.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_blossoms.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_Burger.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_camaleon.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_celestial-snax.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_cherry-house.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_Dracula.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_ecolight.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_game-over.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_flo.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_grifin.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_hotdog-character.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_iko-media.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_juicy-world.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_lemonade.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_Lion.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_love.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_mig.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_most-valuable.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_optimal-fitness.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_orca.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_puppy-bone.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_Rabbit.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_rocket-minimal.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_rose-wine.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_safe-home.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_skyfilms.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_space-donut.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_swaney.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_synnove.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_tags.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_TM.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_Unihorn.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_ververicka.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_visionary.png')
imgPicker( '8b', '8bForm', '/assets/inspiration_Images/logo_walk.png')






