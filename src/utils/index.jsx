import history from '../router/history.jsx';
export default class Utils {
  http(params = {}) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/api' + params.url,
        type: params.methods || 'get',
        data: params.data,
        success: (res) => {
          if (res.status !== 0) {
            if (res.status === 10) {
              this.backLogin();
            }
            reject(res);
          } else {
            resolve(res);
          }
        },
        error(err) {
          reject(err.statusText);
        }
      });
    });
  }
  backLogin() {
    const { push, location } = history;
    push('/login?redireat=' + location.pathname + location.search);
  }
  tips(text) {
    alert(text);
  }
  setStorage(name, value) {
    const type = typeof value;
    if (type == 'object' && type != null) {
      localStorage.setItem(name, JSON.stringify(value));
    } else {
      localStorage.setItem(name, value);
    }
  }
  // 取出本地存储内容
  getStorage(name) {
    let data = window.localStorage.getItem(name);
    if (data) {
      return JSON.parse(data);
    } else {
      return '';
    }
  }
  // 删除本地存储
  removeStorage(name) {
    window.localStorage.removeItem(name);
  }
}
