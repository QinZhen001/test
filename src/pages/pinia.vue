<template>
  <h1>Count is {{ store.count }}</h1>
  <h2>Double is {{ store.doubleCount }}</h2>
  <button @click="store.increment(1)">Increment</button>
  <button @click="store.waitAdd()">Wait Increment</button>
</template>



<script setup>
import { onUpdated } from "vue"
import { storeToRefs } from "pinia"
import { useCounterStore } from "../stores/counter"

const store = useCounterStore()
// REACTIVE
const { count: reactiveCount } = storeToRefs(store)
// NOT REACTIVE
const { count } = store
// REACTIVE
store.count++

onUpdated(() => {
  console.log("reactiveCount", reactiveCount.value)
  console.log("count", count)
})


</script>
