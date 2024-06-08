import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './CSS/OrderDetails.css'
import AddressCard from './AddressCard'
import { API_BASE_URL } from '../../config/apiConfig'

const OrderDetails = () => {
  const { orderId } = useParams()
  const [order, setOrder] = useState(null)
  const jwt = localStorage.getItem('jwt')

  const fetchData = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      }
      const response = await axios.get(
        `${API_BASE_URL}/api/orders/${orderId}`,
        config
      )
      setOrder(response.data)
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [orderId, jwt])

  if (!order) {
    return <div>Loading...</div>
  }

  return (
    <div className="order-details">
      <h1>Order Details</h1>
      <div className="order-details-info">
        <AddressCard address={order.shippingAddress} />
        <p>
          <strong>Customer Name:</strong> {order.user.firstName}{' '}
          {order.user.lastName}
        </p>
        <p>
          <strong>Mobile:</strong> {order.shippingAddress.mobile}
        </p>
        <p>
          <strong>Total Price:</strong> ${order.totalDiscountedPrice}
        </p>
      </div>
      <h2>Order Items</h2>
      <div className="order-items">
        {order.orderItems.map((item, index) => (
          <div key={index} className="order-item">
            <img
              src={item.product.imageUrl || 'default-product-image.jpg'}
              alt={item.product.title}
              className="product-image"
            />
            <div className="product-details">
              <p>
                <strong>Product Name:</strong> {item.product.title}
              </p>
              <p>
                <strong>Original Price:</strong> $
                {item.product.price.toFixed(2)}
              </p>
              <p>
                <strong>Discount Price:</strong> $
                {item.product.discountPrice.toFixed(2)}
              </p>
              <p>
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <p>
                <strong>Total:</strong> $
                {(item.product.discountPrice * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderDetails
