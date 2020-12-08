import React from 'react';
import Pagination from '../../components/pagination/index.jsx';
import Order from '../../service/order.jsx';
import Utils from '../../utils/index.jsx';
const _Utils = new Utils();
const _Order = new Order();
class OrderList extends React.Component {
  state = {
    list: [],
    pageNum: 1
  };
  componentDidMount() {
    this.getOrderList();
  }
  getOrderList = () => {
    _Order
      .orderList(this.state.pageNum)
      .then((res) => {
        this.setState({
          list: res.data.list
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  changePage = (e) => {
    this.setState({
      pageNum: e
    });
  };
  render() {
    return (
      <div id="page-wrapper">
        <div className="panel panel-default">
          <div className="panel-body">
            <table className="table table-responsive">
              <thead>
                <tr>
                  <td>订单号</td>
                  <td>收件人</td>
                  <td>订单状态</td>
                  <td>订单总价</td>
                  <td>创建时间</td>
                  <td>操作</td>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((order, index) => {
                  return (
                    <tr key={index}>
                      <td>{order.orderNo}</td>
                      <td>{order.receiverName}</td>
                      <td>{order.statusDesc}</td>
                      <td>￥{order.payment}</td>
                      <td>{order.createTime}</td>
                      <td>{order.orderNo}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <Pagination
          current={this.state.pageNum}
          total={100}
          onChange={this.changePage}
        ></Pagination>
      </div>
    );
  }
}
export default OrderList;
