<template lang="pug">
    include WhiteDescription.pug
</template>

<script>
    import Description from './Description.vue';

    export default {
        mixins: [
            Description
        ],
        computed: {
            textBorderClass() {
                //Reversed becouse the left_orientation indicate the image position
                return this.left_orientation ?  "right-border text-lg-right" : "left-border text-lg-left";
            }
        }
    }
</script>

<style scoped>
    @media (max-width: 992px) {
        .description-text {
            padding: 2rem;
        }
    }
    @media (min-width: 992px) {
        .left-border {
            border-left: 0.5rem solid #64a19d;
            padding: 0 0 0 2rem;
        }
        .right-border {
            border-right: 0.5rem solid #64a19d;
            padding: 0 2rem 0 0;
        }
    }
</style>