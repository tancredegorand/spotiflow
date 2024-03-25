<template>

  <section class="about" id="about">
      <div class="card leftCard">
        <h2>PROJECT</h2>
        <p>Spotiflow relies on the Vue.js framework to use components, routes, local storage and much more. This site is built on an API powered by Spotify's data, ensuring access to a vast selection of songs and albums.</p>
        <img src="/src/assets/icons/vue.svg" alt="vue.js icon" class="vue">
      </div>
      <div class="rightCards">
        <div class="card">
          <h2>SPOTIFLOW</h2>
          <p>Spotiflow is an <a href="https://www.ingenieur-imac.fr" target="_blank">IMAC student</a> project inspired by the most popular music streaming sites. This platform allows you to search and filter to discover music from a vast selection of songs and albums, just like you would on other streaming platforms.</p>
        </div>
        <div class="card">
          <h2>CONTACT</h2>
          <div class="links">
            <a href="https://www.linkedin.com/in/tancredegorand/" class="link" target="_blank"><span></span><img src="/src/assets/icons/linkedin.svg" alt="linkedin"></a>
            <a href="https://tancredegorand.com/#contact" class="link" target="_blank"><span></span><img src="/src/assets/icons/web.svg" alt="tancredegorand.com"></a>
            <a href="https://linktr.ee/tancredegorand" class="link" target="_blank"><span></span><img src="/src/assets/icons/links.svg" alt="links"></a>
          </div>

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
      padding: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      p{
        line-height:1.5;
        text-align: center;
      }

      a{
        text-decoration: underline;
        cursor: pointer;
      }

      .vue{
        width: 150px;
        margin-top: 30px;
      }

      .links{
        display: flex;
        align-items: center; 
        justify-content: space-around;
        width: 100%;
        margin-top: 15px;

        .link{
          position: relative; 
          display: inline-block;
        }

        .link img{
          width: 50px;
          cursor: pointer;
          position: relative; 
          z-index: 1; 
        }

        .link span{
          top: 5px;
          left: 5px;
          width: 40px;
          height: 40px;
          background-color: var(--color-orange);
          opacity: 0;
          transition: 0.2s;
          position: absolute;
          z-index: 0;
        }
        .link:hover span{
          opacity: 1;
          transition: 0.2s;
          
        }


      }

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
