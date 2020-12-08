import React from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
const RcPagination = (props) => {
  return (
    <div className="row text-center">
      <div className="col-md-12">
        <Pagination {...props} hideOnSinglePage />
      </div>{' '}
    </div>
  );
};
export default RcPagination;
