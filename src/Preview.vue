<template lang='pug'>
  .preview
    slot
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator';

export default class Preview extends Vue {}
</script>

<style lang='stylus' scoped>
  .input-table
    margin: auto
  .color-example
    dimensions = 1em
    margins = 0.25em
    border-radius: 5px
    border-color: black
    border-style: solid
    display: inline-block
    height: dimensions
    width: dimensions
    margin-left: margins
    margin-right: margins
  .hint
    font-size: 0.75em
    color: DimGray
</style>
