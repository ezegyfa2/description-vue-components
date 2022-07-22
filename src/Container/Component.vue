<template lang="pug">
    include Template.pug
</template>

<script>
    import clone from 'just-clone'
    import ClassAdder from '../../../helper-vue-components/src/ClassAdder.vue'

    export default {
        mixins: [
            ClassAdder
        ],
        props: {
            description_sections: { 
                type: Array
            }
        },
        computed: {
            descriptionWithOrientations() {
                var currentDescriptionNumber = 0;
                return this.description_sections.map((description) => {
                    var descriptionWithOrientation = clone(description);
                    descriptionWithOrientation.data.left_orientation = currentDescriptionNumber % 2 == 0;
                    ++currentDescriptionNumber;
                    return descriptionWithOrientation;
                });
            }
        }
    }
</script>
