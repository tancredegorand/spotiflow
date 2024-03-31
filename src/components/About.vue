<template>

  <section class="about" id="about">
    <h2 class="title">WEB PROJECT</h2>
    <p>Spotiflow relies on the Vue.js framework to use components, routes, local storage and much more. This site is built on an API powered by Spotify's data, ensuring access to a vast selection of songs and albums.</p>
    <div class="divImg3D">
        <img id="glow" src="/src/assets/icons/glow.svg" alt="">
        <img id="vueIcon" src="/src/assets/images/vue.png" alt="">
    </div>
    <div class="cardContact">
      <h3>CONTACT</h3>
      <div class="divVideo">
        <span class="circle"></span>
        <video src="/src/assets/videos/emoji.webm" autoplay muted loop></video>
      </div>
      <div class="links">
        <a href="https://www.linkedin.com/in/tancredegorand/" class="link" target="_blank"><img src="/src/assets/icons/linkedin.svg" alt="linkedin"></a>
        <a href="https://tancredegorand.com/" class="link" target="_blank"><img src="/src/assets/icons/web.svg" alt="tancredegorand.com"></a>
        <a href="https://linktr.ee/tancredegorand" class="link" target="_blank"><img src="/src/assets/icons/links.svg" alt="links"></a>
      </div>
      <a href="https://www.tancredegorand.com/#contact" target="_blank"><button class="actionBtn">Let's collaborate</button></a>
    </div>
    <p class="issus">If you encounter issues related to the search results, it means this site is experiencing its success.</p>



  </section>

</template>

<script>
export default {
  name: 'About',

}
</script>

<style scoped lang="scss">

  .about{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title{
      margin-top: var(--margin2); 
      text-align: center;
      font-size: 8rem;
      line-height: 0.7;
      z-index: 2;
      margin-bottom: var(--margin1);
  }

  p{
      z-index: 2;
      max-width: 500px;
      color: var(--color-p);
      text-align: center;
      width: 60vw;
  }

  .divImg3D{
    position: relative;
    margin-top: 125px;
    #glow{
      z-index: 1;
      position: absolute;
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%); 
      width: 200px;
      filter: blur(150px);
    }
    #vueIcon{
      z-index: 3;
      position: absolute; 
      top: 50%; 
      left: 50%;
      transform: translate(-50%, -50%); 
      width: 200px;

    }

  }

  .cardContact{
    z-index: 2;
    margin-top: 120px;
    padding: var(--margin1);
    background-color: var(--color-black-opacity);
    backdrop-filter: blur(var(--blur));
    border-radius: var(--border-radius); 
    border: 1px solid var(--color-white);

    h3{
      font-family: 'Jomhuria'; 
      font-size: var(--font-title-size);
      text-align: center;

    }
  }

  .divVideo{
    position: relative;
    margin-bottom: var(--margin);

    video{
      position: relative;
      width: 150px;
      z-index: 3;
    }
    .circle{
      position: absolute;
      width: 150px;
      height: 150px;
      flex-shrink: 0;
      z-index: 1;

      border-radius: 264px;
      background: radial-gradient(51.33% 51.33% at 50% 50%, rgba(255, 190, 0, 0.25) 43.76%, rgba(255, 190, 0, 0.00) 100%);
      backdrop-filter: blur(25px);
    }

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
}

.issus{
  margin-top: var(--margin2);
}


</style>
