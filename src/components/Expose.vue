// test expose 
<template>
  <section class="component">
    test expose
  </section>
</template>



<script  setup>
import { ref, defineExpose } from 'vue'

const expose1 = 'expose1 value'
const expose2 = ref('expose2 value')

defineExpose({
  expose1,
  expose2
})

</script>
