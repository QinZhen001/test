<script setup>
import { useAttrs, inject, watch, ref, reactive, onRenderTracked, onRenderTriggered,h } from "vue"

const reactive11 = ref("12313")
const reactive22 = ref("1waewa2313")
const other = reactive({
  aaa: "aaa"
})





</script>



<template>
  asdad {{ reactive11 }}  {{reactive22}}
  <!-- <div class="ssss">
    <slot x="xwfwfdw" y="ywefwefwef"></slot>
  </div>

  <slot name="footer" message="hello"></slot> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
