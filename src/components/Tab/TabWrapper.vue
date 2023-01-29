<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li v-for="title in tabTitles" :key="title" :class="{ selected: title == selectedTitle }"
        @click="selectedTitle = title">
        {{ title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>


<script setup>
import { useSlots, provide, ref } from "vue"

const slots = useSlots()
const slotsDefault = slots.default()
const tabTitles = ref(slotsDefault.map(tab => tab.props.title))

const selectedTitle = ref(tabTitles.value[0])

provide("selectedTitle", selectedTitle)
</script>



<style scoped>
.tabs {
  max-width: 400px;
  margin: 0 auto;
}

.tabs__header {
  margin-bottom: 10px;
  list-style: none;
  padding: 0;
  display: flex;
}

.tabs__header li {
  padding: 5px 10px;
  margin: 0 10px;
  cursor: pointer;
  background: #ddd;
  border-radius: 5px;
  transition: 0.4s all ease-out;
}

.tabs__header li.selected {
  background: red;
  color: #fff;
}
</style>
