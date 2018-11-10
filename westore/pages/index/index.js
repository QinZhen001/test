import store from '../../store'
import create from '../../utils/create'

const app = getApp()

create(store, {

    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },

    data: {
        motto: null,
        userInfo: null,
        hasUserInfo: null,
        canIUse: null,
        b: {arr: []},
        firstName: null,
        lastName: null,
        pureProp: null,
        aaa: '私有数据，不放在store',
        // globalPropTest: ''  这里有问题
    },


    // onShow:function(){
    //     this.update().then(diff => {
    //         console.log('setData完成了')
    //         console.log('更新内容为', diff)
    //     })
    // },

    onLoad: function () {
        this.update()
        // if (app.globalData.userInfo) {
        //     this.update({
        //         userInfo: app.globalData.userInfo,
        //         hasUserInfo: true
        //     })
        // } else if (this.data.canIUse) {
        //
        //     app.userInfoReadyCallback = res => {
        //         this.store.data.userInfo = res.userInfo
        //         this.store.data.hasUserInfo = true
        //         this.update()
        //     }
        // } else {
        //     wx.getUserInfo({
        //         success: res => {
        //             app.globalData.userInfo = res.userInfo
        //             this.store.data.userInfo = res.userInfo
        //             this.store.data.hasUserInfo = true
        //             this.update()
        //         }
        //     })
        // }
        // setTimeout(() => {
        //     this.setData({
        //         aaa: '使用 setData 修改不放在store的私有数据'
        //     })
        // }, 2000)
        //
        // setTimeout(() => {
        //     // this.store.data.motto = 'Hello Store222'
        //     // this.store.data.b.arr.push({ name: 'ccc' })
        //     this.update({
        //         motto: 'Hello Westore',
        //         [`b.arr[${this.store.data.b.arr.length}]`]: {name: '数组项2(将被删除)'}
        //     })
        //
        // }, 4000)
        //
        // setTimeout(() => {
        //     this.store.data.b.arr.splice(1, 1)
        //     this.update()
        // }, 6000)
        //
        // setTimeout(() => {
        //     //测试函数属性
        //     this.store.data.firstName = 'DNT'
        //     this.update()
        //
        // }, 8000)
        //
        // setTimeout(() => {
        //     this.store.data.fullName = function () {
        //         return '成功修改 fullName 函数'
        //     }
        //     //测试函数属性
        //     this.update({
        //         firstName: 'lei',
        //     })
        // }, 10000)
        //
        // setTimeout(() => {
        //     this.store.data.pureProp = '成功修改 Pure Component prop'
        //     this.update()
        // }, 12000)
    },
    // onReady: function () {
    //     this.update()
    // },

    getUserInfo: function (e) {
        app.globalData.userInfo = e.detail.userInfo
        this.store.data.userInfo = e.detail.userInfo
        this.store.data.hasUserInfo = true
        this.update()
    },
    onRandom: function (evt) {
        this.store.data.pureProp = evt.detail.rd
        this.update()
    },
    onClickHandler: function (event) {
        this.store.data.globalPropTest = 'aaaa'
        this.update()
        // console.log('globalPropTest', this.store.data.globalPropTest)
        // this.store.logMotto('aaa')
    }
})
