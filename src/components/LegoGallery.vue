<template>
  <div>
      <LegoCard 
          v-for="lego in legolist"
          :key="lego.set_num"
          :set_num=" lego.set_num"
          :name ="lego.name"
          :num_parts = "lego.num_parts"
          :year = "lego.year"
          :set_img_url = "lego.set_img_url"
      />
  </div>
</template>
<script>
//import {getSetMinYear} from '@/services/api/getTrendingCreators.js'
import LegoCard from '@/components/LegoCard.vue'

export default {
  name: 'LegoGallery',
  data() {
      return {
          legolist: []
      };
  },
  created: function () {
      //this.retrieveSetData();
  },
  methods: {
      async retrieveSetData() {
          //this.legolist = await getSetMinYear("2023");
      }
  },
  components: { LegoCard }
}
</script> 
