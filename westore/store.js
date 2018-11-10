export default {
    data: {
        motto1: null,
        userInfo1: null,
        hasUserInfo1: null,
        canIUse1: null,
        b1: {arr: []},
        firstName1: null,
        lastName1: null,
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        logs: [],
        b: {
            arr: [{name: '数值项目1'}],
            //深层节点也支持函数属性
            fnTest: function () {
                return this.motto.split('').reverse().join('')
            }
        },
        firstName: 'dnt',
        lastName: 'zhang',
        fullName: function () {
            return this.firstName + this.lastName
        },
        pureProp: 'pureProp',
        globalPropTest: 'abc', //更改我会刷新所有页面,不需要再组件和页面声明data依赖
        ccc: {ddd: 1} //更改我会刷新所有页面,不需要再组件和页面声明data依赖
    },
    globalData: ['ccc.ddd', 'globalPropTest'],
    logMotto: function (name) {
        console.log('name', name)
        console.log(this.data.motto)
    },
    //默认 false，为 true 会无脑更新所有实例
    //updateAll: true
}
