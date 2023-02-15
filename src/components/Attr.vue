// test attrs
<template>
  <section class="component">
    <div>test attrs</div>
    <div class="red">we can use  aaa instead of props.aaa in template</div>
    <div>aaa: {{ aaa }} bbb:{{ props.bbb }}</div>
    <div>attr ccc: {{ attrs.ccc }}</div>
  </section>
</template>


<script>
import { Logger } from "../utils/log"
const logger = new Logger("Attr Component")
</script>


<script setup>
import { useAttrs, defineProps } from 'vue'

const props = defineProps({
  aaa: String,
  bbb: String
})


// those no in props will be in attrs
const attrs = useAttrs();
logger.log("attrs", attrs);


</script>


