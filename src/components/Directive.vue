<template>
  <section class="component">
    <div>test directive</div>
    <div v-f.red="fontSize">text: {{ test }} </div>
    <div>
      <button @click="increase">increase font size</button>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'

const test = ref('hello world')
const fontSize = ref(10)

const vF = {
  beforeMount(el, binding) {
    if(binding.modifiers.red) {
      el.style.color = 'red'
    }
    el.style.fontSize = binding.value + 'px'
  },
  updated(el, binding){
    el.style.fontSize = binding.value + 'px'
  }
}


const increase = () => {
  fontSize.value += 2
  // must with directive updated 
}

</script>
