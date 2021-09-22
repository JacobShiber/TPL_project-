function printStreetwearContent() {
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].category == "streetwear") {
            wearItems.innerHTML += `<div class = "wearItem">
        <img src = "${allItems[i].image1}" alt ="hat">
        <h1>${allItems[i].name}</h1>
        <a href ="./streetwear_page.html#displayItem" class = "expendBtn" onclick = "printFullItem(findItemById(${allItems[i].id}))">Expend</a>
    </div>`
        }
    }
}

printStreetwearContent()


allWearBtn.onclick = () => {
    wearItems.innerHTML = '';
    winterBtn.style.borderBottom = 'none'
    allWearBtn.style.borderBottom = '2px solid black'
    summerBtn.style.borderBottom = 'none'
    printStreetwearContent()
}

winterBtn.onclick = () => {
    wearItems.innerHTML = '';
    winterBtn.style.borderBottom = '2px solid black'
    allWearBtn.style.borderBottom = 'none'
    summerBtn.style.borderBottom = 'none'
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].sub_category == "winter"){
            wearItems.innerHTML += `<div class = "wearItem">
            <img src = "${allItems[i].image1}" alt ="hat">
            <h1>${allItems[i].name}</h1>
            <a href ="./streetwear_page.html#displayItem" class = "expendBtn" onclick = "printFullItem(findItemById(${allItems[i].id}))">Expend</a>
        </div>`
        }
    }
}

summerBtn.onclick = () => {
    wearItems.innerHTML = '';
    winterBtn.style.borderBottom = 'none'
    allWearBtn.style.borderBottom = 'none'
    summerBtn.style.borderBottom = '2px solid black'
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].sub_category == "summer"){
            wearItems.innerHTML += `<div class = "wearItem">
            <img src = "${allItems[i].image1}" alt ="hat">
            <h1>${allItems[i].name}</h1>
            <a href ="./streetwear_page.html#displayItem" class = "expendBtn" onclick = "printFullItem(findItemById(${allItems[i].id}))">Expend</a>
        </div>`
        }
    }
}