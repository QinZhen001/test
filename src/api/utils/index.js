const ksort = require('./ksort.js');
const md5 = require('crypto-js/md5');
const { baseUrl, clientVersion, identification } = require('../config/baseConfig');
// const Base64 = require('crypto-js/enc-base64');

const Base64 = require('./Base64.js');

const base64 = new Base64();
const token = 's28hpnkwh*]sf8Gh';

/**
 * 获取sign
 * @param dataArr 请求中的data所有数
 */
function getSign(dataArr) {
  let str = assemble(dataArr);
  return (md5((((md5(str).toString().toUpperCase())) + token)).toString()).toUpperCase();
}


function assemble(dataArr) {
  let data = dataArr;
  ksort(data);
  let sign = '';
  for (let i in data) {
    //处理大于11版本
    if ((i == 'group_comment') || (i == 'wx_name')) {
      // if (config.default.client_version > 11 && (i == 'wx_name')) {
    } else {
      if (!data[i]) continue;
      sign += i + (data[i].constructor == Array ? assemble(data[i]) : data[i]);
    }
  }
  return sign;
}

// promise封装wx.login
function wxLogin() {
  return new Promise((resolve, reject) => {
    wx.login({
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    });
  });
}


//基础post请求
function basePostRequest(url, data) {
  return new Promise((resolve, reject) => {
    data.client_version = clientVersion;
    data.item = identification;
    data.timestamp = new Date().getTime();
    data.sign = getSign(data);
    wx.request({
      url: `${baseUrl}${url}`,
      data: data,
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
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


/**
 * @param version 是data.client_version
 */
function getVersion(version) {
  return clientVersion;
}


function base64Decode(str) {
  return base64.decode(str);
}


module.exports = {
  getSign,
  wxLogin,
  basePostRequest,
  getVersion,
  base64Decode
};
