// 配置路由表
const reqConfig = {
  getHomePageList: {
    url: '/template/proto_home_page_list',
    method: 'POST',
    header: { 'content-type': 'application/x-www-form-urlencoded' },
    needSessionId: true,
    needOpenId: false
  },
  getTag: {
    url: '/template/get_tag',
    method: 'POST',
    header: { 'content-type': 'application/x-www-form-urlencoded' },
    needSessionId: false,
    needOpenId: false
  },
  getBannerList: {
    url: '/template/proto_broadcast_list',
    method: 'POST',
    header: { 'content-type': 'application/x-www-form-urlencoded' },
    needSessionId: false,
    needOpenId: false
  },
  toReward: {
    url: '/reward/toReward',
    method: 'GET',
    header: { 'content-type': 'application/json' },
    needSessionId: false,
    needOpenId: true
  },
  getRewardList: {
    url: '/reward/list',
    method: 'GET',
    header: { 'content-type': 'application/json' },
    needSessionId: false,
    needOpenId: false
  },
  getDetailsList: {
    url: '/template/proto_details_list',
    method: 'POST',
    header: { 'content-type': 'application/x-www-form-urlencoded' },
    needSessionId: true,
    needOpenId: false
  },
  jumpApp: {
    url: '/common/get_app_jump_info',
    method: 'POST',
    header: { 'content-type': 'application/x-www-form-urlencoded' },
    needSessionId: false,
    needOpenId: false
  }
};


module.exports = {
  reqConfig
};


/**
 * 经过分析
 * data里面的必有参数为 client_version(客户端版本号) item(小程序标识) timestamp(时间戳) sign(签名)
 * data里面的常有常数为 sessionid openid
 */


