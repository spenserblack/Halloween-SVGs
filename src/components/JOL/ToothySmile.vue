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

  get path() {
    return [
      `M ${leftCorner.x} ${leftCorner.y}`,
      'C 30 65, 40 67, 50 68',
      'V 76',
      'H 60',
      'V 69.5',
      'C 65 70, 70 71, 75 71',
      'V 76',
      'H 85',
      'V 70',
      `C 100 68, 115 66, ${rightCorner.x} ${rightCorner.y}`,
      'C 120 75, 110 80, 100 85',
      'V 82',
      'H 90',
      'V 88',
      'C 84 89, 75 90, 70 90',
      'V 83',
      'H 60',
      'V 88',
      `C 47 84, 34 78, ${leftCorner.x} ${leftCorner.y}`,
      'Z',
    ].join(' ');
  }
}
</script>
