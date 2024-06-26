<template>
    <TracksGalleryOptions 
        :trackSortType="trackSortType" 
        :artistList="artistList"
        :selectedArtist="selectedArtist"
        @update:trackSortType="updateTrackSortType"
        @update:selectedArtist="updateSelectedArtist"
    />
    <div class="tracks-gallery">
        <TrackItem
            v-for="track in filteredTracks"
            :name="track.data.name" 
            :artist="track.data.artists.items[0].profile.name"
            :img_url="getTrackCover(track.data.albumOfTrack.name)"
            :duration="track.data.duration.totalMilliseconds"
            @click="launchPlayer(track, getTrackCover(track.data.albumOfTrack.name))"
        />

    </div>

</template>



<script>
import TracksGalleryOptions from '@/components/TracksGalleryOptions.vue';
import TrackItem from '@/components/TrackItem.vue';
import imageUnknow from "/src/assets/image/unknowCover.webp"; 

export default {
    name: 'TracksGallery',
    props: {
        data: Object
    },
    emits: ["update:playerSongData", "update:playerImgUrl"],
    data() {
        return {
            trackSortType: "", 
            selectedArtist: "allArtists", 
            originalTrackOrder: [],
            artistList: [],
        }
    },
    created() {
        this.originalTrackOrder = [...this.data.tracks]; 
        this.setArtists(); 
    }, 
    mounted() {
        const storedTrackSortType = localStorage.getItem('trackSortType');
        if (storedTrackSortType !== null) {
            this.trackSortType = storedTrackSortType;
        }else {
            this.trackSortType = "relevance"; 
        }
    }, 
    methods: {
        getTrackCover(name) { 
            //We can also make a request to the API, but we will optimize it by checking if the URL is already present in the JSON.
            const albumItem = this.data.albums.items.find(item => item.data.name === name);
            if (albumItem) {
                return albumItem.data.coverArt.sources[0].url;
            } else {
                return imageUnknow; 
            }
        }, 
        setArtists(){
            let artistList = [];
            this.data.tracks.forEach(track => {
                artistList.push(track.data.artists.items[0].profile.name);
            }); 
            this.artistList = [...new Set(artistList)];
        },
        updateTrackSortType(value) {
            this.trackSortType = value;
        },
        updateSelectedArtist(value) {
            this.selectedArtist = value;
        },
        launchPlayer(data, imgUrl){
            this.$emit('update:playerSongData', data);
            this.$emit('update:playerImgUrl', imgUrl);
        },
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
        filteredTracks() {
            if (this.selectedArtist === "allArtists") {
                return this.sortedTracks.slice(0, 20);
            } else {
                return this.sortedTracks.filter(track => {
                    const artistName = track.data.artists.items[0].profile.name;
                    return artistName === this.selectedArtist.slice(0, 20);
                });
            }
        }
        
    }, 
    
    components: { TracksGalleryOptions, TrackItem }
}

</script>



