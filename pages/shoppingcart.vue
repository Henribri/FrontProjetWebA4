<template>
    <div id="app">
        <nav class="nav">
            <h2 class="nav__header">Products</h2>
            <div class="nav__cart">
                <button >
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <span class="total-quantity">0</span>
                <div class="cart-dropdown">
                    <ul class="cart-dropdown__list">
                        <li> produit 1 (0)</li>
                    </ul>
                </div>
            </div> 
        </nav>

        <section class="products">
            <div class="product" >
                <h3 class="product__header">Tacos</h3>
                <img src="https://via.placehorder.com/150" alt="" class="product__image">
                <p class="product__description">il est bon</p>
                <div class="cart">
                    <button class="cart__button">-</button>
                    <span class="cart__quantity">0</span>
                    <button class="cart__button">+</button>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
* {
  box-sizing: border-box;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
}

.nav {
  align-items: center;
  background: #4686E7;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}
.nav__header {
  font-size: 2.5rem;
}
.nav__cart {
  position: relative;
}
.nav__cart button {
  background: none;
  border: 0;
  color: white;
  cursor: pointer;
}
.nav__cart i {
  font-size: 2rem;
}
.nav__cart .total-quantity {
  align-items: center;
  background: lightblue;
  border-radius: 50%;
  display: flex;
  font-weight: bold;
  height: 2rem;
  justify-content: center;
  padding: 0.5rem;
  position: absolute;
  right: -10px;
  top: -10px;
  width: 2rem;
}
.nav__cart .cart-dropdown {
  background: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  color: #333;
  font-size: 1.3rem;
  overflow: auto;
  padding: 0 1rem;
  position: absolute;
  right: 0;
  width: 12rem;
}
.nav__cart .cart-dropdown .cart-dropdown__list {
  list-style: none;
}
.nav__cart .cart-dropdown .cart-dropdown__list li {
  margin: 1rem 0;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.products .product {
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 2rem;
  padding: 1rem;
}
.products .product__header {
  font-size: 2rem;
  text-align: center;
}
.products .product__image {
  display: block;
  margin: 1rem auto;
}
.products .product__description {
  font-size: 1.3rem;
  margin-top: 1rem;
}

.cart {
  margin-top: 2rem;
  text-align: center;
}
.cart__button {
  background: lightblue;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  height: 2.5rem;
  width: 2.5rem;
}
.cart__quantity {
  font-size: 1.5rem;
  margin: 0 1rem;
}
</style>