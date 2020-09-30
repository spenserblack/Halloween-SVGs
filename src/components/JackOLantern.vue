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
    path(
      v-if='drawMiddleRidge'
      :stroke='pumpkinSecondary'
      fill='none'
      d='M 75 10 V 95'
    )
    Eye(
      :x='45'
      :y='40'
      :radius='15'
      :stroke='pumpkinSecondary'
      :lit='lit'
      :litFill='candleColor'
      :outFill='shadowColor'
    )
    Eye(
      :x='105'
      :y='40'
      :radius='15'
      :stroke='pumpkinSecondary'
      :lit='lit'
      :litFill='candleColor'
      :outFill='shadowColor'
    )
    ToothySmile(
      :stroke='pumpkinSecondary'
      :lit='lit'
      :litFill='candleColor'
      :outFill='shadowColor'
    )
</template>

<script lang='ts'>
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Intersection, ShapeInfo} from 'kld-intersections';
import BaseSvg from './Base.vue';
import Eye from './JOL/Eye.vue';
import ToothySmile from './JOL/ToothySmile.vue';

@Component({
  components: {
    BaseSvg,
    Eye,
    ToothySmile,
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
  @Prop({type: Boolean, default: true}) readonly lit!: boolean;
  @Prop({type: String, default: '#FFED00'}) readonly candleColor!: string;
  @Prop({type: String, default: 'sienna'}) readonly shadowColor!: string;

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

  get drawMiddleRidge() {
    return Boolean(this.ridges & 1);
  }

  get ridgePaths() {
    const pumpkinShapeInfo = ShapeInfo.path(this.pumpkinBody);
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

    return ridges.filter(ridge => ridge != null).map(ridge => {
      const curve = halfWidth + ridge * ratio;
      const ridgeLocation = halfWidth + curve >> 1;
      const curvePath = [
        `M ${ridgeLocation} 0`,
        `S ${curve} ${halfHeight}, ${ridgeLocation} ${this.viewBoxHeight}`,
      ].join(' ');
      const curveShapeInfo = ShapeInfo.path(curvePath);
      const [curveStart, curveEnd] = Intersection.intersect(
        pumpkinShapeInfo,
        curveShapeInfo,
      ).points;

      return [
        `M ${curveStart.x} ${curveStart.y}`,
        `S ${curve} ${halfHeight}, ${curveEnd.x} ${curveEnd.y}`,
      ].join(' ');
    });
  }
}
</script>
