<template>
    <div>
        <router-link :to="{ path: '/' }">BACK</router-link>
        
        <SearchBar
            :searchValue="searchValue"
        />

        <div v-if="Object.keys(data).length !== 0"> 
            <Switch
                :switchValue="switchValueData"
                @update:switchValue="updateSwitchValue"
            />
            <ResultsGallery
                :switchValue="switchValueData"
                :data="data"
                @update:switchValue="handleSwitchValueUpdate"
            />
        </div>
        <div v-else>
            <p>Loading...</p> 
        </div>
    </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue"; 
import Switch from "@/components/Switch.vue"; 
import ResultsGallery from "@/components/ResultsGallery.vue"; 
import { getSearch } from "@/services/api/getSearch.js";

export default {
    name: 'Results',
    data() {
        return {
            data: {},
            switchValueData: "top-results", 
        }; 
    },
    created() {
        this.searchValue = this.$route.query.search_query; 
        this.retrieveSetData();
    }, 
    methods: {
        async retrieveSetData() {
            this.data = await getSearch(this.searchValue); 
        },
        updateSwitchValue(newValue) {
            this.switchValueData = newValue;
        }, 
        handleSwitchValueUpdate(value) {
            this.switchValueData = value;
        },
    },
    components: { SearchBar, Switch, ResultsGallery }
}








</script>


<style scoped lang="scss">



</style>

