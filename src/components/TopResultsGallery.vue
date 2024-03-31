<template>
    <section class="albumSection">
        <h2>ALBUMS</h2>
        <div>
            <AlbumItem
                v-for="album in filterdAlbums"
                :key="album.data.id"
                :name="album.data.name" 
                :artist="album.data.artists.items[0].profile.name"
                :img_url="album.data.coverArt.sources[0].url"
                :date="album.data.date.year"
                @click="redirectToAlbum(album)"
            />
        </div>
        <button class="actionBtn" @click="showView('albums')" >See More</button>
    </section>
    <section class="trackSection" >
        <h2>TRACKS</h2>
        <TrackItem
            v-for="track in filterdTracks"
            :name="track.data.name" 
            :artist="track.data.artists.items[0].profile.name"
            :img_url="getTrackCover(track.data.albumOfTrack.name)"
            :duration="track.data.duration.totalMilliseconds"
            @click="launchPlayer(track, getTrackCover(track.data.albumOfTrack.name))"
        />
        <button class="actionBtn" @click="showView('tracks')">See More</button>
    </section>




</template>



<script>
import AlbumItem from '@/components/AlbumItem.vue';
import TrackItem from '@/components/TrackItem.vue';

export default {
    name: 'AlbumsGallery',
    props: {
        data: Object
    },
    emits: ["update:switchValue", "update:playerSongData", "update:playerImgUrl"],
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
                return "./src/assets/image/unknowCover.webp"; 
            }
        }, 
        showView(value){
            this.$emit('update:switchValue', value);
        },
        launchPlayer(data, imgUrl){
            this.$emit('update:playerSongData', data);
            this.$emit('update:playerImgUrl', imgUrl);
        },
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
   
    .albumSection, .trackSection{
        margin-bottom: 30px;
    }

    .albumSection div {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin-bottom: 5px;

    }

    @media screen and (min-width: 600px) {
        .actionBtn{
            width: 250px;
        }

    }

</style>
