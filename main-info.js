const categoriesLinks = ["all", "hats", "streetwear", "kicks", "giftshop"];
const linksHref = ["./all_page.html", "./hats_page.html", "./streetwear_page.html", "./kicks_page.html", "./giftshop_page.html"]

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
        quantity: "1",
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
        quantity : "1",
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
        quantity: "1",
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
        quantity: "1",
        sub_category: "fitted",
        id: "4"
    },
];

const allItems = [
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
    {
        name: `Air Jordan 4`,
        description: "Air Jordan 4 Red Metallic retro.",
        price: 499.99,
        image1: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/cbbd92db-b786-42ba-a2b6-c3815169f818/air-jordan-4-red-metallic-release-date.jpg",
        image2: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/5321035c-69d2-43ac-86e8-ace950f7ccd1/air-jordan-4-red-metallic-release-date.jpg",
        category: "kicks",
        sub_category: "nike",
        id: "9"
    },
    {
        name: `Air Force 1`,
        description: "Classic, Iconic Look And Craftsmanship.",
        price: 99.99,
        image1: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e4a3fabb-5cda-46cd-9a12-4f9cc3840ab5/air-force-1-07-shoe-Dz225W.png",
        image2: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f094af40-f82f-4fb9-a246-e031bf6fc411/air-force-1-07-shoe-Dz225W.png",
        category: "kicks",
        sub_category: "nike",
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
        name: `SAN FRANCISCO GIANTS`,
        description: "SAN FRANCISCO GIANTS CHAMPION 59FIFTY FITTED",
        price: 41.99,
        image1: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjIyMjU3fGltYWdlL3BuZ3xoYWUvaDU1Lzk5Mjc3NjIzMTMyNDZ8MmM0NDQyMDA3NDM1MDkyMjIwNzU2Y2JkZDNiNWQ5YjZhZGNkMTU3YzljYmE4ZTkxYjhlZWYwMzkyZDI2YmJlNQ",
        image2: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjEzMDI3fGltYWdlL3BuZ3xoYTIvaDQwLzk5Mjc3NjI5Njg2MDZ8ZTA3NTM2Yjk0NzNhNzkwMjc0ZDQyMjkzODc4ZjIzMzRlMGMxMmJiYmJkMjlmMTg2ZDQwNGY5YzM4YjIxZTI4NQ",
        category: "hats",
        sub_category: "fitted",
        id: "13"
    },
    {
        name: `CHICAGO WHITE SOX`,
        description: "CHICAGO WHITE SOX SUMMER POP 59FIFTY FITTED",
        price: 41.99,
        image1: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjMxNjc4fGltYWdlL3BuZ3xoZDcvaDcxLzk5MjYzMzQ2MTE0ODZ8OGI4YzU2NTRjNTUwNzk2YmZmNDRkYjM4YTk1Njc0YzM2MDBhOTczOTFjZmYzYzgyMDNmYWIzOGU3MzdmMjdlYQ",
        image2: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjQxNjczfGltYWdlL3BuZ3xoZTYvaDc3Lzk5MjYzMzQ0ODA0MTR8NjU1OWQ5N2VlMjAzODhhMjAzNjQyNjZkZTk5M2YwMWMzMzJhNTUwMzRkOTBhOGM5NmZhNWIzOTk2OTFjZTg5Zg",
        category: "hats",
        sub_category: "fitted",
        id: "14"
    },
    {
        name: `DETROIT TIGERS`,
        description: "DETROIT TIGERS LIGATURE 9TWENTY ADJUSTABLE",
        price: 25.99,
        image1: "https://neweracap.widen.net/content/u9lklb5cp7/png/60113551_9TWENTY_MLBLIGATURE_DETTIG_OTC_3QL.png?w=640&h=640&position=c&color=ffffffff&quality=80&u=eiggi3",
        image2: "https://neweracap.widen.net/content/5tbbcvo2wv/png/60113551_9TWENTY_MLBLIGATURE_DETTIG_OTC_R.png?w=640&h=640&position=c&color=ffffffff&quality=80&u=eiggi3",
        category: "hats",
        sub_category: "snapback",
        id: "15"
    },
    {
        name: `NEW YORK YANKEES`,
        description: "NEW YORK YANKEES LIGATURE 9TWENTY ADJUSTABLE",
        price: 25.99,
        image1: "https://neweracap.widen.net/content/vquwpalwyu/png/60113545_9TWENTY_MLBLIGATURE_NEYYAN_OTC_3QL.png?w=640&h=640&position=c&color=ffffffff&quality=80&u=eiggi3",
        image2: "https://neweracap.widen.net/content/rydxu8bcm9/png/60113545_9TWENTY_MLBLIGATURE_NEYYAN_OTC_R.png?w=640&h=640&position=c&color=ffffffff&quality=80&u=eiggi3",
        category: "hats",
        sub_category: "snapback",
        id: "16"
    },
    {
        name: `LOS ANGELES DODGERS`,
        description: "LOS ANGELES DODGERS LIGATURE 9TWENTY ADJUSTABLE",
        price: 25.99,
        image1: "https://neweracap.widen.net/content/y0tttznn6v/png/60113543_9TWENTY_MLBLIGATURE_LOSDOD_OTC_3QL.png?w=640&h=640&position=c&color=ffffffff&quality=80&u=eiggi3",
        image2: "https://neweracap.widen.net/content/5jahi5p2q4/png/60113543_9TWENTY_MLBLIGATURE_LOSDOD_OTC_R.png?w=640&h=640&position=c&color=ffffffff&quality=80&u=eiggi3",
        category: "hats",
        sub_category: "snapback",
        id: "17"
    },
    {
        name: `CHICAGO WHITE SOX`,
        description: "CHICAGO WHITE SOX LIGATURE 9TWENTY ADJUSTABLE",
        price: 25.99,
        image1: "https://neweracap.widen.net/content/1ycpns1a86/png/60113539_9TWENTY_MLBLIGATURE_CHIWHI_OTC_3QL.png?w=640&h=640&position=c&color=ffffffff&quality=80&u=eiggi3",
        image2: "https://neweracap.widen.net/content/srmkpzfrwa/png/60113539_9TWENTY_MLBLIGATURE_CHIWHI_OTC_R.png?w=640&h=640&position=c&color=ffffffff&quality=80&u=eiggi3",
        category: "hats",
        sub_category: "snapback",
        id: "18"
    },
    {
        name: `BOSTON RED SOX`,
        description: "BOSTON RED SOX LIGATURE 9TWENTY ADJUSTABLE",
        price: 25.99,
        image1: "https://neweracap.widen.net/content/4tc6l18gwq/png/60113534_9TWENTY_MLBLIGATURE_BOSRED_OTC_3QL.png?w=640&h=640&position=c&color=ffffffff&quality=80&u=eiggi3",
        image2: "https://neweracap.widen.net/content/it2hycblp9/png/60113534_9TWENTY_MLBLIGATURE_BOSRED_OTC_R.png?w=640&h=640&position=c&color=ffffffff&quality=80&u=eiggi3",
        category: "hats",
        sub_category: "snapback",
        id: "19"
    },
    {
        name: `SAN FRANCISCO GIANTS`,
        description: "SAN FRANCISCO GIANTS SUMMER POP 59FIFTY FITTED",
        price: 41.99,
        image1: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjMyMTk1fGltYWdlL3BuZ3xoM2MvaGViLzk5MjYzMTI0NjAzMTh8MjAyMzEzMzkzOGYwMjhmOTRlN2NmNGNmYjU0Y2EyMTkxZmMyNzY1YzZjOTMxZjk5ZGRmODYxMjA3ODQwNjE4Yw",
        image2: "https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjIzMTAyfGltYWdlL3BuZ3xoOGIvaGY5Lzk5MjYzMTIwMDE1NjZ8Zjc1NmYyMThjOGU5MTc1ZGM2YTk1YTAyY2M0MzExZjViYTkzYzRhMjI2MjFkMjY1OTNjZDViMjAxMDhjZTVjYQ",
        category: "hats",
        sub_category: "fitted",
        id: "20"
    },
    {
        name: "Supreme Hooded",
        description: "Water resistant Supplex® nylon ripstop with jacquard logo pattern",
        price: 269.99,
        image1: "https://assets.supremenewyork.com/216902/ma/sKsPTlH8j7E.jpg",
        image2: "https://assets.supremenewyork.com/216899/ma/P2gzV4sT634.jpg",
        category: "streetwear",
        sub_category: "winter",
        id: "21"
    },
    {
        name: "Supreme Hooded",
        description: "All cotton velvet with 3M® Thinsulate™ insulation",
        price: 299.99,
        image1: "https://assets.supremenewyork.com/217000/ma/ssRkwek6X_M.jpg",
        image2: "https://assets.supremenewyork.com/216992/ma/EVdi2mmLzlc.jpg",
        category: "streetwear",
        sub_category: "winter",
        id: "22"
    },
    {
        name: "Supreme Zip Up",
        description: "Cotton fleece with full zip closure and on seam hand pockets at lower front",
        price: 269.99,
        image1: "https://assets.supremenewyork.com/219148/ma/BD0MuqLQzK8.jpg",
        image2: "https://assets.supremenewyork.com/219144/ma/ByQ7VAtOB4o.jpg",
        category: "streetwear",
        sub_category: "winter",
        id: "23"
    },
    {
        name: "Supreme/The Crow Raglan",
        description: "All cotton jersey crewneck with printed graphic on front",
        price: 149.99,
        image1: "https://assets.supremenewyork.com/218130/ma/NteKb-gz1Ec.jpg",
        image2: "https://assets.supremenewyork.com/218129/ma/TMxWjRQAwuw.jpg",
        category: "streetwear",
        sub_category: "winter",
        id: "24"
    },
    {
        name: "Supreme Hooded",
        description: "Heavyweight cotton crossgrain fleece with pouch pocket",
        price: 269.99,
        image1: "https://assets.supremenewyork.com/219166/ma/4oSTo32YThs.jpg",
        image2: "https://assets.supremenewyork.com/219168/ma/ZvWP91m8DVs.jpg",
        category: "streetwear",
        sub_category: "winter",
        id: "25"
    },
    {
        name: "Glo Gang",
        description: "FAMILY LOVE TEE (CARDINAL)",
        price: 37.99,
        image1: "https://cdn.shopify.com/s/files/1/0763/6569/products/SKIIIIWW01_720x.png?v=1628896789",
        image2: "https://cdn.shopify.com/s/files/1/0763/6569/products/SKIIIIWW03_720x.png?v=1628896789",
        category: "streetwear",
        sub_category: "summer",
        id: "26"
    },
    {
        name: "Glo Gang",
        description: "GANG LOVE TEE (BLACK)",
        price: 37.99,
        image1: "https://cdn.shopify.com/s/files/1/0763/6569/products/GG-COLLECTION-8-13-2109_720x.png?v=1628896846",
        image2: "https://cdn.shopify.com/s/files/1/0763/6569/products/GG-COLLECTION-8-13-2110_528cdba0-bf96-4299-a330-527e0ad0f63e_720x.png?v=1628896847",
        category: "streetwear",
        sub_category: "summer",
        id: "27"
    },
    {
        name: "Glo Gang",
        description: "LOVE NO THOTTIE HEART TEE (BLACK)",
        price: 37.99,
        image1: "https://cdn.shopify.com/s/files/1/0763/6569/products/GG-COLLECTION-8-13-2114_720x.png?v=1628897148",
        image2: "https://cdn.shopify.com/s/files/1/0763/6569/products/GG-COLLECTION-8-13-2110_a290026c-2f5d-4e08-a7cb-a2bfc4ef8951_720x.png?v=1628897148",
        category: "streetwear",
        sub_category: "summer",
        id: "28"
    },
    {
        name: "Glo Gang",
        description: "GLORY DAY LONG SLEEVE (BLACK)",
        price: 44.99,
        image1: "https://cdn.shopify.com/s/files/1/0763/6569/products/GLOGANG-GLORY06_720x.jpg?v=1621290824",
        image2: "https://cdn.shopify.com/s/files/1/0763/6569/products/GLOGANG-GLORY08_720x.jpg?v=1621290836",
        category: "streetwear",
        sub_category: "winter",
        id: "29"
    },
    {
        name: "Glo Gang",
        description: "GLORY U STARS + STRIPES TEE (WHITE)",
        price: 37.99,
        image1: "https://cdn.shopify.com/s/files/1/0763/6569/products/R---07_copy_720x.jpg?v=1561077519",
        image2: "https://cdn.shopify.com/s/files/1/0763/6569/products/R---08_copy_720x.jpg?v=1561077524",
        category: "streetwear",
        sub_category: "summer",
        id: "30"
    },
    {
        name: `Air Huarache`,
        description: "Born at the inventive hands of Tinker Hatfield, the Air Huarache redefined streamlined performance upon its debut in 1991.",
        price: 180.50,
        image1: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/845a9194-cf0c-44fb-8a5c-9815449d04e5/air-huarache-toadstool-release-date.jpg",
        image2: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/1892fba7-8fcb-4020-8faa-11a92b4a539f/air-huarache-toadstool-release-date.jpg",
        category: "kicks",
        sub_category: "nike",
        id: "31"
    },
    {
        name: `Air Jordan 5`,
        description: "Featuring hues that are perfect for autumn, the Air Jordan 5 'Orange Blaze' is ready to light up those crisp nights.",
        price: 261.50,
        image1: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/a5a8ffb8-2adc-4328-9d61-ed84c02d5a56/air-jordan-5-orange-blaze-release-date.jpg",
        image2: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/4fe20379-3bb3-4cf9-9c5c-81df7a8058dc/air-jordan-5-orange-blaze-release-date.jpg",
        category: "kicks",
        sub_category: "nike",
        id: "32"
    },
    {
        name: `Air Jordan 13`,
        description: "The Air Jordan 13 first hit shelves in November 1997 as MJ rocked the singular silhouette in pursuit of his sixth world title.",
        price: 249.99,
        image1: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/dec7b822-a372-4ed4-8d04-5592cfb8c3e6/air-jordan-13-obsidian-release-date.jpg",
        image2: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/20051a22-39b3-4209-94bf-f701b46380db/air-jordan-13-obsidian-release-date.jpg",
        category: "kicks",
        sub_category: "nike",
        id: "33"
    },
    {
        name: `Air Jordan 5`,
        description: "Wear these by night and you'll be in stealth mode, but if you're revealed by the moonlit sky? Your kicks will match what you see above.",
        price: 249.99,
        image1: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/85f011a7-ab94-43d1-ae0d-b72d6036701d/air-jordan-5-moonlight-release-date.jpg",
        image2: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/9466aad5-0e40-4f69-83d6-c3e09cd80e1a/air-jordan-5-moonlight-release-date.jpg",
        category: "kicks",
        sub_category: "nike",
        id: "34"
    },
    {
        name: `Air Force 1`,
        description: "Through the '90s, 2000s and beyond, the Air Force 1 has long been a canvas for expression through colour and materials.",
        price: 164.99,
        image1: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ac304670-acf2-4ffa-a493-5c74340d1c28/air-force-1-x-undefeated-5-on-it-release-date.jpg",
        image2: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ba8b39de-0595-4f1f-9642-7c236db78eed/air-force-1-x-undefeated-5-on-it-release-date.jpg",
        category: "kicks",
        sub_category: "nike",
        id: "35"
    },
    {
        name: `CLIMACOOL VENTO`,
        description: "This product is made with Primegreen, a series of high-performance recycled materials. 50% of the upper is recycled content.",
        price: 139.99,
        image1: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6309289024994a168599ac3c007b667f_9366/Climacool_Vento_Shoes_White_H67642_01_standard.jpg",
        image2: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/42c30b0639a64d9bb993ac3c007b7ee3_9366/Climacool_Vento_Shoes_White_H67642_04_standard.jpg",
        category: "kicks",
        sub_category: "adidas",
        id: "36"
    },
    {
        name: `FORUM LOW`,
        description: "More than just a shoe, it's a statement. The adidas Forum hit the scene in '84 and gained major love on both the hardwood and in the music biz.",
        price: 89.99,
        image1: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Forum_Low_Shoes_White_FY7756_01_standard.jpg",
        image2: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f0924c964ace43c78dd1ac5e00377f5e_9366/Forum_Low_Shoes_White_FY7756_04_standard.jpg",
        category: "kicks",
        sub_category: "adidas",
        id: "37"
    },
    {
        name: `NMD_R1 V2`,
        description: "When the day's agenda involves city exploration, non-stop action or simply following your curiosity, you'll want these adidas shoes on your feet. ",
        price: 139.99,
        image1: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3d09d036bb3c442d8ed5ad4f011e4af7_9366/NMD_R1_V2_Shoes_White_GZ6550_01_standard.jpg",
        image2: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f1dd427a40474471b557ad4f011e6442_9366/NMD_R1_V2_Shoes_White_GZ6550_04_standard.jpg",
        category: "kicks",
        sub_category: "adidas",
        id: "38"
    },
    {
        name: `COURT RALLYE SLIP`,
        description: "Nothing says low-key like a slip-on. Clean, simple and packed with adidas Skateboarding DNA, these Court Rallye shoes are everything you need and nothing you don't.",
        price: 54.99,
        image1: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7a1bcc4c309b48a39786ac5d0001983c_9366/Court_Rallye_Slip_Shoes_Black_FY4551_01_standard.jpg",
        image2: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2c2473e82b854fcf808aac5d00037397_9366/Court_Rallye_Slip_Shoes_Black_FY4551_04_standard.jpg",
        category: "kicks",
        sub_category: "adidas",
        id: "39"
    },
    {
        name: `FORUM EXHIBIT LOW`,
        description: "You don't break the rules — you create them. As you dare to step outside the box, these adidas shoes accent every stride with that same boldness.",
        price: 99.99,
        image1: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/be3437363ea64fc99849ad170104839e_9366/Forum_Exhibit_Low_Shoes_White_H01914_01_standard.jpg",
        image2: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/aa55842da89c4f359c6bad17010302da_9366/Forum_Exhibit_Low_Shoes_White_H01914_04_standard.jpg",
        category: "kicks",
        sub_category: "adidas",
        id: "40"
    },
    {
        name: `OVO X KUUMBA CANDLE`,
        description: "OCTOBER LIGHT SCENT MATTE COATED GLASS  WAX SCENTED CANDLE 33 HOUR BURN TIME",
        price: 67.99,
        image1: "https://cdn.shopify.com/s/files/1/0973/7782/products/ovo-x-kuumba-candle-2_2048x2048.jpg?v=1614908004",
        image2: "https://cdn.shopify.com/s/files/1/0973/7782/products/ovo-x-kuumba-candle-tbd-1_2048x2048.jpg?v=1614908004",
        category: "giftshop",
        sub_category: "candle",
        id: "41"
    },
    {
        name: `OVO x KLEAN KANTEEN`,
        description: "20 OZ 100% STAINLESS STEEL LEAKPROOF, DISHWASHER SAFE ATTACHMENT LOOP ON CAP OWL LOGO FRONT",
        price: 37.99,
        image1: "https://cdn.shopify.com/s/files/1/0973/7782/products/ovo-x-klean-kanteen-owl-water-bottle-black-gold-1_2048x2048.jpg?v=1603475433",
        image2: "https://cdn.shopify.com/s/files/1/0973/7782/products/ovo-x-klean-kanteen-owl-water-bottle-black-gold-2_2048x2048.jpg?v=1603475433",
        category: "giftshop",
        sub_category: "accecories",
        id: "42"
    },
    {
        name: `OVO X AVANTI TOTE BAG`,
        description: "300 GSM 100% POLYESTER GRAPHIC PRINT FRONT INTERIOR ZIPPERED POCKET",
        price: 47.99,
        image1: "https://cdn.shopify.com/s/files/1/0973/7782/products/avanti-tote-bag-eden-1_2048x2048.jpg?v=1628207164",
        image2: "https://cdn.shopify.com/s/files/1/0973/7782/products/avanti-tote-bag-goldenrod-1_2048x2048.jpg?v=1628207167",
        category: "giftshop",
        sub_category: "accecories",
        id: "43"
    },
    {
        name: `GLO SUN PLUSH KEYCHAIN`,
        description: "Mini plush keychain with a back pouch",
        price: 28.99,
        image1: "https://cdn.shopify.com/s/files/1/0763/6569/products/GLOGANG-003_720x.jpg?v=1579113650",
        image2: "https://cdn.shopify.com/s/files/1/0763/6569/products/GLOGANG-004_720x.jpg?v=1579113650",
        category: "giftshop",
        sub_category: "accecories",
        id: "44"
    },
    {
        name: `RALPH THE GLO MAN`,
        description: "RALPH THE GLO MAN PLUSH",
        price: 84.99,
        image1: "https://cdn.shopify.com/s/files/1/0763/6569/products/GGP-002_720x.jpg?v=1573071370",
        image2: "https://cdn.shopify.com/s/files/1/0763/6569/products/GGP-003_720x.jpg?v=1573071370",
        category: "giftshop",
        sub_category: "accecories",
        id: "45"
    },
    {
        name: `GLO GANG FONT KEY CHAIN`,
        description: "GLO GANG FONT KEY CHAIN",
        price: 14.99,
        image1: "https://cdn.shopify.com/s/files/1/0763/6569/products/GGS05_720x.jpg?v=1537305050",
        image2: "https://cdn.shopify.com/s/files/1/0763/6569/products/GGS06_720x.jpg?v=1537305052",
        category: "giftshop",
        sub_category: "accecories",
        id: "46"
    },
    {
        name: `A BATHING APE®`,
        description: "A BATHING APE® ABC Camo Soccer ball",
        price: 217.99,
        image1: "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXACM182022HGRX/0ZXACM182022HGRX-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
        image2: "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXACM182022HGRX/0ZXACM182022HGRX-pdp-2.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
        category: "giftshop",
        sub_category: "accecories",
        id: "47"
    },
    {
        name: `A BATHING APE®`,
        description: "Baby Milo Plush keychain",
        price: 34.99,
        image1: "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0MXACM4055XXGRDX/0MXACM4055XXGRDX-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
        image2: "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0MXACM4055XXGRDX/0MXACM4055XXGRDX-pdp-2.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
        category: "giftshop",
        sub_category: "accecories",
        id: "48"
    },
    {
        name: `A BATHING APE®`,
        description: "X Coach Baby Milo Plush doll",
        price: 725.99,
        image1: "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXBCM31903CHNYX/0ZXBCM31903CHNYX-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
        image2: "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXBCM31903CHNYX/0ZXBCM31903CHNYX-pdp-2.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
        category: "giftshop",
        sub_category: "accecories",
        id: "49"
    },
    {
        name: `A BATHING APE®`,
        description: "Bape Rubber keychain",
        price: 21.99,
        image1: "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXACM182190GBLX/0ZXACM182190GBLX-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
        image2: "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXACM182190GBLX/0ZXACM182190GBLX-pdp-2.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
        category: "giftshop",
        sub_category: "accecories",
        id: "50"
    },
];


