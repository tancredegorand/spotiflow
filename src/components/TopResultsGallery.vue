<template>
<h2>Albums</h2>
  <AlbumItem
        v-for="album in filterdAlbums"
        :key="album.data.id"
        :name="album.data.name" 
        :artist="album.data.artists.items[0].profile.name"
        :img_url="album.data.coverArt.sources[0].url"
        :date="album.data.date.year"
        @click="redirectToAlbum(album)"
    />
    <button @click="showView('albums')" >See More</button>
  <h2>Tracks</h2>
  <TrackItem
        v-for="track in filterdTracks"
        :name="track.data.name" 
        :artist="track.data.artists.items[0].profile.name"
        :album="track.data.artists.items[0].profile.name"
        :img_url="getTrackCover(track.data.albumOfTrack.name)"
    />
    <button @click="showView('tracks')">See More</button>

</template>



<script>
import AlbumItem from '@/components/AlbumItem.vue';
import TrackItem from '@/components/TrackItem.vue';

export default {
    name: 'AlbumsGallery',
    props: {
        data: Object
    },
    emits: ["update:switchValue"],
    data() {
        return {
            albumSortType: "relevance", 
            albumID: "", 
        }
    },

    methods: {
        getID(album){
            let id = album.data.uri; 
            id = id.replace("spotify:album:", ""); 
            this.albumID = id; 
        },
        redirectToAlbum(album) {
            this.getID(album); 
            if (this.albumID.trim() !== ""){
                this.$router.push({ path: '/album', query: { id: this.albumID} });
            }
        }, 
        getTrackCover(name) { 
            //We can also make a request to the API, but we will optimize it by checking if the URL is already present in the JSON.
            const albumItem = this.data.albums.items.find(item => item.data.name === name);
            if (albumItem) {
                return albumItem.data.coverArt.sources[0].url;
            } else {
                return "./src/components/images/unknowCover.webp"; 
            }
        }, 
        showView(value){
            this.$emit('update:switchValue', value);
        }
    },
    computed: {
        filterdAlbums(){
            return this.data.albums.items.slice(0, 2);
        },
        filterdTracks(){
            return this.data.tracks.slice(0, 3);
        },
    }, 
    components: { AlbumItem, TrackItem }
}
</script>


<style scoped lang="scss">
</style>
