<template>
  <div class="dog-card">
    <img class="pictureUrl" :src="pictureUrl" />
    <div>
      <h2 class="firstname">{{ firstname }}</h2>
      <p class="breed">{{ breed }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DogCard',
  props: {
    firstname: { type: String, required: true },
    breed: { type: String, default: "Saint-Hubert" },
    pictureUrl: { type: String, default: "https://my-best-kennel.com/pictures/default.png" }
  }
}

</script>
  <style scoped lang="scss">
      .dog-card {
        display: flex;
      }
  
      h2 {
           font-size: 20px;
      }
  </style>