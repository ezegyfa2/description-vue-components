<template lang="pug">
    include Template.pug
</template>

<script>
    import Description from '../Description/Component.vue';

    export default {
        mixins: [
            Description
        ],
        data() {
            return {
                imageWidths: [
                    272,
                    327,
                    377,
                    609,
                    720,
                    772,
                    814,
                ]
            }
        },
        computed: {
            textBorderClass() {
                //Reversed becouse the left_orientation indicate the image position
                return this.left_orientation ?  "right-border text-lg-right" : "left-border text-lg-left";
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>