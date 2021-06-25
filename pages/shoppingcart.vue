<template>
    <div id="app">
        <nav class="nav">
            <h2 class="nav__header">Products</h2>
            <div class="nav__cart">
                <button @click="showCart = !showCart">
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <span class="total-quantity">{{ totalQuantity}}</span>
                <div v-if="showCart" class="cart-dropdown">
                    <ul class="cart-dropdown__list">
                        <li v-for="product in cart" :key="product.id"> {{product.name}} ({{product.quantity}})</li>
                    </ul>
                </div>
            </div> 
        </nav>

        <section class="products">
            <div v-for="product in products" :key="product.id" class="product" >
                <h3 class="product__header">{{product.name}}</h3>
                <img src="https://via.placehorder.com/150" :alt="product.name" class="product__image">
                <p class="product__description">{{product.description}}</p>
                <div class="cart">
                    <button @click="updateCart(product, 'subtract')" class="cart__button">-</button>
                    <span class="cart__quantity">{{product.quantity}}</span>
                    <button @click="updateCart(product, 'add')" class="cart__button">+</button>
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


<script>

const app = new Vue({
  el: "#app",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Product 1",
          description: "This is an incredibly awesome product",
          quantity: 0
        },
        {
          id: 2,
          name: "Product 2",
          description: "This is an incredibly awesome product",
          quantity: 0
        },
        {
          id: 3,
          name: "Product 3",
          description: "This is an incredibly awesome product",
          quantity: 0
        }
      ],
      showCart: false
    };
  },
  computed: {
    cart() {
      return this.products.filter((product) => product.quantity > 0);
    },
    totalQuantity() {
      return this.products.reduce(
        (total, product) => total + product.quantity,
        0
      );
    }
  },
  methods: {
    updateCart(product, updateType) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === product.id) {
          if (updateType === "subtract") {
            if (this.products[i].quantity !== 0) {
              this.products[i].quantity--;
            }
          } else {
            this.products[i].quantity++;
          }

          break;
        }
      }
    }
  }
});

</script>
