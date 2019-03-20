import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "../../ui-kit";

class Product extends Component {
  constructor() {
    super();
  }

  render() {
    const itemDetails = {
      id: 1,
      name: 'Apple iPhone Xs Max',
      image: 'appleIphoneXS.png',
      description: 'Facial Recognition, Fingerprint Scanner',
      brand: 'Apple',
      price: 99000,
      type: 'Mobile',
    }

    return (
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="product-preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1"><img src="https://5.imimg.com/data5/EF/RQ/MY-3030942/lenovo-desktop-computer-500x500.jpg" /></div>
                </div>
              </div>
              <div className="product-details col-md-6">
                <h3 className="product-title">{itemDetails.name}</h3>
                <p className="product-description">{itemDetails.description}</p>
                <h4 className="price">current price: <span>{itemDetails.price} <i className="fa fa-inr"></i></span></h4>
                <div className="action">
                  <Button type="button" className="btn btn-info" text="Add to cart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  item: PropTypes.any
};

export default Product;
