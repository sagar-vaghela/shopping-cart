import React, { Component } from "react";
import PropTypes from "prop-types";
import { AutosuggestElement } from "../common-ui-components";
import { connect } from "react-redux";
import { getProductType } from "../../actions";

class LeftSidebarFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterData: [],
      offerTagList: [],
      offerTag: [],
      inquiryTagList: [],
      inquiryTag: [],
    };
  }

  handelChange(data){
    console.log(data);
  }

  render() {
    const {
      filters,
      products
    } = this.props;

    console.log(products);
    
    return (
      <div>
        <AutosuggestElement suggestionValues={products} placeholder="Select Product" onChange={this.handelChange} />
        <button type="button" class="btn btn-info"><i class="fa fa-search"></i></button>
        {/* {filters.map(filter => {
          return (
            <div className="filter-wrapper" key={filter.name}>
              <div className={filter.className}>{filter.name}</div>
              {filter.type === "select" && (
                <Select
                  // foruse={filter.name}
                  name={filter.name}
                  options={filter.items}
                  defaultValue={"Select"}
                  value={"Select"}
                  onChange={this.handleOnChange}
                  className="drop-down"
                />
              )}
              {filter.type === "text" && (
                <Input
                  type="text"
                  foruse={filter.name}
                  name={filter.name}
                  onChange={this.handleOnChange}
                />
              )}
            </div>
          );
        })} */}
      </div>
    );
  }

  componentDidMount = () => {
    this.props.getProductType();    
  }

  handleOnChange = filter => {
    const filterData = this.state.filterData;
    const indexOf = filterData.findIndex(f => {
      return f.name === filter.values.name;
    });

    if (indexOf === -1) {
      filterData.push(filter.values);
    } else {
      filterData.splice(indexOf, 1);
      filterData.push(filter.values);
    }

    this.setState({ filterData });

    // calling function
    this.props.onChange(filterData);
  };

  handleSelectList = (isFor, selected) => {
    const filterData = this.state.filterData;
    const indexOf = filterData.findIndex(f => {
      return f.name === isFor;
    });
    if (indexOf === -1) {
      filterData.push({ name: isFor, val: selected.id });
    } else {
      filterData.splice(indexOf, 1);
      filterData.push({ name: isFor, val: selected.id });
    }
    this.setState({ filterData });
    this.props.onChange(filterData);
  };
}

LeftSidebarFilter.propTypes = {
  filters: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  handleResetFilterClick: PropTypes.func,
  handleApplyClick: PropTypes.func,
  filterApply: PropTypes.bool,
  products: PropTypes.any
};


const mapStateToProps = state => ({
  items: state.itemData.items,
  cartData: state.cartData,
  products: state.productData.products
});

const mapDispatchToProps = {
  getProductType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftSidebarFilter);