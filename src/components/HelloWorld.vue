<script setup>
import { inject, ref, reactive, computed, watch } from 'vue'
import aaa from "../utils"
import Test from "./www.vue"

// const message = ref("message")

</script>



<template >
  <div class="model"> 
    <Test></Test>
  </div>
</template>

<style scoped>
.model {
  position: fixed;
  left: 10px;
  top: 10px;
  width: 100px;
  height: 100px;
  background: red;
}
</style>
