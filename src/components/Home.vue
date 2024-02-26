<template>
    <div v-if="Object.keys(state).length !== 0 && albumItemClicked === false  && homeDisplay===false" class="searchList">
        <span class="backLink" @click="backLinkToHome"> BACK </span>
        <div class="searchHeader">
            <input type="text" v-model="searchValue" placeholder="Artist, Album..." @keyup.enter="retrieveSetData"/>
        </div>
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
            @click="handleAlbumItemClick(album)"
        />
    </div>

    <div v-else-if="Object.keys(albumData).length !== 0 && albumItemClicked === true && homeDisplay===false">
        <span class="backLink" @click="backLinkToList"> BACK </span>
        <AlbumDisplay
            :name="albumData.albums[0].name"
            :img_url="albumData.albums[0].images[1].url"
            :artist="albumData.albums[0].artists[0].name"  
            :realse_date="albumData.albums[0].release_date"
            :total_tracks="albumData.albums[0].total_tracks"
            :popularity="albumData.albums[0].popularity"
            :tracks="albumData.albums[0].tracks"
        />
    </div>


    
    <div  v-else-if="this.homeDisplay==true">
        <div class="searchHeader">
            <input type="text" v-model="searchValue" placeholder="Artist, Album..." @keyup.enter="retrieveSetData"/>
        </div>
        <p>HOME...</p> 
    </div>


    <div v-else>
        <div class="searchHeader">
            <input type="text" v-model="searchValue" placeholder="Artist, Album..." @keyup.enter="retrieveSetData"/>
        </div>
        <p>Loading...</p> 
    </div>
</template>

<script>
import AlbumItem from "./AlbumItem.vue";
import AlbumDisplay from "./AlbumDisplay.vue";
import { getSearch } from "@/services/api/getSearch.js"
import { getAlbum } from "@/services/api/getAlbum.js"

export default {
    name: 'Home',
    data() {
        return {
            state: {},
            albumData: {},
            originalOrder: [],
            searchValue: "",
            albumSortType: "relevance",
            albumID: "", 
            albumItemClicked: false,
            homeDisplay: true, 
        }; 
    },
    created() {
    },
    methods: {
        async retrieveSetData() {
            this.homeDisplay=false; 
            this.state = await getSearch(this.searchValue);
            this.originalOrder = [...this.state.albums.items]; 
            this.sortAlbums(); 
        },
        async retrieveAlbumData() {
            this.albumData = await getAlbum(this.albumID); 

        },
        sortAlbums() {
            if (this.albumSortType === 'relevance') {
                this.state.albums.items = [...this.originalOrder]; 
            } else if (this.albumSortType === 'AZName') {
                this.state.albums.items = [...this.originalOrder].sort((a, b) => {
                    const nameA = a.data.name.toLowerCase();
                    const nameB = b.data.name.toLowerCase();
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                });
            } else if (this.albumSortType === 'date') {
                this.state.albums.items = [...this.originalOrder].sort((a, b) => {
                    const yearA = parseInt(a.data.date.year);
                    const yearB = parseInt(b.data.date.year);
                    return yearA - yearB;
                });
            }
        },
        handleAlbumItemClick(album){
            this.albumItemClicked = true;
            //ID generation
            let id = album.data.uri; 
            id = id.replace("spotify:album:", ""); 
            this.albumID = id; 
            this.retrieveAlbumData();
        },
        backLinkToList(){
            this.albumItemClicked = false;
            this.albumData = {};
        },
        backLinkToHome(){
            this.homeDisplay = true;
        }
    },
    computed: {
        sortedAlbums() {
            return this.state.albums?.items || [];
        }
    },
    components: { AlbumItem , AlbumDisplay }
}
</script>


<style scoped lang="scss">
    .searchList {
        background-color: orange;
    }
</style>
