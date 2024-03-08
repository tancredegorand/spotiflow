<template>
    <select :value="trackSortType" id="track-sort" @input="onTrackSortTypeChanged">
        <option value="relevance">Relevance</option>
        <option value="AZName">A - Z</option>
    </select>
</template>


<script>
export default {
    name: 'TracksGalleryOptions',
    emits: ["update:trackSortType"],
    props: {
        trackSortType: String 
    },
    methods: {
        onTrackSortTypeChanged(event) {
            this.$emit('update:trackSortType', event.target.value);
        }
    }
}
</script>

<style scoped lang="scss">
</style>
