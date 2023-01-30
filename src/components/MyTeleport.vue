<template>
  <Teleport to="body" :disabled="isMobile">
    <Transition name="modal">
      <div v-if="opened" class="modal" ref="modalRef">
        <p>Hello from the modal!</p>
        <p>Click outside this modal to close it</p>
        <button @click="onClose">Close</button>
      </div>
    </Transition>
  </Teleport>
</template>


<script setup>
import { defineProps, ref } from 'vue'
import { onClickOutside } from "@vueuse/core"

const props = defineProps({
  opened: Boolean,
})

const modalRef = ref()
onClickOutside(modalRef, () => emit("onClose"))

const emit = defineEmits(["onClose"])
const isMobile = ref(false)

const onClose = () => {
  emit("onClose")
}

</script>



<style scoped>
.modal {
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


.modal-enter-active, .modal-leave-active {
  transition: all 0.5s ease;
}


.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.5);
}
</style>
