<template>
  <div class="custom-select">
    <div class="select">
      <input type="text"
             autocomplete="off"
             placeholder="请选择"
             readonly="readonly"
             :value="selectVal"
             @click.stop="toogleDropdown"
             class="select-input">
    </div>
    <div class="menu-wrapper" v-show="showFlag">
      <div class="menu">
        <div class="list-wrapper">
          <ul>
            <li v-for="(item,index) in cities" :key="index" @click.stop="clickItem(item.label)">{{item.label}}</li>
          </ul>
        </div>
        <div class="footer">
          <span>+ </span>
          <span>新增用户</span>
        </div>
      </div>
      <div class="menu-triangle">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
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
          value: 'Chengdu',
          label: '成都'
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
        selectVal: '',
        showFlag: false
      }
    },
    methods: {
      toogleDropdown(){
        this.showFlag = !this.showFlag
      },
      clickItem(val){
        this.selectVal = val
        this.toogleDropdown()
        // 还要把menu 还原成原来位置
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet">
  .menu-item() {
    font-size: 14px;
    padding: 0 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 34px;
    line-height: 34px;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
  }

  .el-select-dropdown .el-popper {
    display: none;
  }

  .custom-select {
    width: 220px;
    position: relative;
    .select {
      width: 100%;
      position: relative;
      display: inline-block;
      input {
        padding-right: 30px;
        padding-left: 15px;
        cursor: pointer;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        width: 100%;
        outline: 0;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        &:hover {
          border-color: #409EFF;
        }
      }
    }
    .menu-wrapper {
      position: absolute;
      top: 54px;
      width: 100%;
      min-width: 217px;
      box-sizing: border-box;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      border: 1px solid #e4e7ed;
      transform-origin: center top;
      border-radius: 4px;
      background: #fff;
      z-index: 2009;
      transition: all 2s ease;
      .menu {
        // overflow: hidden; 为了隐藏掉右边和下边的滚动条
        // 这样外面的menu-wrapper层 就不用设置overflow: hidden (三层div都用用处 并不是过度包装)
        overflow: hidden;
        position: relative;
        .list-wrapper {
          margin-bottom: -17px;
          margin-right: -17px;
          overflow: scroll;
          height: 100%;
          max-height: 274px;
          ul {
            padding-bottom: 34px;
            list-style: none;
            box-sizing: border-box;
            li {
              position: relative;
              .menu-item();
              &:hover {
                background: #f5f7fa;
              }
            }
          }
        }
        .footer {
          position: absolute;
          bottom: 0;
          background: #ddd;
          .menu-item();
        }
      }
      .menu-triangle {
        left: 35px;
        top: -6px;
        margin-right: 3px;
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-top-width: 0;
        border-bottom-color: #ebeef5;
        &::after {
          top: 1px;
          margin-left: -6px;
          content: " ";
          position: absolute;
          display: block;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-top-width: 0;
          border-bottom-color: #fff;
        }
      }
    }
  }
</style>
