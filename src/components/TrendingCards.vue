<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p>{{ listeners }} million</p>
    <button class="actionBtn" @click="searchArtist">Search</button>
  </div>


</template>

<script>


export default {
  name: 'TrendingCards',
  props: {
    name: String, 
    listeners: Number,
  }, 
  methods: {
    searchArtist(){
      this.$router.push({ path: '/results', query: { search_query: this.name } })
    }
  },
}
</script>

<style scoped lang="scss">
.card{
  background-color: var(--color-black-opacity);
  backdrop-filter: blur(10px);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 225px;
  margin-bottom: 15px;

  p{
    opacity: 0.7;
    text-align: center;
    margin-bottom: 15px
  }
  h2{
    line-height: 0.7;
    text-align: center;
  }
}



</style>
