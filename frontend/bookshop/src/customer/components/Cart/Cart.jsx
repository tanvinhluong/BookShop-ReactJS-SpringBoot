import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getCart());
  }, [cart.removeCartItem, cart.updateCartItem]);
  return (
    <div>
      {cart.cartItems.length > 0 && (
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className="space-y-3">
              {cart.cart?.cartItems.map((item, index) => (
                <>
                  <CartItem
                    item={item}
                    key={`cartitem#${index}`}
                    showButton={true}
                  />
                </>
              ))}
            </div>
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border  p-5 bg-white shadow-lg rounded-md">
              <p className="uppercase font-bold opacity-60 pb-4">
                Billing Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price ({cart.cart?.totalItem} item)</span>
                  <span>{cart.cart?.totalPrice} đ</span>
                </div>

                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">
                    - {cart.cart?.discount}đ
                  </span>
                </div>

                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">Free</span>
                </div>

                <div className="flex justify-between pt-3 text-black">
                  <span className="font-bold">Total Amount</span>
                  <span className="font-bold ">
                    {cart.cart?.totalDiscountedPrice}đ
                  </span>
                </div>
              </div>

              <Button
                onClick={() => navigate("/checkout?step=2")}
                variant="contained"
                className="w-full mt-5"
                sx={{
                  padding: ".8rem 2rem",
                  marginTop: "2rem",
                  width: "100%",
                  bgcolor: "#9155fd",
                }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
