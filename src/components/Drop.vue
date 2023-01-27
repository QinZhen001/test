<template>
  <section class="component">
    <div>test drop</div>
    <!-- only prevent default cant drag  -->
    <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(1)" :key="item.id" class="drop-el" draggable="true"
        @dragstart="startDrag($event, item)">
        {{ item.title }}
      </div>
    </div>
     <!-- only prevent default cant drag  -->
    <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(2)" :key="item.id" class="drop-el" draggable="true"
        @dragstart="startDrag($event, item)">
        {{ item.title }}
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from "vue"

const items = ref([
  { id: 0, title: "item A", list: 1 },
  { id: 1, title: "item B", list: 1 },
  { id: 2, title: "item C", list: 2 }
])


const getList = (list) => {
  return items.value.filter(item => item.list == list)
}

const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('id', item.id)
}

const onDrop = (event, list) => {
  const itemid = event.dataTransfer.getData('id')
  const item = items.value.find(item => item.id == itemid)
  item.list = list
}

</script>


<style scoped>
.drop-zone {
  width: 50%;
  margin: 50px auto;
  background-color: beige;
  padding: 10px;
  min-height: 10px;
  cursor: pointer;
}

.drop-el {
  background-color: aqua;
  color: white;
  padding: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}

/* 
.drop-el:nth-last-of-type(1){
  margin-bottom: 0;
} */

.drop-el:nth-last-child(1) {
  margin-bottom: 0;
}
</style>
