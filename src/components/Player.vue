<template>
    <div v-if="Object.keys(data).length !== 0" class="player">
      <div class="playerInfo">  
        <img :src="playerImgUrl" alt="">
        <p class="title">{{ playerSongData.data.name }}</p>
        <div class="playerControls">
            <img src="/src/assets/svg/pause.svg" alt="" id="controlIcon" class="pause">
            <img src="/src/assets/svg/xmark.svg" alt="">
        </div>
      </div>
      <audio controls :src="audioUrl" type="audio/mpeg" id="song"></audio>
      <input type="range" value="0" id="audioProgress">
  
    </div>
    <div v-else>
      Chargement en cours...
    </div>
</template>

<script>
import { getSong } from "@/services/api/getSong.js"

export default {
  name: 'Player',
  props:{
    playerSongData: Object,
    playerImgUrl: String,
    albumsData: Object,
  }, 
  data() {
    return {
      data: [],
      audioUrl: "", 
    }
  },
  watch: {
    playerSongData(newValue) {
      if (newValue && newValue !== '') {
        this.data = [];
        this.retrieveSetData();
        console.log(this.playerImgUrl);
      }
    }
  },
  mounted() {
  },
  methods: {
    async retrieveSetData() {
      this.data = await getSong(this.playerInfo(this.playerSongData)); 
      this.audioUrl = this.data[0].url; 
    },
    playerInfo(track){
      let info = track.data.name+'+'+track.data.artists.items[0].profile.name; 
      info = info.replace(/\s+/g, '+');
      return info; 
    },
  }

}
</script>

<style scoped lang="scss">
.player {
  z-index: 4;
  position: fixed;
  bottom: var(--margin);;
  right: var(--margin);
  left: var(--margin);

  background-color: var(--color-black-opacity);
  border: 1px solid var(--color-white);
  backdrop-filter: blur(var(--blur));
  padding: var(--margin);
  border-radius: var(--border-radius);

  display: flex;
  flex-direction: column;
  align-items: center;

  .playerInfo{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    img{
      width: 50px;
      border-radius: var(--border-radius);
      margin-right: var(--margin); 
    }

    .title{
      flex-grow: 1;
    }


    .playerControls{
      display: flex;
      align-items: center;
      justify-content: space-around;

    img:first-child{
      height: 40px;
    }
    img:last-child{
      height: 40px;
      margin: 0;
    }
}


  }
  #audioProgress{
      -webkit-appearance: none;
      width: 100%;
      cursor: pointer;
      border-radius: var(--border-radius);
      background-color: var(--color-white);
      height: 5px;
  }
  #audioProgress::-webkit-progress-bar{
  background-color: var(--color-white);
  border-radius: 5px;

  }
  #audioProgress::-webkit-slider-thumb{
    -webkit-appearance: none;
    background-color: var(--color-orange);
    width: 30px;
    height: 15px;
    border-radius: var(--border-radius);
    box-shadow: 0px 0px 4px var(--color-orange);
  }

}

</style>
