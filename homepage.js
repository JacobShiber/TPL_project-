// this is the categories sub-nav bar functions

categoriesLink.onclick = () => {
    let counter = 0;

    let slidingCat = setInterval(() => {
        catLinksContainer.style = `height: ${counter++}px; width: 95%; margin-left: 2.5%; background-color: rgb(157, 0, 0);`;

        if (counter == 70) {
            clearInterval(slidingCat);
        }
    }, 5);

    setTimeout(() => {
        for (let i = 0; i < categoriesLinks.length; i++) {
            catLinks.innerHTML += `<li class = "catLink"><a href = "">${categoriesLinks[i].toUpperCase()}</a></li>`;
        }
    }, 500);

};

catLinksContainer.onclick = () => {
    let counter = 70;

    let slidingCatOut = setInterval(() => {
        catLinksContainer.style = `height: ${counter--}px; width: 95%; margin-left: 2.5%; background-color: rgb(157, 0, 0);`;
        if (counter == 0) {
            clearInterval(slidingCatOut)
        }
    }, 5);
    setTimeout(() => {
        catLinks.innerHTML = "";
    }, 100);
};


//this is for the new drop section 
let itemsCounter = 1;
function addToCart() {
    numOfItems.style.background = 'red';
    numOfItems.innerHTML = itemsCounter++;
}

for (let i = 0; i < newDropSection.length; i++) {
    articleContainer.innerHTML += `<article class = "dropItem">
    <img src = ${newDropSection[i].image1} width ="100%" height = "50%">
    <h3>${newDropSection[i].name}</h3>
    <p>${newDropSection[i].description.toUpperCase()}</p>
    <p>${newDropSection[i].price}</p> 
    <button class = "buyBtn" onclick = "addToCart()">Add to cart</button>
    </article>`
}




let sliderCounter = 0;

slideRightBtn.onclick = () => {
    let sliderAnimation = setInterval(() => {
       articleContainer.style.left = `-${sliderCounter++}%` 
       if (sliderCounter > 100){
           clearInterval(sliderAnimation);
       }
    }, 0.5);
};


slideLeftBtn.onclick = () => {
    let sliderAnimation = setInterval(() => {
        articleContainer.style.left = `-${sliderCounter--}%` 
        if (sliderCounter < 0){
            clearInterval(sliderAnimation);
        }
     }, 0.5);
};

//this is the most popular section 

for (let i = 0; i < mostPopularSection.length; i++) {
    mostPopular.innerHTML += `<article class = "popItem">
    <img src = ${mostPopularSection[i].image1} width ="100%" height = "50%">
    <h3>${mostPopularSection[i].name}</h3>
    <p>${mostPopularSection[i].description.toUpperCase()}</p>
    <p>${mostPopularSection[i].price}$</p> 
    <button class = "buyBtn" onclick = "addToCart()">Add to cart</button>
    </article>`
}


submitBtn.onclick = () => {
    alert("Message have been received")
}
