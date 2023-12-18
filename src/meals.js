const body = document.querySelector('.body')
import Icon from './recipies.png'
const foods = document.createElement('div')
foods.className = 'foods'

const choice = document.createElement('div');
const choicePara = document.createElement('p');
const choiceImg = document.createElement('img');
choicePara.textContent = 'Chicken Meal'
choiceImg.alt = 'chicken meal'
choiceImg.id = 'meals'
choiceImg.src = Icon
choice.appendChild(choicePara)
choice.appendChild(choiceImg)

const choice2 = document.createElement('div');
const choice2Para = document.createElement('p');
const choice2Img = document.createElement('img');
choice2Para.textContent = 'Goat Meal'
choice2Img.id = 'meals'
choice2Img.src = Icon
choice2Img.alt = 'Goat meal'
choice2.appendChild(choice2Para)
choice2.appendChild(choice2Img)

const choice3 = document.createElement('div');
const choice3Para = document.createElement('p');
const choice3Img = document.createElement('img');
choice3Para.textContent = 'Ugali Meal'
choice3Img.alt = 'Ugali meal'
choice3Img.id = 'meals'
choice3Img.src = Icon
choice3.appendChild(choice3Para)
choice3.appendChild(choice3Img)

const choice4 = document.createElement('div');
const choice4Para = document.createElement('p');
const choice4Img = document.createElement('img');
choice4Para.textContent = 'Chapati'
choice4Img.alt = 'Chapati'
choice4Img.id = 'meals'
choice4Img.src = Icon
choice4.appendChild(choice4Para)
choice4.appendChild(choice4Img)

const choice5 = document.createElement('div');
const choice5Para = document.createElement('p');
const choice5Img = document.createElement('img');
choice5Para.textContent = 'Matoke'
choice5Img.alt = 'Matoke'
choice5Img.id = 'meals'
choice5Img.src = Icon
choice5.appendChild(choice5Para)
choice5.appendChild(choice5Img)

const choice6 = document.createElement('div');
const choice6Para = document.createElement('p');
const choice6Img = document.createElement('img');
choice6Para.textContent = 'Rice fry'
choice6Img.alt = 'Rice fry'
choice6Img.id = 'meals'
choice6Img.src = Icon
choice6.appendChild(choice6Para)
choice6.appendChild(choice6Img)

const choice7 = document.createElement('div');
const choice7Para = document.createElement('p');
const choice7Img = document.createElement('img');
choice7Para.textContent = 'Pasta Dishes'
choice7Img.alt = 'Pasta Dishes'
choice7Img.id = 'meals'
choice7Img.src = Icon
choice7.appendChild(choice7Para)
choice7.appendChild(choice7Img)

const choice8 = document.createElement('div');
const choice8Para = document.createElement('p');
const choice8Img = document.createElement('img');
choice8Para.textContent = 'Vegetables'
choice8Img.alt = 'Vegetables'
choice8Img.id = 'meals'
choice8Img.src = Icon
choice8.appendChild(choice8Para)
choice8.appendChild(choice8Img)

const choice9 = document.createElement('div');
const choice9Para = document.createElement('p');
const choice9Img = document.createElement('img');
choice9Para.textContent = 'Mexican Taste'
choice9Img.alt = 'Mexican Taste'
choice9Img.id = 'meals'
choice9Img.src = Icon
choice9.appendChild(choice9Para)
choice9.appendChild(choice9Img)

    foods.appendChild(choice)
    foods.appendChild(choice2)
    foods.appendChild(choice3)
    foods.appendChild(choice4)
    foods.appendChild(choice5)
    foods.appendChild(choice6)
    foods.appendChild(choice7)
    foods.appendChild(choice8)
    foods.appendChild(choice9)

function meals() {
    body.textContent = ''
    body.appendChild(foods)
   
}

export {meals};
