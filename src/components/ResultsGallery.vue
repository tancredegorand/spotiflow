<template>
    <div v-if="switchValue === 'albums'">
        <AlbumsGallery :data="data" />
    </div>
    <div v-if="switchValue === 'tracks'">
        <TracksGallery 
        :data="data"
        @update:playerSongData="handlePlayerSongDataUpdate"
        @update:playerImgUrl="handlePlayerImgUrlUpdate"
        />
    </div>
    <div v-if="switchValue === 'top-results'">
        <TopResultsGallery 
        :data="data"
        @update:switchValue="handleSwitchValueUpdate"
        @update:playerSongData="handlePlayerSongDataUpdate"
        />
    </div>
</template>



<script>
import AlbumsGallery from '@/components/AlbumsGallery.vue';
import TracksGallery from '@/components/TracksGallery.vue';
import TopResultsGallery from '@/components/TopResultsGallery.vue';

export default {
    name: 'ResultsGallery',
    props: {
        switchValue: String,
        data: Object, 
    },
    methods: {
        handleSwitchValueUpdate(value){
            this.$emit('update:switchValue', value);
        },
        handlePlayerSongDataUpdate(value){
            this.$emit('update:playerSongData', value);
        },
        handlePlayerImgUrlUpdate(value){
            this.$emit('update:playerImgUrl', value);
        }
    },
    components: { AlbumsGallery, TracksGallery, TopResultsGallery }
}

</script>


<style scoped lang="scss">
</style>
