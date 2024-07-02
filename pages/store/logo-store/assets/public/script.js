const statusLog = document.querySelector('.statusLog')
const getAtribut = statusLog.getAttribute('data-status')
const available = document.createElement('p')
const aLink = document.createElement('a')



fetch('../assets/public/data.json')
  .then(response => response.json())
  .then(data => {
    data.map((element) => {
        if (getAtribut === 'trademark'){
            available.textContent = element.trademark
            statusLog.appendChild(available)
             aLink.href = `mailto:${element.email}.com`
             aLink.className = 'email__contact'
             aLink.textContent = element.email
             available.appendChild(aLink)
         }
         else if(getAtribut === 'stock'){
          available.textContent = element.stock
          statusLog.appendChild(available)
           aLink.href = `mailto:${element.email}.com`
           aLink.className = 'email__contact'
           aLink.textContent = element.email
           available.appendChild(aLink)
         }
        else{
            available.textContent = element.sold
            aLink.textContent = 'nikodola.com'
            statusLog.appendChild(available)
        }
        
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  const main = document.createElement('div');
  const text = document.createElement('h3');
  const aLinkText = document.createElement('a');
  
  aLinkText.href = '/'
  aLinkText.textContent = 'Get Your Custom Logo';
  aLinkText.style.color = '#132D40';
  aLinkText.style.fontFamily = 'Roboto';
  
  main.style.cssText = 'background: #87D0D3; height: 40px; display: flex; justify-content: center; align-items: center; cursor: pointer;';
  
  text.appendChild(aLinkText);
  main.appendChild(text);
  document.body.appendChild(main);


