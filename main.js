
axios.get('http:www.clashapi.xyz/api/cards')
    .then(function (result) {
        console.log(result)
        createProfileCards(result.data)
        // for (let i = 0; i < result.data.length; i++) {
        //     //get the card from the array of results
        //     var cardObj = result.data[i]

        //     //use a selector to select the body
        //     var body = document.querySelector("body");

        //     //make an img element
        //     var img = document.createElement("img");

        //     //set src of that img to the car img
        //     img.src = `http:www.clashapi.xyz/images/cards/${cardObj.idName}.png`;

        //     //append that img to body
        //     body.appendChild(img);

        // }


    })

// var pic = document.getElementsByTagName("img");
// pic.addEventListener("click", flipCard());

function createProfileCards(cards) {
    const cardContainer = document.querySelector('main')
    return cards.forEach(card => {
        console.log(card)
        cardContainer.innerHTML += (`
                <div class="beer-card">
                    <div class="front">
                        <h2>${card.idName}</h2>
                        <img src=${`http:www.clashapi.xyz/images/cards/${card.idName}.png`}></img>
                        <p>${card.elixirCost}</p>
                        <p>${card.type}</p>
                    </div>
                    
                </div>
        `)
        return cardContainer
    })
}

// function flipCard() {
//     const createProfileCard = document.getElementsByTagName('img')
//     beerCards.forEach(beer => {
//         beer.addEventListener('click', (() => {
//             beer.classList.toggle('clicked')
//             beer.firstElementChild.nextElementSibling.classList.toggle('flipped')
//         }))
//     })
// }