

<template>
  <LegoGallery/>
  <div v-if="state">
    {{ state }}
  </div>
  <div else>
    pas de state value encore.
  </div>
</template>

<script>
import { ref } from "vue";
import  {getTrendingCreators} from "@/services/api/getTrendingCreators.js"

//import Components
import LegoGallery from "./components/LegoGallery.vue"


export default {
  name: "App",
  components:{LegoGallery},

  setup() {
    const state = ref({});

    getTrendingCreators()
      .then(data => {
        state.value = data
      })
      .catch(error => {}); 

    return { state }
  }
}



</script>

