import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/ListOrder.css';

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      };
      const response = await axios.get(
        'http://localhost:5454/api/admin/orders/',
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

  const handleDetailsClick = (orderId) => {
    navigate(`/admin/orders/${orderId}`);
  };

  return (
    <div className='list-order'>
      <h1>All Orders List</h1>
      <div className="listorder-format-main">
        <p>Order ID</p>
        <p>Total Items</p>
        <p>Total Price</p>
        <p>Order Date</p>
        <p>Order Status</p>
        <p>Details</p>
      </div>
      <div className="listorder-allorders">
        <hr />
        {!!orders && orders.map((order, index) => (
          <React.Fragment key={index}>
            <div className="listorder-format-main listorder-format">
              <p>{order.id}</p>
              <p>{order.totalItem}</p>
              <p>{order.totalPrice}</p>
              <p>{order.orderDate}</p>
              <p>{order.orderStatus}</p>
              <button onClick={() => handleDetailsClick(order.id)}>Details</button>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default OrdersTable;
