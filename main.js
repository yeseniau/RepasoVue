Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      descrip: 'lorem ipsum lorem ipsum lorem ipsum',
      product: 'Longaniza de Brocolli',
      selectedVariant: {},
      link: './longaniza.html',
      details: ["500 gr", "organica", "libre de colesterol"],
      variants: [
        {
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
        }],
    }
  },
  methods: {

    updateProduct(variant) {
      this.selectedVariant = variant
    },
    addToCart() {
      if (this.stock != 0) {
        this.$emit("add-to-cart", 1)
        this.selectedVariant.stock -= 1
      }
    },
    removeFromCart() {
      this.$emit("remove-from-cart", 1)
      this.selectedVariant.stock += 1
    }
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

  template: '#product-template'

})


var app = new Vue({
  el: '#app',
  data: {
    cart: 0,
    premium: true
  },

  methods: {
    addToCart(cant) {
      this.cart += cant;
    },
    removeFromCart(cant) {
      if (this.cart > 0) {
        this.cart -= cant
      }
    },
  }
})