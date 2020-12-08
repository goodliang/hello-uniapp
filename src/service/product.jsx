import Utils from '../utils/index.jsx';
const _Utils = new Utils();
class Product {
  productList(pageNum) {
    return _Utils.http({
      url: '/manage/product/list.do',
      methods: 'get',
      data: {
        pageNum: pageNum
      }
    });
  }
  getSearch(params) {
    return _Utils.http({
      url: '/manage/product/search.do',
      methods: 'post',
      data: params
    });
  }
  // 变更商品销售状态
  setProductStatus(productInfo) {
    return _Utils.http({
      methods: 'post',
      url: '/manage/product/set_sale_status.do',
      data: productInfo
    });
  }
  /*
   *  品类相关
   */
  // 根据父品类id获取品类列表
  getCategoryList(parentCategoryId) {
    return _Utils.http({
      methods: 'post',
      url: '/manage/category/get_category.do',
      data: {
        categoryId: parentCategoryId || 0
      }
    });
  }
}
export default Product;
