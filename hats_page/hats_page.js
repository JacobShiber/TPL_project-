function printHatContent() {
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].category == "hats") {
            hatsItems.innerHTML += `<div class = "hatItem">
        <img src = "${allItems[i].image1}" alt ="hat">
        <h1>${allItems[i].name}</h1>
        <a href ="./hats_page.html#displayItem" class = "expendBtn" onclick = "printFullItem(findItemById(${allItems[i].id}))">Expend</a>
    </div>`
        }
    }
}

printHatContent()


allHatsBtn.onclick = () => {
    hatsItems.innerHTML = '';
    fittedHatsBtn.style.borderBottom = 'none'
    allHatsBtn.style.borderBottom = '2px solid black'
    snapbackHatsBtn.style.borderBottom = 'none'
    printHatContent()
}

fittedHatsBtn.onclick = () => {
    hatsItems.innerHTML = '';
    fittedHatsBtn.style.borderBottom = '2px solid black'
    allHatsBtn.style.borderBottom = 'none'
    snapbackHatsBtn.style.borderBottom = 'none'
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].sub_category == "fitted"){
            hatsItems.innerHTML += `<div class = "hatItem">
            <img src = "${allItems[i].image1}" alt ="hat">
            <h1>${allItems[i].name}</h1>
            <a href ="./hats_page.html#displayItem" class = "expendBtn" onclick = "printFullItem(findItemById(${allItems[i].id}))">Expend</a>
        </div>`
        }
    }
}

snapbackHatsBtn.onclick = () => {
    hatsItems.innerHTML = '';
    fittedHatsBtn.style.borderBottom = 'none'
    allHatsBtn.style.borderBottom = 'none'
    snapbackHatsBtn.style.borderBottom = '2px solid black'
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].sub_category == "snapback"){
            hatsItems.innerHTML += `<div class = "hatItem">
            <img src = "${allItems[i].image1}" alt ="hat">
            <h1>${allItems[i].name}</h1>
            <a href ="./hats_page.html#displayItem" class = "expendBtn" onclick = "printFullItem(findItemById(${allItems[i].id}))">Expend</a>
        </div>`
        }
    }
}