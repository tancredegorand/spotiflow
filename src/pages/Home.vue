<template>
    <div class="display">

        <Header/>


        <div class="container">
            
          <h1 class="hook">FOR <span>MUSIC</span> LOVERS</h1>

          <div class="searchDiv">
            <SearchBar class="seachBar"/>
          </div>

          <div class="intro">
            <p>Spotiflow is an <a href="https://www.ingenieur-imac.fr" target="_blank">IMAC student</a> project inspired by the most popular music streaming sites. This platform allows you to search and filter to discover music from a vast selection of songs and albums, just like you would on other streaming platforms.</p>

          </div>

          <TrendingArtists/>

          <About/>

        </div>
       



    </div>
    <Footer/>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue"; 
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import TrendingArtists from "@/components/TrendingArtists.vue"
import About from "@/components/About.vue"

export default {
    name: 'Home',
    data() {
        return {
            searchValue: "",
        }; 
    },
    methods: {

    }, 
    components: {SearchBar, Header, Footer, TrendingArtists, About}
}
</script>


<style scoped lang="scss">

  .display{
    min-height: 90vh;
    padding-bottom: var(--margin2);

    .hook{
      margin-top: var(--margin2); 
      text-align: center;
      font-size: 8rem;
      line-height: 0.7;
    }
    .hook span{
      margin-top: var(--margin2);
      text-align: center;
      font-size: 8rem;
      line-height: 0.7;
      color: var(--color-orange);
      text-shadow: 0px 0px 4px var(--color-orange);

    }

  }

  .searchDiv{
    margin-bottom: var(--margin2);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding-right: var(--margin1);
    padding-left: var(--margin1);

  }

  .intro {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 500px;
    margin-right: auto;
    margin-left: auto;
    p{
      z-index: 2;
      color: var(--color-p);
      text-align: center;
      max-width:60vw;

      a{
        color: var(--color-p);
        text-decoration: underline;
      }
    }
  }
  .seachBar{
    display: flex;
  }

  .container {
      max-width: 1000px;
      margin-right: auto;
      margin-left: auto;
    }


  h1{
      margin-bottom: 30px;
    }


    @media screen and (min-width: 970px) {
      .intro p {
        max-width: 550px;
      }
      .searchDiv{
        padding: 0;
      }
      
    }

</style>
