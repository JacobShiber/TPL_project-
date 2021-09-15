function addItem (img, name, description, price){
    cartItems.unshift({img, name, description, price});
    cartItems.updatePrice(price); // todo : if we do sales check for sales before updatePrice
}
