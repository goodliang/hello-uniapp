import React, { Component } from 'react';
import Utils from '../../utils/index.jsx';
const _Utils = new Utils();

class Home extends Component {
  componentDidMount() {
    this.submit();
  }
  submit = (e) => {
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
  };
  render() {
    return <div id="page-wrapper">我是首页</div>;
  }
}

export default Home;
