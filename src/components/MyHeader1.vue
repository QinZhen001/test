// just for my plugin
<template>
  <div v-font-size:small>header {{mixinUrl}} <button @click="logout">logout</button></div>
</template>


<script  setup>
import { ref,inject } from 'vue'

const logout = inject('logout')

</script>
