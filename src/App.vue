<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @select="selectHandler"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-tooltip effect="light" placement="right">
            <div slot="content" class="tooltip">
              <div class="wrapper">
                <ul class="left">
                  <li :key="item.address" v-for="item in gridData">{{item.date}}</li>
                </ul>
                <div class="line"></div>
                <ul>
                  <li :key="item.address" v-for="item in gridData">{{item.date}}</li>
                </ul>
              </div>
            </div>
            <el-menu-item index="1">
              <i class="el-icon-setting"></i>
              <span slot="title">导航一</span>
            </el-menu-item>
          </el-tooltip>
          <el-tooltip effect="light" placement="right">
            <div slot="content" class="tooltip">
              <div class="wrapper">
                <ul class="left">
                  <li :key="item.address" v-for="item in gridData">{{item.date}}</li>
                </ul>
                <div class="line"></div>
                <ul>
                  <li :key="item.address" v-for="item in gridData">{{item.date}}</li>
                </ul>
              </div>
            </div>
            <el-menu-item index="2">
              <i class="el-icon-setting"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
          </el-tooltip>
          <el-tooltip effect="light" placement="right">
            <div slot="content" class="tooltip">
              <div class="wrapper">
                <ul class="left">
                  <li :key="item.address" v-for="item in gridData">{{item.date}}</li>
                </ul>
                <div class="line"></div>
                <ul>
                  <li :key="item.address" v-for="item in gridData">{{item.date}}</li>
                </ul>
              </div>
            </div>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
          </el-tooltip>
          <el-tooltip effect="light" placement="right">
            <div slot="content" class="tooltip">
              <div class="wrapper">
                <ul class="left">
                  <li :key="item.address" v-for="item in gridData">{{item.date}}</li>
                </ul>
                <div class="line"></div>
                <ul>
                  <li :key="item.address" v-for="item in gridData">{{item.date}}</li>
                </ul>
              </div>
            </div>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-tooltip>
        </el-menu>
      </el-aside>
      <el-main>

      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '模拟数据1',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '模拟数据2',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '模拟数据3',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '模拟数据4',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    methods: {
      selectHandler(index){
        console.log(index)
      }
    }
  }
</script>

<style>
  .wrapper {
    position: relative;
    display: flex;
    width: 400px;
    height: 300px;
  }

  .wrapper ul {
    flex: 1 1 auto;
  }

  .wrapper ul li {
    height: 50px;
    line-height: 50px;
    font-size: 22px;
  }

  .line {
    position: absolute;
    left: 180px;
    border-right: 1px solid #ddd;
    width: 1px;
    height: 100%;
  }

  .el-tooltip__popper {
    margin-left: 0 !important;
  }

</style>
