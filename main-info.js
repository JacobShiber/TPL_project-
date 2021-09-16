const categoriesLinks = ["all", "hats", "streetwear", "kicks", "giftshop"];

const newDropSection = [
    {
        name: "NEW YORK YANKEES",
        description: "NEW YORK YANKEES WORLD SERIES SIDE PATCH 59FIFTY FITTED",
        price: 41.99,
        image1: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjU3Mzk2fGltYWdlL3BuZ3xoNzkvaGEyLzk3NTYyMjg4MTI4MzB8ZTFmMzM5MzJlMzUzNDZjZTZkYTRjZTAwMTZiZWY5MGRiZmYxZTc0MmQ2YjhjYWYzNmYzMjlmOTNiNGMwZTA2Mg",
        image2: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjQ3NjYwfGltYWdlL3BuZ3xoOWEvaDk1Lzk3NTYyMjg0ODUxNTB8OWNkMTFkZDUwM2RkNTBmNzIxOTBlYjMyZjFiODc5YjdlMTE2MWQyZjRhM2Y0MTRmNTNhZTAxYTNiYjJmODc1Nw",
        category: "hats",
        sub_category: "fitted",
        id: "1"
    },
    {
        name: "BALTIMORE ORIOLES",
        description: "BALTIMORE ORIOLES SWIRL 59FIFTY FITTED WITH NO SIDE PATCH",
        price: 45.99,
        image1: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjQwNDk5fGltYWdlL3BuZ3xoMDgvaDQyLzk5MzczOTE2NDg3OTh8MjZlMDU2ZDZkNTEwMjM1ZjhjNDNhZjYyNTdkNmRiMWJkNjU3M2ViZTY5NjAxMDllNTBjYTZmYzgwNjEwNmIwYw",
        image2: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjIwMjY3fGltYWdlL3BuZ3xoM2EvaDM4Lzk5MzczOTEzODY2NTR8MDVkNTkyMGJiMDYxZGVjMTVkMmEzNzhmYjQ3NzIyZWU4Y2QxY2FkZDRkZmE1ZGVkOWVjNjEyZGVjOTNiNWFkYQ",
        category: "hats",
        sub_category: "fitted",
        id: "2"
    },
    {
        name: "FLORIDA MARLINS",
        description: "FLORIDA MARLINS DRIP 59FIFTY FITTED WITH SIDE PATCH",
        price: 41.99,
        image1: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjMwODQzfGltYWdlL3BuZ3xoMzIvaDViLzk5MzI5MzA0NDk0Mzh8ODQ2NzQ4MjU1NDg1Mzc3MmQ3NjEzMTExMDA0YWY3M2YyMzY0YTgwMzQ2ZjcwMzFkYmQ2ZmMwNGE1N2IzZTkxNg",
        image2: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjI0MTM1fGltYWdlL3BuZ3xoNjQvaDUxLzk5MzI5MzAxODcyOTR8ODdjMDY2MjVlNGNmY2MyM2ZlZWIxNGIyOGE1OWJkMTQ1MDZmOGM2ZGIwZWM3MGY2OGVjMDE3ZmE0MGY1ZjkzNQ",
        category: "hats",
        sub_category: "fitted",
        id: "3"
    },
    {
        name: `DETROIT<br>TIGERS`,
        description: "DETROIT TIGERS TEAM DRIP 59FIFTY FITTED WITH SIDE PATCH",
        price: 41.99,
        image1: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjI5MzgzfGltYWdlL3BuZ3xoMDQvaDVmLzk5MzI5MzA1ODA1MTB8NDA0MmY2YjQzMDNiY2FlODdmMTUyODU3YmM1ZjVlMTkwNjhjMTUzMDQ5Y2Y2NGNmMWQ4Yzg5YjBlMDNhMmU4MQ",
        image2: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjEyMjM3fGltYWdlL3BuZ3xoZDIvaDY4Lzk5MzI5MzA4NDI2NTR8NTQyYTM3YmJkOGQ5MzdhM2VmNzdjZjA5MzgzN2I2ZGZmZGQzNzI0YjlhNzEyNTI3ZTA0MjUyNzM3N2Q1MjliYw",
        category: "hats",
        sub_category: "fitted",
        id: "4"
    },
    {
        name: "Supreme®/New York",
        description: "Water resistant Supplex® nylon taslan ",
        price: 269.99,
        image1: "https://assets.supremenewyork.com/216911/ma/MAgCHlH8IyM.jpg",
        image2: "https://assets.supremenewyork.com/216915/ma/ukLjT8LmwGU.jpg",
        category: "streetwear",
        sub_category: "winter",
        id: "5"
    },
    {
        name: "Vlone x Tupac",
        description: "Vlone x Tupac Rebel Of The Underground Sweatshirt ",
        price: 189.99,
        image1: "https://vlone.llc/wp-content/uploads/2021/09/Vlone-x-Tupac-Rebel-Of-The-Underground-Hoodie-Black-Front-937x937.jpg",
        image2: "https://vlone.llc/wp-content/uploads/2021/09/Vlone-x-Tupac-Rebel-Of-The-Underground-Hoodie-Black-Back-937x937.jpg",
        category: "streetwear",
        sub_category: "winter",
        id: "6"
    },
    {
        name: "VLONE Friends",
        description: "VLONE Friends Scissors Black Tee, the vision of harlem",
        price: 179.99,
        image1: "https://vlone.llc/wp-content/uploads/2021/08/VLONE-Friends-Scissors-Tee-Black-Front-937x937.jpg",
        image2: "https://vlone.llc/wp-content/uploads/2021/08/VLONE-Friends-Scissors-Tee-Black-Back-937x937.jpg",
        category: "streetwear",
        sub_category: "summer",
        id: "7"
    },
    {
        name: "Glo Gang",
        description: "BELIEVE HOLDING HEART HOODIE (BLACK), glory boys entertainment",
        price: 64.99,
        image1: "https://cdn.shopify.com/s/files/1/0763/6569/products/GLOGANG05-19-210117_720x.jpg?v=1621534425",
        image2: "https://cdn.shopify.com/s/files/1/0763/6569/products/GLOGANG05-19-210121_720x.jpg?v=1621534426",
        category: "streetwear",
        sub_category: "winter",
        id: "8"
    },
];


const mostPopularSection = [
    {
        name: "Vlone x Tupac",
        description: "Vlone x Tupac Rebel Of The Underground Sweatshirt ",
        price: 189.99,
        image1: "https://vlone.llc/wp-content/uploads/2021/09/Vlone-x-Tupac-Rebel-Of-The-Underground-Hoodie-Black-Front-937x937.jpg",
        image2: "https://vlone.llc/wp-content/uploads/2021/09/Vlone-x-Tupac-Rebel-Of-The-Underground-Hoodie-Black-Back-937x937.jpg",
        category: "streetwear",
        sub_category: "winter",
        id: "6"
    },
    {
        name: `DETROIT TIGERS`,
        description: "DETROIT TIGERS TEAM DRIP 59FIFTY FITTED WITH SIDE PATCH",
        price: 41.99,
        image1: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjI5MzgzfGltYWdlL3BuZ3xoMDQvaDVmLzk5MzI5MzA1ODA1MTB8NDA0MmY2YjQzMDNiY2FlODdmMTUyODU3YmM1ZjVlMTkwNjhjMTUzMDQ5Y2Y2NGNmMWQ4Yzg5YjBlMDNhMmU4MQ",
        image2: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjEyMjM3fGltYWdlL3BuZ3xoZDIvaDY4Lzk5MzI5MzA4NDI2NTR8NTQyYTM3YmJkOGQ5MzdhM2VmNzdjZjA5MzgzN2I2ZGZmZGQzNzI0YjlhNzEyNTI3ZTA0MjUyNzM3N2Q1MjliYw",
        category: "hats",
        sub_category: "fitted",
        id: "4"
    },
    {
        name: `Air Jordan 4`,
        description: "Air Jordan 4 Red Metallic retro.",
        price: 499.99,
        image1: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/cbbd92db-b786-42ba-a2b6-c3815169f818/air-jordan-4-red-metallic-release-date.jpg",
        image2: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/5321035c-69d2-43ac-86e8-ace950f7ccd1/air-jordan-4-red-metallic-release-date.jpg",
        category: "kicks",
        sub_category: "sport",
        id: "9"
    },
    {
        name: `Nike Air Force 1`,
        description: "Classic, Iconic Look And Craftsmanship.",
        price: 99.99,
        image1: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e4a3fabb-5cda-46cd-9a12-4f9cc3840ab5/air-force-1-07-shoe-Dz225W.png",
        image2: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f094af40-f82f-4fb9-a246-e031bf6fc411/air-force-1-07-shoe-Dz225W.png",
        category: "kicks",
        sub_category: "sport",
        id: "10"
    },
    {
        name: `CAPO GLO VINYL`,
        description: "R.I.P Capo, a memorial specially designed",
        price: 149.99,
        image1: "https://cdn.shopify.com/s/files/1/0763/6569/products/MG_1042_720x.png?v=1631205459",
        image2: "https://cdn.shopify.com/s/files/1/0763/6569/products/MG_1044_720x.png?v=1631205459",
        category: "giftshop",
        sub_category: "toy",
        id: "11"
    },
    {
        name: `Vlone Tee`,
        description: "Vlone Roots Picnic Tee in green and black",
        price: 139.99,
        image1: "https://vlone.llc/wp-content/uploads/2021/07/root-f.jpg",
        image2: "https://vlone.llc/wp-content/uploads/2021/07/picnic-f.jpg",
        category: "streetwear",
        sub_category: "summer",
        id: "12"
    },
    {
        name: "Supreme®/New York",
        description: "Water resistant Supplex® nylon taslan ",
        price: 269.99,
        image1: "https://assets.supremenewyork.com/216911/ma/MAgCHlH8IyM.jpg",
        image2: "https://assets.supremenewyork.com/216915/ma/ukLjT8LmwGU.jpg",
        category: "streetwear",
        sub_category: "winter",
        id: "5"
    },
];


const cartItems = [
    {
        name: `Air Jordan 4`,
        description: "Red Metallic retro.",
        price: 499.99,
        image1: "https://cdn.kickscrew.com/media/catalog/product/cache/dd3ae58018643bb67b4bf8f0a77873b1/C/T/CT8527-112_Nike_Air_Jordan_4_Retro_Metallic_Red_White_a-L.jpg",
        image2: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/cbbd92db-b786-42ba-a2b6-c3815169f818/air-jordan-4-red-metallic-release-date.jpg",
        category: "kicks",
        sub_category: "sport",
        id: "9"
    },
    {
        name: `CAPO GLO VINYL`,
        description: "R.I.P Capo, a memorial <br> specially designed",
        price: 149.99,
        image1: "https://cdn.shopify.com/s/files/1/0763/6569/products/MG_1042_720x.png?v=1631205459",
        image2: "https://cdn.shopify.com/s/files/1/0763/6569/products/MG_1044_720x.png?v=1631205459",
        category: "giftshop",
        sub_category: "toy",
        id: "11"
    },
    {
        name: "Vlone x Tupac",
        description: "Vlone x Tupac Rebel <br> Of The Underground <br> Sweatshirt ",
        price: 189.99,
        image1: "https://vlone.llc/wp-content/uploads/2021/09/Vlone-x-Tupac-Rebel-Of-The-Underground-Hoodie-Black-Front-937x937.jpg",
        image2: "https://vlone.llc/wp-content/uploads/2021/09/Vlone-x-Tupac-Rebel-Of-The-Underground-Hoodie-Black-Back-937x937.jpg",
        category: "streetwear",
        sub_category: "winter",
        id: "6"
    },
    {
        name: `DETROIT TIGERS`,
        description: "TEAM DRIP 59FIFTY <br> FITTED WITH SIDE PATCH",
        price: 41.99,
        image1: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjI5MzgzfGltYWdlL3BuZ3xoMDQvaDVmLzk5MzI5MzA1ODA1MTB8NDA0MmY2YjQzMDNiY2FlODdmMTUyODU3YmM1ZjVlMTkwNjhjMTUzMDQ5Y2Y2NGNmMWQ4Yzg5YjBlMDNhMmU4MQ",
        image2: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjEyMjM3fGltYWdlL3BuZ3xoZDIvaDY4Lzk5MzI5MzA4NDI2NTR8NTQyYTM3YmJkOGQ5MzdhM2VmNzdjZjA5MzgzN2I2ZGZmZGQzNzI0YjlhNzEyNTI3ZTA0MjUyNzM3N2Q1MjliYw",
        category: "hats",
        sub_category: "fitted",
        id: "4"
    },
];
