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

for (let i = 0; i < newDropSection.length; i++) {
    newDropSec.innerHTML += `<article class = "dropItem">
    <img src = ${newDropSection[i].image1} width ="100%" height = "50%">
    <h3>${newDropSection[i].name}</h3>
    <p>${newDropSection[i].description}</p>
    <p>${newDropSection[i].price}$</p> <button class = "buyBtn">Add to cart</button>
    </article>`
}

