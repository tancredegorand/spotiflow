<template>
    <div class="trendingListeners">
      <p>Artists with the most monthly listeners trends :</p>
      <div class="list">
        <TrendingCards v-for="artist in filterdTrendingArtists"
          :name="artist.artist"
          :listeners="artist.monthlyListeners"
        />
      </div>


      
    </div>
</template>

<script>
import TrendingCards from './TrendingCards.vue';
import {getTrendingArtists} from '@/services/api/getTrendingArtists.js';

export default {
  name: 'TrendingArtists',
  data() {
    return {
      artistsData: [],
    };
  },
  created(){
    this.retrieveSetData();
  },
  methods: {
    async retrieveSetData() {
      this.artistsData = await getTrendingArtists(); 
    },
  },
  computed: {
    filterdTrendingArtists(){
      return this.artistsData.slice(0, 3); 
    }

  },
  components: {TrendingCards}
}
</script>

<style scoped lang="scss">

.trendingListeners{
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    text-align: center;
  }

    .list{
      margin-top: 15px;
      width: 100%;
      max-width: 2000px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }

  }

  @media screen and (min-width: 800px) {
    .trendingListeners .list {
    flex-direction: row;
  }
  }

</style>
