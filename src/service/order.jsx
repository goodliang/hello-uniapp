import Utils from '../utils/index.jsx';
const _Utils = new Utils();
class Order {
  orderList(pageNum) {
    return _Utils.http({
      url: '/manage/user/list.do',
      methods: 'post',
      data: {
        pageNum: pageNum
      }
    });
  }
}
export default Order;
