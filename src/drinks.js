const body = document.querySelector('.body');
import Icon from './recipies.png';
import capuccino from './capuccino.jpeg';
import milkshake from "./milkshake.jpeg";
import chocolate from "./chocolate.jpeg";
import chocolateCoffee from "./chocolateCoffee.jpeg";
import drinksbg1 from "./drinksbg1.jpeg";
const drinks = document.createElement('div');
drinks.className = 'drinks';

const choice = document.createElement('div');
const choicePara = document.createElement('p');
const pricePara = document.createElement('p');
const choiceImg = document.createElement('img');
pricePara.textContent = 'Ksh 220';
choicePara.textContent = 'Capuccino Tea';
choiceImg.alt = 'Capuccino Tea';
choiceImg.id = 'drinks';
choiceImg.src = capuccino;
choice.appendChild(choicePara);
choice.appendChild(pricePara);
choice.appendChild(choiceImg);

const choice2 = document.createElement('div');
const choice2Para = document.createElement('p');
const price2Para = document.createElement('p');
const choice2Img = document.createElement('img');
price2Para.textContent = 'Ksh 200';
choice2Para.textContent = 'Milkshake';
choice2Img.id = 'drinks';
choice2Img.src = milkshake;
choice2Img.alt = 'Milkshake';
choice2.appendChild(choice2Para);
choice2.appendChild(price2Para);
choice2.appendChild(choice2Img);

const choice3 = document.createElement('div');
const choice3Para = document.createElement('p');
const price3Para = document.createElement('p');
const choice3Img = document.createElement('img');
price3Para.textContent = 'Ksh 250';
choice3Para.textContent = 'Chocolate';
choice3Img.alt = 'Chocolate';
choice3Img.id = 'drinks';
choice3Img.src = chocolate;
choice3.appendChild(choice3Para);
choice3.appendChild(price3Para);
choice3.appendChild(choice3Img);

const choice4 = document.createElement('div');
const choice4Para = document.createElement('p');
const price4Para = document.createElement('p');
const choice4Img = document.createElement('img');
price4Para.textContent = 'Ksh 300';
choice4Para.textContent = 'Chocolate Coffee';
choice4Img.alt = 'Chocolate Coffee';
choice4Img.id = 'drinks';
choice4Img.src = chocolateCoffee;
choice4.appendChild(choice4Para);
choice4.appendChild(price4Para);
choice4.appendChild(choice4Img);

const choice5 = document.createElement('div');
const choice5Para = document.createElement('p');
const price5Para = document.createElement('p');
const choice5Img = document.createElement('img');
price5Para.textContent = 'Ksh 150';
choice5Para.textContent = 'Porridge';
choice5Img.alt = 'Porridge';
choice5Img.id = 'drinks';
choice5Img.src = drinksbg1;
choice5.appendChild(choice5Para);
choice5.appendChild(price5Para);
choice5.appendChild(choice5Img);

const choice6 = document.createElement('div');
const choice6Para = document.createElement('p');
const price6Para = document.createElement('p');
const choice6Img = document.createElement('img');
price6Para.textContent = 'Ksh 250';
choice6Para.textContent = 'Espresso';
choice6Img.alt = 'Espresso';
choice6Img.id = 'drinks';
choice6Img.src = Icon;
choice6.appendChild(choice6Para);
choice6.appendChild(price6Para);
choice6.appendChild(choice6Img);

drinks.appendChild(choice);
drinks.appendChild(choice2);
drinks.appendChild(choice3);
drinks.appendChild(choice4);
drinks.appendChild(choice5);
drinks.appendChild(choice6);

function drink() {
    body.textContent = ''
    body.appendChild(drinks)
};

export {drink};