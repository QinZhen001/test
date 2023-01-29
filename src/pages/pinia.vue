<template>
  <h1>Count is {{ store.count }}</h1>
  <h2>Double is {{ store.doubleCount }}</h2>
  <button @click="store.increment(1)">Increment</button>
  <button @click="store.waitAdd()">Wait Increment</button>
</template>



<script setup>
import { useCounterStore } from "../stores/couter"

const store = useCounterStore()

// store++
</script>
