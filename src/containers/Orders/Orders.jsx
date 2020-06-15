import React, { Component } from "react";
import axios from "../../axios-orders";
import { connect } from 'react-redux';
import Order from "../../components/Orders/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { fetchOrders } from "../../store/actions";

class Orders extends Component {

  componentDidMount() {
    this.props.onFetchOrders();
  }
  render() {
    return (
      <div>
        {this.props.orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          ></Order>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(fetchOrders())
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(Orders, axios));
