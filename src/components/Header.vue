<template>
  <div class="header">
    <a class="headerTitle" href="/"><h1>SPOTIFLOW</h1></a>
    <div class="links">
      <a href="https://www.linkedin.com/in/tancredegorand/" class="link" target="_blank"><img src="/src/assets/icons/linkedin.svg" alt="linkedin"></a>
      <a href="https://tancredegorand.com/" class="link" target="_blank"><img src="/src/assets/icons/web.svg" alt="tancredegorand.com"></a>
      <a href="https://linktr.ee/tancredegorand" class="link" target="_blank"><img src="/src/assets/icons/links.svg" alt="links"></a>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Header',

}
</script>

<style scoped lang="scss">
  .header{
    padding: var(--margin);
    display: flex;
  }

  .headerTitle{
    flex-grow: 1;
  }
  .links{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    .link img{
      width: 30px;
      cursor: pointer;
    }
  }
</style>
