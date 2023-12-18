console.log('hey');
const content = document.getElementById('content');
import Icon from './drinksbg2.jpeg'

const header = document.createElement('div');
const homeBtn = document.createElement('button');
const mealsBtn = document.createElement('button');
const drinksBtn = document.createElement('button');

header.className = 'header'
homeBtn.className = 'home'
homeBtn.textContent = 'Home';
mealsBtn.textContent = 'Meals'
mealsBtn.className = 'meals';
drinksBtn.textContent = 'Drinks';
drinksBtn.className = 'drinks'

header.appendChild(homeBtn);
header.appendChild(mealsBtn);
header.appendChild(drinksBtn)
content.appendChild(header);


const body = document.createElement('div');
const image = document.createElement('img');
const about = document.createElement('div');
const title = document.createElement('h1');
const aboutheader = document.createElement('h5');
const aboutPara = document.createElement('p');
const aboutBtn = document.createElement('button');

body.className = 'body'
image.alt = 'page'
image.src = Icon;
image.id = 'mainImg'
about.className = 'about'
title.textContent = 'STAFOODS RESTAURANT'
aboutheader.textContent = 'About us'
aboutPara.textContent = " This is a very good restaurant. A page for dishes served in a restaurant. Practicing DOM manipulation by dynamically  rendering a simple restaurant homepage. Am using Javascript alone to generate the entire contents of the website!"

aboutBtn.className = 'loyalty'
aboutBtn.textContent = 'Loyalty Programme'

about.appendChild(title);
about.appendChild(aboutheader);
about.appendChild(aboutPara);
about.appendChild(aboutBtn);
body.appendChild(image);
body.appendChild(about);
content.appendChild(body);


const footer = document.createElement('footer');
const left = document.createElement('div');
const right = document.createElement('p');
const footerHeader = document.createElement('p');
const connectBtns = document.createElement('div')
const twitterBtn = document.createElement('button');
const instagramBtn = document.createElement('button');
const facebookBtn = document.createElement('button');
const emailBtn = document.createElement('button');
const githubBtn = document.createElement('button');

left.className = 'left'
right.className = 'right'
right.textContent = `Images generated from Unsplash`
footerHeader.textContent = 'Connect on';
connectBtns.className = ' Connect';
twitterBtn.textContent = 'Twitter';
instagramBtn.textContent = 'Instagram';
facebookBtn.textContent = 'Facebook';
emailBtn.textContent = 'Email';
githubBtn.textContent = 'Github';

connectBtns.appendChild(twitterBtn)
connectBtns.appendChild(instagramBtn);
connectBtns.appendChild(facebookBtn);
connectBtns.appendChild(emailBtn);
connectBtns.appendChild(githubBtn);
left.appendChild(footerHeader);
left.appendChild(connectBtns);
footer.appendChild(left)
footer.appendChild(right)
content.appendChild(footer);

