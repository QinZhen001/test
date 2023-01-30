<template>
  <TabWrapper>
    <Tab title="tab 1">hello 1</Tab>
    <Tab title="tab 2">hello 2</Tab>
    <Tab title="tab 3">hello 3</Tab>
    <Tab title="tab 4">hello 4</Tab>
  </TabWrapper>

  <div class="wrapper">
    <div v-for="(item) in list" :key="item" class="item">
      {{ item }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TabWrapper from '../components/Tab/TabWrapper.vue'
import Tab from '../components/Tab/Tab.vue'


const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])


</script>


<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 500px;

  background: red;
  position: relative;
}

.item {
  flex: 0 0 33.333333%;
  height: 100px;
  background: rebeccapurple;
}
</style>
