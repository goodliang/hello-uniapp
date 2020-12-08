import React from 'react';
import Product from '../../service/product.jsx';
const _Product = new Product();
class Classify extends React.Component {
  state = {
    firstCategoryList: [],
    firstCategoryId: 0,
    secondCategoryList: [],
    secondCategoryId: 0
  };
  componentDidMount() {
    this.initData(0, 1);
  }
  initData(id, type) {
    _Product
      .getCategoryList(id)
      .then((res) => {
        if (type === 1) {
          this.setState({
            firstCategoryList: res.data
          });
        } else {
          this.setState({
            secondCategoryList: res.data
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  changeFirstClassify = (e) => {
    this.setState(
      {
        firstCategoryId: e.target.value,
        secondCategoryId: 0,
        secondCategoryList: []
      },
      () => {
        this.initData(this.state.firstCategoryId, 2);
        this.emitClassify();
      }
    );
  };
  changeSecondClassify = (e) => {
    this.setState(
      {
        secondCategoryId: e.target.value
      },
      this.emitClassify
    );
  };
  emitClassify = () => {
    this.props.onCategoryChange(
      this.state.firstCategoryId,
      this.state.secondCategoryId
    );
  };
  render() {
    return (
      <div className="form-inline">
        <select
          className="form-control mr-sm"
          onChange={this.changeFirstClassify}
        >
          <option value="">请选择一级分类</option>
          {this.state.firstCategoryList.map((item, index) => {
            return (
              <option value={item.id} key={index}>
                {item.name}
              </option>
            );
          })}
        </select>
        {this.state.firstCategoryId.length > 0 ? (
          <select className="form-control" onChange={this.changeSecondClassify}>
            <option value="">请选择二级分类</option>
            {this.state.secondCategoryList.map((item, index) => {
              return (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              );
            })}
          </select>
        ) : null}
      </div>
    );
  }
}
export default Classify;
