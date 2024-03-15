<template>
  <div class="switch">
    <input id="toggle-top-results" name="toggle" value="top-results" type="radio" :checked="switchValue === 'top-results'" @input="updateSwitchValue">
    <label for="toggle-top-results" :class="{ 'btn': true, 'btnSelected': switchValue === 'top-results' }">Top Results</label>
    <input id="toggle-tracks" name="toggle" value="tracks" type="radio" :checked="switchValue === 'tracks'" @input="updateSwitchValue">
    <label for="toggle-tracks" :class="{ 'btn': true, 'btnSelected': switchValue === 'tracks' }">Tracks</label>
    <input id="toggle-album" name="toggle" value="albums" type="radio" :checked="switchValue === 'albums'" @input="updateSwitchValue">
    <label for="toggle-album" :class="{ 'btn': true, 'btnSelected': switchValue === 'albums' }">Albums</label>
    <span class="indicator" :style="indicatorStyle"></span>
  </div>
</template>


<script>
export default {
  name: 'Switch',
  emits: ["update:switchValue"],
  props: {
    switchValue: String 
  },
  methods: {
    updateSwitchValue(event) {
      this.$emit('update:switchValue', event.target.value);
    }
  }, 
  computed: {
    indicatorStyle() {
      const indicatorPositions = {
        'top-results': { left: '0px', width: '110px' },
        'tracks': { left: '120px', width: '69px' },
        'albums': { left: '200px', width: '74px' },
      };
      return indicatorPositions[this.switchValue];
    }
  }

}
</script>


<style scoped lang="scss">
  .switch {
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    position: relative;

    label{
      z-index: 1;
    }

    .indicator{
      z-index: 0;
      position: absolute;
      top:0;
      height: 100%;
      background-color: var(--color-orange);
      border-radius: 5px;
      transition: all .3s ease 0s;
    
    } 
  }

  .btn {
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
    transition: all .2s ease 0s;
    
  }

  .btnSelected{
    color: var(--color-black);
  }

  input[type="radio"] {
    display: none;
  }

  





</style>

