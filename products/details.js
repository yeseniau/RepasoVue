Vue.component("reviews-details", {
    template: "#template-details",
    props: {
        details: {
            type: Array,
            required: true
        }
    }
})