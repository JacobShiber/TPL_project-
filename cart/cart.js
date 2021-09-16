function addItem (img, name, description, price){
    cartItems.unshift({img, name, description, price});
    cartItems.updatePrice(price); // todo : if we do sales check for sales before updatePrice
}

let idForButton = 1;

for (let item of cartItems){
    itemsTable.innerHTML += `<tr><td id = "itemDescription">
    <img src = "${item.image1}" alt = "item image">
    <p id ="cartText"><span id = "itemHeader">${item.name}</span><br>
    ${item.description}<br>
    ${item.category.toUpperCase()}<br>
    Size <select class = "selectBars">
    <option value="XL">XL</option>
    <option value="L">L</option>
    <option value="M">M</option>
    <option value="S">S</option>
    <option value="XS">XS</option>
    </select>  
    Quantity <select class = "selectBars">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    </select><br><br><br>
    <button class = "removeBtn" id = "${idForButton++}" onclick = "removeItem()">Remove item</button></p></td><td id = "quantity">${item.price}$ x1</td></tr>`
}