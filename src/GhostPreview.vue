<template lang='pug'>
  Preview#jack-o-lantern-preview
    table.input-table
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
import Preview from './Preview.vue';

@Component({
  components: {
    Ghost,
    Preview,
  },
})
export default class GhostPreview extends Vue {
  primaryColor = 'ghostwhite'
  secondaryColor = 'whitesmoke'
  tertiaryColor = 'slategray'
}
</script>
