<template>
    <div v-if="state">
        <CreatorItem
        v-for="i in state.user_list"
        :name="i.user.nickname"
        :id="i.user.recommend_reason"
        :url_img="i.user.avatar_168x168.url_list[0]"
    />
  </div>
  <div v-else>
    <p>loading...</p> 
  </div>

</template>
<script>
import CreatorItem from "@/components/CreatorItem.vue"
import  {getTrendingCreators} from "@/services/api/getTrendingCreators.js"



export default {
    name: 'CreatorsList',
    data(){
        return {
            state: {}
        }; 
    }, 
    created: function () {
        this.fetchData(); 
    },
    methods: {
        fetchData() {
        getTrendingCreators()
            .then(data => {
                this.state = data;
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
        }
    },
    components: { CreatorItem }

}


//  import { ref } from "vue";
// export default {
//     name: "creatorsList",

//     setup() {
//         const state = ref({});

//         getTrendingCreators()
//         .then(data => {
//             state.value = data
//         })
//         .catch(error => {}); 

//         return { state }
//     }

// }
</script> 





