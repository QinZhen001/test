<template>
  <main>
    <article>
      <h1>My Article</h1>
      <section v-for="(header, index) in headers" :key="header">
        <h2 :id="index">{{ header }}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, adipisci cum, molestiae animi tenetur delectus
          doloribus labore ipsam quis suscipit hic ut. Consectetur ea excepturi reiciendis exercitationem culpa
          voluptatum et?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, autem mollitia, provident id ducimus officiis
          pariatur perferendis voluptatem sed neque repudiandae dicta quia minima facere odio quas amet qui explicabo!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, adipisci cum, molestiae animi tenetur delectus
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis voluptatibus deleniti, dolore eos
          molestiae ipsam alias, laudantium dicta sed dolorem expedita et illum, sunt adipisci minima nam maiores
          quisquam!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ipsam voluptas in quae ad asperiores,
          et facere perferendis quos, quo autem illum hic ab inventore incidunt provident quas mollitia esse!
        </p>
      </section>
    </article>
    <aside>
      <div>
        <a v-for="(header, index) in headers" :class="{ active: index == currentSection }" :key="header"
          href="`#${index}`">
          {{ header }}
        </a>
      </div>
    </aside>
  </main>
</template>


<script setup>
import { ref, onMounted } from "vue"

const headers = [
  'Section 1',
  'Section 2',
  'Section 3',
  'Section 4',
  'Section 5',
]
const currentSection = ref('')


onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        const id = entry.target.id
        console.log("id", id)
        currentSection.value = id
      }
    })
  },
    {
      // threshold: 0.5
      rootMargin:'0px 0px -90% 0px'
    }
  )

  document.querySelectorAll('article h2').forEach((section) => {
    observer.observe(section)
  })
})


</script>
 

<style scoped>
main {
  display: flex;
}

article {
  width: 75%;
  margin-bottom: 500px;
}

aside {
  width: 25%;
}

aside>div {
  position: sticky;
  top: 20px;
  padding-left: 2em;
}

aside>div>a {
  display: block;
  color: #2c3e50;
  text-decoration: none;
  border-left: 1px solid #ccc;
  padding-left: 2em;
}

aside a.active {
  font-weight: bold;
  color: #e74c3c;
  border-left: 1px solid #e74c3c;
}
</style>
