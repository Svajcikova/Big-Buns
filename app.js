const menu = {

  burgers:[

    {
      name:"🥓 Buns & Bacon",
      price:203,
      desc:"Hovězí chuck roll, slanina, cheddar, rajče, salát, slaninová mayo.",
      img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name:"🔥 Big Buns Inferno",
      price:203,
      desc:"Chuck roll, cheddar, jalapeño, rajče, cibule, sriracha mayo.",
      img:"https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name:"🌱 Green Beast",
      price:191,
      desc:"Halloumi, pesto, garlic dressing, relish, rukola.",
      img:"https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1200&auto=format&fit=crop"
    }

  ],

  premium:[

    {
      name:"⚡ Double Trouble",
      price:287,
      desc:"2x150g chuck roll, niva, BBQ mayo, karamelizovaná cibulka.",
      img:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name:"🥑 Fresh Bite",
      price:239,
      desc:"Mozzarella, avokádo, pesto, citronovo-pepřová mayo.",
      img:"https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name:"🍔 Buns & Bacon Deluxe",
      price:275,
      desc:"Brie, dvojitá slanina, BBQ, crispy onion.",
      img:"https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name:"🔥 BLACK EMBER",
      price:275,
      desc:"Double smash, smoked cheese, bacon, brown butter mayo.",
      img:"https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=1200&auto=format&fit=crop"
    }

  ],

  sides:[

    {
      name:"🍟 Hranolky",
      price:71,
      desc:"Křupavé hranolky.",
      img:"https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name:"🧀 Mozzarella sticks",
      price:95,
      desc:"5 ks mozzarella sticks.",
      img:"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name:"🧅 Onion Rings",
      price:95,
      desc:"Cibulové kroužky v pivním těstíčku.",
      img:"https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=1200&auto=format&fit=crop"
    }

  ],

  drinks:[

    {
      name:"🥤 Coca-Cola",
      price:47,
      desc:"0.33l",
      img:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name:"🥤 Coca-Cola Zero",
      price:47,
      desc:"0.33l",
      img:"https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name:"🥤 Sprite",
      price:47,
      desc:"0.33l",
      img:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=1200&auto=format&fit=crop"
    }

  ],

  dips:[

    {
      name:"🥣 Garlic Dip",
      price:36,
      desc:"Domácí jogurtovo-česnekový dip.",
      img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name:"🌶️ Sriracha Mayo",
      price:36,
      desc:"Domácí sriracha majonéza.",
      img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop"
    }

  ]

};

/* ========================================= */
/* ELEMENTS */
/* ========================================= */

const products =
document.getElementById("products");

const tabs =
document.querySelectorAll(".category");

const cartCount =
document.getElementById("cart-count");

/* ========================================= */
/* CART */
/* ========================================= */

let cart = [];

/* ========================================= */
/* RENDER */
/* ========================================= */

function render(category){

  products.innerHTML = "";

  menu[category].forEach(item=>{

    products.innerHTML += `

    <div class="card">

      <img src="${item.img}">

      <div class="card-content">

        <h3>${item.name}</h3>

        <p>${item.desc}</p>

        <div class="bottom">

          <div class="price">
            ${item.price} Kč
          </div>

          <button class="add-btn"
          onclick='addToCart("${item.name}",${item.price})'>

            +

          </button>

        </div>

      </div>

    </div>

    `;

  });

}

/* ========================================= */
/* CATEGORY SWITCH */
/* ========================================= */

tabs.forEach(tab=>{

  tab.addEventListener("click",()=>{

    tabs.forEach(t=>{

      t.classList.remove("active");

    });

    tab.classList.add("active");

    render(tab.dataset.category);

  });

});

/* ========================================= */
/* ADD TO CART */
/* ========================================= */

function addToCart(name,price){

  cart.push({

    name,
    price

  });

  cartCount.innerText =
  cart.length;

  showToast(name);

}

/* ========================================= */
/* TOAST */
/* ========================================= */

function showToast(name){

  const toast =
  document.createElement("div");

  toast.className =
  "toast";

  toast.innerHTML =
  `🔥 ${name} přidán do košíku`;

  document.body.appendChild(toast);

  setTimeout(()=>{

    toast.classList.add("show");

  },100);

  setTimeout(()=>{

    toast.classList.remove("show");

    setTimeout(()=>{

      toast.remove();

    },300);

  },2200);

}

/* ========================================= */
/* START */
/* ========================================= */

render("burgers");