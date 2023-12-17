const body = document.querySelector('.body')

const image = document.createElement('img')
const about = document.createElement('div');
const aboutheader = document.createElement('h5');
const aboutPara = document.createElement('p');
const aboutBtn = document.createElement('button');

body.className = 'body'
image.alt = 'page'
about.className = 'about'
aboutheader.textContent = 'About us'
aboutPara.textContent = ' This is a very good restaurant'
aboutBtn.textContent = 'Get Started'

function hoe() {
    body.textContent = ''

    about.appendChild(aboutheader);
    about.appendChild(aboutPara);
    about.appendChild(aboutBtn);
    body.appendChild(image);
    body.appendChild(about);
}
export {hoe}

