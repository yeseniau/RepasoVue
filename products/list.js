Vue.component('reviews-list', {
    template: '#list-template',
    props: {
        reviews: {
            type: Array,
            requiered: true
        },
        shipping: {
            type: String,
            requiered: true
        }
    }
})