
const products = [
  { id: 1, title: "Digital Planner 2025", description: "Organize your year with this stylish planner.", price: "9.90" },
  { id: 2, title: "Minimalist Branding Kit", description: "Logos, colors and fonts for a clean brand look.", price: "14.90" },
  { id: 3, title: "Resume Template Pack", description: "Modern templates in Word & PDF format.", price: "7.50" }
];

function renderProducts(lang = 'en') {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach(p => {
    const el = document.createElement("div");
    el.className = "product";
    el.innerHTML = `<h2>${p.title}</h2><p>${p.description}</p><strong>CHF ${p.price}</strong><br><button onclick="addToCart(${p.id})">Add to cart</button>`;
    list.appendChild(el);
  });
}

function addToCart(productId) {
  alert("Product " + productId + " added to cart. Checkout will be real with Stripe/PayPal integration.");
}

function checkout() {
  alert("Redirecting to payment... (real payment setup required)");
}

document.getElementById("language-switcher").addEventListener("change", (e) => {
  renderProducts(e.target.value);
});

renderProducts();
