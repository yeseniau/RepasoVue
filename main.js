
var app = new Vue({
  el: '#app',
  data: {
    descrip: 'lorem ipsum',
    product: 'Longaniza de Brocolli',
    img: './assets/img/longaniza.jpg',
    link: './longaniza.html',
    stock: 12,
    details: ["500 gr", "organica", "libre de colesterol"],
    variantes: [
      {
        id: 5,
        type: 'red',
        img: './assets/img/longaniza.jpg',
      },
      {
        id: 4,
        type: 'white',
        img: './assets/img/longablanca.png',
      }],
    cart: 0
  },

  methods: {
    updateImg(imagen) {
      this.img = imagen
    },
    addToCart() {
      this.cart += 1
      this.stock -= 1
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1
        this.stock += 1
      }
    },
  },
  computed: { // las computed siempre tienen que retornar el valor, usan la palabra return
    inStock() {
      return this.stock > 0 ? true : false // el signo de interrogacion representa el ciclo iF se llama operador ternario, y los dos puntos son representan ELSE
    },
  }
})