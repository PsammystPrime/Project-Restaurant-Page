const body = document.querySelector('.body')

const choice = document.createElement('div');
const choicePara = document.createElement('p');
const choiceImg = document.createElement('img');
choicePara.textContent = 'Chicken Meal'
choiceImg.alt = 'chicken meal'
choice.appendChild(choicePara)
choice.appendChild(choiceImg)

const choice2 = document.createElement('div');
const choice2Para = document.createElement('p');
const choice2Img = document.createElement('img');
choice2Para.textContent = 'Goat Meal'
choice2Img.alt = 'Goat meal'
choice2.appendChild(choice2Para)
choice2.appendChild(choice2Img)

const choice3 = document.createElement('div');
const choice3Para = document.createElement('p');
const choice3Img = document.createElement('img');
choice3Para.textContent = 'Ugali Meal'
choice3Img.alt = 'Ugali meal'
choice3.appendChild(choice3Para)
choice3.appendChild(choice3Img)

const choice4 = document.createElement('div');
const choice4Para = document.createElement('p');
const choice4Img = document.createElement('img');
choice4Para.textContent = 'Chapati'
choice4Img.alt = 'Chapati'
choice4.appendChild(choice4Para)
choice4.appendChild(choice4Img)

const choice5 = document.createElement('div');
const choice5Para = document.createElement('p');
const choice5Img = document.createElement('img');
choice5Para.textContent = 'Matoke'
choice5Img.alt = 'Matoke'
choice5.appendChild(choice5Para)
choice5.appendChild(choice5Img)

const choice6 = document.createElement('div');
const choice6Para = document.createElement('p');
const choice6Img = document.createElement('img');
choice6Para.textContent = 'Rice fry'
choice6Img.alt = 'Rice fry'
choice6.appendChild(choice6Para)
choice6.appendChild(choice6Img)

function btns() {
    body.textContent = ''
    body.appendChild(choice)
    body.appendChild(choice2)
    body.appendChild(choice3)
    body.appendChild(choice4)
    body.appendChild(choice5)
    body.appendChild(choice6)
   
}

export {btns};

//console.log('global')