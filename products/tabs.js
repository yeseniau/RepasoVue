  Vue.component('product-tabs', {
      template: '#tabs-template',
      props: {
          reviews: {
              type: Array,
              requiered: true
          },
          shipping: {
              type: String,
              requiered: true
          },
          details: {
              type: Array,
              required: true
          }
      },

      data() {
          return {
              tabs: ['Add review', 'Ver reviews', 'Envio', 'Detalles'],
              selectedTab: 'Add review'
          }
      }
  })