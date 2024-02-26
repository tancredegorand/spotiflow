<template>
    <div class="TrackDisplayInAlbum">
        <p>{{ track_number }}</p>
        <p>{{ track_name }}</p>
        <p>{{ formattedDuration }}</p>
    </div>
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
    display: flex;
}
</style>
