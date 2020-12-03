/*
 * @Author: goodLiang
 * @Date: 2020-11-27 14:30:41
 * @LastEditors: goodLiang
 * @LastEditTime: 2020-12-03 15:25:24
 */
import React, { Component } from 'react';
import User from '../../service/user.jsx';
import Utils from '../../utils/index.jsx';
const _Utils = new Utils();
const _User = new User();
class Login extends Component {
  state = {
    username: '',
    password: '',
    redireat: this.props.location.search.split('redireat=')[1] || '/'
  };
  changeInput = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  checkLogin() {
    const username = $.trim(this.state.username),
      password = $.trim(this.state.password);
    if (typeof username !== 'string' || username.length === 0) {
      return {
        state: false,
        msg: '请输入用户名'
      };
    }
    if (typeof password !== 'string' || password.length === 0) {
      return {
        state: false,
        msg: '请输入密码'
      };
    }
    return {
      state: true,
      msg: '验证通过'
    };
  }
  submit = () => {
    const checkout = this.checkLogin();
    if (checkout.state) {
      _User
        .login(this.state)
        .then((res) => {
          console.log(res.data);
          _Utils.setStorage('userinfo', res.data);
          this.props.history.push(this.state.redireat);
        })
        .catch((err) => {
          _Utils.tips(err.msg);
        });
    } else {
      _Utils.tips(checkout.msg);
    }
  };
  enter = (e) => {
    if (e.keyCode === 13) {
      this.submit();
    }
  };
  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default login-panel">
          <div className="panel-heading">欢迎登录 - MMALL管理系统</div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="请输入用户名"
                  onChange={this.changeInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="请输入密码"
                  onChange={this.changeInput}
                  onKeyUp={this.enter}
                />
              </div>
              <button
                className="btn btn-lg btn-primary btn-block"
                onClick={this.submit}
              >
                登录
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
