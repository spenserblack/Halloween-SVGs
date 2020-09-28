<template lang='pug'>
  BaseSvg(
    :height='height'
    :width='width'
    :viewBoxWidth='150'
    :svgName='svgName'
    :svgColor='pumpkinPrimary'
  )
    path(:d='pumpkinBody' :stroke='pumpkinSecondary')
</template>

<script lang='ts'>
import {Component, Prop, Vue} from 'vue-property-decorator';
import BaseSvg from './Base.vue';

@Component({
  components: {
    BaseSvg,
  },
})
export default class JackOLantern extends Vue {
  @Prop({type: Number, default: 45}) readonly height!: number;
  @Prop({type: Number, default: 45}) readonly width!: number;
  @Prop({type: String, default: 'orange'}) readonly pumpkinPrimary!: string;
  @Prop({
    type: String,
    default: 'darkorange',
  }) readonly pumpkinSecondary!: string;
  @Prop({type: String, default: 'jack-o-lantern'}) readonly svgName!: string;
  pumpkinBody = [
    'M 10 50',
    'C 10 10, 25 0, 75 10',
    'C 125 0, 140 10, 140, 50',
    'C 140 85, 120 95, 75 95',
    'C 30 95, 10 85, 10 50',
    'Z',
  ].join(' ');
}
</script>
