<template>
  <div v-if="currentProduct" class="edit-form">
    <h4>Product</h4>
    <form>
      <div>
        <label for="name">Title</label>
        <input type="text" class="form-control" id="name"
          v-model="currentProduct.name"
        />
      </div>
      <div>
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentProduct.description"
        />
      </div>
      <div>
        <label for="price">Price</label>
        <input type="number" class="form-control" id="price"
          v-model="currentProduct.price"
        />
      </div>
      <div>
        <label for="quantity">Quantity</label>
        <input type="number" class="form-control" id="quantity"
          v-model="currentProduct.quantity"
        />
      </div>

    </form>

    <button
      @click="deleteProduct"
    >
      Delete
    </button>

    <button type="submit"
      @click="updateProduct"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Product</p>
  </div>
</template>

<script>
import ProductDataService from "../services/ProductDataService";

export default {
  name: "product",
  data() {
    return {
      currentProduct: null,
      message: ''
    };
  },
  methods: {
    getProduct(id) {
      ProductDataService.get(id)
        .then(response => {
          this.currentProduct = response.data.data;
          console.log(response.data.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateProduct() {
      ProductDataService.update(this.currentProduct.id, this.currentProduct)
        .then(response => {
          console.log(response.data.data);
          this.message = 'The product was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteProduct() {
      ProductDataService.delete(this.currentProduct.id)
        .then(response => {
          console.log(response.data.data);
          this.$router.push({ name: "products" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getProduct(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>