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
name:"🥑 Big Buns Fresh Bite",
price:239,
desc:"Mozzarella, avokádo, pesto, citron mayo.",
img:"https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1200"
},

{
name:"💢⚡ Double Trouble",
price:287,
desc:"2×150g chuck roll, niva, BBQ mayo.",
img:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1200"
},

{
name:"🍔 Buns & Bacon Deluxe",
price:275,
desc:"Brie, dvojitá slanina, BBQ, onion rings.",
img:"https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=1200"
},

{
name:"⚫ BLACK EMBER",
price:275,
desc:"Double smash, smoked cheese, bacon.",
img:"https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1200"
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
name:"🧇 Bramborové mřížky",
price:71,
desc:"Extra crispy potato waffles.",
img:"https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1200"
},

{
name:"🧅 Onion Rings",
price:95,
desc:"Pivní těstíčko.",
img:"https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=1200"
},

{
name:"🧀 Mozzarella Sticks",
price:95,
desc:"5 ks mozzarella sticks.",
img:"https://images.unsplash.com/photo-1548340748-6d2b7d7da280?q=80&w=1200"
},

{
name:"🧀 Camembert Bites",
price:95,
desc:"5 ks camembert bites.",
img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200"
}

],

drinks:[

{
name:"🥤 Coca-Cola",
price:42,
desc:"0.33l",
img:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=1200"
},

{
name:"🥤 Coca-Cola Zero",
price:42,
desc:"0.33l",
img:"https://images.unsplash.com/photo-1581636625402-29b2a704ef13?q=80&w=1200"
},

{
name:"🥤 Coca-Cola Cherry",
price:42,
desc:"0.33l",
img:"https://images.unsplash.com/photo-1605548230624-8d2d0419c517?q=80&w=1200"
},

{
name:"🥤 Sprite",
price:42,
desc:"0.33l",
img:"https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=1200"
},

{
name:"🥤 Fanta",
price:42,
desc:"0.33l",
img:"https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=1200"
},

{
name:"🥤 Pepsi Zero Cherry",
price:42,
desc:"0.33l",
img:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200"
}

],

dips:[

{
name:"🥣 Garlic Dip",
price:36,
desc:"Jogurtovo česnekový dip.",
img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200"
},

{
name:"🌶️ Sriracha Mayo",
price:36,
desc:"Domácí sriracha mayo.",
img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200"
},

{
name:"🤍 Classic Mayo",
price:36,
desc:"Klasická majonéza.",
img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200"
},

{
name:"🍯 Honey Mustard",
price:36,
desc:"Medovo hořčičná omáčka.",
img:"https://images.unsplash.com/photo-1472476443507-c7a5948772fc?q=80&w=1200"
},

{
name:"🍋 Lemon Pepper Mayo",
price:36,
desc:"Citronovo pepřová mayo.",
img:"https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1200"
},

{
name:"🍖 BBQ Sauce",
price:36,
desc:"Domácí BBQ omáčka.",
img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1200"
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

const checkoutBtn =
document.getElementById("checkoutBtn");

if(checkoutBtn){

checkoutBtn.onclick=()=>{

localStorage.setItem(
"bigbuns-cart",
JSON.stringify(cart)
);

location.href=
"checkout.html";

};

}