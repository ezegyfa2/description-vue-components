<template lang="pug">
    include Container.pug
</template>

<script>
    import clone from 'just-clone';

    export default {
        props: {
            descriptions: { 
                type: Array, 
                default: [] 
            }
        },
        computed: {
            descriptionWithOrientations() {
                var currentDescriptionNumber = 0;
                return this.descriptions.map((description) => {
                    var descriptionWithOrientation = clone(description);
                    descriptionWithOrientation.left_orientation = currentDescriptionNumber % 2 == 0;
                    ++currentDescriptionNumber;
                    return descriptionWithOrientation;
                });
            }
        }
    }
</script>
