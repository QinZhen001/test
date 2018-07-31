<template>
  <div id="app">
    <button @click.stop="clickHandler">onClick</button>
    <div class="select-wrapper">
      <!--基于element的实现方式-->
      <ele-select></ele-select>
    </div>
    <div class="select-wrapper">
      <!--自定义的select实现方法-->
      <custom-select></custom-select>
    </div>
  </div>
</template>

<script>
  import CustomSelect from './components/custom-select.vue'
  import EleSelect from './components/ele-select.vue'

  export default {
    methods: {
      clickHandler(){
        this.cities.push({
          value: 'Guangzhou',
          label: '广州'
        })
      }
    },
    components: {
      CustomSelect,
      EleSelect
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  #app {
    padding: 10px;
  }

  .select-wrapper {
    margin-top: 100px;
  }
</style>
