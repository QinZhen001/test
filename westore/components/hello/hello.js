import create from '../../utils/create'

// components/hello/hello.js
create({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        abc: '',
        pureProp: '',
        bbb: '组件私有数据',
    },

    ready: function () {
        // this.store.onChange = function (info) {
        //     console.log(info)
        // }
        // setTimeout(() => {
        //     this.setData({
        //         bbb: '使用 setData 修改组件私有数据'
        //     })
        // }, 2000)
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onClickHandler: function (e) {
            // this.store.data.globalPropTest = 'globalPropTest'
            // this.store.data.logs = (wx.getStorageSync('logs') || []).map(log => {
            //     return util.formatTime(new Date(log))
            // })
            // this.update().then(diff => {
            //     console.log('setData完成了')
            //     console.log('更新内容为', diff)
            // })

        }
    }
})
