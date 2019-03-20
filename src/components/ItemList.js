import React, { Component } from "react";
import PropTypes from "prop-types";
import { Select } from "../ui-kit";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Item from "./Item";

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
                <Item  item = {item} handleAddToCart = {this.props.handleAddToCart} />
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
