<template>
    
    <router-link :to="{  path: '/' }">BACK</router-link>
    <div class="searchHeader">
        <input type="text" v-model="searchValue" placeholder="Artist, Album..." @keyup.enter="redirectToResults"/>
    </div>
    
</template>

<script>

export default {
    name : 'HeaderResult',
    props: {
        
    },
    computed: {
    }, 
    components: {   }

}
</script>

<style scoped lang="scss">
</style>
