import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../components/pagination/index.jsx';
import Table from '../../components/table/index.jsx';
import Product from '../../service/product.jsx';
import Search from './components/search.jsx';
import Utils from '../../utils/index.jsx';
const _Utils = new Utils();
const _Product = new Product();

class ProductList extends React.Component {
  state = {
    list: [],
    pageNum: 1
  };

  componentDidMount() {
    this.getProductList();
  }
  getProductList = () => {
    _Product
      .productList(this.state.pageNum)
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
      this.getProductList
    );
  };
  changeProductState = (id, type) => {
    const newType = type === 1 ? 2 : 1;
    _Product
      .setProductStatus({
        productId: id,
        status: newType
      })
      .then((res) => {
        this.getProductList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  tapSearch = (search) => {
    search.pageNum = 1;
    _Product
      .getSearch(search)
      .then((res) => {
        this.setState({
          list: res.data.list
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const tableHead = [
      { name: '商品ID', width: '10%' },
      { name: '商品信息', width: '50%' },
      { name: '价格', width: '10%' },
      { name: '状态', width: '15%' },
      { name: '操作', width: '15%' }
    ];
    const listBody = this.state.list.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>
            <p>{product.name}</p>
            <p>{product.subtitle}</p>
          </td>
          <td>￥{product.price}</td>
          <td>
            {product.status === 1 ? (
              <div>
                <label className="label label-success">已上架</label>
                <span
                  className="btn btn-link"
                  onClick={() =>
                    this.changeProductState(product.id, product.status)
                  }
                >
                  下架
                </span>
              </div>
            ) : (
              <div>
                <label className="label label-warning">已下架</label>
                <span
                  className="btn btn-link"
                  onClick={() =>
                    this.changeProductState(product.id, product.status)
                  }
                >
                  上架
                </span>
              </div>
            )}
          </td>
          <td>
            <Link to={`/product/detail/${product.id}`} className="btn btn-link">
              详情
            </Link>
            <Link to={`/product/edit/${product.id}`} className="btn btn-link">
              编辑
            </Link>
          </td>
        </tr>
      );
    });
    return (
      <div id="page-wrapper">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="row">
              <div className="col-md-6">
                <h3 className="panel-title ">商品列表</h3>
              </div>
              <div className="col-md-6 text-right">
                <Link to="/product/creat" className="btn btn-primary">
                  添加商品
                </Link>
              </div>
            </div>
          </div>
          <div className="panel-body">
            <Search tapSearch={this.tapSearch}></Search>
          </div>
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
export default ProductList;
