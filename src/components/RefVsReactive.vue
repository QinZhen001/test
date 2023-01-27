<template>
  <section class="component">
    <div>ref vs reactive</div>
    <div class="red">Just use ref() all the time and that's all :)</div>
    <div>
      correct msg: {{ msg }}
    </div>
    <div>
      wrong msg: {{ msgRef }}
      <div class="red">not linked source</div>
    </div>
    <div>
      <button @click="onChangeMsg">change reactive msg</button>
    </div>
  </section>
</template>


<script>
import { Logger } from "../utils/log"
const logger = new Logger("RefVsReactive")
</script>

<!-- `reactive()` only takes objects, 
**NOT** JS primitives *(String, Boolean, Number, BigInt, Symbol, null, undefined)* -->

<script setup>
import { ref, reactive, toRefs, toRef, unref } from 'vue'
const index = ref(1)

const obj1 = ref({
  msg: "hello"
})

const obj2 = reactive({
  msg: "hello"
})

logger.log('ref val', obj1.value)
logger.log('reactive val', obj2)


const { msg } = toRefs(obj2)
logger.log("toRefs", msg.value)

const msg1 = toRef(obj2, 'msg')
logger.log("toRef", msg1.value)


// ref() receives a plain string value.
const msgRef = ref(obj2.msg)


const onChangeMsg = () => {
  obj2.msg = obj2.msg + unref(index)
  index.value++
}

</script>
