
<template>
  <my-header></my-header>
  <VModel v-model.no-whitespace="defaultModel" v-model:lastName.lazy="lastName"></VModel>
  <Expose ref="exposeComponentRef"></Expose>
  <Attr aaa="aaa" bbb="bbb" ccc="ccc"></Attr>
  <RefVsReactive></RefVsReactive>
  <Suspense>
    <template #default>
      <TestSuspense></TestSuspense>
    </template>
    <template #fallback>
      Loading
    </template>
  </Suspense>
  <Slot>
    <!-- default slot -->
    <template #default>
      <div class="slot">default slot val</div>
    </template>
    <!-- named slot with data-->
    <template #content="{ source }">
      <div class="slot">content slot: {{ source }}</div>
    </template>
  </Slot>
  <div class="component">
    <MyTeleport :opened="opened" @onClose="opened = false"></MyTeleport>
    <div>
      <button @click="opened = !opened">Toggle Teleport</button>
    </div>
  </div>
  <Watch></Watch>
  <Vonce></Vonce>
  <Vemo></Vemo>
  <Directive></Directive>
  <Motion></Motion>
  <Drop></Drop>
</template>


<script>
import { Logger } from "./utils/log"
const logger = new Logger("App")
</script>



<script setup>
import { ref, onMounted, Suspense, onErrorCaptured } from 'vue'
import VModel from './components/VModel.vue';
import Expose from './components/Expose.vue';
import Attr from './components/Attr.vue';
import Slot from './components/Slot.vue';
import Watch from './components/Watch.vue';
import Vonce from './components/Vonce.vue';
import Vemo from './components/Vemo.vue';
import MyTeleport from './components/MyTeleport.vue';
import RefVsReactive from './components/RefVsReactive.vue';
import Directive from './components/Directive.vue';
import Motion from './components/Motion.vue';
import TestSuspense from './components/TestSuspense.vue';
import Drop from './components/Drop.vue';

const defaultModel = ref('defaultModelVal')
const lastName = ref('lastNameVal')
const exposeComponentRef = ref()
const opened = ref(false)

onMounted(() => {
  // on mounted we can access the ref of the Expose component
  logger.log("exposeComponentRef", exposeComponentRef.value)
  logger.log("exposeComponentRef expose1", exposeComponentRef.value.expose1)
  logger.log("exposeComponentRef expose2", exposeComponentRef.value.expose2)
})

onErrorCaptured((msg) => {
  logger.error(msg)
})


</script>


<style scoped>

</style>
