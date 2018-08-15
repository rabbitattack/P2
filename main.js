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