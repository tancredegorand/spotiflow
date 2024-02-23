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
        background-color: red;
        display: flex;
        align-items: center;
        margin: 10px;
        img {
            margin-right: 10px;
            width : 120px;
            border-radius:10px;
        }
        .albumInfos {
            background-color:orange;
            .name{
                font-size:1.4rem;
            }
            div{
                display:flex; 
                flex-direction:raw; 
                width:100%;
                p{
                    margin-right:20px;
                }
            }
        }
    }

</style>
