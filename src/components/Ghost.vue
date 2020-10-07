<template lang='pug'>
  BaseSvg(
    :height='height'
    :width='width'
    :viewBoxLength='viewBoxHeight'
    :viewBoxWidth='viewBoxWidth'
    :svgName='svgName'
    :svgColor='primaryColor'
  )
    g(:stroke='secondaryColor')
      path(:d='ghostBody')
      g(:fill='tertiaryColor')
        circle(cx='55' cy='45' r='10')
        circle(cx='95' cy='45' r='10')
        ellipse(:cx='viewBoxWidth / 2' cy='80' rx='10' ry='15')
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
  @Prop({type: String, default: 'slategray'}) readonly tertiaryColor!: string;
  @Prop({type: String, default: 'ghost'}) readonly svgName!: string;

  readonly viewBoxHeight = 150;
  readonly viewBoxWidth = 150;
  readonly ghostBody = [
    'M 35 40',
    'C 35 20, 55 5, 75 5',
    'C 95 5, 115 20, 115 40',
    'V 140',
    [
      `c ${-80 / 18} -20, ${-80 / 9} -30, ${-80 / 6} -30`,
      `c ${-80 / 18} 0, ${-80 / 9} 10, ${-80 / 6} 30`,
    ].join(' ').repeat(3),
    'Z',
  ].join(' ');
}
</script>
