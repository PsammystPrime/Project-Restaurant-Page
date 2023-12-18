import './pageLoad'
import { hoe } from './home';
import { drink } from "./drinks";
import { btns } from './meals' 

const homeBtn = document.querySelector('.home')
const mealsBtn = document.querySelector('.meals')
const drinksBtn = document.querySelector('.drinks')
const aboutBtn = document.querySelector('.loyalty')

homeBtn.addEventListener('click', ()=>{
    hoe()

})

mealsBtn.addEventListener('click', ()=>{
   btns()
})

drinksBtn.addEventListener('click', ()=>{
    drink()
})

aboutBtn.addEventListener('click', ()=>{
    alert('Loyalty Programme Coming Soon')
})
