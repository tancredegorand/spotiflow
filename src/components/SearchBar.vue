<template>
  <div class="searchHeader">
    <input type="text" placeholder="Artist, Album..." @keyup.enter="enterSearch" v-model="searchInput" />
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
    enterSearch(event) { 
      if (this.searchInput.trim() !== "") {
        this.$router.push({ path: '/results', query: { search_query: this.searchInput } });
      }
    }
  }
}
</script>
