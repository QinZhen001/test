<template>
  <section class="component">
    test emit  
    <div>
      <button @click="click">emit update</button>
      <button @click="$emit('test','test 123')">emit test</button>
    </div>
  </section>
</template>



<script  setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(["update",'test'])


const click = () => {
  emit("update", "new emit value")
}
</script>
