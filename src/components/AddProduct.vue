<template>
<h3>Add Product</h3>
  <div>
    <div v-if="!submitted">
      <div>
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="product.name"
          name="name"
        />
      </div>

      <div>
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="product.description"
          name="description"
        />
      </div>

      <div>
        <label for="price">Price</label>
        <input
          type="number"
          class="form-control"
          id="price"
          required
          v-model="product.price"
          name="price"
        />
      </div>

       <div class="form-group">
        <label for="quantity">Quantity</label>
        <input
          type="number"
          class="form-control"
          id="quantity"
          required
          v-model="product.quantity"
          name="quantity"
        />
      </div>

      <button @click="saveProduct" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>Product saved successfully!</h4>
      <button class="btn btn-success" @click="newProduct">Add</button>
    </div>
  </div>
</template>

<script>
import ProductDataService from "../services/ProductDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      product: {
        id: null,
        name: "",
        description: "",
        price: "",
        quantity: "",
    
      },
      submitted: false
    };
  },
  methods: {
    saveProduct() {
      var data = {
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        quantity: this.product.quantity,
      };

      ProductDataService.create(data)
        .then(response => {
          this.product.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newProduct() {
      this.submitted = false;
      this.product = {};
    }
  }
};
</script>

<style scoped>

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>