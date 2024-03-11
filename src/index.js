import './pageLoad';
import './styles.css';
import { drink } from "./drinks";
import { meals} from './meals' ;

const homeBtn = document.querySelector('.home');
const mealsBtn = document.querySelector('.meals');
const drinksBtn = document.querySelector('.drinks');
const aboutBtn = document.querySelector('.loyalty');
const content = document.querySelector('#content');

homeBtn.addEventListener('click', ()=>{
    content.textContent = ''
    content.textContent = './pageLoad'
});

mealsBtn.addEventListener('click', ()=>{
   meals()
});

drinksBtn.addEventListener('click', ()=>{
    drink()
});

aboutBtn.addEventListener('click', ()=>{
    alert('Loyalty Programme Coming Soon')
});
