import React from 'react';
import Utils from '../../utils/index.jsx';
const _Utils = new Utils();

class OrderList extends React.Component {
  componentDidMount() {
    _Utils
      .http({
        url: '/manage/order/list.do',
        methods: 'get',
        data: this.state
      })
      .then((res) => {
        console.log(res, '1111');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return <div id="page-wrapper">订单页</div>;
  }
}
export default OrderList;
