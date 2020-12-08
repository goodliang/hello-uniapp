import React from 'react';
import Pagination from '../../components/pagination/index.jsx';
import Table from '../../components/table/index.jsx';
import User from '../../service/user.jsx';
import Utils from '../../utils/index.jsx';
const _Utils = new Utils();
const _User = new User();

class UserList extends React.Component {
  state = {
    list: [],
    pageNum: 1
  };

  componentDidMount() {
    this.getUserList();
  }
  getUserList = () => {
    _User
      .userList(this.state.pageNum)
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
    this.setState(
      {
        pageNum: e
      },
      this.getUserList
    );
  };
  render() {
    const tableHead = ['ID', '用户名', '邮箱', '电话', '注册时间'];
    const listBody = this.state.list.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{new Date(user.createTime).toLocaleString()}</td>
        </tr>
      );
    });
    return (
      <div id="page-wrapper">
        <div className="panel panel-default">
          <div className="panel-body">
            <Table thead={tableHead}>{listBody}</Table>
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
export default UserList;
