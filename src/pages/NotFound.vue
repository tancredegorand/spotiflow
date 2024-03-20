<template>
    <Header/>
    <h1>Not Found</h1>
    <router-link :to="{  path: '/' }">ACCUEIL</router-link>
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
</style>
