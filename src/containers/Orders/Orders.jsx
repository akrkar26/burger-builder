import React, { Component } from "react";
import axios from "../../axios-orders";
import Order from "../../components/Orders/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
      debugger;
    let data = [];
    axios
      .get("/orders.json")
      .then((res) => {
        for (let key in res.data) {
          data.push({ ...res.data[key], id: key });
        }
      })
      .catch((err) => {})
      .finally(() => {
        this.setState({ loading: false, orders: data });
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
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

export default withErrorHandler(Orders, axios);
