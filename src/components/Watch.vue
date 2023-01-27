// test watch 
<template>
  <section class="component">
    <div>
      test watch
    </div>
    <div>
      a: {{ obj.a }} b: {{ obj.b }}
    </div>
    <div>
      <button @click="changeA">change a val</button>
      <button @click="changeB">change b val</button>
    </div>
    <div>
      <button @click="onStop">stop watchEffect</button>
    </div>
  </section>
</template>


<script>
import { Logger } from "../utils/log"
const logger = new Logger("Watch Component")
</script>

<!-- watch can be used to lazily trigger side effects (watchEffect is always immediate). -->


<script  setup>
import { reactive, watch, watchEffect } from "vue"

const obj = reactive({ a: 1, b: "bbb" })

const stop = watchEffect((onInvalidate) => {
  logger.log("watchEffect", obj.a, obj.b)

  // 模拟请求
  const id = setTimeout(() => {
    logger.log("watchEffect timeout")
    obj.a = obj.a + 1
  }, 5000)

  // called when the watched state has changed
  onInvalidate(() => {
    logger.log("watchEffect onInvalidate")
    clearTimeout(id)
  })
})

const onStop = () => {
  logger.log("watchEffect onStop")
  stop()
}

// lazy: true, deep: true, flush: 'post'
// both the current and previous value of the state are different with get
// tip: don't use watch with reactive obj (cur, pre would be identical)
watch(() => ({ ...obj }), (cur, pre) => {
  logger.log("watch obj", cur, pre)
})

// watch with array
// watch([aaa,bbb],(val)=>{
//   logger.log("watch [aaa,bbb]")
// })


// When watching multiple sources, the callback receives arrays 
// containing new / old values corresponding to the source array:
// watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
//   /* ... */
// })

const changeA = () => {
  obj.a = obj.a + 1
}

const changeB = () => {
  obj.b = obj.b + "b"
}

// auto stop after 30s
setTimeout(() => {
  onStop()
}, 30000)

</script>
