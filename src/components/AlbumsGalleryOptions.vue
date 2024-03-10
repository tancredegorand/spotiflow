<template>
    <select :value="albumSortType" id="album-sort" @change="onAlbumSortTypeChanged">
        <option value="relevance">Relevance</option>
        <option value="AZName">A - Z</option>
        <option value="date">Release date</option>
    </select>

    <select :value="selectedArtist" @change="onArtistChanged">
        <option value="allArtists">All Artists</option>
        <option v-for="(artist, index) in artistList" :key="index" :value="artist">{{ artist }}</option>
    </select>
</template>

<script>
export default {
    name: 'AlbumsGalleryOptions',
    props: {
        albumSortType: String,
        artistList: Array, 
        selectedArtist: String
    },
    methods: {
        onAlbumSortTypeChanged(event) {
            this.$emit('update:albumSortType', event.target.value);
        }, 
        onArtistChanged(event) {
            this.$emit('update:selectedArtist', event.target.value);
        }
    }
}
</script>



<style scoped lang="scss">
</style>
