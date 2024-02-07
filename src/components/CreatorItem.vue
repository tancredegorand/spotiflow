<template>
    <img pictureUrl="" v-bind:src="url_img"/>
    <p>{{ name }}</p>
    <p>{{ id }}</p>
</template>
<script>



export default {
    name: 'CreatorItem',
    props: {
        name : String,
        id : String,
        url_img : String, 
    }, 

}

</script> 





