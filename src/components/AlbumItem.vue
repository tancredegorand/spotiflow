<template>
    <div class="albumItem">
        <img pictureUrl="" v-bind:src="img_url"/>
        <div class="albumInfos">
            <p class="name">{{ name }}</p>
            <div>
                <p>{{ artist }}</p>
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
}
</script>

<style scoped lang="scss">
    .albumItem {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        img {
            margin-right: 10px;
            width : 80px;
            border-radius:5px;
        }
        .albumInfos {
            .name{
                font-size:var(--font-main-size);
                margin-bottom: 10px;
            }
            div{
                display:flex; 
                flex-direction:raw; 
                width:100%;
                p{
                    margin-right:20px;
                    opacity: 0.7;
                }
            }
        }
    }

</style>
