function printItems() {
    for (let item of cartItems) {
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
    Quantity <select class = "selectBars" id = "a${item.id}" onchange ="updateQuantity(this)">
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
    <button class = "removeBtn" id = "${item.id}" onclick = "removeItem(this)">Remove item</button></p></td><td id = "quantity">${item.price}$ x1</td></tr>`
    }
}



printItems();

function findCartItemById(id) {
    for (let i = 0; i < cartItems.length; i++) {
        if (id == cartItems[i].id) {
            return i;
        }
    }
}

function removeItem(button) {
    let x = button.id;
    switch (x) {
        case "9":
            cartItems.splice(findCartItemById("9"), 1);
            itemsTable.innerHTML = "";
            printItems();
            summerySubTotal.innerHTML = "";
            printSummery ();
            break;
        case "11":
            cartItems.splice(findCartItemById("11"), 1);
            itemsTable.innerHTML = "";
            printItems();
            summerySubTotal.innerHTML = "";
            printSummery ();
            break;
        case "6":
            cartItems.splice(findCartItemById("6"), 1);
            itemsTable.innerHTML = "";
            printItems();
            summerySubTotal.innerHTML = "";
            printSummery ();
            break;
        case "4":
            cartItems.splice(findCartItemById("4"), 1);
            itemsTable.innerHTML = "";
            printItems();
            summerySubTotal.innerHTML = "";
            printSummery ();
            break;
    }
}


function subTotal() {
    let sum = 0;
    for (let item of cartItems) {
        sum += (item.price * Number(item.quantity))
    }
    return sum
}

function printSummery (){
    summerySubTotal.innerHTML += `<p id = "subTotalStyle">Subtotal  -  ${getTwoDigits(subTotal())}$ <br>
    Discount - ${getTwoDigits(subTotal() - calculateAfterDiscount(cartItems))}$ <br>
    <span id = "totalPrice">Total - ${getTwoDigits(calculateAfterDiscount(cartItems))}$</span></p>`
}

printSummery ()


function min(z,y){
    if (z<y){
        return z;
    }
    return y;
}


function getTwoDigits(number1){
    let number2 = number1.toString();
    let length1 = number2.length;
    let m = number2.indexOf(".");
    if (m != -1){
        return number2.slice(0,min(length1,m+3));
    }
    return number2;
}


function updateQuantity(select) {
    let x = select.id
    switch (x) {
        case "a9":
            (cartItems[findCartItemById("9")]).quantity = a9.value
            summerySubTotal.innerHTML = "";
            printSummery ()
            break;
        case "a11":
            (cartItems[findCartItemById("11")]).quantity = a11.value
            summerySubTotal.innerHTML = "";
            printSummery ()
            break;
        case "a6":
            (cartItems[findCartItemById("6")]).quantity = a6.value
            summerySubTotal.innerHTML = "";
            printSummery ()
            break;
        case "a4":
            (cartItems[findCartItemById("4")]).quantity = a4.value
            summerySubTotal.innerHTML = "";
            printSummery ()
            break;
    }
}


function calculateArraySum (array){
    let sum =0;
    for (let item of array){
        sum += item;
    }
    return sum;
}

function calculateAfterDiscount(yaakov){
    let newArray = [];
    for (let item of yaakov){
        let price = item.price; 
        let quantity = Number(item.quantity);
        for (let i = 0; i < quantity; i++){
            newArray.push(price);
        }
    }
    newArray.sort(function (a,b){
        return b - a;
    });
    let arraySize = newArray.length;
    if (arraySize%2 == 0){
        for (let i = arraySize/2; i < arraySize; i++){
            newArray[i] = newArray[i]/2
        }
    }
    else{
        for (let i = (arraySize-1)/2 + 1; i < arraySize; i++){
            newArray[i] = newArray[i]/2
        }
    }
    return calculateArraySum(newArray);
}

checkOutBtn.onclick = () => {
    alert("Order have been recieved")
}


