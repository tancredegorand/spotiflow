<template>
    <div class="albumItem">
        <img pictureUrl="" v-bind:src="img_url"/>
        <div class="albumInfos">
            <p class="name">{{ truncatedName }}</p>
            <div>
                <p>{{ truncatedArtist }}</p>
                <p>{{ date }}</p>
            </div>

        </div>

    </div>
</template>

<script>

export default {
    name : 'AlbumItem',
    props:{
        name : String, 
        artist: String,  
        img_url: String, 
        date: Number, 

    },
    computed: {
        truncatedName() {
            if (this.name && this.name.length > 15) {
                return this.name.substring(0, 15) + "…";
            }
            return this.name;
        },
        truncatedArtist() {
            if (this.artist && this.artist.length > 10) {
                return this.artist.substring(0, 10) + "…";
            }
            return this.artist;
        }
    }
}
</script>

<style scoped lang="scss">
    .albumItem {
        display: flex;
        flex-direction:column;
        border-radius: 5px;
        padding: 10px;
        transition: 0.2s;
        img {
            width : 140px;
            border-radius:5px;
        }
        .albumInfos {
            margin-top: 5px;

            .name{
                font-size:var(--font-main-size);
            }
            div{
                display:flex;
                flex-wrap: wrap;
                gap: 15px;
                width:100%;
                p{
                    opacity: 0.7;
                    font-size: 0.9rem;
                }
            }
        }
    }
    .albumItem:hover{
        background-color: var(--color-gray);
        transition: 0.2s;
    }


    @media screen and (min-width: 600px){
        .albumItem{
            img {
                width : 200px;
            }
        }
    }
</style>
