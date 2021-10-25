<template lang="pug">
    include BlackDescription.pug
</template>

<script>
    import Description from './Description.vue';

    export default {
        mixins: [
            Description
        ]
    }
</script>

<style scoped>
    .row {
        max-width: 100%;
        padding-right: 0;
        padding-left: 0;
        margin-top: 0;
    }
    .description-text {
        padding: 3rem;
    }
    @media (min-width: 992px) {
        .description-text {
            padding: 5rem;
        }
    }
    .col-lg-6 {
        padding: 0;
    }
    .bg-black {
        background-color: black !important;
    }
    .my-auto {
        margin-top: auto !important;
        margin-bottom: auto !important;
    }
</style>