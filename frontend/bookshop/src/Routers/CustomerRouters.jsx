import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import Navigation from "../customer/components/Navigation/Navigation";
import ProductDetails from "../customer/components/ProductDetail/ProductDetails";
import CheckOut from "../customer/components/Checkout/CheckOut";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import About from "../customer/pages/About";

export const PATH_ROUTER = {
  LOGIN: "/login",
  REGISTER: "/register",
  HOME: "/",
  CART: "/cart",
  ABOUT: "/about",
  PRODUCT: "/:lavelOne/:lavelTwo/:lavelThree",
  PRODUCT_DETAILS: "/product/:productId",
  CHECKOUT: "/checkout",
  ACCOUNT: "/account",
  ACCOUNT_ORDER: "/account/order",
  ACCOUNT_ORDER_DETAILS: "/account/order/:orderId",
};

const Account = () => {
  return (
    <Routes>
      <Route path={PATH_ROUTER.ACCOUNT_ORDER} element={<Order />} />
      <Route
        path={PATH_ROUTER.ACCOUNT_ORDER_DETAILS}
        element={<OrderDetails />}
      />
    </Routes>
  );
};

const CustomerRouters = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path={PATH_ROUTER.LOGIN} element={<HomePage />} />
        <Route path={PATH_ROUTER.REGISTER} element={<HomePage />} />
        <Route path={PATH_ROUTER.HOME} element={<HomePage />} />
        <Route path={PATH_ROUTER.CART} element={<Cart />} />
        <Route path={PATH_ROUTER.ABOUT} element={<About />} />
        <Route path={PATH_ROUTER.PRODUCT} element={<Product />} />
        <Route
          path={PATH_ROUTER.PRODUCT_DETAILS}
          element={<ProductDetails />}
        />
        <Route path={PATH_ROUTER.CHECKOUT} element={<CheckOut />} />
        <Route path={`${PATH_ROUTER.ACCOUNT}/*`} element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default CustomerRouters;
