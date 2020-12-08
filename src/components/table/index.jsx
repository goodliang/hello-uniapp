import React from 'react';

class TableList extends React.Component {
  state = {
    firstLoad: true
  };
  static defaultProps = {
    thead: []
  };
  static getDerivedStateFromProps(props, state) {
    return null;
  }
  componentDidUpdate() {}
  render() {
    const thead = this.props.thead.map((title, index) => {
      if (typeof title === 'object') {
        return (
          <th key={index} width={title.width}>
            {title.name}
          </th>
        );
      } else {
        return <th key={index}>{title}</th>;
      }
    });
    const noContent = (
      <tr className="text-center">
        <td colSpan="5">没有内容</td>
      </tr>
    );
    const children = this.props.children;
    const tbody = children && children.length > 0 ? children : noContent;
    return (
      <table className="table table-responsive">
        <thead>
          <tr>{thead}</tr>
        </thead>
        <tbody>{tbody}</tbody>
      </table>
    );
  }
}
export default TableList;
