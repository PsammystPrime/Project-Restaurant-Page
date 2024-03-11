const body = document.querySelector('.body');
const foods = document.createElement('div');
foods.className = 'foods';

function getData(){
    fetch('https://tasty.p.rapidapi.com/recipes/list', { 
        method: 'GET',
        params: {
            prefix: 'chicken soup'
          },
        headers: {
          'X-RapidAPI-Key': '95f758093emshe86bc2c74f42684p1e2a7djsn57a695ab4283',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    })
    .then((response)=>{
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json()
    })
    .then((data)=>{
        data.results.forEach((dish)=>{
            const card = document.createElement('div');
            const dishName = document.createElement('p');
            const dishPrice = document.createElement('p');
            const dishPicture = document.createElement('img');
            const dishInfo = document.createElement('p');
            
            dishName.textContent = dish.name
            dishPrice.textContent = 'Ksh ' + dish.price.total
            dishPicture.alt = dish.name;
            dishPicture.id = 'meals';
            dishPicture.src = dish.thumbnail_url
            dishInfo.textContent = dish.description
            dishInfo.className = 'info'

            card.appendChild(dishName);
            card.appendChild(dishPrice);
            card.appendChild(dishPicture);
            card.appendChild(dishInfo);
            
            foods.appendChild(card);
        })
    })
    .catch((error)=>{
        console.error('There was a problem with the fetch operation:' + error)
    })
    
};
getData()

function meals() {
    body.textContent = ''
    body.appendChild(foods)
   
};

export {meals}
