import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../../router/history.jsx';
import User from '../../service/user.jsx';
import Utils from '../../utils/index.jsx';
const _Utils = new Utils();
const _User = new User();
class Header extends Component {
  state = {
    name: _Utils.getStorage('userinfo').username || ''
  };
  logout = () => {
    console.log(this.props);
    _User.logout().then(() => {
      _Utils.removeStorage('userinfo');
      history.push('/login');
    });
  };
  render() {
    return (
      <div className="navbar navbar-default top-navbar">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <b>HAPPY</b>MMALL
          </Link>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle">
              <i className="fa fa-user fa-fw"></i>

              {this.state.name ? (
                <span>欢迎您,{this.state.name}</span>
              ) : (
                <span>未登录</span>
              )}
              <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li onClick={this.logout}>
                <a>
                  <i className="fa fa-sign-out fa-fw"></i>
                  <span>退出登录</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
