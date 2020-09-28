<template lang='pug'>
  #app
    BaseSvg(:height='100' :width='200' svgName='hello-world' svgColor='white')
      text(x='0' y='50' stroke='black') Hello, World
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseSvg from './components/Base.vue';

@Component({
  components: {
    BaseSvg,
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
