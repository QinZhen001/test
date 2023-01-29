<template>
  <div class="tab-content" v-show="title == selectedTitle">
    <slot></slot>
  </div>
</template>


<script setup>
import { inject, ref, watch, defineProps } from "vue"

defineProps({
  title: String
})

const selectedTitle = inject("selectedTitle")

</script>



<style scoped>
.tab-content {
  padding: 10px;
  background: #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
