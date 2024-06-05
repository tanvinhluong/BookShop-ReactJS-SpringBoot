import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import Navigation from '../customer/components/Navigation/Navigation'
import ProductDetails from '../customer/components/ProductDetail/ProductDetails'
import CheckOut from '../customer/components/Checkout/CheckOut'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import About from '../customer/pages/About'



const CustomerRouters = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
        {/* <Order /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default CustomerRouters
