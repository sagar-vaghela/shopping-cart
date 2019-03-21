import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../ui-kit";
import Item from "./Item";

const ItemListStory = ( { items } ) => {
  return (
    <div className="testClass">
      <div className="row">
        {
          items && items.map(item => {
            return (
              <div className="col-sm-3" key={item.id}>
              <div className="card">
              <div className="card-body">
                <Item item={item} />
              <Button type="button" className="btn btn-info" text="Add to cart" id={item.id} />
              </div>
              </div>
              </div>)
          })
        }
        {items.length === 0 && <p>No Data found to display</p>}
      </div>
    </div>
  )
}

ItemListStory.propTypes = {
  items: PropTypes.any
};

export default ItemListStory;
