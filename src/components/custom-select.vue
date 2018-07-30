<template>
  <div class="custom-select">
    <div class="menu-wrapper">
      <div class="menu">
        <div class="list-wrapper">
          <ul>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
          </ul>
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
        value6: ''
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet">
  .menu-wrapper {
    position: relative;
    margin-top: 12px;
    width: 200px;
    height: 100%;
    min-width: 217px;
    box-sizing: border-box;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    border: 1px solid #e4e7ed;
    transform-origin: center top;
    border-radius: 4px;
    background: #fff;
    z-index: 2009;
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
          list-style: none;
          margin: 0;
          box-sizing: border-box;
          li {
            font-size: 14px;
            padding: 0 20px;
            position: relative;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #606266;
            height: 34px;
            line-height: 34px;
            box-sizing: border-box;
            cursor: pointer;
            &:hover {
              background: #f5f7fa;
            }
          }
        }
      }
    }
    .menu-triangle {
      position: absolute;
      left: 35px;
      top: -6px;
      filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
      display: block;
      width: 0;
      height: 0;
      border: 6px solid red;
      &::after {
        top: 1px;
        margin-left: -6px;
        content: " ";
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border: 6px solid transparent;
      }
    }
  }
</style>
