import axios from 'axios'
import Qs from 'qs'
import {Encrypt, Decrypt} from '@myplugin/aes.js'

//创建axios实例
const httpService = axios.create({
  timeout: 3000
})

//request拦截器
httpService.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

//respone拦截器
httpService.interceptors.response.use(
  response => {
    //处理响应得代码
    return response.data
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '错误请求';
          break;
        case 401:
          error.message = '未授权，请重新登录';
          break;
        case 403:
          error.message = '拒绝访问';
          break;
        case 404:
          error.message = '请求错误,未找到该资源';
          break;
        case 405:
          error.message = '请求方法未允许';
          break;
        case 408:
          error.message = '请求超时';
          break;
        case 500:
          error.message = '服务器端出错';
          break;
        case 501:
          error.message = '网络未实现';
          break;
        case 502:
          error.message = '网络错误';
          break;
        case 503:
          error.message = '服务不可用';
          break;
        case 504:
          error.message = '网络超时';
          break;
        case 505:
          error.message = 'http版本不支持该请求';
          break;
        default:
          error.message = `未知错误${error.response.status}`;
      }
    } else {
      error.message = "连接到服务器失败";
    }
    return Promise.reject(error);
  }
)

//网络请求部分

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'get',
      params: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

export function post(url, params = {},...EncryptArr) {
  return new Promise((resolve, reject) => {
    params = {...params}
    if(EncryptArr){
      EncryptArr.forEach((proname)=>{
        if(params[proname]) params[proname] = Encrypt(params[proname])
      })
    }
    httpService({
      url: url,
      method: 'post',
      data: params,
      transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      dataType: "json"
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

export function fileUpload(url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'post',
      data: params,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}


export default {
  get,
  post,
  fileUpload
}