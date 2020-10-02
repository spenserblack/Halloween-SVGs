<template lang='pug'>
  #app
    table.jackolantern-inputs
      tr
        td
          label(for='ridge-input') Ridges: {{ ridges }}
          input#ridge-input(
            type='range'
            v-model.number='ridges'
            min='4'
            max='11'
          )
        td
          input#lit-input(type='checkbox' v-model='lit')
          label(for='lit-input') {{ lightPrompt }}
        td(v-if='lit')
          label(for='lit-color-input') Candle Color
          div.color-example(:style='{backgroundColor: litColor}')
          input#lit-color-input(type='text' v-model='litColor')
        td(v-else)
          label(for='out-color-input') Shadow Color
          div.color-example(:style='{backgroundColor: shadowColor}')
          input#out-color-input(type='text' v-model='shadowColor')
        tr
          td
            label(for='smile-input') Smile: {{ smile }}
            input#smile-input(
              type='range'
              v-model.number='smile'
              min='-1'
              max='1'
              step='0.1'
            )
    JackOLantern(
     :height='300'
     :width='450'
     :ridges='ridges'
     :lit='lit'
     :candleColor='litColor'
     :shadowColor='shadowColor'
     :smile='smile'
    )
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
  lit = false;
  litColor = '#FFED00'
  shadowColor = 'sienna'
  smile = 1.0;

  get lightPrompt() {
    return `${this.lit ? 'Extinguish' : 'Light'} the Jack o' Lantern`;
  }
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

<style lang='stylus' scoped>
  .jackolantern-inputs
    margin: auto
  .color-example
    dimensions = 1em
    margins = 0.25em
    border-radius: 5px
    border-color: black
    border-style: solid
    display: inline-block
    height: dimensions
    width: dimensions
    margin-left: margins
    margin-right: margins
</style>
