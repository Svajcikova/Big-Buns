const menu = {

burgers:[

{
name:"🥓 Buns & Bacon",
price:203,
desc:"Chuck roll, slanina, cheddar, rajče, salát.",
img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200"
},

{
name:"🔥 Big Buns Inferno",
price:203,
desc:"Cheddar, jalapeño, sriracha mayo.",
img:"https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200"
},

{
name:"🌱 Green Beast",
price:191,
desc:"Halloumi, pesto, garlic dressing.",
img:"https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1200"
}

],

premium:[

{
name:"🥑 Fresh Bite",
price:239,
desc:"Mozzarella, avokádo, pesto.",
img:"https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1200"
},

{
name:"💢 Double Trouble",
price:287,
desc:"2×150g chuck roll, BBQ mayo, niva.",
img:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1200"
},

{
name:"⚫ BLACK EMBER",
price:275,
desc:"Double smash, smoked cheese, bacon.",
img:"https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=1200"
}

],

sides:[

{
name:"🍟 Hranolky",
price:71,
desc:"Křupavé hranolky.",
img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1200"
},

{
name:"🧇 Mřížky",
price:71,
desc:"Bramborové mřížky.",
img:"https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1200"
}

],

drinks:[

{
name:"🥤 Coca Cola",
price:42,
desc:"0.33l",
img:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=1200"
},

{
name:"🥤 Sprite",
price:42,
desc:"0.33l",
img:"https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=1200"
}

],

dips:[

{
name:"🥣 Garlic Dip",
price:36,
desc:"Domácí česnekový dip.",
img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200"
},

{
name:"🌶️ Sriracha Mayo",
price:36,
desc:"Domácí sriracha mayo.",
img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200"
}

]

};

/* CART */

let cart = [];

/* RENDER */

function renderCategory(category,event){

if(event){

document
.querySelectorAll(".tab")
.forEach(tab=>{

tab.classList.remove("active");

});

event.target.classList.add("active");

}

const grid =
document.getElementById("menu-grid");

grid.innerHTML = "";

menu[category].forEach(item=>{

grid.innerHTML += `

<div class="product-card">

<img src="${item.img}">

<div class="product-content">

<h3>
${item.name}
</h3>

<p>
${item.desc}
</p>

<div class="product-bottom">

<div class="price">

${item.price} Kč

</div>

<button
onclick="addToCart('${item.name}', ${item.price})">

+

</button>

</div>

</div>

</div>

`;

});

}

/* ADD TO CART */

function addToCart(name,price){

cart.push({
name,
price
});

updateCart();

}

/* UPDATE CART */

function updateCart(){

const cartItems =
document.getElementById("cart-items");

const cartTotal =
document.getElementById("cart-total");

const floatingTotal =
document.getElementById("floating-total");

const count =
document.getElementById("cart-count");

const floatingCount =
document.getElementById("floating-count");

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `

<div class="cart-item">

<div>

<h4>
${item.name}
</h4>

<p>
${item.price} Kč
</p>

</div>

<button
onclick="removeItem(${index})">

✕

</button>

</div>

`;

});

cartTotal.innerText =
total + " Kč";

floatingTotal.innerText =
total + " Kč";

count.innerText =
cart.length;

floatingCount.innerText =
cart.length;

}

/* REMOVE */

function removeItem(index){

cart.splice(index,1);

updateCart();

}

/* TOGGLE CART */

function toggleCart(){

document
.getElementById("cart-panel")
.classList
.toggle("active");

}

/* START */

renderCategory("burgers");