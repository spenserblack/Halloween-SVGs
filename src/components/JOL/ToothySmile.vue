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
export default class ToothySmile extends Smile {

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
      `C 30 ${65 - 2 * this.frown},
        40 ${67 - 5 * this.frown},
        50 ${68 - 7 * this.frown}`,
      `V ${76 - 4 * this.frown}`,
      'H 60',
      `V ${69.5 - 9 * this.frown}`,
      `C 65 ${70 - 10 * this.frown},
        70 ${71 - 11 * this.frown},
        75 ${71 - 11 * this.frown}`,
      `V ${76 - 4 * this.frown}`,
      'H 85',
      `V ${70 - 9 * this.frown}`,
      `C 100 ${68 - 8 * this.frown},
        115 ${66 - 5 * this.frown},
        ${this.rightCorner.x} ${this.rightCorner.y}`,
      `C 120 ${75 + 11 * this.frown},
        110 ${80 + 3 * this.frown},
        100 ${85 - 2 * this.frown}`,
      `V ${82 - 5 * this.frown}`,
      'H 90',
      `V ${88 - 6 * this.frown}`,
      `C 84 ${89 - 8 * this.frown},
        75 ${90 - 9 * this.frown},
        70 ${90 - 9 * this.frown}`,
      `V ${83 - 5 * this.frown}`,
      'H 60',
      `V ${88 - 7 * this.frown}`,
      `C 47 ${84 - 3 * this.frown},
        34 ${78 + 5 * this.frown},
        ${this.leftCorner.x} ${this.leftCorner.y}`,
      'Z',
    ].join(' ');
  }
}
</script>
