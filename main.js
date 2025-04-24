
const container = document.getElementById("productContainer");

function renderProducts() {
  container.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}" style="width:100%; border-radius: 8px;">
      <h2>${p.title}</h2>
      <p>${p.description}</p>
      <strong>${p.price}</strong>
      <button onclick="alert('This is a demo. Real payments coming soon.')">Add to cart</button>
    `;
    container.appendChild(div);
  });
}

document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  alert("Language switching is demo-only for now. Full version coming soon.");
});

renderProducts();
