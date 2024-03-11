const body = document.querySelector('.body');
import Icon from './recipies.png';
import Pizza from './pizza.jpeg';
import Pasta from './pasta.jpeg';
import Vermicelli from './vermicelli.jpeg';
import Pork from './porkStew.jpeg';
import Shrimp from './shrimp.jpeg';
import Tuna from './grilledTuna.jpeg';
import Vegetables from './bowl.jpeg';
import Grilled from './grilledShrimp.jpeg';
const foods = document.createElement('div');
foods.className = 'foods';


const dishes = []

function Meal(name,price,img, info){
    this.name = name,
    this.price = price,
    this.img = img,
    this.info = info
}

function createItems(){
    const meal1 = new Meal('Pizza',1000,Pizza,'hello pizza')
    const meal2 = new Meal('Pasta', 300, Pasta, '')
    const meal3 = new Meal('Vermicelli', 350, Vermicelli)
    const meal4 = new Meal('Pork Stew', 450, Pork)
    const meal5 = new Meal('Shrimp', 600, Shrimp)
    const meal6 = new Meal('Grilled Tuna', 250, Tuna)
    const meal7 = new Meal('Grilled Shrimp', 450, Grilled)
    const meal8 = new Meal('Vegetables', 450, Vegetables)

    dishes.push(meal1, meal2, meal3, meal4, meal5, meal6, meal7, meal8)

    dishes.forEach((dish)=>{
        const card = document.createElement('div');
        const dishName = document.createElement('p');
        const dishPrice = document.createElement('p');
        const dishPicture = document.createElement('img');

        dishName.textContent = dish.name
        dishPrice.textContent = dish.price
        dishPicture.alt = dish.name;
        dishPicture.id = 'meals';
        dishPicture.src = dish.img
        card.appendChild(dishName);
        card.appendChild(dishPrice);
        card.appendChild(dishPicture);
        
      foods.appendChild(card);
    })
}
createItems()

function meals() {
    body.textContent = ''
    body.appendChild(foods)
   
};

export {meals}
