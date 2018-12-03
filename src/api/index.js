const { reqConfig } = require('./config/reqConfig');
const { identification, baseUrl } = require('./config/baseConfig');
const { wxLogin, basePostRequest, getSign, getVersion, base64Decode } = require('./utils/index.js');
const { SET_OPEN_ID, SET_SESSION_ID } = require('../store/types/gobal');
const { getStore } = require('wepy-redux');

const MAKE_SESSION_URL = '/darkroomlite/make_session';
const store = getStore();


/**
 * 封装wx小程序请求，返回一个promise
 * @string action 行为 (必填) (action的值只能为reqConfig中的key)
 * @object data 参数对象  (可省略)
 */
function xhwRequest(action, data = {}) {
  // console.log(action, data, isProduction);
  return new Promise(async (resolve, reject) => {
    if (Object.keys(reqConfig).indexOf(action) === -1) {
      //action不在reqConfig配置中
      reject(new Error('action填写错误'));
      return;
    }
    const url = `${baseUrl}${reqConfig[action].url}`;
    data.client_version = getVersion();
    if (reqConfig[action].needSessionId) {
      //需要sessionid 且没有data.sessionid
      data.sessionid = getSessionIdFromRedux() || wx.getStorageSync('sessionid') || await getSessionIdByRequest();
    }
    if (reqConfig[action].needOpenId) {
      //需要openid 且没有data.openid
      data.openid = getOpenIdFromRedux() || wx.getStorageSync('openid') || await getOpenIdByRequest();
    }
    data.item = identification;
    data.timestamp = new Date().getTime();
    data.sign = getSign(data);
    wx.request({
      url: url,
      data: data,
      method: reqConfig[action].method,
      header: reqConfig[action].header,
      success: function(res) {
        if (res.statusCode === 200) {
          resolve(res);
        } else {
          reject(res);
        }
      },
      fail: function(err) {
        reject(err);
      }
    });
  });
}

async function getSessionIdByRequest() {
  const code = (await wxLogin()).code;
  const res = await basePostRequest(MAKE_SESSION_URL, { code: code });
  const sessionid = res.data.data.mixData.sessionid;
  const openid = base64Decode(res.data.data.mixData.baseid);
  saveSessionIdAndOpenId(sessionid, openid);
  return sessionid;
}


async function getOpenIdByRequest() {
  const code = (await wxLogin()).code;
  const res = await basePostRequest(MAKE_SESSION_URL, { code: code });
  const sessionid = res.data.data.mixData.sessionid;
  const openid = base64Decode(res.data.data.mixData.baseid);
  saveSessionIdAndOpenId(sessionid, openid);
  return openid;
}


function getSessionIdFromRedux() {
  const sessionId = store.getState().gobal.sessionId;
  if (sessionId && sessionId !== '') {
    return sessionId;
  }
  return null;
}

function getOpenIdFromRedux() {
  const openId = store.getState().gobal.openId;
  if (openId && openId !== '') {
    return openId;
  }
  return null;
}

function saveSessionIdAndOpenId(sessionId, openId) {
  store.dispatch({
    type: SET_SESSION_ID,
    payload: sessionId
  });
  store.dispatch({
    type: SET_OPEN_ID,
    payload: openId
  });
  wx.setStorageSync('sessionid', sessionId);
  wx.setStorageSync('openid', openId);
}


module.exports = {
  xhwRequest
};


//sessionId 和 openId 的获取
//1. 去wepy-redux取数据 若有数据返回 否则第二步
//2. 去localStorage取取数据 若有数据返回 否则第三步
//3. 进行wx.login拿到code 进行后端请求 拿到sessionId 和 openId 并把这两个存到redux和localStorage中 方便下次请求
//总结： redux => localStorage => wx.login











