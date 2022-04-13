import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../src/components/CustomButton/CustomButton";

export default function CheckOut() {
    const order = 2500;
  const Razorpay = useRazorpay();
  const navigate = useNavigate();
  const handlePayment = useCallback(() => {

    const options = {
      key: "rzp_test_1jxbxKZongAbMi",
      amount: order * 100,
      currency: "INR",
      name: "Aims restarunt",
      description: "Test Transaction",
      image:
        "https://www.aimsinfosoft.com/wp-content/uploads/2019/07/new1-main-1-e1563185826481.png",
      order_id: order.id,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        navigate("/ThankYou");

        console.log("checking-->", response.razorpay_payment_id);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="top-bar">
          <a href="#">
            <i className="fa-solid fa-arrow-left"></i>
          </a>
          <span>
            <h2>payment</h2>
          </span>
        </div>
        <div className="row col-gap">
          <div className="col-12 pay"></div>
          <div className="col-12 pay"></div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 footer-content">
              <div className="rupees">
                <a href="#">
                  <i className="fa-solid fa-indian-rupee-sign"></i>
                </a>
                <h2>{order}</h2>
              </div>
              <CustomButton
                className="button"
                name="PayNow"
                type="Submit"
                onClick={handlePayment}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
