import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ order }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/account/order/${order.id}`)}
      className="p-5 shadow-md shadow-black hover:shadow-2xl border"
    >
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={5}>
          <div className="flex cursor-pointer">
            <img
              style={{ "object-fit": "contain" }}
              src="https://pos.nvncdn.com/cba2a3-7534/store/20240409_mNXzwl3H.png"
              className="w-[5rem] h-[5rem] object-cover object-top"
              alt=""
            />
            <div className="ml-5 spacy-y-2">
              <p className="">Hóa đơn mua hàng</p>
              <p className="opacity-50 text-xs font-semibold">
                Ngày đặt: {order.orderDate}
              </p>
              <p className="opacity-50 text-xs font-semibold">
                Trạng thái: {order.orderStatus}
              </p>
              <p className="opacity-50 text-xs font-semibold">
                Giao tới địa chỉ:{" "}
                {order.shippingAddress.streetAddress +
                  " - " +
                  order.shippingAddress.city}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <p>Tạm tính: {order.totalPrice}đ</p>
          <p>Giảm giá: {order.totalDiscountedPrice}đ</p>
          <p>Tổng tiền: {order.totalDiscountedPrice}đ</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span> Delivered on 3rd March</span>
              </p>
              <p className="text-xs">Your Item Has Been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span> Expected Delivered on 4th March</span>
            </p>
          )}
          <br></br>
          <button style={{ backgroundColor: "aqua" }}>Xem chi tiết</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
