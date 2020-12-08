import React from 'react';
import Classify from '../../components/classify/index.jsx';
import Product from '../../service/product.jsx';
const _Product = new Product();
class ProductForm extends React.Component {
  state = {
    name: '',
    subtitle: '',
    categoryId: 0,
    parentCategoryId: 0,
    subImages: []
  };
  onCategoryChange = (categoryId, parentCategoryId) => {
    console.log(categoryId, parentCategoryId);
    this.setState({
      categoryId: categoryId,
      parentCategoryId: parentCategoryId
    });
  };
  render() {
    return (
      <div id="page-wrapper">
        <div className="form-horizontal">
          <div className="form-group">
            <label className="col-md-2 control-label">商品名称</label>
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="请输入商品名称"
                name="name"
                value={this.state.name}
                onChange={(e) => this.onValueChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">商品描述</label>
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="请输入商品描述"
                name="subtitle"
                value={this.state.subtitle}
                onChange={(e) => this.onValueChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">所属分类</label>
            <div className="col-md-10">
              <Classify
                categoryId={this.state.categoryId}
                parentCategoryId={this.state.parentCategoryId}
                onCategoryChange={(categoryId, parentCategoryId) =>
                  this.onCategoryChange(categoryId, parentCategoryId)
                }
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">商品价格</label>
            <div className="col-md-3">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="价格"
                  name="price"
                  value={this.state.price}
                  onChange={(e) => this.onValueChange(e)}
                />
                <span className="input-group-addon">元</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">商品库存</label>
            <div className="col-md-3">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="库存"
                  name="stock"
                  value={this.state.stock}
                  onChange={(e) => this.onValueChange(e)}
                />
                <span className="input-group-addon">件</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">商品图片</label>
            <div className="col-md-10">
              {this.state.subImages.length ? (
                this.state.subImages.map((image, index) => (
                  <div className="img-con" key={index}>
                    <img className="img" src={image.url} />
                    <i
                      className="fa fa-close"
                      index={index}
                      onClick={(e) => this.onImageDelete(e)}
                    ></i>
                  </div>
                ))
              ) : (
                <div>请上传图片</div>
              )}
            </div>
            <div className="col-md-offset-2 col-md-10 file-upload-con"></div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">商品详情</label>
            <div className="col-md-10"></div>
          </div>
          <div className="form-group">
            <div className="col-md-offset-2 col-md-10">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  this.onSubmit(e);
                }}
              >
                提交
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductForm;
