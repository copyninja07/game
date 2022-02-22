/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import SidebarLink from "./SidebarLink";
import SidebarCategory from "./SidebarCategory";

const SidebarContent = ({ onClick, sidebarCollapse }) => (
  <div className="sidebar__content">
    <ul className="sidebar__block">
      <SidebarLink
        title="Log In"
        icon="exit"
        route="/log_in"
        onClick={onClick}
      />
    </ul>
    <ul className="sidebar__block">
      <SidebarLink title="User" route="/user" onClick={onClick} />
      <SidebarLink title="Game Rules" route="/gameRules" onClick={onClick} />
      <SidebarLink
        title="User Management"
        route="/userManagement"
        onClick={onClick}
      />
      <SidebarLink title="Pages" route="/page" onClick={onClick} />
      <SidebarLink title="Promotions" route="/promotions" onClick={onClick} />
      <SidebarLink title="Game T/C" route="/gametc" onClick={onClick} />
      <SidebarLink title="Period" route="/period" onClick={onClick} />
      <SidebarLink title="Payment" route="/payment" onClick={onClick} />
      <SidebarLink
        title="Request Admin"
        route="/requestAdmin"
        onClick={onClick}
      />
      <SidebarLink title="Wallet" route="/wallet" onClick={onClick} />
      <SidebarLink
        title="Game setting"
        route="/gameSetting"
        onClick={onClick}
      />
    </ul>
  </div>
);

SidebarContent.propTypes = {
  onClick: PropTypes.func.isRequired,
  sidebarCollapse: PropTypes.bool,
};

SidebarContent.defaultProps = {
  sidebarCollapse: false,
};

export default SidebarContent;
