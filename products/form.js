Vue.component('reviews-form', {
    template: '#reviewsForm',
    data() {
        return {
            email: null,
            review: null,
            rating: null,
            errors: []
        }

    },
    methods: {
        saveReview() {
            if (this.email && this.review && this.rating) {
                let productReviews = {
                    email: this.email,
                    review: this.review,
                    rating: this.rating,
                }
                eventBus.$emit("review-added", productReviews)
                this.email = null;
                this.review = null;
                this.rating = null;
                // this.errors = []
            } else {
                this.errors.push("Ocurrio un error: datos invalidos")
            }
        }
    }
})