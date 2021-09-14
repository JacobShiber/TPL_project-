const categoriesLinks = ["hats", "streetwear", "kicks", "giftshop"];

const newDropSection = [
    {
        name : "NEW YORK YANKEES",
        description : "NEW YORK YANKEES WORLD SERIES SIDE PATCH 59FIFTY FITTED",
        price : 41.99, 
        image1 : "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjU3Mzk2fGltYWdlL3BuZ3xoNzkvaGEyLzk3NTYyMjg4MTI4MzB8ZTFmMzM5MzJlMzUzNDZjZTZkYTRjZTAwMTZiZWY5MGRiZmYxZTc0MmQ2YjhjYWYzNmYzMjlmOTNiNGMwZTA2Mg",
        image2 : "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjQ3NjYwfGltYWdlL3BuZ3xoOWEvaDk1Lzk3NTYyMjg0ODUxNTB8OWNkMTFkZDUwM2RkNTBmNzIxOTBlYjMyZjFiODc5YjdlMTE2MWQyZjRhM2Y0MTRmNTNhZTAxYTNiYjJmODc1Nw"
    },
    {
        name : "BALTIMORE ORIOLES",
        description : "BALTIMORE ORIOLES SWIRL 59FIFTY FITTED WITH NO SIDE PATCH",
        price : 45.99, 
        image1 : "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjQwNDk5fGltYWdlL3BuZ3xoMDgvaDQyLzk5MzczOTE2NDg3OTh8MjZlMDU2ZDZkNTEwMjM1ZjhjNDNhZjYyNTdkNmRiMWJkNjU3M2ViZTY5NjAxMDllNTBjYTZmYzgwNjEwNmIwYw",
        image2 : "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjIwMjY3fGltYWdlL3BuZ3xoM2EvaDM4Lzk5MzczOTEzODY2NTR8MDVkNTkyMGJiMDYxZGVjMTVkMmEzNzhmYjQ3NzIyZWU4Y2QxY2FkZDRkZmE1ZGVkOWVjNjEyZGVjOTNiNWFkYQ"
    },
    {
        name : "FLORIDA MARLINS",
        description : "FLORIDA MARLINS DRIP 59FIFTY FITTED WITH SIDE PATCH",
        price : 41.99, 
        image1 : "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjMwODQzfGltYWdlL3BuZ3xoMzIvaDViLzk5MzI5MzA0NDk0Mzh8ODQ2NzQ4MjU1NDg1Mzc3MmQ3NjEzMTExMDA0YWY3M2YyMzY0YTgwMzQ2ZjcwMzFkYmQ2ZmMwNGE1N2IzZTkxNg",
        image2 : "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjI0MTM1fGltYWdlL3BuZ3xoNjQvaDUxLzk5MzI5MzAxODcyOTR8ODdjMDY2MjVlNGNmY2MyM2ZlZWIxNGIyOGE1OWJkMTQ1MDZmOGM2ZGIwZWM3MGY2OGVjMDE3ZmE0MGY1ZjkzNQ"
    },
    {
        name : `DETROIT<br>TIGERS`,
        description : "DETROIT TIGERS TEAM DRIP 59FIFTY FITTED WITH SIDE PATCH",
        price : 41.99, 
        image1 : "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjI5MzgzfGltYWdlL3BuZ3xoMDQvaDVmLzk5MzI5MzA1ODA1MTB8NDA0MmY2YjQzMDNiY2FlODdmMTUyODU3YmM1ZjVlMTkwNjhjMTUzMDQ5Y2Y2NGNmMWQ4Yzg5YjBlMDNhMmU4MQ",
        image2 : "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjEyMjM3fGltYWdlL3BuZ3xoZDIvaDY4Lzk5MzI5MzA4NDI2NTR8NTQyYTM3YmJkOGQ5MzdhM2VmNzdjZjA5MzgzN2I2ZGZmZGQzNzI0YjlhNzEyNTI3ZTA0MjUyNzM3N2Q1MjliYw"
    },
    {
        name : "Supreme®/New York",
        description : "Water resistant Supplex® nylon taslan ",
        price : 269.99, 
        image1 : "https://assets.supremenewyork.com/216911/ma/MAgCHlH8IyM.jpg",
        image2 : "https://assets.supremenewyork.com/216915/ma/ukLjT8LmwGU.jpg"
    },
    {
        name : "Vlone x Tupac",
        description : "Vlone x Tupac Rebel Of The Underground Sweatshirt ",
        price : 189.99, 
        image1 : "https://vlone.llc/wp-content/uploads/2021/09/Vlone-x-Tupac-Rebel-Of-The-Underground-Hoodie-Black-Front-937x937.jpg",
        image2 : "https://vlone.llc/wp-content/uploads/2021/09/Vlone-x-Tupac-Rebel-Of-The-Underground-Hoodie-Black-Back-937x937.jpg"
    },
    {
        name : "VLONE Friends",
        description : "VLONE Friends Scissors Black Tee, the vision of harlem",
        price : 179.99, 
        image1 : "https://vlone.llc/wp-content/uploads/2021/08/VLONE-Friends-Scissors-Tee-Black-Front-937x937.jpg",
        image2 : "https://vlone.llc/wp-content/uploads/2021/08/VLONE-Friends-Scissors-Tee-Black-Back-937x937.jpg"
    },
    {
        name : "Glo Gang",
        description : "BELIEVE HOLDING HEART HOODIE (BLACK), glory boys entertainment",
        price : 64.99, 
        image1 : "https://cdn.shopify.com/s/files/1/0763/6569/products/GLOGANG05-19-210117_720x.jpg?v=1621534425",
        image2 : "https://cdn.shopify.com/s/files/1/0763/6569/products/GLOGANG05-19-210121_720x.jpg?v=1621534426"
    },
];
const mostPopularSection = [];
