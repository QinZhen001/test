<script setup>
import { inject, ref, reactive, computed, watch } from 'vue'
import aaa from "../utils"
import Test from "./www.vue"

// const message = ref("message")

</script>



<template >
  <!-- {{message}} -->
  <Test v-slot="{ x, y }">
    Mouse is at: {{ x }}, {{ y }}

    <div>
      xxx yyy zzzz
    </div> 

  </Test>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
