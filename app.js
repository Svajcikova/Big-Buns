let cart = [];
let currentItem = null;

/* +20 % ceny */
const up = p => Math.round(p * 1.2);

/* DATA */
const data = {

burgers:[
{name:"🥓 Buns & Bacon",price:up(169),desc:"Hovězí chuck roll, slanina, čedar, rajče, salát, slaninová majonéza",img:"https://images.unsplash.com/photo-1550547660-d9450f859349"},
{name:"🔥 Big Buns Inferno",price:up(169),desc:"Hovězí chuck roll, čedar, jalapeño, rajče, cibule, sriracha mayo",img:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092"},
{name:"🌱 Green Beast",price:up(159),desc:"Halloumi, pesto, jogurt dresink, rukola",img:"https://images.unsplash.com/photo-1604908176997-4310c4f8f3e1"}
],

premium:[
{name:"🥑 Fresh Bite",price:up(199),desc:"Hovězí, mozzarella, avokádo, pesto",img:"https://images.unsplash.com/photo-1561758033-d89a9ad46330"},
{name:"⚡ Double Trouble",price:up(239),desc:"2x hovězí, niva, cibulka, BBQ",img:"https://images.unsplash.com/photo-1561758033-d89a9ad46330"},
{name:"🍔 B&B Deluxe",price:up(229),desc:"slanina, brie, cibulka",img:"https://images.unsplash.com/photo-1550547660-d9450f859349"},
{name:"BLACK EMBER",price:up(229),desc:"smash burger, cheddar, bacon",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"}
],

menu:[
{name:"Buns & Bacon Menu",price:up(169+79)},
{name:"Inferno Menu",price:up(169+79)},
{name:"Beast Menu",price:up(159+79)},
{name:"Fresh Bite Menu",price:up(199+79)},
{name:"Double Trouble Menu",price:up(239+79)},
{name:"B&B Deluxe Menu",price:up(229+79)},
{name:"BLACK EMBER Menu",price:up(229+79)}
],

sides:[
{name:"Hranolky",price:up(59)},
{name:"Mřížky",price:up(59)},
{name:"Kroužky",price:up(79)},
{name:"Mozzarella",price:up(79)},
{name:"Camembert",price:up(79)}
],

drinks:[
{name:"Coca-cola",price:up(39)},
{name:"Coca zero",price:up(39)},
{name:"Cherry",price:up(39)},
{name:"Pepsi cherry",price:up(39)},
{name:"Sprite",price:up(39)},
{name:"Fanta",price:up(39)},
{name:"Natura",price:up(35)}
],

sauces:[
{name:"Česneková",price:up(30)},
{name:"Sriracha",price:up(30)},
{name:"Majonéza",price:up(30)},
{name:"Med-hořčice",price:up(30)},
{name:"Citron-pepř",price:up(30)}
]
};

/* RENDER */
function render(cat){
 let html='<div class="grid">';
 data[cat].forEach(i=>{
  html+=`
  <div class="card" onclick="openDetail('${i.name}','${i.desc||""}',${i.price},'${i.img||""}')">
    ${i.img ? `<img src="${i.img}">` : ""}
    <div class="cardBody">${i.name}<br>${i.price} Kč</div>
  </div>`;
 });
 html+='</div>';
 document.getElementById("content").innerHTML=html;
}

function switchTab(cat,el){
 document.querySelectorAll('.tab').forEach(t=>t.classList.remove("active"));
 el.classList.add("active");
 render(cat);
}

function openDetail(name,desc,price,img){
 currentItem={name,price};

 document.getElementById("detail").classList.add("active");
 document.getElementById("detailName").innerText=name;
 document.getElementById("detailDesc").innerText=desc;
 document.getElementById("detailPrice").innerText=price+" Kč";
 document.getElementById("detailImg").src=img;
}

function closeDetail(){
 document.getElementById("detail").classList.remove("active");
}

function addToCart(){
 cart.push(currentItem);
 renderCart();
 closeDetail();
 toast("Přidáno 🔥");
}

function renderCart(){
 let total=0, html="";
 cart.forEach(i=>{
  total+=i.price;
  html+=`${i.name} ${i.price} Kč <br>`;
 });
 document.getElementById("items").innerHTML=html;
 document.getElementById("total").innerText=total+" Kč";
}

function toggleCart(){
 document.getElementById("cart").classList.toggle("active");
}

function toast(t){
 let el=document.getElementById("toast");
 el.innerText=t;
 el.classList.add("show");
 setTimeout(()=>el.classList.remove("show"),1000);
}

function startCheckout(){
 alert("Napojíme Stripe 💳");
}

render("burgers");