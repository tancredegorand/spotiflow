<template>
  <div class="switch">
    <input id="toggle-top-results" name="toggle" value="top-results" type="radio" :checked="switchValue === 'top-results'" @input="updateSwitchValue">
    <label for="toggle-top-results" class="btn">Top Results</label>
    <input id="toggle-tracks"  name="toggle" value="tracks" type="radio" :checked="switchValue === 'tracks'" @input="updateSwitchValue">
    <label for="toggle-tracks" class="btn">Tracks</label>
    <input id="toggle-album" name="toggle" value="albums" type="radio"  :checked="switchValue === 'albums'" @input="updateSwitchValue">
    <label for="toggle-album" class="btn">Albums</label>
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
  }
}
</script>
