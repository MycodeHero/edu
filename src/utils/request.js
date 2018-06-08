import axios from 'axios';
axios.defaults.withCredentials = true
import {PROXY_PATH} from '../const/proxy';

export default (refs) => {
  let {method, path, params, success, fail} = refs
  axios[method](`${PROXY_PATH}${path}`, params).then((data)=>{
    return new Promise((resolve, reject)=>{
      if(data.data.status) {
        resolve(data.data)
      } else {
        reject(data.data)
      }
    })
  }).then((data) => {
    success(data)
  }).catch((data) => {
    fail(data)
  })
}

