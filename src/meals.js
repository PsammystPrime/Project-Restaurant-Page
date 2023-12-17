const body = document.querySelector('.body')


const lighBites = document.createElement('button');
const mainMeals = document.createElement('button');

lighBites.textContent = 'Light Meals'
mainMeals.textContent = 'Main Meals'

function btns() {
    body.textContent = ''
    body.appendChild(lighBites)
    body.appendChild(mainMeals)

}

export {btns};

//console.log('global')