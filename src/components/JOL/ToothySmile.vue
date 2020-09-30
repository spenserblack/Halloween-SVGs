<template lang='pug'>
  path(:d='path' :fill='fill' :stroke='stroke')
</template>

<script lang='ts'>
import {Component} from 'vue-property-decorator';
import Smile from './Smile';

@Component
export default class ToothySmile extends Smile {

  get path() {
    return [
      'M 25 60',
      'Q 75 85, 125 60',
      'Q 75 115, 25 60',
      'Z',
    ].join(' ');
  }
}
</script>
