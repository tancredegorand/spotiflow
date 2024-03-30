<template>
    <div class="trendingListeners">
      <!-- <div class="divImg3D">
        <img class="glow" src="/src/assets/icons/glow.svg" alt="">
        <img id="headphones" src="/src/assets/images/headphones.png" alt="">
      </div> -->
      <div class="list">
        <TrendingCards v-for="artist in filterdTrendingArtists"
          :name="artist.artist"
          :listeners="artist.monthlyListeners"
          :rank="artist.rank"
        />
      </div>
      <!-- <div class="divImg3D">
        <img class="glow" src="/src/assets/icons/glow.svg" alt="">
        <img id="musicNotes" src="/src/assets/images/music.png" alt="">
      </div> -->


      
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
    filterdTrendingArtists() {
      const data = this.artistsData.slice();
      if (data.length >= 2) { 
        const firstArtist = data.shift(); 
        data.splice(1, 0, firstArtist);
      }
      return data.slice(0, 3); 
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
  margin-top: var(--margin2);
    .list{
      margin-top: 15px;
      width: 100%;
      max-width: 1500px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }

  }



  .divImg3D{
    background-color: red;
    position: relative;
      .glow{
        position: absolute;
        //filter: blur(150px);
        width: 300px;
      }
      #headphones{
        width: 350px;
      }
      #musicNotes{

      }
  }

  @media screen and (min-width: 970px) {
    .trendingListeners .list {
    flex-direction: row;
  }
  }

</style>
