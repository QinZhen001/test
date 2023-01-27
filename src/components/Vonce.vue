<template>
  <section class="component">
    <div>test v-once</div>
    <div>
      <div>without v-once val:{{ val }}</div>
      <div v-once>with v-once val:{{ val }}</div>
    </div>
    <div>
      <button @click="changeVal">change val</button>
    </div>
  </section>
</template>



<script setup>
import { ref } from "vue"

const val = ref("val")
let index = 1

const changeVal = () => {
  val.value = val.value + index
  index++
}
</script>
