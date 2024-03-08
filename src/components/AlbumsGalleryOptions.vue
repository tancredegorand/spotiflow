<template>
    <select :value="albumSortType" id="album-sort" @input="onAlbumSortTypeChanged">
        <option value="relevance">Relevance</option>
        <option value="AZName">A - Z</option>
        <option value="date">Release date</option>
    </select>
</template>

<script>
export default {
    name: 'AlbumsGalleryOptions',
    emits: ["update:albumSortType"],
    props: {
        albumSortType: String 
    },
    methods: {
        onAlbumSortTypeChanged(event) {
            this.$emit('update:albumSortType', event.target.value);
        }
    }
}

</script>


<style scoped lang="scss">
</style>
