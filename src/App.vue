

<template>
  <div class="dogs-gallery">
    <DogCard firstname="Pluto" breed="Saint-Hubert" picture_url="https://my-best-kennel.com/pictures/45.png"/>
    <DogCard :firstname = "TrendingCreatorsData.user_list[0].user.nickname" breed="Labrador" picture_url="https://my-best-kennel.com/pictures/46.png"/>
  </div>
</template>

<script>
import DogCard from "./components/DogCard.vue"

import {getTrendingCreators} from './services/api/getTrendingCreators.js'

export default {
  name: "App",

  components:{
    DogCard,
  },
  
  data() {
    return {
      TrendingCreatorsData: []
    }
  },


  created: function() {
    this.retrieveTrendingCreators()
  },

  methods: {
    async retrieveTrendingCreators() {
      //this.TrendingCreatorsData = await getTrendingCreators("US"); 
    }
  }

};
</script>
