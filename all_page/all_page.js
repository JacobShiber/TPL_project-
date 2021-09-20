function findItemById (id){
    for(let i = 0; i < allItems.length; i++){
        if(allItems[i].id == id){
            return i;
        }
    }
}

function closeItem (){
    displayItem.innerHTML = '';
}


function printFullItem (index){
    for(let i = 0; i < allItems.length; i++){
        if(i == index){
            displayItem.innerHTML = "";
            displayItem.innerHTML +=
            `<article class = "specificItem">
            <div class = "specificPics">
            <img src = ${allItems[i].image1}>
            <img src = ${allItems[i].image2}>
            </div>
            <div class = "specificText">
            <h3>${allItems[i].name}</h3>
            <p>${allItems[i].description.toUpperCase()}</p>
            <p class ="priceTag">${allItems[i].price}$</p> 
            <button class = "buyBtn" onclick = "addToCart()">Add to cart</button>
            <div>
            <button class = "closeBtn" onclick = "closeItem()">x</button>
            </article>`
        }
    }
}


function printSpecificItems(category, destination) {
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].category == category) {
            destination.innerHTML += `<article class = "hatItem">
    <img src = ${allItems[i].image1}>
    <h3>${allItems[i].name}</h3>
    <button class = "expendBtn" onclick = "printFullItem(findItemById(${allItems[i].id}))">Expend</button>
    </article>`
        }
    }
}

printSpecificItems ("hats", hatsContainer);
printSpecificItems ("streetwear", streetwearContainer)
printSpecificItems ("kicks", kicksContainer)
printSpecificItems ("giftshop", giftshopContainer)


slideRightBtn.onclick = () => {
    let sliderCounter = 0;
    let sliderAnimation = setInterval(() => {
        hatsContainer.style.left = `-${sliderCounter++}%`
        if (sliderCounter > 100) {
            clearInterval(sliderAnimation);
        }
    }, 0.5);
};


slideLeftBtn.onclick = () => {
    let sliderCounter = 100;
    let sliderAnimation = setInterval(() => {
        hatsContainer.style.left = `-${sliderCounter--}%`
        if (sliderCounter < 0) {
            clearInterval(sliderAnimation);
        }
    }, 0.5);
};

slideRightBtn1.onclick = () => {
    let sliderCounter = 0;
    let sliderAnimation = setInterval(() => {
        streetwearContainer.style.left = `-${sliderCounter++}%`
        if (sliderCounter > 100) {
            clearInterval(sliderAnimation);
        }
    }, 0.5);
};


slideLeftBtn1.onclick = () => {
    let sliderCounter = 100;
    let sliderAnimation = setInterval(() => {
        streetwearContainer.style.left = `-${sliderCounter--}%`
        if (sliderCounter < 0) {
            clearInterval(sliderAnimation);
        }
    }, 0.5);
};

slideRightBtn2.onclick = () => {
    let sliderCounter = 0;
    let sliderAnimation = setInterval(() => {
        kicksContainer.style.left = `-${sliderCounter++}%`
        if (sliderCounter > 100) {
            clearInterval(sliderAnimation);
        }
    }, 0.5);
};


slideLeftBtn2.onclick = () => {
    let sliderCounter = 100;
    let sliderAnimation = setInterval(() => {
        kicksContainer.style.left = `-${sliderCounter--}%`
        if (sliderCounter < 0) {
            clearInterval(sliderAnimation);
        }
    }, 0.5);
};


slideRightBtn3.onclick = () => {
    let sliderCounter = 0;
    let sliderAnimation = setInterval(() => {
        giftshopContainer.style.left = `-${sliderCounter++}%`
        if (sliderCounter > 100) {
            clearInterval(sliderAnimation);
        }
    }, 0.5);
};


slideLeftBtn3.onclick = () => {
    let sliderCounter = 100;
    let sliderAnimation = setInterval(() => {
        giftshopContainer.style.left = `-${sliderCounter--}%`
        if (sliderCounter < 0) {
            clearInterval(sliderAnimation);
        }
    }, 0.5);
};
