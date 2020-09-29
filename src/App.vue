<template lang='pug'>
  #app
    label(for='ridge-input') Ridges: {{ ridges }}
    input#ridge-input(type='range' v-model.number='ridges' min='4' max='11')
    br
    JackOLantern(:height='300' :width='450' :ridges='ridges')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import JackOLantern from './components/JackOLantern.vue';

@Component({
  components: {
    JackOLantern,
  },
})
export default class App extends Vue {
  ridges = 7;
}
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
