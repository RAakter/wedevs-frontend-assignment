<template>
    <h3>
        <strong>Hello {{currentUser.data.name}}!</strong>
    </h3>
  
    <table>
      <thead>
        <th>Order Id</th>
        <th>Order Status</th>
        <th>Product Name</th>
        <th>Product Quantity</th>
        <th>Product Price</th>
        <th>Total Price</th>
        <th>Created At</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="(order,index) in currentUser.data.orders" :key="index">
        <td>{{order.id}}</td>
        <td>{{order.status}}</td>
        <td>{{order.product.name}}</td>
        <td>{{order.quantity}}</td>
        <td>{{order.price}}</td>
        <td>{{order.total_price}}</td>
        <td>{{order.created_at}}</td>
        <td v-if="order.status == 'Pending'">
          <button>Edit</button>
        </td>
      </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>