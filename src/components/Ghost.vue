<template lang='pug'>
  BaseSvg(
    :height='height'
    :width='width'
    :viewBoxLength='viewBoxHeight'
    :viewBoxWidth='viewBoxWidth'
    :svgName='svgName'
    :svgColor='primaryColor'
  )
    text(x='0' :y='viewBoxHeight / 2') Boo, World!
</template>

<script lang='ts'>
import {Component, Prop, Vue} from 'vue-property-decorator';
import BaseSvg from './Base.vue';

@Component({
  components: {
    BaseSvg,
  },
})
export default class Ghost extends Vue {
  @Prop({type: Number, default: 45}) readonly height!: number;
  @Prop({type: Number, default: 45}) readonly width!: number;
  @Prop({type: String, default: 'ghostwhite'}) readonly primaryColor!: string;
  @Prop({type: String, default: 'whitesmoke'}) readonly secondaryColor!: string;
  @Prop({type: String, default: 'ghost'}) readonly svgName!: string;

  readonly viewBoxHeight = 100;
  readonly viewBoxWidth = 150;
}
</script>
