<template>
    <div class="player">
      <div v-if="Object.keys(data).length !== 0" class="playerInfo">  
        <img :src="playerImgUrl" alt="">
        <p class="title">{{ playerSongData.data.name }}</p>
        <div class="playerControls">
            <img @click="playPause" src="/src/assets/svg/pause.svg" alt="" id="controlIcon" class="pause" >
            <img src="/src/assets/svg/xmark.svg" alt="">
        </div>
      </div>
      <div v-else class="playerInfo">  
        <img src="/src/assets/image/unknowCover.webp" alt="" id="loadingImg">
        <p class="title">Loading..</p>
        <div class="playerControls">
            <img src="/src/assets/svg/play.svg" alt="" id="controlIcon" class="play" >
            <img src="/src/assets/svg/xmark.svg" alt="">
        </div>
      </div>
      <audio autoplay :src="audioUrl" type="audio/mpeg" id="song"></audio>
      <!-- <input type="range" value="0" id="audioProgress"> -->
  
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
        this.audioUrl = ""; 
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
    playPause(){
      let icon = document.getElementById("controlIcon"); 
      let song = document.getElementById("song");
      if(icon.classList.contains("pause")){
        icon.classList.remove("pause"); 
        icon.classList.add("play"); 
        icon.src = "/src/assets/svg/play.svg"; 
        song.pause();

      }else{
        icon.classList.remove("play"); 
        icon.classList.add("pause"); 
        icon.src = "/src/assets/svg/pause.svg"; 
        song.play(); 

      }

    }
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
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: space-around;

    img:first-child{
      height: 20px;
      cursor: pointer;
    }
    img:last-child{
      height: 20px;
      cursor: pointer;
      margin: 0;
    }
}


  }
  // #audioProgress{
  //     -webkit-appearance: none;
  //     width: 100%;
  //     cursor: pointer;
  //     border-radius: var(--border-radius);
  //     background-color: var(--color-white);
  //     height: 5px;
  // }
  // #audioProgress::-webkit-progress-bar{
  // background-color: var(--color-white);
  // border-radius: 5px;

  // }
  // #audioProgress::-webkit-slider-thumb{
  //   -webkit-appearance: none;
  //   background-color: var(--color-orange);
  //   width: 30px;
  //   height: 15px;
  //   border-radius: var(--border-radius);
  //   box-shadow: 0px 0px 4px var(--color-orange);
  // }

}

#loadingImg{
  animation: loadingImg 1s infinite alternate;
}

@keyframes loadingImg {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

</style>
