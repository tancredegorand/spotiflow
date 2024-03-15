<template>
    <div class="display">

        <section class="cover">
            <img pictureUrl="" v-bind:src="img_url"/>
        </section>
        <section class="albumInfo">
            <h2>{{ name }}</h2>
            <p>{{ artist }} </p>
            <div class="albumStat">
                <p>{{ total_tracks }} tracks </p>  
                <p>{{ formattedRealseDate }} </p>
                <p> Popularity : {{ popularity }}</p>
            </div>
        </section>
        <table>
            <tbody>
                <TrackDisplayInAlbum
                    v-for="track in tracks.items"
                    :track_number="track.track_number"
                    :track_name="track.name"
                    :duration="track.duration_ms"
                />
            </tbody>
        </table>
        <div class="label">
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
    .cover{
        margin-top: 100px;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            border-radius: 5px;
            box-shadow: -2px 36px 76px -33px rgba(0,0,0,0.79);
            -webkit-box-shadow: -2px 36px 76px -33px rgba(0,0,0,0.79);
            -moz-box-shadow: -2px 36px 76px -33px rgba(0,0,0,0.79);
        
        }
    }
    .albumInfo{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
    .albumStat{
        margin-top: 30px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        p{
            opacity: 0.7;
        }
    }

    .line{
        display: block;
        height: 2px;
        width: 100%;
        background-color: var(--color-gray);
        margin-top: 5px;
        margin-bottom: 10px;
    }

    table {
        border-top: solid 2px var(--color-gray);
        border-bottom: solid 2px var(--color-gray);
        margin-top: 15px;
        width: 100%;
        border-collapse: collapse;
        line-height: 50px; 
    }

    .label{
        margin-top: 30px;
        p{
            opacity: 0.7;
        }
    }
</style>
