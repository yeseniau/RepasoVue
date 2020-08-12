Vue.component('product', {
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
        this.$emit("add-to-cart", this.selectedVariant)
        this.selectedVariant.stock -= 1
      }
    },
    removeFromCart() {
      var variantInCart = this.cart.find(product => product == this.seletedVariant)
      this.$emit("remove-from-cart", this.selectedVariant)
      if (variantInCart > 0) {
        this.selectedVariant.stock += 1
      }
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
    cart: [],
    premium: true,
    showStyle: {
      display: "block",
      "padding-right": "16px",
      "padding-top": "20px"
    },
    displayCart: false
  },

  methods: {
    addToCart(variant) {
      this.cart.push(variant);
    },
    removeFromCart(variant) {
      var index = this.cart.indexOf(variant)
      if (index > -1) {
        this.cart.splice(index, 1)
      }
    }
  },
  computed: {
    modalStyle() {
      if (this.displayCart) {
        return this.showStyle
      } else {
        return {}
      }
    }
  }
})