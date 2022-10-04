<script setup>
import { useAttrs,inject, watch,ref } from "vue"

const attrs = useAttrs()
console.log('attr', attrs.msg)


const obj = inject('message')


watch(obj, (val)=>{
  console.log('val', val)
})

const message =  ref(obj.message) 
// const message = obj.aaa
console.log(1111, obj)


// const aaa = inject('aaa')
// console.log('aaa',aaa)

</script>



<template>
    {{ message }}
  <!-- <div class="ssss">
    <slot x="xwfwfdw" y="ywefwefwef"></slot>
  </div>

  <slot name="footer" message="hello"></slot> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
