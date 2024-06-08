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




