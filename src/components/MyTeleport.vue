<template>
  <Teleport to="body" :disabled="isMobile">
    <div v-if="opened" class="modal">
      <p>Hello from the modal!</p>
      <button @click="onClose">Close</button>
    </div>
  </Teleport>
</template>


<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  opened: Boolean,
})

const emit = defineEmits(["onClose"])
const isMobile = ref(false)

const onClose = () => {
  emit("onClose")
}

</script>



<style scoped>
  .modal{
    padding: 10px;
    position: fixed;
    width: 500px;
    height: 300px;
    background: #666;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }
</style>
