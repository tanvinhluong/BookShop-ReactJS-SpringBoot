import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";
import { useState, useEffect } from "react";
import axios from "axios";

const orderStatus = [
  { label: "On the Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  const jwt = localStorage.getItem("jwt");
  const [orders, setOrders] = useState([]);
  const fecthData = async (value) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      };
      const results = await axios.get(
        `http://localhost:5454/api/orders/user`,
        config
      );
      setOrders(results.data);
      // console.log(results.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <div className="px:5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10"></div>
            <h1 className="font-semibold">ORDER STATUS</h1>
            {orderStatus.map((option) => (
              <div className="flex items-center">
                <input
                  defaultValue={option.value}
                  type="checkbox"
                  defaultChecked={option.checked}
                  className="h-4 w-4 border-x-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  className="ml-3 text-sm text-gray-600"
                  htmlFor={option.value}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-5">
            {orders.map((item, index) => (
              <OrderCard order={item} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
