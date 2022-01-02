<template>
    <div class="hello">
      <h1>Our Products</h1>
      <div class="row">
        <div class="column" v-for="(product,index) in products" :key="index">
          <div class="card">
            <img :src="product.image" :alt="product.name" style="width:100%">
            <h3><span v-html="product.name"></span></h3>
            <p class="price">Price: {{product.price}}</p>
            <p id="quantity" class="stock" v-if="product.quantity > 0">Only {{product.quantity}} items left in stock!</p>
            <p class="outofstock" v-else>Out of Stock</p>
            <p><span v-html="product.description.substring(0,30)+'..'"></span></p>
            <p><button>Buy Now</button></p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "Home",
  data() {
    return {
      products : []
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.products = response.data.data;
      },
      (error) => {
        this.products =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>


<style scoped>
  h1{
    padding-top: 50px;
    text-align: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0;
  }
  a {
    color: #42b983;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  .price {
    color: black;
    font-size: 18px;
  }

  .stock {
    text-align: center;
    color: blue;
    font-size: 16px;
  }


  .outofstock {
    text-align: center;
    color: red;
    font-size: 16px;
  }

  .card button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: darkblue;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }

  .card button:hover {
    opacity: 0.5;
  }
  * {
    box-sizing: border-box;
  }

  .column {
    float: left;
    width: 25%;
    padding: 0 20px;
  }

  .row {margin: 0 20px;}

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }
</style>
