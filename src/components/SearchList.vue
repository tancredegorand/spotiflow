<template>
    <div class="searchHeader">
        <input type="text" v-model="searchValue" placeholder="Artist" @keypress.enter="retrieveSetData"/>
        <select v-model="albumSortType" id="album-sort" @change="sortAlbums">
            <option value="relevance">Relevance</option>
          <option value="AZName">A - Z</option>
          <option value="ZAName">Z - A</option>
          <option value="date">Release date</option>
        </select>
    </div>

    <div v-if="Object.keys(state).length !== 0" class="searchList">
        <AlbumItem
            v-for="album in sortedAlbums"
            :key="album.data.id"
            :name="album.data.name" 
            :artist="album.data.artists.items[0].profile.name"
            :img_url="album.data.coverArt.sources[0].url"
            :date="album.data.date.year"
        />
    </div>

    <div v-else>
        <p>loading...</p> 
    </div>
</template>

<script>
import AlbumItem from "./AlbumItem.vue";
import { getSearch } from "@/services/api/getSearch.js"

export default {
    name: 'SearchList',
    data() {
        return {
            state: {},
            searchValue: "",
            albumSortType: "relevance",
            originalOrder: [] 
        }; 
    },
    created() {
    },
    methods: {
        async retrieveSetData() {
            this.state = await getSearch(this.searchValue);
            this.originalOrder = [...this.state.albums.items]; 
            this.sortAlbums(); 
        },
        sortAlbums() {
            if (this.albumSortType === 'relevance') {
                this.state.albums.items = [...this.originalOrder]; 
            } else if (this.albumSortType === 'AZName') {
                this.state.albums.items.sort((a, b) => {
                    const nameA = a.data.name.toLowerCase();
                    const nameB = b.data.name.toLowerCase();
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                });
            } else if (this.albumSortType === 'ZAName') {
                this.state.albums.items.sort((a, b) => {
                    const nameA = a.data.name.toLowerCase();
                    const nameB = b.data.name.toLowerCase();
                    if (nameA > nameB) return -1;
                    if (nameA < nameB) return 1;
                    return 0;
                });
            } else if (this.albumSortType === 'date') {
                this.state.albums.items.sort((a, b) => {
                    const yearA = parseInt(a.data.date.year);
                    const yearB = parseInt(b.data.date.year);
                    return yearA - yearB;
                });
            }
        }
    },
    computed: {
        sortedAlbums() {
            return this.state.albums?.items || [];
        }
    },
    components: { AlbumItem }
}
</script>





<style scoped lang="scss">
    .searchList {
        background-color: orange;
    }
</style>
