<template>
  <section class="component">
    <div>test dynamic component</div>
    <div>
      <button @click="comp = ComponentA">Component A</button>
      <button @click="comp = ComponentB">Component B</button>
    </div>
    <component :is="comp"></component>
  </section>
</template>


<script setup>
import { ref,shallowRef } from "vue"

import ComponentA from "./A.vue"
import ComponentB from "./B.vue"

// no use ref to component
// const comp = ref(ComponentA)

// use shallowRef
const comp = shallowRef(ComponentA)

</script>
