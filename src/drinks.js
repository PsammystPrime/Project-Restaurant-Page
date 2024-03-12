const body = document.querySelector('.body');
const cocktails = document.createElement('div');
cocktails.className = 'drinks';

function getData(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail', { 

    })
    .then((response)=>{
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json()
    })
    .then((data)=>{
        data.drinks.forEach((drink)=>{
            const card = document.createElement('div');
            const dishName = document.createElement('p');
            const dishPrice = document.createElement('p');
            const dishPicture = document.createElement('img');
            
            dishName.textContent = drink.strDrink
            dishPrice.textContent = 'Ugx ' + drink.idDrink
            dishPicture.alt = drink.strDrink;
            dishPicture.id = 'drinks';
            dishPicture.src = drink.strDrinkThumb

            card.appendChild(dishName);
            card.appendChild(dishPrice);
            card.appendChild(dishPicture);
            
            cocktails.appendChild(card);
        })
    })
    .catch((error)=>{
        console.error('There was a problem with the fetch operation:' + error)
    })
}
getData()

function drink() {
    body.textContent = ''
    body.appendChild(cocktails)
};

export {drink};