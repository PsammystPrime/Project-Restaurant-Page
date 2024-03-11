const body = document.querySelector('.body');
import Icon from './recipies.png';
import capuccino from './capuccino.jpeg';
import milkshake from "./milkshake.jpeg";
import chocolate from "./chocolate.jpeg";
import chocolateCoffee from "./chocolateCoffee.jpeg";
import drinksbg1 from "./drinksbg1.jpeg";
const drinks = document.createElement('div');
drinks.className = 'drinks';

const dishes = []

function Drink(name,price,img, info){
    this.name = name,
    this.price = price,
    this.img = img,
    this.info = info
}

function createItems(){
    const drink1 = new Drink('capuccino',1000,capuccino,'hello capuccino')
    const drink2 = new Drink('milkshake', 300, milkshake, '')
    const drink3 = new Drink('chocolate', 350, chocolate)
    const drink4 = new Drink('chocolateCoffee ', 450, chocolateCoffee)
    const drink5 = new Drink('drinksbg1', 600, drinksbg1)

    dishes.push(drink1, drink2, drink3, drink4, drink5)

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
        
    drinks.appendChild(card);

    })
}
createItems()

function drink() {
    body.textContent = ''
    body.appendChild(drinks)
};

export {drink};