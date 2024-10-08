

function colorPicker(name, description, imagePath){
    const picker = document.getElementById('colorPicker');
    const checkMark = document.createElement('div');
    
    checkMark.className = 'checkMark'
    const checkMarkBg = document.createElement('div')
    checkMarkBg.className = 'checkMarkBg'
    const mainDiv = document.createElement('div')
    const imageDiv = document.createElement('div')
    const textDiv= document.createElement('div')
    const tittle = document.createElement('h3')
    const bodyText = document.createElement('p')
    bodyText.className ='bodyText'
    tittle.textContent = name
    tittle.className = 'tittlePicker'
    bodyText.textContent = description

    imageDiv.className = 'imageDiv'
    imageDiv.style.backgroundImage = `url('${imagePath}')`
    
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

const colorAdding = document.querySelector('.colorAdding')
const customColorDiv = document.querySelector('.custom-color-div')
const colorInput = document.querySelector('.color-input');
const colorTextInput = document.querySelector('.color-text-input');
const submitColor = document.querySelector('.submit-color')





submitColor.addEventListener('click', (e) => {
    e.preventDefault();
    const creatingColor = document.createElement('div');
    creatingColor.id = 'creatingColor';
    const creatingTextColor = document.createElement('p');
    creatingTextColor.id = 'creatingTextColor';
    const creatingX = document.createElement('span');
    creatingX.id = 'creatingX';
    creatingX.textContent = 'x';
    creatingTextColor.textContent = colorInput.value;
    creatingColor.style.background = colorTextInput.value;
    colorSet.add(colorTextInput.value);
    creatingColor.appendChild(creatingX);
    creatingColor.appendChild(creatingTextColor);
    colorAdding.appendChild(creatingColor);
    
    buttonCode2.style.height = `${buttonCode2.scrollHeight + 30}px`; // Increase button height

    creatingX.addEventListener('click', () => {
        colorAdding.removeChild(creatingColor);
        colorSet.delete(colorTextInput.value);
        
    });
});
colorInput.addEventListener('input', () => {
    colorTextInput.value = colorInput.value;
});

colorTextInput.addEventListener('input', () => {
    let val = colorTextInput.value;
    if (!val.startsWith('#')) {
        val = '#' + val;
    }

    if (/^#[0-9A-F]{6}$/i.test(val)) {
        colorInput.value = val;
        colorTextInput.value = val;
    }
});
const currentColor = document.querySelector('.current-color');


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
    mainDiv.className = 'mainDiv'

    const imageDiv = document.createElement('div')
    imageDiv.className = 'imageDiv'
    imageDiv.style.backgroundImage = `url('${imagePath}')`
    
    const textDiv= document.createElement('div')
    textDiv.className = 'textDiv'

    const tittle = document.createElement('h3')
    tittle.className = 'tittlePicker'
    tittle.textContent = name
    tittle.style.marginTop= '10px'

    const bodyText = document.createElement('p')
    bodyText.className ='bodyText'
    bodyText.textContent = description
    
    let toggleCode5 = false
    let selected = false
    
    imageDiv.addEventListener('click', function(){
        if (!toggleCode5 ){
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
        }})

    submit.addEventListener('click', ()=>{
        if(selected){
            inspirationSet.add(` image ${name}, text: ${input.value}`)
        }})
   
    checkMarkBg.appendChild(checkMark)
    imageDiv.appendChild(checkMarkBg)
    textDiv.appendChild(tittle)
    textDiv.appendChild(bodyText)
    mainDiv.appendChild(imageDiv)
    mainDiv.appendChild(textDiv)
    mainDiv.appendChild(input)
    picker.appendChild(mainDiv)
}



const tag = {
    Creative: '#Creative',
    Musculer: '#Musculer',
    Feminnen : '#Feminnen',
    Minimal: '#Minimal',
    Badge: '#Badge',
    ThreeD: '#3D',
    Vintage: '#Vintage',
    Character: '#Character',
    Cartoonish: '#Cartoonish',
    Playful: '#Playful',
    Serious: '#Serious',
    Geometric: '#Geometric',
    Organic: '#Organic',
    Abstract: '#Abstract',
    Obvious: '#Obvious',
    Monogram: '#Monogram',
    LogoType: '#LogoType',
    Detailed: 'Detailed',
    Sophisticated:'#Sophisticated'
}


imgPicker('BEE - 3D', `${tag.Abstract} ${tag.Geometric} ${tag.Creative} ${tag.Playful} ${tag.ThreeD}`, '/assets/inspiration_Images/logo_bee-3d.png');
imgPicker('Banana & Donut', `${tag.Creative} ${tag.Playful} ${tag.Cartoonish}`, '/assets/inspiration_Images/logo_banana.png');
imgPicker('8b', `${tag.Sophisticated} ${tag.Playful} ${tag.Monogram}`, '/assets/inspiration_Images/logo_8b.png');
imgPicker('Astronaut beer', `${tag.Vintage} ${tag.Badge} ${tag.Detailed} ${tag.Organic} `, '/assets/inspiration_Images/logo_Astronaut_beer.png');
imgPicker('B" bee', `${tag.Creative} ${tag.Minimal} ${tag.Creative} ${tag.Geometric}`, '/assets/inspiration_Images/logo_bee.png');
imgPicker('Blossoms', `${tag.Playful} ${tag.Feminnen} ${tag.Organic} ${tag.LogoType}`, '/assets/inspiration_Images/logo_blossoms.png');
imgPicker('Camaleon', ` ${tag.Obvious} ${tag.LogoType} ${tag.Playful} ${tag.Creative}`, '/assets/inspiration_Images/logo_camaleon.png');
imgPicker('Love', `${tag.Playful} ${tag.Minimal} ${tag.Abstract} ${tag.LogoType}`, '/assets/inspiration_Images/logo_love.png');
imgPicker('Celestial Snax', ` ${tag.Organic} ${tag.LogoType} ${tag.Creative}${tag.Playful} ${tag.Vintage}`, '/assets/inspiration_Images/logo_celestial-snax.png');
imgPicker('Cherry House', `${tag.Creative} ${tag.Minimal} ${tag.Playful}`, '/assets/inspiration_Images/logo_cherry-house.png');
imgPicker('Dracula', `${tag.Organic} ${tag.Musculer} ${tag.Badge} ${tag.Obvious}`, '/assets/inspiration_Images/logo_Dracula.png');
imgPicker('Eco Light', `${tag.Minimal} ${tag.Creative} ${tag.Geometric}`, '/assets/inspiration_Images/logo_ecolight.png');
imgPicker('Game Over', `${tag.Creative} ${tag.Cartoonish} ${tag.Playful}`, '/assets/inspiration_Images/logo_game-over.png');
imgPicker('Burger', `${tag.Vintage} ${tag.Obvious} ${tag.Badge} ${tag.Organic}`, '/assets/inspiration_Images/logo_Burger.png');
imgPicker('Flo', `${tag.Badge} ${tag.Cartoonish} ${tag.Musculer} ${tag.Detailed}`, '/assets/inspiration_Images/logo_flo.png');
imgPicker('Grifin', `${tag.Minimal} ${tag.Geometric}`, '/assets/inspiration_Images/logo_grifin.png');
imgPicker('Hot Dog', `${tag.Cartoonish} ${tag.Character} ${tag.Organic}`, '/assets/inspiration_Images/logo_hotdog-character.png');
imgPicker('Bear', `${tag.Minimal} ${tag.Character} ${tag.Creative} ${tag.Geometric}`, '/assets/inspiration_Images/logo_bear.png');
imgPicker('Iko Media', `${tag.Geometric}  ${tag.Monogram} ${tag.Abstract}`, '/assets/inspiration_Images/logo_iko-media.png');
imgPicker('Juicy World', `${tag.Cartoonish} ${tag.Playful} ${tag.LogoType}`, '/assets/inspiration_Images/logo_juicy-world.png');
imgPicker('Lemonade', `${tag.Cartoonish} ${tag.Playful} ${tag.LogoType} `, '/assets/inspiration_Images/logo_lemonade.png');
imgPicker('Lion', `${tag.Musculer} ${tag.Geometric} ${tag.Serious}`, '/assets/inspiration_Images/logo_Lion.png');
imgPicker('Mig', `${tag.Sophisticated} ${tag.LogoType} ${tag.Geometric}`, '/assets/inspiration_Images/logo_mig.png');
imgPicker('Most Valuable Artist', `${tag.Vintage} ${tag.Badge} ${tag.Organic} ${tag.Detailed}`, '/assets/inspiration_Images/logo_most-valuable.png');
imgPicker('Optimal Fitness', `${tag.Character} ${tag.Musculer} ${tag.Cartoonish}`, '/assets/inspiration_Images/logo_optimal-fitness.png');
imgPicker('Orca', `${tag.Minimal} ${tag.Geometric} ${tag.Character}`, '/assets/inspiration_Images/logo_orca.png');
imgPicker('BH', `${tag.Monogram} ${tag.Playful} ${tag.Vintage} ${tag.Badge} ${tag.Organic}`, '/assets/inspiration_Images/logo_BH.png');
imgPicker('Rabbit', ` ${tag.Geometric} ${tag.Minimal} `, '/assets/inspiration_Images/logo_Rabbit.png');
imgPicker('Rocket', `${tag.Minimal} ${tag.Geometric}`, '/assets/inspiration_Images/logo_rocket-minimal.png');
imgPicker('Rose Wine', `${tag.Feminnen} ${tag.Creative} ${tag.Badge} ${tag.Geometric}`, '/assets/inspiration_Images/logo_rose-wine.png');
imgPicker('Safe Home', `${tag.Creative} ${tag.Minimal} ${tag.Playful} ${tag.Geometric} ${tag.Obvious}`, '/assets/inspiration_Images/logo_safe-home.png');
imgPicker('Skyfilms', `${tag.Minimal} ${tag.Creative} ${tag.Geometric} ${tag.Playful} ${tag.Obvious}`, '/assets/inspiration_Images/logo_skyfilms.png');
imgPicker('Space Donut', `${tag.Cartoonish} ${tag.Creative} ${tag.Badge}`, '/assets/inspiration_Images/logo_space-donut.png');
imgPicker('Puppy Bone', `${tag.Creative} ${tag.Minimal} ${tag.Geometric} ${tag.Character}`, '/assets/inspiration_Images/logo_puppy-bone.png');
imgPicker('swaney', `${tag.Vintage} ${tag.Badge} ${tag.Detailed} ${tag.Abstract}`, '/assets/inspiration_Images/logo_swaney.png');
imgPicker('synnove', `${tag.Creative} ${tag.Playful} ${tag.Detailed}`, '/assets/inspiration_Images/logo_synnove.png');
imgPicker('TAGS', `${tag.Cartoonish} ${tag.Badge} ${tag.Playful} ${tag.Detailed} ${tag.Vintage}`, '/assets/inspiration_Images/logo_tags.png');
imgPicker('TM', `${tag.Minimal} ${tag.Creative} ${tag.Monogram}`, '/assets/inspiration_Images/logo_TM.png');
imgPicker('Unihorn', `${tag.Cartoonish} ${tag.Musculer} ${tag.Cartoonish}`, '/assets/inspiration_Images/logo_Unihorn.png');
imgPicker('Squirrel nut', `${tag.Creative} ${tag.Minimal} ${tag.Geometric}`, '/assets/inspiration_Images/logo_ververicka.png');
imgPicker('Visionary', `${tag.ThreeD} ${tag.Playful} ${tag.Sophisticated}`, '/assets/inspiration_Images/logo_visionary.png');
imgPicker('Walk', `${tag.LogoType} ${tag.Creative} ${tag.Minimal}`, '/assets/inspiration_Images/logo_walk.png');


