let cart = [];
let total = 0;

function addToCart(producto, precio) {
  if (cart.find(item => item.producto === producto)) {
    // Si el producto ya existe en el carrito, aumentamos su cantidad
    cart.find(item => item.producto === producto).cantidad++;
  } else {
    // Si el producto no existe en el carrito, lo agregamos
    cart.push({ producto, precio, cantidad: 1 });
  }
  // Actualizamos la lista del carrito
  updateCartUI();
  // Calculamos el total de la compra
  calculateTotal();
}

function removeFromCart(producto) {
  // Filtramos el producto del carrito
  cart = cart.filter(item => item.producto !== producto);
  // Actualizamos la lista del carrito
  updateCartUI();
  // Calculamos el total de la compra
  calculateTotal();
}

function updateCartUI() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.producto} - Precio: $${item.precio} - Cantidad: ${item.cantidad} `;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Eliminar';
    removeButton.onclick = () => removeFromCart(item.producto);
    listItem.appendChild(removeButton);
    cartList.appendChild(listItem);
  });
}

function calculateTotal() {
  total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  document.getElementById('total').textContent = total;
}

function clearCart() {
  cart = [];
  updateCartUI();
  calculateTotal();
}