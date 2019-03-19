import React, { Component } from "react";
import PropTypes from "prop-types";
import { Select, Button } from "../ui-kit";


class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      sortOptions: [
        {
          name: 'Name',
          value: 'Name'
        },
        {
          name: 'Price',
          value: 'Price'
        },
        {
          name: 'Quantity',
          value: 'Quantity'
        },
        {
          name: 'Popularity',
          value: 'Popularity'
        }
      ]
    }
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        { items && this.handleRenderItemList() }
        {!items && <p>No Data found to display</p> }
      </div>
    );
  }

  handleRenderItemList = () => {
    const  { items, handleAddToCart } = this.props;
    const { sortOptions } = this.state;
  
    return (
      <div>
      {
      <div className="form-group" id="productListSort">
        <label>Sort By</label>
        <Select options={sortOptions} className="form-control" id="productListSortBy" onChange={this.handleOnChange} />
      </div> 
      }
      <div className="list-group">
        {
          items.map(item => {
            return (
              <a href="#" className="list-group-item list-group-item-action flex-column align-items-start" key={item.id}>
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{item.name}</h5>
                  <small>Price: {item.price} <i className="fa fa-inr"></i></small>
                </div>
                <p className="mb-1">
                  <img src="https://5.imimg.com/data5/EF/RQ/MY-3030942/lenovo-desktop-computer-500x500.jpg" className="productImgThumbnail" />
                  {item.description}
                </p>
                <Button type="button" className="btn btn-info pull-right" text="Add to cart" id={item.id} onClick={handleAddToCart} />
              </a>
            )
          })
        }
      </div>
    </div>
  
    )
  }

  handleOnChange = filter => {
    console.log(filter);
  }
}

ItemList.propTypes = {
  items: PropTypes.any,
  handleAddToCart: PropTypes.func.isRequired
};

export default ItemList;
