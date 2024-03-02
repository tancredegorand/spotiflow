<template>
    <h1>HOME
    </h1> 
    <div class="searchHeader">
        <input type="text" v-model="searchValue" placeholder="Artist, Album..." @keyup.enter="redirectToResults"/>
    </div>

    <div  v-if="Object.keys(state).length !== 0">
        some songs
    </div>


    <div v-else>
        <p>Loading...</p> 
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            state: {},
            searchValue: "",
        }; 
    },
    methods: {
        redirectToResults() {
            if (this.searchValue.trim() !== ""){
                this.$router.push({ path: '/results', query: { search_query: this.searchValue } });
            }
        }    
    }
}
</script>


<style scoped lang="scss">
    .searchList {
        background-color: orange;
    }
</style>
