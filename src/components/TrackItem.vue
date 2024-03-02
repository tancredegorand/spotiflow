<template>
    <div class="trackItem">
        <img pictureUrl="" v-bind:src="img_url"/>
        <div class="trackInfos">
            <p class="name">{{ name }}</p>
            <p>{{ artist }}</p>
        </div>

    </div>
</template>

<script>

export default {
    name : 'TrackItem',
    props:{
        name : String, 
        artist: String,  
        img_url: String, 
        album: String,

    },
}
</script>

<style scoped lang="scss">
    .trackItem {
        background-color: red;
        display: flex;
        align-items: center;
        margin: 10px;
        img {
            margin-right: 10px;
            width : 120px;
            border-radius:10px;
        }
        .trackInfos{

        }
    }


</style>
