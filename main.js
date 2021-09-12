const categoriesLinks = ["hats", "streetwear", "kicks", "giftshop"];




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
