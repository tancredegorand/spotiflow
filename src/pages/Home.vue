<template>
    <div class="display">

        <Header/>

        <SearchBar class="seachBar"/>

        <div  v-if="Object.keys(state).length !== 0">
            some songs
        </div>


        <div v-else>
            <p>Loading...</p> 
        </div>
    </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue"; 
import Header from "@/components/Header.vue";

export default {
    name: 'Home',
    data() {
        return {
            state: {},
            searchValue: "",
        }; 
    },
    methods: {

    }, 
    components: {SearchBar, Header}
}
</script>


<style scoped lang="scss">
  .display{
    margin: 15px;
  }
  .seachBar{
    display: flex;
  }
</style>
