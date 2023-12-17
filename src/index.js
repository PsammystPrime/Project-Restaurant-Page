import './pageLoad'
import { hoe } from './home';
import { drink } from "./drinks";
import { btns } from './meals' 

const homeBtn = document.querySelector('.home')
const mealsBtn = document.querySelector('.meals')
const drinksBtn = document.querySelector('.drinks')

homeBtn.addEventListener('click', ()=>{
    hoe()
})

mealsBtn.addEventListener('click', ()=>{
   btns()
})

drinksBtn.addEventListener('click', ()=>{
    drink()
})

