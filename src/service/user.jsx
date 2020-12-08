import Utils from '../utils/index.jsx';
const _Utils = new Utils();
class User {
  login(loginInfo) {
    return _Utils.http({
      url: '/manage/user/login.do',
      methods: 'post',
      data: loginInfo
    });
  }
  // 退出登录
  logout() {
    return _Utils.http({
      methods: 'post',
      url: '/user/logout.do'
    });
  }
  userList(pageNum) {
    return _Utils.http({
      url: '/manage/user/list.do',
      methods: 'post',
      data: {
        pageNum: pageNum
      }
    });
  }
}
export default User;
