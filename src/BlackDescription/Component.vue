<template lang="pug">
    include Template.pug
</template>

<script>
    import Description from './../Description.vue';

    export default {
        mixins: [
            Description
        ]
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>