<template lang='pug'>
  BaseSvg(
    :height='height'
    :width='width'
    :viewBoxHeight='viewBoxHeight'
    :viewBoxWidth='viewBoxWidth'
    :svgName='svgName'
    :svgColor='pumpkinPrimary'
  )
    path(:d='pumpkinBody' :stroke='pumpkinSecondary')
    path(
      v-for='ridge in ridgePaths'
      :stroke='pumpkinSecondary'
      fill='none'
      :d='ridge'
    )
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
  @Prop({type: Number, default: 7}) readonly ridges!: number;
  @Prop({type: String, default: 'jack-o-lantern'}) readonly svgName!: string;

  readonly viewBoxHeight = 100;
  readonly viewBoxWidth = 150;
  pumpkinBody = [
    'M 10 50',
    'C 10 10, 25 0, 75 10',
    'C 125 0, 140 10, 140, 50',
    'C 140 85, 120 95, 75 95',
    'C 30 95, 10 85, 10 50',
    'Z',
  ].join(' ');

  get ridgePaths() {
    const isOdd = Boolean(this.ridges & 1);
    const halfRidges = this.ridges >> 1;
    const halfWidth = this.viewBoxWidth >> 1;
    const halfHeight =this.viewBoxHeight >> 1;
    const evenRidges = halfRidges << 1;
    const ratio = this.viewBoxWidth / evenRidges;
    const ridges = Array(this.ridges);

    for (let i = 0; i < halfRidges; ++i) {
      const ridge = halfRidges - i;
      ridges[i] = -ridge;
      ridges[ridges.length + ~i] = ridge;
    }

    if (isOdd) {
      ridges[halfRidges] = 0;
    }

    return ridges.map(ridge => {
      const curve = halfWidth + ridge * ratio;
      const ridgeLocation = halfWidth + curve >> 1;
      return [
        `M ${ridgeLocation} 0`,
        `S ${curve} ${halfHeight}, ${ridgeLocation} ${this.viewBoxHeight}`,
      ].join(' ');
    });
  }
}
</script>
