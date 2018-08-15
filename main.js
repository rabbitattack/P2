axios.get('http:www.clashapi.xyz/api/cards')
    .then(function (result) {
        console.log(result)
        for (let i = 0; i < result.data.length; i++) {
            //get the card from the array of results
            var cardObj = result.data[i]

            //use a selector to select the body
            var body = document.querySelector("body");

            //make an img element
            var img = document.createElement("img");

            //set src of that img to the car img
            img.src = `http:www.clashapi.xyz/images/cards/${cardObj.idName}.png`;

            //append that img to body
            body.appendChild(img);

        }
    })
var pic = document.getElementsByTagName("img");
pic.addEventListener("click", flipCard());

function createProfileCards(beers) {
    const beerContainer = document.querySelector('main')
    return beers.forEach(beer => {
        beerContainer.innerHTML += (`
                    <div class="beer-card">
                        <div class="front">
                            <h2>${cardObj.idName}</h2>
                            <img src=${beer.image_url}></img>
                            <p>${beer.tagline}</p>
                        </div>
                        <div class="back">
                            <h3>Player Class</h3>
                            <p>${beer.first_brewed}</p>
                            <h3>Player Attributes</h3>
                            <p>${beer.abv}%</p>
                            <h3>Weaknesses</h3>
                            <p>${beer.food_pairing[0]}</p>
                        </div>
                    </div>
            `)
        return beerContainer
    })
}

function flipCard() {
    const beerCards = document.getElementsByTagName('img')
    beerCards.forEach(beer => {
        beer.addEventListener('click', (() => {
            beer.classList.toggle('clicked')
            beer.firstElementChild.nextElementSibling.classList.toggle('flipped')
        }))
    })
}