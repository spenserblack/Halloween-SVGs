<template lang='pug'>
  svg(
    xmlns='http://www.w3.org/2000/svg'
    :height='height'
    :width='width'
    viewBox='0 0 240 80'
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
}
</script>
