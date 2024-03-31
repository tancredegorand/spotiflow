<template>
  <footer class="footer">
      <div>
      <a href="/"><p>Home</p></a>
      <a href="/#about"><p>About</p></a>
    </div>
    <div>
      <a href="https://rapidapi.com/airaudoeduardo/api/spotify81/" target="_blank"><p>API used</p></a>
      <a href="https://github.com/tancredegorand/spotiflow" target="_blank"><p>GitHub</p></a>
    </div>
    <div class="imac">
      <a href="https://www.ingenieur-imac.fr/" target="_blank"><p>IMAC</p><img src="/src/assets/image/logoIMAC.png" alt=""></a>
    </div>


  </footer>
</template>

<script>
export default {
  name: 'Footer',

}
</script>

<style scoped lang="scss">

  .footer{
    padding: 40px;
    background-color: var(--color-gray);
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div{
      text-align: center;
    }
    p {
      opacity: 0.7;
      margin: 5px;
      font-size: 0.8rem
    }
    a:hover p{
      text-decoration: underline;
    }
    img{
      width: 30px;
      margin-top:5px
    }
  }

  .imac a{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (min-width: 400px) {
    .footer{
      flex-direction: row;

      div{
        text-align: left;
      }
    }
    .imac a{
      flex-direction: row;
    }
    img {
      margin-top:0px
    }
  }

  

  @media screen and (min-width: 600px){
        .display{
            display: flex;
            
            .cover{
                width: 50vw;
            }
            .albumInfo{
                width: 40vw;
            }
            

        }
        .cover img{
            width: 40vw;
            max-width: 550px;
        }

    }


</style>
