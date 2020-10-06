<template lang='pug'>
  #app
    h2 Jack o' Lantern
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
        td
          label(for='smile-input') Smile: {{ smile }}
          input#smile-input(
            type='range'
            v-model.number='smile'
            min='-1'
            max='1'
            step='0.1'
          )
        td
          input#tooth-type-input(type='checkbox' v-model='sharpTeeth')
          label(for='tooth-type-input') Sharp Teeth
      tr
        td
          label(for='primary-color-input') Primary Color
          div.color-example(:style='{backgroundColor: primaryColor}')
          input#primary-color-input(type='text' v-model='primaryColor')
        td
          label(for='secondary-color-input') Secondary Color
          div.color-example(:style='{backgroundColor: secondaryColor}')
          input#secondary-color-input(type='text' v-model='secondaryColor')
        td(v-if='lit')
          label(for='lit-color-input') Candle Color
          div.color-example(:style='{backgroundColor: litColor}')
          input#lit-color-input(type='text' v-model='litColor')
        td(v-else)
          label(for='out-color-input') Shadow Color
          div.color-example(:style='{backgroundColor: shadowColor}')
          input#out-color-input(type='text' v-model='shadowColor')
        td
          label(for='stem-color-input') Stem Color
          div.color-example(:style='{backgroundColor: stemColor}')
          input#stem-color-input(type='text' v-model='stemColor')
        td
          label(for='stem-outline-input') Stem Outline
          div.color-example(:style='{backgroundColor: stemOutline}')
          input#stem-outline-input(type='text' v-model='stemOutline')
    p.hint
      | You can set the colors to #[code none] to make them invisible.
      | Setting "Secondary Color" and "Stem Outline" to #[code none] looks like
      | a flat style!
    JackOLantern(
     :height='300'
     :width='450'
     :ridges='ridges'
     :lit='lit'
     :pumpkinPrimary='primaryColor'
     :pumpkinSecondary='secondaryColor'
     :candleColor='litColor'
     :shadowColor='shadowColor'
     :stemColor='stemColor'
     :stemOutline='stemOutline'
     :smile='smile'
     :sharpTeeth='sharpTeeth'
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
  primaryColor = 'orange'
  secondaryColor = 'darkorange'
  litColor = '#FFED00'
  shadowColor = 'sienna'
  stemColor = 'green'
  stemOutline = 'darkgreen'
  smile = 1.0;
  sharpTeeth = false;

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
  .hint
    font-size: 0.75em
    color: DimGray
</style>
