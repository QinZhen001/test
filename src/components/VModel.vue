// test v-model and custom model
<template>
  <section class="component">
    <div>
      test v-model {{ modelValue }}
    </div>
    <div>
      test v-model:lastName {{ lastName }}
    </div>
    <div>
      <button @click="onChangeDefaultVal">change default model Val</button>
      <button @click="onChangeLastName">change lastName model Val</button>
    </div>
  </section>
</template>



<script>
import { Logger } from "../utils/log"
const logger = new Logger("Model Component")
</script>

<script setup>
const props = defineProps({
  modelValue: String,   // default model
  lastName: String,     // custom model
  modelModifiers: Object,  // default model modifiers
  lastNameModifiers: Object // custom model modifiers
})

const emit = defineEmits(["update:modelValue", "update:lastName"])

logger.log("props", props)

const onChangeDefaultVal = () => {
  if(props.modelModifiers["no-whitespace"]) {
    // ... do something
    logger.info("no whitespace")
  }
  emit("update:modelValue", "new default model value")
}

const onChangeLastName = () => {
  emit("update:lastName", "new lastName model value")
}

</script>

<style scoped>

</style>
