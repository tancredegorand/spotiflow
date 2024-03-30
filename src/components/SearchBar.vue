<template>
  <div class="search">
    <img class="searchIcon" src="/src/assets/icons/search.svg">
    <input class="searchBar" type="text" placeholder="Artist, Album..." @keyup.enter="enterSearch" v-model="searchInput" />
    <img 
      class="xmarkIcon" 
      :class="{ 'xmarkIconShow': searchInput !== '' }"
      src="/src/assets/icons/xmark.svg"
      @click="resetSeachInput"
    >

  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    searchValue: String 
  },
  data() {
    return {
      searchInput: ""
    }; 
  },
  created() {
    if (this.searchValue) {
      this.searchInput = this.searchValue; 
    }

  },
  methods: {
    enterSearch() { 
      if (this.searchInput.trim() !== "") {
        this.$router.push({ path: '/results', query: { search_query: this.searchInput } });
      }
    }, 
    resetSeachInput(){
      this.searchInput = "";
    }
  }
}
</script>

<style scoped lang="scss">
  .search{
    height: 50px;
    background-color: var(--color-black-opacity);
    backdrop-filter: blur(var(--blur)); 
    position: relative;
    border-radius: var(--border-radius); 
    border: 1px solid var(--color-white);

    .searchIcon{
      width: 20px;
      margin-right: 10px;
      margin-left: 10px;
    }
    .xmarkIcon{
      transition: 0.2s;
      width: 15px;
      opacity: 0;
      margin-right: 10px;
      margin-left: 10px;
    }
    .xmarkIconShow{
      opacity: 1;
      transition: 0.2s;
    }


  }

  .searchBar{
    border: none;
    background-color: transparent;
    outline: none;
    color: var(--color-white);
    flex-grow: 1;
  }
</style>

