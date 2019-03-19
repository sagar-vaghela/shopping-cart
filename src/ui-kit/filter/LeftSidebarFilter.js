import React, { Component } from "react";
import PropTypes from "prop-types";
import { Select, Input, Button } from "../common-ui-components";

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

  render() {
    const {
      filters,
    } = this.props;

    return (
      <div>
        {filters.map(filter => {
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
        })}
      </div>
    );
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
};

export default LeftSidebarFilter;
