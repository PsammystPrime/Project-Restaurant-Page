console.log('hey');
const content = document.getElementById('content');

const header = document.createElement('div');
const homeBtn = document.createElement('button');
const faqsBtn = document.createElement('button');
header.className = 'header'
homeBtn.textContent = 'Home';
faqsBtn.textContent = 'FAQs';

header.appendChild(homeBtn);
header.appendChild(faqsBtn);
content.appendChild(header);


const body = document.createElement('div');
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

about.appendChild(aboutheader);
about.appendChild(aboutPara);
about.appendChild(aboutBtn);
body.appendChild(image);
body.appendChild(about);
content.appendChild(body);


const footer = document.createElement('footer');
const footerHeader = document.createElement('p');
const connectBtns = document.createElement('div')
const twitterBtn = document.createElement('button');
const instagramBtn = document.createElement('button');
const facebookBtn = document.createElement('button');
const emailBtn = document.createElement('button');
const githubBtn = document.createElement('button');

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
footer.appendChild(footerHeader);
footer.appendChild(connectBtns);
content.appendChild(footer);

