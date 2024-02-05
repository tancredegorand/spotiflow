

<template>
    <DogCard firstname="Pluto" breed="Saint-Hubert" picture_url="https://my-best-kennel.com/pictures/45.png"/>
    <DogCard firstname="Pluto" breed="Saint-Hubert" picture_url="https://my-best-kennel.com/pictures/45.png"/>
    <DogCard firstname="Pluto" breed="Saint-Hubert" picture_url="https://my-best-kennel.com/pictures/45.png"/>

</template>

<script>
//import Files
import TrendingCreatorsData  from "./services/api/trending-creator.json"

//import Components
import DogCard from "./components/DogCard.vue"

//import functions
import {getTrendingCreatorsFromFile} from "./services/api/getTrendingCreators"


export default {
  name: "App",
  components:{
    DogCard,
  },

  data() {
    return {
      TrendingCreatorsData: []
    }, {
        TrendingCreators: TrendingCreatorsData  
    }
  },

  created: function() {
    this.retrieveTrendingCreators()
  },

  methods: {
    async retrieveTrendingCreators() {

    }
  }

};


</script>
