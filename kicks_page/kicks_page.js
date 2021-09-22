function printKicksContent() {
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].category == "kicks") {
            kicksItems.innerHTML += `<div class = "kickItem">
        <img src = "${allItems[i].image1}" alt ="hat">
        <h1>${allItems[i].name}</h1>
        <a href ="./kicks_page.html#displayItem" class = "expendBtn" onclick = "printFullItem(findItemById(${allItems[i].id}))">Expend</a>
    </div>`
        }
    }
}

printKicksContent()


allKicksBtn.onclick = () => {
    kicksItems.innerHTML = '';
    nikeBtn.style.borderBottom = 'none'
    allKicksBtn.style.borderBottom = '2px solid black'
    adidasBtn.style.borderBottom = 'none'
    printKicksContent()
}

nikeBtn.onclick = () => {
    kicksItems.innerHTML = '';
    nikeBtn.style.borderBottom = '2px solid black'
    allKicksBtn.style.borderBottom = 'none'
    adidasBtn.style.borderBottom = 'none'
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].sub_category == "nike"){
            kicksItems.innerHTML += `<div class = "kickItem">
            <img src = "${allItems[i].image1}" alt ="hat">
            <h1>${allItems[i].name}</h1>
            <a href ="./kicks_page.html#displayItem" class = "expendBtn" onclick = "printFullItem(findItemById(${allItems[i].id}))">Expend</a>
        </div>`
        }
    }
}

adidasBtn.onclick = () => {
    kicksItems.innerHTML = '';
    nikeBtn.style.borderBottom = 'none'
    allKicksBtn.style.borderBottom = 'none'
    adidasBtn.style.borderBottom = '2px solid black'
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].sub_category == "adidas"){
            kicksItems.innerHTML += `<div class = "kickItem">
            <img src = "${allItems[i].image1}" alt ="hat">
            <h1>${allItems[i].name}</h1>
            <a href ="./kicks_page.html#displayItem" class = "expendBtn" onclick = "printFullItem(findItemById(${allItems[i].id}))">Expend</a>
        </div>`
        }
    }
}