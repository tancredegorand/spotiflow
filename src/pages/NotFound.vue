<template>
    <section>
        <Header/>
        <div class="notFound">
            <div>
                <h1>Not Found</h1>
                <p>Oops... Something gone wrong! &#128546;</p>
            </div>
            <div>
                <img src="/src/assets/image/music.png" alt="">
                <div class="btnContainer">
                    <router-link :to="{  path: '/' }"><button class="actionBtn">HOME</button></router-link>
                </div>
            </div>
        </div>
    </section>
    <Footer/>


</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
    name: 'NotFound',
    mounted() {
        document.title = "Spotiflow -  Not Found";
    },
    components: {Footer, Header}
}

</script>


<style scoped lang="scss">


section{ 
    background-image: url("/src/assets/svg/lines2.svg");
    background-size: cover;
    background-repeat: none;

    img{
        width: 360px;
    }

    .notFound{
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            h1{
                font-size: 7rem;  
            }

        }

        margin-bottom: 70px;    
       

    }



}
</style>
