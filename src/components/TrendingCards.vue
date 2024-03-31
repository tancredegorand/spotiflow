<template>
  <div class="card">
    <div class="rank"><p>#{{ rank }}</p></div>
    <h2>{{ name }}</h2>
    <p class="listeners">{{listeners}}M</p>
    <p class="ml">Monthly listeners</p>
    <button class="actionBtn" @click="searchArtist">Discover</button>
  </div>


</template>

<script>


export default {
  name: 'TrendingCards',
  props: {
    name: String, 
    listeners: Number,
    rank: Number,
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
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  background-color: var(--color-black-opacity);
  backdrop-filter: blur(var(--blur));
  border-radius: var(--border-radius); 
  border: 1px solid var(--color-white);
  padding: var(--margin1);
  margin-bottom: var(--margin);
  width: 300px;

  .rank{
    background-color: var(--color-white);
    border-radius: 4px;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 20px;
    p{
      color: var(--color-black);
      font-family: "Jomhuria";
      font-size: 2rem;
      line-height: 0.5;
      padding-top: 5px;
    }
  }

  .listeners{
    color: var(--color-orange);
    font-size: var(--font-title-size);
    font-weight: 700;
    text-shadow: 0px 0px 4px var(--color-orange);
  }

  .ml{
    text-align: center;
    font-size: var(--font-main-size);
    opacity: 0.5;
  }
  h2{
    line-height: 0.7;
    text-align: center;
    font-size: var(--font-title-size);
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center; 
  }
}



</style>
