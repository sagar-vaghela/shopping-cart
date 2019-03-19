import React, { Component } from "react";
import PropTypes from "prop-types";


class ItemList extends Component {
  render() {
    const { items } = this.props;
    console.log(items);
    
    return (
            <main className="col-12 col-md-9 col-xl-10 py-md-3 pl-md-5 bd-content">
              <div className="form-group" id="productListSort">
                <label htmlFor="productListSortBy">Sort By</label>
                <select className="form-control" id="productListSortBy">
                  <option>Price</option>
                  <option>Quantity</option>
                  <option>Name</option>
                  <option>Popularity</option>
                </select>
              </div>
              <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Product Name</h5>
                    <small>Price: 100</small>
                  </div>
                  <p className="mb-1"><img src="https://5.imimg.com/data5/EF/RQ/MY-3030942/lenovo-desktop-computer-500x500.jpg" className="productImgThumbnail" /> Product Description, Product Description, Product Description Product Description, Product Description, Product Description.</p>
                  <small>Some Note</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Product Name</h5>
                    <small>Price: 100</small>
                  </div>
                  <p className="mb-1"><img src="https://5.imimg.com/data5/EF/RQ/MY-3030942/lenovo-desktop-computer-500x500.jpg" className="productImgThumbnail" /> Product Description, Product Description, Product Description Product Description, Product Description, Product Description.</p>
                  <small>Some Note</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Product Name</h5>
                    <small>Price: 100</small>
                  </div>
                  <p className="mb-1"><img src="https://5.imimg.com/data5/EF/RQ/MY-3030942/lenovo-desktop-computer-500x500.jpg" className="productImgThumbnail" /> Product Description, Product Description, Product Description Product Description, Product Description, Product Description.</p>
                  <small>Some Note</small>
                </a>
              </div>
            </main>
    );
  }
}

ItemList.propTypes = {
};

export default ItemList;
