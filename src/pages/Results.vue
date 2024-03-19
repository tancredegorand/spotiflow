<template>
    <div class="display">
        <Header/>
        <div>  
            <div class="searchResult">
                <SearchBar class="searchBarResult"
                    :searchValue="searchValue"
                />
                <router-link class="canelBtn" :to="{ path: '/' }">Cancel</router-link>
            </div>
            
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
                <Loading/>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue"; 
import Switch from "@/components/Switch.vue"; 
import ResultsGallery from "@/components/ResultsGallery.vue"; 
import Header from "@/components/Header.vue";
import Loading from "@/components/Loading.vue";
import Footer from "@/components/Footer.vue";
import { getSearch } from "@/services/api/getSearch.js";

export default {
    name: 'Results',
    data() {
        return {
            data: {},
            switchValueData: "", 
        }; 
    },
    created() {
        this.retrieveSetData();
    }, 
    mounted() {
        const storedSwitchValue = localStorage.getItem('switchValue');
        if (storedSwitchValue !== null) {
            this.switchValueData = storedSwitchValue;
        } else {
            this.switchValueData = "top-results";
        }
    },

    watch: {
        searchValue() {
            this.data = {};
            this.retrieveSetData();
        }
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
    computed: {
        searchValue() {
            return this.$route.query.search_query; 
        }
    },
    components: { SearchBar, Switch, ResultsGallery, Header, Loading, Footer}
}
</script>

<style scoped lang="scss">
    .display{
        margin: 15px;
        min-height: 80vh;

        .searchResult{
            display: flex;
            align-items: center;
            .searchBarResult{
                flex-grow: 1; 
                display: flex;
            }
            .canelBtn{
                color: var(--color-orange);
                margin-left: 15px;
                cursor: pointer;
            }

        }

    }


</style>

