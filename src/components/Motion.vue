<template>
  <div class="component">
    <div class="box pulse"></div>
    <div class="box rotate" :style="{ marginLeft: '50px' }"></div>
    <div :style="{ marginLeft: '50px', marginTop: '20px' }">
      <button @click="showed = !showed">show</button>
      <button @click="rotate">rotate</button>
      <!-- Presence is perform exit animations in Vue. -->
      <Presence>
        <Motion class="box" v-if="showed" :animate="{ rotate: rotation, opacity: 1, scale: 1 }"
          :transition="{ easing: 'ease-in-out', duration: 1 }" :initial="{ opacity: 0, scale: 0 }"
          :exit="{ opacity: 0, scale: 0 }"></Motion>
      </Presence>
    </div>
  </div>
</template>



<script setup>
import { onMounted, ref } from 'vue'
import { animate, spring } from "motion"
import { Motion, Presence } from "motion/vue"

const rotation = ref(45)
const showed = ref(false)

onMounted(() => {
  const animation1 = animate(".box.pulse", {
    scale: 1.2
  }, {
    duration: 1,
    easing: spring(),
    repeat: Infinity,
    direction: "alternate"
  })

  const animation2 = animate(".box.rotate", {
    rotate: 360
  }, {
    duration: 4,
    easing: spring(),
    repeat: Infinity,
  })

  // console.log("animation", animation)
})

const rotate = () => {
  rotation.value = Math.random() * 360
  console.log(rotation.value)
}


</script>


<style scoped>
.box {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #00ffdb;
}
</style>
