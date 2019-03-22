import React from "react";
import PropTypes from "prop-types";
import { Select, Button } from "../../ui-kit";
import { Link } from "react-router-dom";
import Item from "./Item";
import * as routes from "../../lib/constants";

const sortOptions = [
  {
    name: "Name",
    value: "Name"
  },
  {
    name: "Price",
    value: "Price"
  },
  {
    name: "Quantity",
    value: "Quantity"
  },
  {
    name: "Popularity",
    value: "Popularity"
  }
];

const handleSelect = () => {};

const handleRenderItemList = (
  items,
  handleAddToCart,
  handleRemoveToCart,
  isCart
) => {
  return (
    <div className="testClass">
      {
        <div className="form-group" id="productListSort">
          <label>Sort By</label>
          <Select
            options={sortOptions}
            className="form-control"
            id="productListSortBy"
            onChange={handleSelect}
          />
        </div>
      }
      <div className="row">
        {items.map(item => {
          return (
            <div className="col-sm-3" key={item.id}>
              <div className="card">
                <div className="card-body">
                  <Link to={`${routes.BASE_ITEM_ROUTE}${item.id}`}>
                    <Item item={item} />
                  </Link>
                  <Button
                    type="button"
                    className="btn btn-info"
                    text={isCart ? "Remove to cart" : "Add to cart"}
                    id={item.id}
                    onClick={isCart ? handleRemoveToCart : handleAddToCart}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ItemList = ({ items, handleAddToCart, handleRemoveToCart, isCart }) => {
  return (
    <div>
      {items &&
        handleRenderItemList(
          items,
          handleAddToCart,
          handleRemoveToCart,
          isCart
        )}
      {!items && <p>No Data found to display</p>}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.any,
  handleAddToCart: PropTypes.func,
  handleRemoveToCart: PropTypes.func
};

export default ItemList;
