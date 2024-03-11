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
        // console.log(dish.name)
    })



}
createItems()





// const choice2 = document.createElement('div');
// const choice2Para = document.createElement('p');
// const price2Para = document.createElement('p');
// const choice2Img = document.createElement('img');
// choice2Para.textContent = 'Pasta';
// price2Para.textContent = 'Ksh 300';
// choice2Img.id = 'meals';
// choice2Img.src = Pasta;
// choice2Img.alt = 'pasta';
// choice2.appendChild(choice2Para);
// choice2.appendChild(price2Para);
// choice2.appendChild(choice2Img);

// const choice3 = document.createElement('div');
// const choice3Para = document.createElement('p');
// const price3Para = document.createElement('p');
// const choice3Img = document.createElement('img');
// const meal3 = new Meal('Vermicelli', 350, Vermicelli)
// choice3Para.textContent = 'Vermicelli';
// price3Para.textContent = 'Ksh 350';
// choice3Img.alt = 'Vermicelli';
// choice3Img.id = 'meals';
// choice3Img.src = Vermicelli;
// choice3.appendChild(choice3Para);
// choice3.appendChild(price3Para);
// choice3.appendChild(choice3Img);

// const choice4 = document.createElement('div');
// const choice4Para = document.createElement('p');
// const price4Para = document.createElement('p');
// const choice4Img = document.createElement('img');


// 4hoice4Para.textContent = 'Pork Stew';
// price4Para.textContent = 'Ksh 450';
// choice4Img.alt = 'Pork Stew';
// choice4Img.id = 'meals';
// choice4Img.src = Pork;
// choice4.appendChild(choice4Para);
// choice4.appendChild(price4Para);
// choice4.appendChild(choice4Img);

// const choice5 = document.createElement('div');
// const choice5Para = document.createElement('p');
// const price5Para = document.createElement('p');
// const choice5Img = document.createElement('img');


// 60oice5Para.textContent = 'Shrimp';
// price5Para.textContent = 'Ksh 600';
// choice5Img.alt = 'Shrimp';
// choice5Img.id = 'meals';
// choice5Img.src = Shrimp;
// choice5.appendChild(choice5Para);
// choice5.appendChild(price5Para);
// choice5.appendChild(choice5Img);

// const choice6 = document.createElement('div');
// const choice6Para = document.createElement('p');
// const price6Para = document.createElement('p');
// const choice6Img = document.createElement('img');
// choice6Para.textContent = 'Grilled Tuna';

// price6Para.textContent = 'Ksh 330';
// choice6Img.alt = 'Grilled Tuna';
// choice6Img.id = 'meals';
// choice6Img.src = Tuna;
// choice6.appendChild(choice6Para);
// choice6.appendChild(price6Para);
// choice6.appendChild(choice6Img);

// const choice7 = document.createElement('div');
// const choice7Para = document.createElement('p');
// const price7Para = document.createElement('p');
// const choice7Img = document.createElement('img');

// c45ice7Para.textContent = 'Grilled Shrimp';
// price7Para.textContent = 'Ksh 430';
// choice7Img.alt = 'Grilled Shrimp';
// choice7Img.id = 'meals';
// choice7Img.src = Grilled;
// choice7.appendChild(choice7Para);
// choice7.appendChild(price7Para);
// choice7.appendChild(choice7Img);

// const choice8 = document.createElement('div');
// const choice8Para = document.createElement('p');
// const price8Para = document.createElement('p');
// const choice8Img = document.createElement('img');

// choice8Para.textContent = 'Vegetables';
// price8Para.textContent = 'Ksh 250';
// choice8Img.alt = 'Vegetables';
// choice8Img.id = 'meals';
// choice8Img.src = Vegies;
// choice8.appendChild(choice8Para);
// choice8.appendChild(price8Para);
// choice8.appendChild(choice8Img);

// const choice9 = document.createElement('div');
// const choice9Para = document.createElement('p');
// const price9Para = document.createElement('p');
// const choice9Img = document.createElement('img');
// choice9Para.textContent = 'Coming Soon';
// price9Para.textContent = 'Ksh ';
// choice9Img.alt = '';
// choice9Img.id = 'meals';
// choice9Img.src = Icon;
// choice9.appendChild(choice9Para);
// choice9.appendChild(price9Para);
// choice9.appendChild(choice9Img);

    // foods.appendChild(choice);
    // foods.appendChild(choice2);
    // foods.appendChild(choice3);
    // foods.appendChild(choice4);
    // foods.appendChild(choice5);
    // foods.appendChild(choice6);
    // foods.appendChild(choice7);
    // foods.appendChild(choice8);
    // foods.appendChild(choice9);

function meals() {
    body.textContent = ''
    body.appendChild(foods)
   
};

export {meals};
