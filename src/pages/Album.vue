<template>
    <div v-if="Object.keys(albumData).length !== 0">
        <a @click="goBack">BACK</a>
        <AlbumDisplay
            :name="albumData.albums[0].name"
            :img_url="albumData.albums[0].images[1].url"
            :artist="albumData.albums[0].artists[0].name"  
            :realse_date="albumData.albums[0].release_date"
            :total_tracks="albumData.albums[0].total_tracks"
            :popularity="albumData.albums[0].popularity"
            :tracks="albumData.albums[0].tracks"
            :label="albumData.albums[0].label"
            :copyright="albumData.albums[0].copyrights[0].text"
        />
    </div>


    <div v-else>
        <p>Loading...</p> 
    </div>
</template>

<script>
import AlbumDisplay from "@/components/AlbumDisplay.vue";
import { getAlbum } from "@/services/api/getAlbum.js";

export default {
    name: 'Results',
    data() {
        return {
            albumData: {},
            albumID: "", 
        }; 
    },
    created() {
        this.albumID = this.$route.query.id; 
        this.retrieveSetData();
    },
    methods: {
        async retrieveSetData(){
            this.albumData = await getAlbum(this.albumID);
            if (this.albumData.albums && this.albumData.albums[0] === null) {
                this.$router.push('/not-found');
            }

        },
        goBack() {
            this.$router.go(-1);
        }
    },
    components: { AlbumDisplay }
}
</script>


<style scoped lang="scss">
</style>
