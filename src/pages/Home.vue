<template>
    <div class="display">

        <Header/>


        <div class="container">
            
          <h1 class="hook">FOR MUSIC LOVERS</h1>

          <div class="searchDiv">
            <SearchBar class="seachBar"/>
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
    }

  }

  .searchDiv{
    background-color: var(--color-black-opacity);
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 60px;
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

</style>
