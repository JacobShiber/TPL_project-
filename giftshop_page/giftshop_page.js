function printGiftshopContent() {
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].category == "giftshop") {
            giftItems.innerHTML += `<div class = "giftItem">
        <img src = "${allItems[i].image1}" alt ="hat">
        <h1>${allItems[i].name}</h1>
        <a href ="./giftshop_page.html#displayItem" class = "expendBtn" onclick = "printFullItem(findItemById(${allItems[i].id}))">Expend</a>
    </div>`
        }
    }
}

printGiftshopContent()
