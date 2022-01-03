import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import SingleProduct from './components/SingleProduct'
import Checkout from './components/Checkout'
import Confirmation from './components/Confirmation'
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardUser = () => import("./components/BoardUser.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: '/products/:id',
    name: 'single-products',
    component: SingleProduct
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: Confirmation
  },
  {
    path: '/checkout/:id',
    name: 'checkout',
    component: Checkout,
    props: (route) => ({ pid: route.query.pid })
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    component: BoardAdmin,
  },
  {
    path: "/orders",
    name: "orders",
    component: BoardUser,
  },
  {
    path: "/",
    alias: "/products",
    name: "products",
    component: () => import("./components/ProductList")
  },
  {
    path: "/products/:id",
    name: "product-details",
    component: () => import("./components/EditProduct")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddProduct")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
