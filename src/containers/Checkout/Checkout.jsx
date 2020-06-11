import React, { Component } from "react";
import {Route} from 'react-router-dom';
import CheckoutSummary from "../../components/Orders/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";


class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: null
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let totalPrice = 0;
    query.forEach((value, key) => {
        if (key === 'totalPrice') {
            return totalPrice = Number(value);
        }else {
            return ingredients[key] = Number(value);
        }
    });
    this.setState({ ingredients: ingredients,  totalPrice: totalPrice});
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        ></CheckoutSummary>
        <Route path={this.props.match.path + '/contact-data'} render={() => (<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}></ContactData>)}></Route>
      </div>
    );
  }
}

export default Checkout;
