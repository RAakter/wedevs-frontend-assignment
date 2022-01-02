<template>
  <div id="app">
    <div class="topnav">
      <a href="/">weDevs</a>
        <li>
          <router-link to="/home">
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
        <li v-if="showAdminBoard">
          <router-link to="/admin">Admin Board</router-link>
        </li>
        <li>
          <router-link v-if="currentUser" to="/user">User</router-link>
        </li>

        <div v-if="!currentUser">
        <li>
          <router-link to="/register" >
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li>
        <li>
          <router-link to="/login">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </div>
      <div v-if="currentUser">
        <li>
          <router-link to="/profile">
            <font-awesome-icon icon="user" />
            {{ currentUser.data.name }}
          </router-link>
        </li>
        <li>
          <a @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.data.is_admin) {
        return this.currentUser.data.is_admin.includes(1);
      }

      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('logout');
      this.$router.push('login');
    }
  }
};
</script>


<style scoped>

.topnav {
  overflow: hidden;
  background-color: blue;
  margin-top: -8px;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

li{
  list-style: none;
}
</style>
