<template lang='pug'>
  #app
    h2 Jack o' Lantern
    JackOLanternPreview
    hr
    h2 Ghost
    GhostPreview
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GhostPreview from './GhostPreview.vue';
import JackOLanternPreview from './JackOLanternPreview.vue';

@Component({
  components: {
    GhostPreview,
    JackOLanternPreview,
  },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
