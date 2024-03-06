<template>
    <h1>HOME</h1> 

    <SearchBar/>

    <div  v-if="Object.keys(state).length !== 0">
        some songs
    </div>


    <div v-else>
        <p>Loading...</p> 
    </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue"; 


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
    components: {SearchBar}
}
</script>


<style scoped lang="scss">
    .searchList {
        background-color: orange;
    }
</style>
