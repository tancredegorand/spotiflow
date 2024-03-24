<template>

  <section class="about" id="about">
      <div class="card leftCard">
        <h2>PROJECT</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde optio natus qui magni laboriosam voluptatem dolore a quaerat obcaecati, laudantium sapiente ea doloremque quidem dolor maxime doloribus voluptates molestias aspernatur.</p>
      </div>
      <div class="rightCards">
        <div class="card">
          <h2>SPOTIFLOW</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde optio natus qui magni laboriosam voluptatem dolore a quaerat obcaecati, laudantium sapiente ea doloremque quidem dolor maxime doloribus voluptates molestias aspernatur.</p>
        </div>
        <div class="card">
          <h2>CONTACT</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde optio natus qui magni laboriosam voluptatem dolore a quaerat obcaecati, laudantium sapiente ea doloremque quidem dolor maxime doloribus voluptates molestias aspernatur.</p>

        </div>
      </div>

  </section>

</template>

<script>
export default {
  name: 'About',

}
</script>

<style scoped lang="scss">


.about{
  margin-top: 60px;
  display: flex;
  flex-direction: column;



    .card{
      background-color: var(--color-black-opacity);
      backdrop-filter: blur(10px);
      border-radius: 5px;
      margin-bottom: 15px;
      text-align: center;
      padding: 15px;



    }

  }


  @media screen and (min-width: 700px){
    .about{
      flex-direction: row;

      .leftCard{
        margin-right: 15px;
        max-width: 400px;
      }
      
    }


  }
  

</style>
