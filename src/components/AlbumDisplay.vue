<template>
    <div class="AlbumDisplay">
        <div>
            <div>
                <img pictureUrl="" v-bind:src="img_url"/>
            </div>
            <div>
                <h1>{{ name }}</h1>
                <p>{{ artist }} </p>
                <div>
                    <p>{{ total_tracks }} tracks </p>  
                    <p>{{ formattedRealseDate }} </p>
                    <p> Popularity : {{ popularity }}</p>
                </div>
            </div>
        </div>

        <TrackDisplayInAlbum
            v-for="track in tracks.items"
            :track_number="track.track_number"
            :track_name="track.name"
            :duration="track.duration_ms"
        />

        <div>
            <p>@ {{ label }} </p>  
        </div>

        
    </div>
</template>

<script>
import TrackDisplayInAlbum from "./TrackDisplayInAlbum.vue"

export default {
    name : 'AlbumDisplay',
    props: {
        img_url: String, 
        name : String, 
        artist: String,  
        realse_date: String, 
        total_tracks: Number, 
        popularity: Number, 
        tracks: Object, 
        label: String,
        copyright: String,
        
    },
    computed: {
        formattedRealseDate() {
            if (!this.realse_date) return '';
            const date = new Date(this.realse_date);

            const day = ('0' + date.getDate()).slice(-2);
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const year = date.getFullYear();

            return `${day}/${month}/${year}`;
        }
    }, 
    components: { TrackDisplayInAlbum  }

}
</script>

<style scoped lang="scss">
</style>
