<template lang='pug'>
  path(:d='path' :fill='fill' :stroke='stroke')
</template>

<script lang='ts'>
import {Component} from 'vue-property-decorator';
import Smile from './Smile';

const leftCorner = {
  x: 20,
  y: 60,
};
const rightCorner = {
  x: 130,
  y: 60,
};

@Component
export default class SharpSmile extends Smile {

  get frown() {
    return (this.smile - 1) / -2;
  }

  get leftCorner() {
    return {
      x: leftCorner.x + 10 * this.frown,
      y: leftCorner.y + 25 * this.frown,
    };
  }

  get rightCorner() {
    return {
      x: rightCorner.x - 10 * this.frown,
      y: rightCorner.y + 25 * this.frown,
    };
  }

  get path() {
    return [
      `M ${this.leftCorner.x} ${this.leftCorner.y}`,
      `L ${30 + 10 * this.frown} ${70 - 5 * this.frown}`,
      `L ${40 + 5 * this.frown} ${65 + 10 * this.frown}`,
      `L ${50 + 5 * this.frown} ${75 - 15 * this.frown}`,
      'L 60 70',
      `L 65 ${75 - 17 * this.frown}`,
      `L 75 ${70 + 5 * this.frown}`,
      `L 85 ${75 - 17 * this.frown}`,
      'L 90 70',
      `L ${100 - 5 * this.frown} ${75 - 15 * this.frown}`,
      `L ${110 - 5 * this.frown} ${65 + 10 * this.frown}`,
      `L ${120 - 10 * this.frown} ${70 - 5 * this.frown}`,
      `L ${this.rightCorner.x} ${this.rightCorner.y}`,
      `L ${120 - 5 * this.frown} 80`,
      `L ${115 - 5 * this.frown} ${75 + 10 * this.frown}`,
      `L ${110 - 5 * this.frown} 80`,
      `L ${105 - 5 * this.frown} 85`,
      'L 95 80',
      `L 85 ${90 - 5 * this.frown}`,
      `L 80 ${85 - 5 * this.frown}`,
      `L 75 ${90 - 5 * this.frown}`,
      `L 70 ${85 - 5 * this.frown}`,
      `L 65 ${90 - 5 * this.frown}`,
      'L 55 80',
      `L ${45 + 5 * this.frown} 85`,
      `L ${40 + 5 * this.frown} 80`,
      `L ${35 + 5 * this.frown} ${75 + 10 * this.frown}`,
      `L ${30 + 5 * this.frown} 80`,
      `L ${this.leftCorner.x} ${this.leftCorner.y}`,
      'Z',
    ].join(' ');
  }
}
</script>
