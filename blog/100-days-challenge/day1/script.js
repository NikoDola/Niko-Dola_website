const statusLog = document.querySelector('.statusLog')
const getAtribut = statusLog.getAttribute('aria-disabled')
const available = document.createElement('p')
const aLink = document.createElement('a')

fetch('../assets/data.json')
  .then(response => response.json())
  .then(data => {
    data.map((element) => {
        if (getAtribut === 'false'){
            available.textContent = element.available
            statusLog.appendChild(available)
             aLink.href = `mailto:${element.email}.com`
             aLink.textContent = element.email
            
             available.appendChild(aLink)
        }else{
            available.textContent = element.sold
            aLink.textContent = 'nikodola.com'
            statusLog.appendChild(available)
        }
        
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });




