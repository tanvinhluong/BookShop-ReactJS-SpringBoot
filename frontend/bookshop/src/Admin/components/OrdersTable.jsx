import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/ListOrder.css";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const jwt = localStorage.getItem("jwt");

  const fetchOrders = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      };
      const response = await axios.get(
        "http://localhost:5454/api/admin/orders/",
        config
      );
      setOrders(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="list-order">
      <h1>All Orders List</h1>
      <div className="listorder-format-main">
        <p>Order ID</p>
        <p>Total Items</p>
        <p>Total Price</p>
        <p>Order Date</p>
        <p>Order Status</p>
      </div>
      <div className="listorder-allorders">
        <hr />
        {!!orders &&
          orders.map((order, index) => (
            <React.Fragment key={index}>
              <div className="listorder-format-main listorder-format">
                <p>{order.id}</p>
                <p>{order.totalItem}</p>
                <p>{order.totalPrice}</p>
                <p>{order.orderDate}</p>
                <p>{order.orderStatus}</p>
              </div>
              <hr />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default OrdersTable;
