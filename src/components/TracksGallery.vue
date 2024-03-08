<template>
    <TracksGalleryOptions v-model:trackSortType="trackSortType" />
    <div class="tracks-gallery">
        <TrackItem
            v-for="track in sortedTracks"
            :name="track.data.name" 
            :artist="track.data.artists.items[0].profile.name"
            :album="track.data.artists.items[0].profile.name"
            :img_url="getTrackCover(track.data.albumOfTrack.name)"
        />

    </div>

</template>



<script>
import TracksGalleryOptions from '@/components/TracksGalleryOptions.vue';
import TrackItem from '@/components/TrackItem.vue';

export default {
    name: 'TracksGallery',
    props: {
        data: Object
    },
    data() {
        return {
            trackSortType: "relevance", 
            originalTrackOrder: [],
        }
    },
    created() {
        this.originalTrackOrder = [...this.data.tracks]; 
    }, 
    methods: {
        getTrackCover(name) { 
            //We can also make a request to the API, but we will optimize it by checking if the URL is already present in the JSON.
            const albumItem = this.data.albums.items.find(item => item.data.name === name);
            if (albumItem) {
                return albumItem.data.coverArt.sources[0].url;
            } else {
                return "./src/components/images/unknowCover.webp"; 
            }
        }
    },
    computed: {
        sortedTracks() {
            if (this.trackSortType === 'relevance') {
                return [...this.originalTrackOrder]; 
            } else if (this.trackSortType === 'AZName') {
                return [...this.originalTrackOrder].sort((a, b) => {
                    const nameA = a.data.name.toLowerCase();
                    const nameB = b.data.name.toLowerCase();
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                });
            } 
            return [];
        },
        
    }, 
    components: { TracksGalleryOptions, TrackItem }
}

</script>


<style scoped lang="scss">
</style>
