import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation, useNavigate } from "react-router-dom";

function OrderSummary() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate({ search: `step=4` });
  };

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  return (
    <div className="space-y-5">
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      <div className="lg:grid grid-cols-3  relative justify-between">
        <div className="lg:col-span-2">
          <div className="space-y-3">
            {order.order?.orderItems.map((item) => (
              <>
                <CartItem item={item} showButton={false} />
              </>
            ))}
          </div>
        </div>

        <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="uppercase font-bold opacity-60 pb-4">
              Billing Details
            </p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price ({order.order?.totalItem} item)</span>
                <span>{order?.order?.totalPrice} đ</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">
                  -{order?.order?.discount} đ
                </span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span className="font-bold">Total Amount</span>
                <span className="font-bold ">
                  {order?.order?.totalDiscountedPrice}
                </span>
              </div>
            </div>
            {/* CUSTOM THÊM THANH THÊM BỚT SẢN PHẨM TRONG TRANG NÀY, REMOVE NỮA! */}
            <Button
              variant="contained"
              className="w-full mt-5"
              onClick={() => handlePayment()}
              sx={{
                padding: ".8rem 2rem",
                marginTop: "2rem",
                width: "100%",
                bgcolor: "#9155fd",
              }}
            >
              Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
