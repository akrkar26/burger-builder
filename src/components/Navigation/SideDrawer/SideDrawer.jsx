import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Aux from "../../../hoc/Auxillary/Auxillary";
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {

    let attachedClass = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClass = [classes.SideDrawer, classes.Open];
    }

  return (
    <Aux>
    <Backdrop show={props.open} clicked={props.closed}></Backdrop>
    <div className={attachedClass.join(' ')}>
      <div className={classes.Logo}>
        <Logo></Logo>
      </div>
      <nav>
        <NavigationItems></NavigationItems>
      </nav>
    </div>
    </Aux>
  );
};

export default sideDrawer;
