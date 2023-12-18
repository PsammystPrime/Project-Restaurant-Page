const body = document.querySelector('.body');
import Icon from './drinksbg2.jpeg';

const image = document.createElement('img')
const about = document.createElement('div');
const title = document.createElement('h1');
const aboutheader = document.createElement('h5');
const aboutPara = document.createElement('p');
const aboutBtn = document.createElement('button');

body.className = 'body'
image.alt = 'page'
image.src = Icon
image.id = 'mainImg'
about.className = 'about'
title.textContent = 'STAFOODS RESTAURANT'
aboutheader.textContent = 'About us'
aboutPara.textContent = " This is a very good restaurant. A page for dishes served in a restaurant. Practicing DOM manipulation by dynamically  rendering a simple restaurant homepage. Am using Javascript alone to generate the entire contents of the website!"
aboutBtn.textContent = 'Loyalty Programme'
aboutBtn.className = 'loyalty'

aboutBtn.addEventListener('click', ()=>{
    alert('Loyalty Programme Coming Soon')
});

function home() {
    body.textContent = '';

    about.appendChild(title);
    about.appendChild(aboutheader);
    about.appendChild(aboutPara);
    about.appendChild(aboutBtn);
    body.appendChild(image);
    body.appendChild(about);
}
export {home};

