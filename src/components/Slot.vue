// test slot 
<template>
  <section class="component">
    test slot
    <slot>default slot</slot>
    <slot name="content" :source="source">content slot</slot>
  </section>
</template>


<script  setup>
import { ref } from 'vue'


const source = ref("I am source")
</script>
