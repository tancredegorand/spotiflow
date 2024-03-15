<template>
    <section>
        <div v-if="Object.keys(albumData).length !== 0">
            <div class="nav" :class="{ 'scrolled': isScrolled }">
                <img src="/src/assets/icons/backChevron.svg" @click="goBack">
                <h1 id="title">{{ albumData.albums[0].name }}</h1>
            </div>
            <div class="display">  
                <AlbumDisplay
                    :name="albumData.albums[0].name"
                    :img_url="albumData.albums[0].images[1].url"
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
            <p>Loading...</p> 
        </div>
    </section>
</template>

<script>
import AlbumDisplay from "@/components/AlbumDisplay.vue";
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
  components: { AlbumDisplay }
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
  height: 80px;
  padding-top: 15px;
  padding-bottom: 5px;
  display: flex;
  justify-content: center;

  h1{
    opacity: 0;
    transition: 0.2s;
    font-size: 3rem; 
    margin-top: 7px;
  }

  img {
    position: absolute;
    top: 30px;
    left: 15px;
  }

  &.scrolled h1 {
    opacity: 1;
    transition: 0.2s;
    
  }
}
</style>