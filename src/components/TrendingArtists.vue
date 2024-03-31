<template>
  <img id="lines1" src="/src/assets/svg/lines1.svg" alt="">
    <div class="trendingListeners">
      <div class="divImg3D">
        <img id="glow1" src="/src/assets/svg/glow.svg" alt="">
        <img id="headphones" src="/src/assets/image/headphones.png" alt="">
      </div>
      <div class="list">
        <TrendingCards v-for="artist in filterdTrendingArtists"
          :name="artist.artist"
          :listeners="artist.monthlyListeners"
          :rank="artist.rank"
        />
      </div>
      <div class="divImg3D">
        <img id="glow2" src="/src/assets/svg/glow.svg" alt="">
        <img id="musicNotes" src="/src/assets/image/music.png" alt="">
      </div>


      
    </div>
</template>

<script>
import TrendingCards from './TrendingCards.vue';
import { getTrendingArtists } from '@/services/api/getTrendingArtists.js';

export default {
  name: 'TrendingArtists',
  data() {
    return {
      artistsData: [],
      windowSize: 0,
    };
  },
  created() {
    this.retrieveSetData();
    this.updateScreenWidth();
  },
  mounted() {
    document.body.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('resize', this.updateScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenWidth);
    document.body.removeEventListener('mousemove', this.handleMouseMove);
  },
  methods: {
    async retrieveSetData() {
      this.artistsData = await getTrendingArtists();
    },
    updateScreenWidth() {
      this.windowSize = window.innerWidth;
    },
    handleMouseMove(event) {
      const headphones = document.getElementById('headphones');
      const musicNotes = document.getElementById('musicNotes');
      const { clientX, clientY } = event;

      const deltaX1 = clientX / window.innerWidth * 10; 
      const deltaY1 = clientY / window.innerHeight * 10;

      const deltaX2 = clientX / window.innerWidth * 5;
      const deltaY2 = clientY / window.innerHeight * 5; 

      headphones.style.transform = `translate(${deltaX1}px, ${deltaY1}px)`;
      musicNotes.style.transform = `translate(${deltaY2}px, ${deltaX2}px)`;
    }
  },
  computed: {
    filterdTrendingArtists() {
      if (this.windowSize >= 970) {
        const data = this.artistsData.slice();
        if (data.length >= 2) {
          const firstArtist = data.shift();
          data.splice(1, 0, firstArtist);
        }
        return data.slice(0, 3);
      } else {
        return this.artistsData.slice(0, 3);
      }
    },
  },
  components: { TrendingCards },
}
</script>


<style scoped lang="scss">

.trendingListeners{
  position: relative;
  flex-direction: column;
  display: flex;
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
      z-index: 2;
    }

  }



  .divImg3D{
      #glow1{
        position: absolute;
        top: -160px;
        left: -200px;
        filter: blur(150px);
        width: 300px;
        z-index: 1;
      }
      #headphones{
        z-index: 3;
        position: absolute;
        width: 250px;
        top: -160px;
        left: -15vw;
      }
      #glow2{
        z-index: 1;
        position: absolute;
        width: 300px;
        bottom: -150px;
        filter: blur(150px);
      }
      #musicNotes{
        z-index: 3;
        position: absolute;
        width: 250px;
        bottom: -150px;
        right: -110px;
      }
  }

  #lines1{
    position: absolute;
    width: 100vw;
    left: 0;
    top: 150px;
  }

  @media screen and (min-width: 600px) {
    .divImg3D{
      #glow1{
        left: -5vw;
        width: 300px;
      }
      #headphones{
        left: -2vw;
        
      }
      #glow2{
        right: -2vw;
      }
      #musicNotes{
        width: 250px;
        right: -2vw;
      }
    }
  }

  @media screen and (min-width: 970px) {
    .trendingListeners .list {
    flex-direction: row;
    align-items: stretch;
    }
    .divImg3D{
      #glow1{
        left: -125px;
        width: 300px;
      }
      #headphones{
        left: -125px;
        top:-380px;
        width: 400px;
      }
      #glow2{
        top:-100px;
        right: -150px;
      }
      #musicNotes{
        width: 400px;
        top:-250px;
        right: -150px;
      }
    }
  }


</style>
