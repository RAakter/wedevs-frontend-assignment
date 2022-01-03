    <template>
        <div class="container">
            <div class="row">
                <div>
                    <div class="order-box">
                        <img class="show-image" :src="product.image" :alt="product.name">
                        <h2 class="title" v-html="product.name"></h2>
                        <p>Price: TK. {{product.price}}</p>
                        <p>Available Quantity: {{product.quantity}}</p>
                        <br>
                        <hr>
                        <label class="row"><span>Quantity: </span><input type="number" name="units" min="1" :max="product.quantity" v-model="quantity" @change="checkUnits"></label>
                    </div>
                    <br>
                    <div>
                        <div v-if="!currentUser">
                            <h2>Please login to continue</h2>
                        </div>
                        <div v-if="currentUser">
                            <div class="row">
                                <label for="name">Name</label>
                                <div class="">
                                    <input id="name" type="text" v-model="name" required>
                                </div>
                                <label for="phone">Phone</label>
                                <div class="">
                                    <input id="phone" type="text" v-model="phone" required>
                                </div>
                                <label for="address">Delivery Address</label>
                                <div class="">
                                    <input id="address" type="text" v-model="address" required>
                                </div>
                            </div>
                            <br>
                            <button v-if="currentUser" @click="placeOrder">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </template>

     <script>
    import axios from 'axios';
    export default {
        props : ['pid'],
        data(){
            return {
                name : "",
                address : "",
                phone : "",
                quantity : 1,
                product : [],
                message: "",
                successful: false
            }
        },
        computed: {
            currentUser() {
               return this.$store.state.auth.user;
            },
        },
    
        beforeMount() {
            axios.get(`http://localhost:9000/Api/v1/products/${this.$route.params.id}`).then(response => this.product = response.data.data)
            
        },
        methods : {
            placeOrder(e) {
                e.preventDefault()

                let user_id = this.currentUser.data.id
                let name = this.name
                let phone = this.phone
                let address = this.address
                let product_id = this.product.id
                let quantity = this.quantity
                let price = this.product.price
                let total_price = this.product.price * this.quantity

                axios.post('http://localhost:9000/Api/v1/order/', {user_id, name, phone, address, quantity, product_id, price, total_price})
                     .then(
                        (data) => {
                        this.message = data.message;
                        this.successful = true;
                        },
                    );

            },
            checkUnits(){
                if (this.quantity > this.product.units) {
                    this.quantity = this.product.units
                }
            }
        }
    }
    </script>

<style scoped>
    input[type=text] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
    .small-text { font-size: 18px; }
    .order-box { border: 1px solid #cccccc; padding: 10px 15px; }
    .title { font-size: 36px; }
    .show-image{
        height: 200px;
        width: 200px;
    }
    
</style>