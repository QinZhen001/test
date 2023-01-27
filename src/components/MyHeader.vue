// just for my plugin
<template>
  <section class="component">
    <div>plugin register global component</div>
    <div v-font-size:small>header with plugin custom directive v-font-size</div>
    <div>plugin mixin data mixinUrl:{{ mixinUrl }} </div>
    <div>
      <button @click="logout">logout (inject)</button>
    </div>
  </section>
</template>


<script  setup>
import { ref, inject } from 'vue'

const logout = inject('logout')

</script>
