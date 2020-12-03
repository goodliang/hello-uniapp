import React, { Component } from 'react';
import Header from './header.jsx';
import Nav from './nav.jsx';
import './layout.scss';
import '../../style/theme.css';
class Layout extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
export default Layout;
