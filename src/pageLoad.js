const content = document.getElementById('content');
import Icon from './drinksbg2.jpeg';

const header = document.createElement('div');
const homeBtn = document.createElement('button');
const mealsBtn = document.createElement('button');
const drinksBtn = document.createElement('button');

header.className = 'header';
homeBtn.className = 'home';
homeBtn.textContent = 'Home';
mealsBtn.textContent = 'Meals';
mealsBtn.className = 'meals';
drinksBtn.textContent = 'Drinks';
drinksBtn.className = 'drinks';

header.appendChild(homeBtn);
header.appendChild(mealsBtn);
header.appendChild(drinksBtn);
content.appendChild(header);


const homeBody = document.createElement('div');
const body = document.createElement('div');
const image = document.createElement('img');
const about = document.createElement('div');
const title = document.createElement('h2');
const aboutheader = document.createElement('h5');
const aboutPara = document.createElement('p');
const aboutBtn = document.createElement('button');


homeBody.className = 'homeBody';
body.className = 'body';
image.alt = 'page';
image.src = Icon;
image.id = 'mainImg';
about.className = 'about';
title.textContent = 'STAFOODS RESTAURANT';
aboutheader.textContent = 'About us';
aboutPara.textContent = " This is a very good restaurant. A page for dishes served in a restaurant. Practicing DOM manipulation by dynamically  rendering a simple restaurant homepage. Am using Javascript alone to generate the entire contents of the website!"

aboutBtn.className = 'loyalty';
aboutBtn.textContent = 'Loyalty Programme';

about.appendChild(title);
about.appendChild(aboutheader);
about.appendChild(aboutPara);
about.appendChild(aboutBtn);
homeBody.appendChild(image);
homeBody.appendChild(about);
body.appendChild(homeBody);
content.appendChild(body);


const footer = document.createElement('footer');
const left = document.createElement('div');
const right = document.createElement('p');
const footerHeader = document.createElement('p');
const connectBtns = document.createElement('div')
const twitterBtn = document.createElement('button');
const twitterlink = document.createElement('a')
const emailBtn = document.createElement('button');
const emaillink = document.createElement('a');
const githubBtn = document.createElement('button');
const githublink = document.createElement('a');
const linkedInBtn = document.createElement('button');
const linkedInlink = document.createElement('a');



left.className = 'left';
right.className = 'right';
right.textContent = `Images generated from Unsplash`;
footerHeader.textContent = 'Connect on';
connectBtns.className = ' Connect';
twitterlink.textContent = 'Twitter';
linkedInlink.textContent = 'LinkedIn';
emaillink.textContent = 'Email';
githublink.textContent = 'Github';

twitterlink.href = 'www.twitter.com/psammystprime1.com'
linkedInlink.href = 'https://www.linkedin.com/in/samuel-njuguna-b74abb28b/'
emaillink.href = 'www.psammystprime384@gmail.com'
githublink.href = 'www.github.com/psammystprime.com'


twitterBtn.appendChild(twitterlink);
linkedInBtn.appendChild(linkedInlink);
emailBtn.appendChild(emaillink);
githubBtn.appendChild(githublink);

connectBtns.appendChild(githubBtn);
connectBtns.appendChild(twitterBtn);
connectBtns.appendChild(emailBtn);
connectBtns.appendChild(linkedInBtn);


left.appendChild(footerHeader);
left.appendChild(connectBtns);
footer.appendChild(left);
footer.appendChild(right);
content.appendChild(footer);
