<template lang='pug'>
  circle(:cx='x' :cy='y' :r='radius' :stroke='stroke' :fill='fill')
</template>

<script lang='ts'>
import {Component, Prop} from 'vue-property-decorator';
import Lightable from './Lightable';

@Component
export default class Eye extends Lightable {
  @Prop({type: Number, required: true}) readonly x!: number;
  @Prop({type: Number, required: true}) readonly y!: number;
  @Prop({type: Number, required: true}) readonly radius!: number;
}
</script>
