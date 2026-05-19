const products = [

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
},

{
id:5,
category:"sides",
name:"Hranolky",
price:71,
image:"../assets/fries.jpg",
desc:"Křupavé hranolky."
},

{
id:6,
category:"drinks",
name:"Coca Cola",
price:42,
image:"../assets/coke.jpg",
desc:"0.3l"
},

{
id:7,
category:"dips",
name:"BBQ Omáčka",
price:36,
image:"../assets/bbq.jpg",
desc:"Domácí BBQ."
}

];

const grid =
document.getElementById("products-grid");

const cartItems =
document.getElementById("cart-items");

let cart = [];

function renderProducts(category){

grid.innerHTML = "";

const filtered =
products.filter(
p => p.category === category
);

filtered.forEach(product=>{

grid.innerHTML += `

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

function filterProducts(category,btn){

document
.querySelectorAll(".tabs button")
.forEach(button=>{

button.classList.remove("active");

});

btn.classList.add("active");

renderProducts(category);

}

function addToCart(id){

const product =
products.find(p=>p.id===id);

cart.push(product);

updateCart();

}

function updateCart(){
cartItems.innerHTML += `

<div class="cart-item">

<div>

<div class="cart-item-name">
${item.name}
</div>

<div class="cart-item-price">
${item.price} Kč
</div>

</div>

</div>

`;

});

document
.getElementById("cart-total")
.innerText = total + " Kč";

document
.getElementById("cart-count")
.innerText = cart.length;

}

function toggleCart(){

document
.getElementById("cart-panel")
.classList.toggle("active");

}

renderProducts("burgers");