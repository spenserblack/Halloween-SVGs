<template lang='pug'>
  circle(:cx='x' :cy='y' :r='radius' :stroke='stroke' :fill='fill')
</template>

<script lang='ts'>
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Eye extends Vue {
  @Prop({type: Number, required: true}) readonly x!: number;
  @Prop({type: Number, required: true}) readonly y!: number;
  @Prop({type: Number, required: true}) readonly radius!: number;
  @Prop({type: String, required: true}) readonly stroke!: string;
  @Prop({type: String, default: 'sienna'}) readonly outFill!: string;
  @Prop({type: String, default: '#FFED00'}) readonly litFill!: string;
  @Prop({type: Boolean, default: true}) readonly lit!: boolean;

  get fill() {
    return this.lit ? this.litFill : this.outFill;
  }
}
</script>
