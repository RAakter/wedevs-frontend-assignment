<template>
    <div class="main">
        <h2 v-html="product.name"></h2>
        <p>{{product.description}}</p>
        <img class="fakeimg" :src="product.image" :alt="product.name">
        <p>Price: TK. {{product.price}} </p>
        <p>Available Quantity: {{product.quantity}}</p>
        <hr>
        <router-link :to="{ path: '/checkout/'+product.id }"><button class="btn" type="submit">Buy Now</button></router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            product : []
        }
    },
    beforeMount(){
        let url = `http://localhost:9000/Api/v1/products/${this.$route.params.id}`
        axios.get(url).then(response => this.product = response.data.data)      
    }
}
</script>

<style scoped>
.small-text { font-size: 18px; }
.title { font-size: 36px; }
.main {   
  -ms-flex: 70%; /* IE10 */
  flex: 70%;
  background-color: white;
  padding: 20px;
}

.fakeimg {
  width: 200px;
  height: 200px;
}

.btn {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>