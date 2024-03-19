<template>
    <section>
        <div v-if="Object.keys(albumData).length !== 0">
            <div class="nav" :class="{ 'scrolled': isScrolled }">
                <img src="/src/assets/icons/backChevron.svg" @click="goBack">
                <h2 id="title">{{ albumData.albums[0].name }}</h2>
            </div>
            <div class="display">  
                <AlbumDisplay
                    :name="albumData.albums[0].name"
                    :img_url="albumData.albums[0].images[0].url"
                    :artist="albumData.albums[0].artists[0].name"  
                    :realse_date="albumData.albums[0].release_date"
                    :total_tracks="albumData.albums[0].total_tracks"
                    :popularity="albumData.albums[0].popularity"
                    :tracks="albumData.albums[0].tracks"
                    :label="albumData.albums[0].label"
                    :copyright="albumData.albums[0].copyrights[0].text"
                />
            </div>
          
        </div>


        <div v-else>
            <Loading/>
        </div>

        <Footer/>

    </section>
</template>

<script>
import AlbumDisplay from "@/components/AlbumDisplay.vue";
import Loading from "@/components/Loading.vue";
import Footer from "@/components/Footer.vue";
import { getAlbum } from "@/services/api/getAlbum.js";

export default {
  name: 'Results',
  data() {
    return {
      albumData: {},
      albumID: "",
      isScrolled: false,
    };
  },
  created() {
    this.albumID = this.$route.query.id;
    this.retrieveSetData();
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    async retrieveSetData() {
      this.albumData = await getAlbum(this.albumID);
      if (this.albumData.albums && this.albumData.albums[0] === null) {
        this.$router.push('/not-found');
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 400;
    },
  },
  components: { AlbumDisplay, Loading, Footer }
}
</script>

<style scoped lang="scss">
.display {
  padding: 15px;
}

.nav {
  background-color: var(--color-black);
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100vw;
  padding-top: 15px;
  padding-bottom: 5px;
  display: flex;
  justify-content: center;
  height: 90px;

  h2{
    opacity: 0;
    transition: 0.2s;
    font-size: 3rem; 
    margin-top: 7px;
    text-align: center;
    max-width: 75vw;
  }

  img {
    position: absolute;
    top: 30px;
    left: 15px;
    cursor: pointer;
  }

  &.scrolled{
    height: auto;
    h2{
        opacity: 1;
        transition: 0.2s;
    }
        
  } 
}


@media screen and (min-width: 600px){

  .nav{
    background-color: var(--color-black)0;
    position: absolute;
  }
}



</style>