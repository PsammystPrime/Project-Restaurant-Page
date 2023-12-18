const body = document.querySelector('.body');
import Icon from './recipies.png';
import Pizza from './pizza.jpeg';
import Pasta from './pasta.jpeg';
import Vermicelli from './vermicelli.jpeg';
import Pork from './porkStew.jpeg';
import Shrimp from './shrimp.jpeg';
import Tuna from './grilledTuna.jpeg';
import Vegies from './bowl.jpeg';
import Grilled from './grilledShrimp.jpeg';
const foods = document.createElement('div');
foods.className = 'foods';

const choice = document.createElement('div');
const choicePara = document.createElement('p');
const pricePara = document.createElement('p');
const choiceImg = document.createElement('img');
choicePara.textContent = 'Pizza';
pricePara.textContent = 'Ksh 1000';
choiceImg.alt = 'Pizza';
choiceImg.id = 'meals';
choiceImg.src = Pizza;
choice.appendChild(choicePara);
choice.appendChild(pricePara);
choice.appendChild(choiceImg);

const choice2 = document.createElement('div');
const choice2Para = document.createElement('p');
const price2Para = document.createElement('p');
const choice2Img = document.createElement('img');
choice2Para.textContent = 'Pasta';
price2Para.textContent = 'Ksh 300';
choice2Img.id = 'meals';
choice2Img.src = Pasta;
choice2Img.alt = 'pasta';
choice2.appendChild(choice2Para);
choice2.appendChild(price2Para);
choice2.appendChild(choice2Img);

const choice3 = document.createElement('div');
const choice3Para = document.createElement('p');
const price3Para = document.createElement('p');
const choice3Img = document.createElement('img');
choice3Para.textContent = 'Vermicelli';
price3Para.textContent = 'Ksh 350';
choice3Img.alt = 'Vermicelli';
choice3Img.id = 'meals';
choice3Img.src = Vermicelli;
choice3.appendChild(choice3Para);
choice3.appendChild(price3Para);
choice3.appendChild(choice3Img);

const choice4 = document.createElement('div');
const choice4Para = document.createElement('p');
const price4Para = document.createElement('p');
const choice4Img = document.createElement('img');
choice4Para.textContent = 'Pork Stew';
price4Para.textContent = 'Ksh 450';
choice4Img.alt = 'Pork Stew';
choice4Img.id = 'meals';
choice4Img.src = Pork;
choice4.appendChild(choice4Para);
choice4.appendChild(price4Para);
choice4.appendChild(choice4Img);

const choice5 = document.createElement('div');
const choice5Para = document.createElement('p');
const price5Para = document.createElement('p');
const choice5Img = document.createElement('img');
choice5Para.textContent = 'Shrimp';
price5Para.textContent = 'Ksh 600';
choice5Img.alt = 'Shrimp';
choice5Img.id = 'meals';
choice5Img.src = Shrimp;
choice5.appendChild(choice5Para);
choice5.appendChild(price5Para);
choice5.appendChild(choice5Img);

const choice6 = document.createElement('div');
const choice6Para = document.createElement('p');
const price6Para = document.createElement('p');
const choice6Img = document.createElement('img');
choice6Para.textContent = 'Grilled Tuna';
price6Para.textContent = 'Ksh 330';
choice6Img.alt = 'Grilled Tuna';
choice6Img.id = 'meals';
choice6Img.src = Tuna;
choice6.appendChild(choice6Para);
choice6.appendChild(price6Para);
choice6.appendChild(choice6Img);

const choice7 = document.createElement('div');
const choice7Para = document.createElement('p');
const price7Para = document.createElement('p');
const choice7Img = document.createElement('img');
choice7Para.textContent = 'Grilled Shrimp';
price7Para.textContent = 'Ksh 430';
choice7Img.alt = 'Grilled Shrimp';
choice7Img.id = 'meals';
choice7Img.src = Grilled;
choice7.appendChild(choice7Para);
choice7.appendChild(price7Para);
choice7.appendChild(choice7Img);

const choice8 = document.createElement('div');
const choice8Para = document.createElement('p');
const price8Para = document.createElement('p');
const choice8Img = document.createElement('img');
choice8Para.textContent = 'Vegetables';
price8Para.textContent = 'Ksh 250';
choice8Img.alt = 'Vegetables';
choice8Img.id = 'meals';
choice8Img.src = Vegies;
choice8.appendChild(choice8Para);
choice8.appendChild(price8Para);
choice8.appendChild(choice8Img);

const choice9 = document.createElement('div');
const choice9Para = document.createElement('p');
const price9Para = document.createElement('p');
const choice9Img = document.createElement('img');
choice9Para.textContent = 'Coming Soon';
price9Para.textContent = 'Ksh ';
choice9Img.alt = '';
choice9Img.id = 'meals';
choice9Img.src = Icon;
choice9.appendChild(choice9Para);
choice9.appendChild(price9Para);
choice9.appendChild(choice9Img);

    foods.appendChild(choice);
    foods.appendChild(choice2);
    foods.appendChild(choice3);
    foods.appendChild(choice4);
    foods.appendChild(choice5);
    foods.appendChild(choice6);
    foods.appendChild(choice7);
    foods.appendChild(choice8);
    foods.appendChild(choice9);

function meals() {
    body.textContent = ''
    body.appendChild(foods)
   
};

export {meals};
