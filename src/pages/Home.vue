<template>
    <div class="display">

        <Header/>

        <SearchBar class="seachBar"/>
        <div class="container">
           
        <h1 class="hook">FOR MUSIC LOVERS</h1>

        <TrendingArtists/>

        <About/>

        </div>
       



    </div>
    <Footer/>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue"; 
import Header from "@/components/Header.vue";
import Loading from "@/components/Loading.vue";
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
    components: {SearchBar, Header, Loading, Footer, TrendingArtists, About}
}
</script>


<style scoped lang="scss">


  .display{
    padding: 15px;
    background-size: cover;
    background-position: center;
    background-image: url(/src/assets/images/background.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 90vh;

    .hook{
      margin-top: 60px;
      text-align: center;
      font-size: 8rem;
      line-height: 0.7;

      h2{
        box-shadow: -2px 16px 169px -23px rgba(0,0,0,1);
        -webkit-box-shadow: -2px 16px 169px -23px rgba(0,0,0,1);
        -moz-box-shadow: -2px 16px 169px -23px rgba(0,0,0,1);

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


</style>
