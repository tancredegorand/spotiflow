<template>
    <div class="trackItem">
        <img pictureUrl="" v-bind:src="img_url"/>
        <div class="trackInfos">
            <p class="name">{{ name }}</p>
            <p class="artist">{{ artist }}</p>
        </div>
        <p class="duration">{{formattedDuration}}</p>

    </div>
</template>

<script>

export default {
    name : 'TrackItem',
    props:{
        name : String, 
        artist: String,  
        img_url: String, 
        duration: Number,

    },
    computed: {
        formattedDuration() {
            if (!this.duration) return '';
            
            const totalSeconds = parseInt(this.duration) / 1000; 
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = Math.floor(totalSeconds % 60);

            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    },
}
</script>

<style scoped lang="scss">
    .trackItem {
        display: flex;
        align-items: center;

        margin-bottom: 10px;
        padding: 10px;
        border-radius: 5px;
        transition: 0.2s;

        .duration{
            flex-grow: 1;
            opacity: 0.7;
            text-align: right;
        }
        img {
            margin-right: 10px;
            width : 80px;
            border-radius:5px;
        }
        .trackInfos {
            .name{
                font-size:var(--font-main-size);
                margin-bottom: 10px;
            }
            .artist{
                margin-right:20px;
                opacity: 0.7;
            }
        }
    }
    

    .trackItem:hover{
        background-color: var(--color-gray-opacity);
        backdrop-filter: blur(var(--blur));
        transition: 0.2s;
    }

</style>
