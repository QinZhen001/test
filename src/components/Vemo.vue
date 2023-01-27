<template>
  <section class="component">
    <div>test v-memo</div>
    <div>click list item</div>
    <ul>
      <li v-for="(item, index) in list" :key="index" v-memo="[item.id === selected]" @click="onClickItem(item.id)"
        :class="{
          selected: item.id === selected
        }">
        <div>content: {{ item.content }}</div>
        <div>selected: {{ item.id === selected }}</div>
      </li>
    </ul>
  </section>
</template>


<script setup>
import { reactive, ref } from 'vue'

const selected = ref(1)
const list = reactive([
  {
    content: 'content1',
    id: 1
  },
  {
    content: 'content2',
    id: 2
  },
  {
    content: 'content3',
    id: 3
  },
  {
    content: 'content4',
    id: 4
  },
  {
    content: 'content5',
    id: 5
  },
  {
    content: 'content6',
    id: 6
  }, {
    content: 'content7',
    id: 7
  },
  {
    content: 'content8',
    id: 8
  }
])

const onClickItem = (val) => {
  selected.value = val
}

</script>


<style scoped>
.selected {
  color: rebeccapurple;
}
</style>
