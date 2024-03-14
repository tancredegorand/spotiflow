<template>
    <select :value="trackSortType" id="track-sort" @change="onTrackSortTypeChanged">
        <option value="relevance">Relevance</option>
        <option value="AZName">A - Z</option>
    </select>


    <select :value="selectedArtist" @change="onArtistChanged">
        <option value="allArtists">All Artists</option>
        <option v-for="(artist, index) in artistList" :key="index" :value="artist">{{ artist }}</option>
    </select>

</template>




<script>
export default {
    name: 'TracksGalleryOptions',
    emits: ["update:trackSortType", "update:selectedArtist"],
    props: {
        trackSortType: String,
        artistList: Array, 
        selectedArtist: String
    },
    methods: {
        onTrackSortTypeChanged(event) {
            this.$emit('update:trackSortType', event.target.value);
        }, 
        onArtistChanged(event) {
            this.$emit('update:selectedArtist', event.target.value);
        }

    }
}
</script>

<style scoped lang="scss">
</style>
