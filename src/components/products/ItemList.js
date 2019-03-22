import React, { Component } from "react";
import PropTypes from "prop-types";
import { Select, Button } from "../../ui-kit";
import { Link } from 'react-router-dom';
import Item from "./Item";
import * as routes from "../../lib/constants";

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
        {items && this.handleRenderItemList()}
        {!items && <p>No Data found to display</p>}
      </div>
    );
  }

  handleRenderItemList = () => {
    const { items, handleAddToCart } = this.props;
    const { sortOptions } = this.state;

    return (
      <div className="testClass">
        {
          <div className="form-group" id="productListSort">
            <label>Sort By</label>
            <Select options={sortOptions} className="form-control" id="productListSortBy" onChange={this.handleOnChange} />
          </div>
        }
        <div className="row">
          {
            items.map(item => {
              return (
                <div className="col-sm-3" key={item.id}>
                  <div className="card">
                    <div className="card-body">
                      <Link to={`${routes.BASE_ITEM_ROUTE}${item.id}`}>
                        <Item item={item} />
                      </Link>
                      <Button type="button" className="btn btn-info" text="Add to cart" id={item.id} onClick={handleAddToCart} />
                      </div>
                  </div>
                </div>               
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
