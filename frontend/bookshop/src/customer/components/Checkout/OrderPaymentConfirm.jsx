import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderPaymentConfirm.css";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

function OrderPaymentConfirm() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = React.useState(5);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const goToMyOrders = () => {
    navigate("/account/order");
  };

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="container-order-confirm">
      <h1 className="title-order-confirm">Thanh toán thành công ✅</h1>

      <p className="message-order-confirm">
        Bạn sẽ được tự động chuyển về trang chính sau {countdown} giây
      </p>
      <div className="button-container-order-confirm">
        <button onClick={goToHomePage}>Về trang chủ</button>
        <button onClick={goToMyOrders}>Xem đơn hàng của tôi</button>
      </div>
    </div>
  );
}

export default OrderPaymentConfirm;
