import React, { Component } from "react";
import PropTypes from "prop-types";
import { LeftSidebarFilter } from "../../ui-kit";

const staticData = [
    { name: "option1", className: "", value: "option1" },
  { name: "option2", className: "", value: "option2" }
];

class DashboardFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterApply: false,
      filData: [],
    };
  }

  render() {

    const Filters = [
        {
          name: "Category",
          className: "filter-title",
          type: "select",
          items: staticData
        },
      ];
  
    return (
      <div>
        {Filters.length > 0 ? (
          <div className="left-filters">
            <LeftSidebarFilter
              filters={Filters}
              onChange={this.handleOnChange}
              filterApply={this.state.filterApply}
              handleSelect={this.handleSelect}
              handleLanguageSwitch={this.handleLanguageSwitch}
              isNotFilter={false}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  handleResetFilterClick = () => {
    this.setState({ filterApply: false });
  };

  handleApplyClick = () => {
    this.setState({ filterApply: true });
    this.props.handleApplyClick(this.state.filData);
  };

  handleOnChange = filterData => {
    this.setState({ filData: filterData });
  };

  handleSelect = filterData => {
    this.setState({ filData: filterData });
  };
}

DashboardFilter.propTypes = {
  handleApplyClick: PropTypes.func.isRequired
};

export default DashboardFilter;
