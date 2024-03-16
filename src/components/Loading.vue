<template>
    <div class="loading-container">
      <span class="cd"></span>
      <span class="floor"></span>
    </div>


</template>

<script>
export default {
  name: 'Loading',

}
</script>

<style scoped lang="scss">

.loading-container{
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.cd {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--color-gray);
  border: 4px solid var(--color-orange);
  position: relative;
  animation: bounce 1s ease-in-out infinite; 
  
  display: flex;
  align-items: center;
  justify-content: center;
}

.cd::before {
  content: '';
  position: absolute;
  width: 15px; 
  height: 15px; 
  border-radius: 50%;
  background-color: black;
  border: 15px solid var(--color-gray);
  border-right: 15px solid var(--color-orange);
  border-left: 15px solid var(--color-orange);
   animation: spin 1s linear infinite;
}


.floor {
  content: '';
  position: absolute;
  translate: 0 75px;
  width: 60%; 
  height: 4px;
  background-color: var(--color-orange);
}


@keyframes spin {
  0% {
    transform: rotate(0deg); 
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  0% {
    transform: translateY(-30px);
  }
  40% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-30px);
  }
}



</style>
