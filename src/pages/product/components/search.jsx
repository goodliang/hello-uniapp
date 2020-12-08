import React from 'react';
const state = {
  searchType: 'productId', //productId / productName
  searchKeyword: ''
};
const Search = (props) => {
  const changeValue = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    state[name] = value;
    console.log(state);
  };
  const submit = () => {
    const params = {};
    params[state.searchType] = state.searchKeyword;
    console.log(params, state);
    props.tapSearch(params);
  };
  return (
    <div className="form-inline">
      <div className="form-group mr-sm">
        <select
          className="form-control"
          name="searchType"
          onChange={changeValue}
        >
          <option value="productId">按商品ID查询</option>
          <option value="productName">按商品名称查询</option>
        </select>
      </div>
      <div className="form-group mr-sm" onChange={changeValue}>
        <input
          type="text"
          className="form-control"
          name="searchKeyword"
          placeholder="请输入关键词"
        />
      </div>
      <button className="btn btn-primary" onClick={submit}>
        搜索
      </button>
    </div>
  );
};
export default Search;
