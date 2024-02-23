<template>
    <div class="AlbumDisplay">
        <div>
            <div>
                <img pictureUrl="" v-bind:src="img_url"/>
            </div>
            <div>
                <h1>{{name}}</h1>
                <p>{{artist}} </p>
                <div>
                    <p>{{ formattedDate }} </p>
                    <p>{{ total_tracks }} songs </p>  
                    <p> Popularity : {{popularity}}</p>
                </div>
            </div>
            <span></span>
            


        </div>
        <div>

        </div>


        <p>{{popularity}}</p>

    </div>
</template>

<script>

export default {
    name : 'AlbumDisplay',
    props: {
        img_url: String, 
        name : String, 
        artist: String,  
        realse_date: Date, 
        total_tracks: Number, 
        popularity: Number, 
        tracks: Object, 
        
    },
    computed: {
        formattedDate() {
            if (!this.realse_date) return '';
            const date = new Date(this.realse_date);

            const day = ('0' + date.getDate()).slice(-2);
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const year = date.getFullYear();

            return `${day}/${month}/${year}`;
        }
    }

}
</script>

<style scoped lang="scss">
</style>
