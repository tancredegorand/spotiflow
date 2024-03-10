<template>
    <AlbumsGalleryOptions 
        :artistList="artistList"
        :albumSortType="albumSortType" 
        :selectedArtist="selectedArtist"
        @update:albumSortType="updateAlbumSortType"
        @update:selectedArtist="updateSelectedArtist"
    />
    <div class="albums-gallery">

        <AlbumItem
            v-for="album in filteredAlbums"
            :key="album.data.id"
            :name="album.data.name" 
            :artist="album.data.artists.items[0].profile.name"
            :img_url="album.data.coverArt.sources[0].url"
            :date="album.data.date.year"
            @click="redirectToAlbum(album)"
        />  

    </div>

</template>



<script>
import AlbumsGalleryOptions from '@/components/AlbumsGalleryOptions.vue';
import AlbumItem from '@/components/AlbumItem.vue';

export default {
    name: 'AlbumsGallery',
    props: {
        data: Object
    },
    data() {
        return {
            albumSortType: "relevance", 
            originalAlbumOrder: [],
            selectedArtist: "allArtists", 
            artistList: [],
            albumID: "", 
        }
    },
    created() {
        this.originalAlbumOrder = [...this.data.albums.items]; 
        this.setArtists(); 
    }, 
    methods: {
        setArtists(){
            let artistList = [];
            this.data.albums.items.forEach(album => {
                artistList.push(album.data.artists.items[0].profile.name);
            }); 
            this.artistList = [...new Set(artistList)];
        },
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
        updateAlbumSortType(value) {
            this.albumSortType = value;
        },
        updateSelectedArtist(value) {
            this.selectedArtist = value;
        },
    },
    computed: {
        sortedAlbums() {
                if (this.albumSortType === 'relevance') {
                    return [...this.originalAlbumOrder]; 
                } else if (this.albumSortType === 'AZName') {
                    return [...this.originalAlbumOrder].sort((a, b) => {
                        const nameA = a.data.name.toLowerCase();
                        const nameB = b.data.name.toLowerCase();
                        if (nameA < nameB) return -1;
                        if (nameA > nameB) return 1;
                        return 0;
                    });
                } else if (this.albumSortType === 'date') {
                    return [...this.originalAlbumOrder].sort((a, b) => {
                        const yearA = parseInt(a.data.date.year);
                        const yearB = parseInt(b.data.date.year);
                        return yearA - yearB;
                    });
                }
                return [];
            },
        
            filteredAlbums() {
                if (this.selectedArtist === "allArtists") {
                    return this.sortedAlbums;
                } else {
                    return this.sortedAlbums.filter(album => {
                        const artistName = album.data.artists.items[0].profile.name;
                        return artistName === this.selectedArtist;
                    });
                }
            }

    }, 
    components: { AlbumsGalleryOptions, AlbumItem }
}

</script>


<style scoped lang="scss">
</style>
