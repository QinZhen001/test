<template>
  <div>
    <div>Router Params</div>
    <div>username: {{ route.params.username }}</div>
    <div>Router Query</div>
    <div>id: {{ route.query.id }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, Suspense, onErrorCaptured } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()


console.log('route', route)

</script>
