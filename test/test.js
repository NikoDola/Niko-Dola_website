async function nikola() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        const data = await response.json();
        const ul = document.createElement('ul')
        data.map(element => {
            const li = document.createElement('li')
            document.body.appendChild(ul)
            ul.appendChild(li)
            li.textContent = element.name
            
        })
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

nikola();
