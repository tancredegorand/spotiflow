

<template>
  <div class="dogs-gallery">
    <DogCard firstname="Pluto" breed="Saint-Hubert" picture_url="https://my-best-kennel.com/pictures/45.png"/>
    <DogCard firstname="Rex" breed="Labrador" picture_url="https://my-best-kennel.com/pictures/46.png"/>
  </div>
</template>

<script>
import DogCard from "./components/DogCard.vue"
//import getDogsData from '@/services/api/dogsRepository.js'

export default {
  name: "App",

  components:{
    DogCard,
  },
  
  data() {
    return {
      dogsData: []
    }
  },


  created: function() {
    this.retrieveDogsData()
  },

  methods: {
    async retrieveDogsData() {
      const myData = await getDogsData()
      this.dogsData = myData; 
    }
  }

};
</script>
