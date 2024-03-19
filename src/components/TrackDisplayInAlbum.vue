<template>
    <tr class="TrackDisplayInAlbum">
        <td class="track_number">{{ track_number }}</td>
        <td class="track_name" >{{ track_name }}</td>
        <td class="duration">{{ formattedDuration }}</td>
    </tr>

</template>

<script>

export default {
    name : 'TrackDisplayInAlbum',
    props: {
        track_number: Number, 
        track_name: String,
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
    }


    

}
</script>

<style scoped lang="scss">

 .TrackDisplayInAlbum {

    .track_number{
        text-align: center;
        opacity: 0.7;
        width: 40px;
    }
    .track_name{
        border-top: solid 2px var(--color-gray);
        border-bottom: solid 2px var(--color-gray);
    }
    .duration{
        text-align: center;
        opacity: 0.7;
        border-top: solid 2px var(--color-gray);
        border-bottom: solid 2px var(--color-gray);
    }
 }

 .TrackDisplayInAlbum:hover{
    td{
        cursor: pointer;
        color: var(--color-orange);
    }
 }

 

</style>
