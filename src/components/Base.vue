<template lang='pug'>
  svg(
    xmlns='http://www.w3.org/2000/svg'
    :height='height'
    :width='width'
    :viewBox='viewbox'
    :aria-labelledby='svgName'
    role='img'
  )
    title(:id='svgName' lang='en') {{ svgName }}
    g(:fill='svgColor')
      slot
</template>

<script lang='ts'>
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class BaseSvg extends Vue {
  @Prop({type: Number, default: 45}) readonly height!: number;
  @Prop({type: Number, default: 45}) readonly width!: number;
  @Prop({type: String, default: 'currentColor'}) readonly svgColor!: string;
  @Prop({type: String, required: true}) readonly svgName!: string;
  @Prop({type: Number, default: 0}) readonly viewBoxX!: number;
  @Prop({type: Number, default: 0}) readonly viewBoxY!: number;
  @Prop({type: Number, default: 100}) readonly viewBoxWidth!: number;
  @Prop({type: Number, default: 100}) readonly viewBoxLength!: number;

  get viewbox() {
    const {viewBoxX, viewBoxY, viewBoxWidth, viewBoxLength} = this;
    return `${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxLength}`;
  }
}
</script>
