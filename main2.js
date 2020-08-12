
var app = new Vue({
  el: '#app',
  data: {
    active: 'home'
  },



  methods: {
    makeActive: function (item) {
      this.active = item;
    }
  },

  computed: { // las computed siempre tienen que retornar el valor, usan la palabra return

  },

  created() {

  },

})