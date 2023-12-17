const body = document.querySelector('.body');

    const lighDrinks = document.createElement('button');
    const heavyDrinks = document.createElement('button');

    lighDrinks.textContent = 'Light Drinks'
    heavyDrinks.textContent = 'Heavy Drinks'

function drink() {
    body.textContent = ''
    body.appendChild(lighDrinks)
    body.appendChild(heavyDrinks)  
}

export {drink}