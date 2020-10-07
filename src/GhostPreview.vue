<template lang='pug'>
  #jack-o-lantern-preview.preview
    table.ghost-inputs
      tr
        td
          label(for='primary-color-input') Primary Color
          div.color-example(:style='{backgroundColor: primaryColor}')
          input#primary-color-input(type='text' v-model='primaryColor')
        td
          label(for='secondary-color-input') Secondary Color
          div.color-example(:style='{backgroundColor: secondaryColor}')
          input#secondary-color-input(type='text' v-model='secondaryColor')
        td
          label(for='stem-color-input') Tertiary Color
          div.color-example(:style='{backgroundColor: tertiaryColor}')
          input#tertiaryColor-color-input(type='text' v-model='tertiaryColor')
    p.hint You can set the colors to #[code none] to make them invisible.
    Ghost(
     :height='300'
     :width='450'
     :primaryColor='primaryColor'
     :secondaryColor='secondaryColor'
     :tertiaryColor='tertiaryColor'
    )
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Ghost from './components/Ghost.vue';

@Component({
  components: {
    Ghost,
  },
})
export default class GhostPreview extends Vue {
  primaryColor = 'ghostwhite'
  secondaryColor = 'whitesmoke'
  tertiaryColor = 'slategray'
}
</script>

<style lang='stylus' scoped>
  .ghost-inputs
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
