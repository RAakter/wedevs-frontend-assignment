<template>
    <h3>
        <strong>Hello {{currentUser.data.name}}!</strong>
    </h3>
    
    <p>Name: {{currentUser.data.name}}</p>
    <p>Email: {{currentUser.data.email}}</p>
  
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
