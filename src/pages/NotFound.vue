<template>
    <h1>Not Found</h1>
    <router-link :to="{  path: '/' }">ACCUEIL</router-link>
    <Footer/>

</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
    name: 'NotFound',
    components: {Footer}
}
</script>


<style scoped lang="scss">
</style>
