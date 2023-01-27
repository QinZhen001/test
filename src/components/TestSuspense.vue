<template>
  <section class="component">
    <div>
      test suspense
    </div>
    <div>
      {{article}}
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'

const getArticleInfo = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))

  const article = {
    title: "vue3",
    content: "this is vue3"
  }

  return article
}

const article = await getArticleInfo()

</script>
