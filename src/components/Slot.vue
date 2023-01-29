// test slot 
<template>
  <section class="component">
    test slot
    <slot>default slot</slot>
    <slot name="content" :source="source">content slot</slot>
  </section>
</template>


<script>
import { Logger } from "../utils/log"
const logger = new Logger("Slot Component")
</script>

<script  setup>
import { ref } from 'vue'

const source = ref("I am source")

// https://zhuanlan.zhihu.com/p/386919557
// useContext has been removed 
// useSlots and useAttrs instead
// const { slots, attrs } = useContext()


</script>
