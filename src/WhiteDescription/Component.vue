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
                    272, // 320px
                    327, // 375px
                    377, // 425px
                    720, // 768px
                    609, // 1024px
                    772, // 1440px
                    814, // 2550px
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