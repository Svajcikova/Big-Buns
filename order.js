const products=[

{
id:1,
category:"burgers",
name:"Buns & Bacon",
price:203,
image:"../assets/bacon.jpg",
desc:"Chuck roll, slanina, cheddar, rajče, salát."
},

{
id:2,
category:"burgers",
name:"Big Buns Inferno",
price:203,
image:"../assets/inferno.jpg",
desc:"Cheddar, jalapeño, sriracha mayo."
},

{
id:3,
category:"premium",
name:"Double Trouble",
price:287,
image:"../assets/double.jpg",
desc:"2x150g chuck roll, niva, BBQ mayo."
},

{
id:4,
category:"premium",
name:"Black Ember",
price:275,
image:"../assets/ember.jpg",
desc:"Double smash, smoked cheese, bacon."
}

];

const grid=document.getElementById("products-grid");

const cartItems=document.getElementById("cart-items");

let cart=[];

function renderProducts(category){

grid.innerHTML="";

products
.filter(p=>p.category===category)
.forEach(product=>{

grid.innerHTML+=`

<div class="product-card">

<img src="${product.image}">

<div class="product-content">

<h3>
${product.name}
</h3>

<p>
${product.desc}
</p>

<div class="product-bottom">

<div class="price">
${product.price} Kč
</div>

<button class="add-btn"
onclick="addToCart(${product.id})">

+

</button>

</div>

</div>

</div>

`;

});

}

function filterProducts(category){

document
.querySelectorAll(".tabs button")
.forEach(btn=>btn.classList.remove("active"));

event.target.classList.add("active");

renderProducts(category);

}

function addToCart(id){

const product=
products.find(p=>p.id===id);

cart.push(product);

updateCart();

}

function updateCart(){

document.getElementById("cart-count")
.innerText=cart.length;

cartItems.innerHTML="";

let total=0;

cart.forEach(item=>{

total+=item.price;

cartItems.innerHTML+=`

<div class="cart-item">

<div>
${item.name}
</div>

<div>
${item.price} Kč
</div>

</div>

`;

});

document.getElementById("cart-total")
.innerText=total+" Kč";

}

function toggleCart(){

document
.getElementById("cart-panel")
.classList.toggle("active");

}

renderProducts("burgers");