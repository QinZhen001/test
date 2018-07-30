<template>
  <div id="app">
    <button @click.stop="clickHandler">onClick</button>
    <el-select v-model="value6" placeholder="请选择">
      <el-option
        v-for="item in cities"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
      </el-option>
      <el-option class="item" @click.stop="clickHandler">
        <span>+ </span>
        <span>新增用户</span>
      </el-option>
    </el-select>

    <div class="select">
      <custom-select></custom-select>
    </div>
  </div>
</template>

<script>
  import CustomSelect from './components/custom-select.vue'

  export default {
    data() {
      return {
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value6: ''
      }
    },
    methods: {
      clickHandler(){
        this.cities.push({
          value: 'Guangzhou',
          label: '广州'
        })
      }
    },
    components: {
      CustomSelect
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  #app {
    padding: 10px;
  }

  .select {
    margin-top: 100px;
  }
</style>
