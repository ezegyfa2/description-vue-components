<script>
    export default {
        props: {
            title: {
                type: String
            },
            content: {
                type: String
            },
            image_url: {
                type: String
            },
            image_alt: {
                type: String
            },
            left_orientation: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            orientationClass() {
                return this.left_orientation ? "order-lg-first" : "";
            }
        }
    }
</script>
