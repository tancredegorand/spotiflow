<template>
    <div class="display">
        <Header/>
        <section>  
            <div class="searchResult">
                <SearchBar class="searchBarResult"
                    :searchValue="searchValue"
                />
                <router-link class="canelBtn" :to="{ path: '/' }">Cancel</router-link>
                <span class="glowSearch"></span>
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
                    @update:playerSongData="handlePlayerSongDataUpdate"
                    @update:playerImgUrl="handlePlayerImgUrlUpdate"
                />
            </div>
            <div v-else>
                <Loading/>
            </div>
        </section>
        <Player
            :playerSongData="playerSongData"
            :playerImgUrl="playerImgUrl"

        />
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
import Player from "@/components/Player.vue"
import { getSearch } from "@/services/api/getSearch.js";

export default {
    name: 'Results',
    data() {
        return {
            data: {},
            switchValueData: "",
            playerSongData: {}, 
            playerImgUrl: "",
        }; 
    },
    created() {
        this.retrieveSetData();
    }, 
    mounted() {
        document.title = "Spotiflow - Search";
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
        handlePlayerSongDataUpdate(value){
            this.playerSongData = value; 
        },
        handlePlayerImgUrlUpdate(value){
            this.playerImgUrl = value; 
        }
        
    },
    computed: {
        searchValue() {
            return this.$route.query.search_query; 
        }
    },
    components: { SearchBar, Switch, ResultsGallery, Header, Loading, Footer, Player}
}
</script>

<style scoped lang="scss">
    .display{
        min-height: 80vh;
        background-image: url(/src/assets/svg/lines1.svg);
        background-repeat: none;
        background-position: top;


        section{
            padding: var(--margin);
            .searchResult{
                display: flex;
                align-items: center;
                max-width: 515px;

                .glowSearch{
                    position: absolute;
                    background-color: var(--color-orange);
                    width: 300px;
                    height: 10px;
                    filter: blur(40px);
                }

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

      

    }

    @media screen and (min-width: 550px) {
        .glowSearch {
            width: 400px!important;
        }

    }



</style>

