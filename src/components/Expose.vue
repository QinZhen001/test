// test expose 
<template>
  <section class="component">
    test expose
  </section>
</template>

<!-- <script>
import { Logger } from "../utils/log"
const logger = new Logger("Attr Component")
</script> -->


<script  setup>
import { ref, defineExpose } from 'vue'

const expose1 = 'expose1 value'
const expose2 = ref('expose2 value')

defineExpose({
  expose1,
  expose2
})

</script>
