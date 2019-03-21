import React from "react";
import { Button } from "../../ui-kit";

const ProductStory = ({ item }) => {
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
              {item && 
                <div className="product-details col-md-6">
                  <h3 className="product-title">{item.name}</h3>
                  <h3 className="product-title">{item.brand}</h3>
                  <p className="product-description">{item.description}</p>
                  <h4 className="price">current price: <i className="fa fa-usd"></i> <span>{item.price} </span></h4>
                  <div className="action">
                    <Button type="button" className="btn btn-info" text="Add to cart" id={item.id} />
                  </div>
                  <h3 className="product-title">{item.type}</h3>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductStory;
