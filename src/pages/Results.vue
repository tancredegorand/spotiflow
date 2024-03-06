<template>
    <div>
        <router-link :to="{ path: '/' }">BACK</router-link>
        
        <SearchBar
            :searchValue="searchValueData"
        />

        <div v-if="Object.keys(data).length !== 0"> 
            <Switch
                :switchValue="switchValueData"
                @update:switchValue="updateSwitchValue"
            />
            <ResultsGallery
                :switchValue="switchValueData"
            />
        </div>
        <div v-else>
            <p>Loading...</p> 
        </div>
    </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue"; 
import Switch from "@/components/Switch.vue"; 
import ResultsGallery from "@/components/ResultsGallery.vue"; 
import { getSearch } from "@/services/api/getSearch.js";

export default {
    name: 'Results',
    data() {
        return {
            data: {},
            switchValueData: "top-results", 
        }; 
    },
    created() {
        this.searchValueData = this.$route.query.search_query; 
        this.retrieveSetData()
    }, 
    methods: {
        async retrieveSetData() {
            this.data = await getSearch(this.searchValue); 
        },
        updateSwitchValue(newValue) {
            this.switchValueData = newValue;
        }
    },
    components: { SearchBar, Switch, ResultsGallery }
}


//     data() {
//         return {
//             state: {},
//             originalAlbumOrder: [],
//             originalTrackOrder: [],
//             searchValueData: "",
//             albumSortType: "relevance",
//             trackSortType: "relevance",
//             albumID: "", 
//             switchValue: "top-results",
//         }; 
//     },
//     created() {
//         this.searchValue = this.$route.query.search_query; 
//         this.retrieveSetData();
//     },
//     methods: {
//         async retrieveSetData() {
//             this.searchValueData = value; 
//             this.state = await getSearch(this.searchValue);
//             this.originalAlbumOrder = [...this.state.albums.items]; 
//             this.originalTrackOrder = [...this.state.tracks]; 
//         },
//         setSearchValueData(value){
//         },  
//         getID(album){
//             let id = album.data.uri; 
//             id = id.replace("spotify:album:", ""); 
//             this.albumID = id; 
//         },
//         redirectToResults() {
//             if (this.searchValue.trim() !== ""){
//                 this.$router.push({ path: '/results', query: { search_query: this.searchValue } });
//                 this.state = {};
//                 this.retrieveSetData();
//             }
//         },
//         redirectToAlbum(album) {
//             this.getID(album); 
//             if (this.albumID.trim() !== ""){
//                 this.$router.push({ path: '/album', query: { id: this.albumID} });
//             }
//         }, 
//         getTrackCover(name) { 
//             //We can also make a request to the API, but we will optimize it by checking if the URL is already present in the JSON.
//             const albumItem = this.state.albums.items.find(item => item.data.name === name);
//             if (albumItem) {
//                 return albumItem.data.coverArt.sources[0].url;
//             } else {
//                 return "./src/components/images/unknowCover.webp"; 
//             }
//         }, 
//         showView(value){
//             this.switchValue = value;
//         }
//     },
//     computed: {
//         sortedAlbums() {
//             if (this.albumSortType === 'relevance') {
//                 return [...this.originalAlbumOrder]; 
//             } else if (this.albumSortType === 'AZName') {
//                 return [...this.originalAlbumOrder].sort((a, b) => {
//                     const nameA = a.data.name.toLowerCase();
//                     const nameB = b.data.name.toLowerCase();
//                     if (nameA < nameB) return -1;
//                     if (nameA > nameB) return 1;
//                     return 0;
//                 });
//             } else if (this.albumSortType === 'date') {
//                 return [...this.originalAlbumOrder].sort((a, b) => {
//                     const yearA = parseInt(a.data.date.year);
//                     const yearB = parseInt(b.data.date.year);
//                     return yearA - yearB;
//                 });
//             }
//             return [];
//         }, 
//         sortedTracks() {
//             if (this.trackSortType === 'relevance') {
//                 return [...this.originalTrackOrder]; 
//             } else if (this.trackSortType === 'AZName') {
//                 return [...this.originalTrackOrder].sort((a, b) => {
//                     const nameA = a.data.name.toLowerCase();
//                     const nameB = b.data.name.toLowerCase();
//                     if (nameA < nameB) return -1;
//                     if (nameA > nameB) return 1;
//                     return 0;
//                 });
//             } 
//             return [];
//         }, 
//         filterdAlbums(){
//             return this.originalAlbumOrder.slice(0, 2);
//         },
//         filterdTracks(){
//             return this.originalTrackOrder.slice(0, 3);
//         },
//     },


</script>


<style scoped lang="scss">



</style>


<!-- 
    <div v-if="Object.keys(state).length !== 0">

       
      
    

    </div>


    <div v-if="switchValue === 'albums' && Object.keys(state).length !== 0">
        <select v-model="albumSortType" id="album-sort" @change="sortAlbums">
            <option value="relevance">Relevance</option>
            <option value="AZName">A - Z</option>
            <option value="date">Release date</option>
        </select>

        <AlbumItem
            v-for="album in sortedAlbums"
            :key="album.data.id"
            :name="album.data.name" 
            :artist="album.data.artists.items[0].profile.name"
            :img_url="album.data.coverArt.sources[0].url"
            :date="album.data.date.year"
            @click="redirectToAlbum(album)"
        />
    </div>

    <div v-else-if="switchValue === 'tracks' && Object.keys(state).length !== 0">
        <select v-model="trackSortType" id="album-sort" @change="sortTracks">
            <option value="relevance">Relevance</option>
            <option value="AZName">A - Z</option>
        </select>

        <TrackItem
            v-for="track in sortedTracks"
            :name="track.data.name" 
            :artist="track.data.artists.items[0].profile.name"
            :album="track.data.artists.items[0].profile.name"
            :img_url="getTrackCover(track.data.albumOfTrack.name)"
        />

    </div>

    <div v-else-if="switchValue === 'top-results' && Object.keys(state).length !== 0">
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
    </div> -->

