Vue.component('product', {
    template: '#product-template',
    props: {
        premium: {
            type: Boolean,
            required: true
        },
        cart: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            descrip: 'lorem ipsum lorem ipsum',
            product: 'Longaniza de Brocolli',
            selectedVariant: {},
            link: './longaniza.html',
            details: ["500 gr", "organica", "libre de colesterol"],
            variants: [{
                    id: 5,
                    type: 'red',
                    img: './assets/img/longaniza.jpg',
                    stock: 12,
                    default: false
                },
                {
                    id: 4,
                    type: 'white',
                    img: './assets/img/longablanca.png',
                    stock: 5,
                    default: true
                }
            ],
            reviews: []
        }
    },
    methods: {
        updateProduct(variant) {
            this.selectedVariant = variant
        },
        addToCart() {
            if (this.stock != 0) {
                this.$emit("add-to-cart", this.selectedVariant)
                this.selectedVariant.stock -= 1
            }
        },
        removeFromCart() {

            var variantInCart = this.cart.find(product => product == this.selectedVariant)
            if (variantInCart) {
                this.$emit("remove-from-cart", this.selectedVariant)
                this.selectedVariant.stock += 1
            }
        },
        // addReview(review) { se sustituyo por el mounted y se saca del html
        //   this.reviews.push(review)
        // }
    },

    computed: { // las computed siempre tienen que retornar el valor, usan la palabra return
        inStock() {
            return this.stock > 0 ? true : false // el signo de interrogacion representa el ciclo iF se llama operador ternario, y los dos puntos son representan ELSE
        },
        img() {
            return this.selectedVariant.img
        },
        stock() {
            return this.selectedVariant.stock
        },
        shipping() {
            return this.premium == true ? "Gratis" : "$2000"
        }
    },
    created() {
        this.selectedVariant = this.variants.find(item => item.default == true)

    },
    mounted() {
        eventBus.$on("review-added", review => {
            this.reviews.push(review)
        })
    },
})