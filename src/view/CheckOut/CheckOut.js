import React, { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { useNavigate, Link } from "react-router-dom";
import CustomButton from "../../../src/components/CustomButton/CustomButton";
import history from "../../utils/history";

export default function CheckOut(props) {
  const { addedItems, Remove_To_Plate, ADD_Quantity, Remove_Quantity } = props;

  let totalQuantity = 0;

  const handleRemove = (menu_id) => {
    Remove_To_Plate(menu_id);
  };

  const handleAddQuantity = (menu_id) => {
    ADD_Quantity(menu_id);
  };

  const handleRemoveQuantity = (menu_id, quantity) => {
    if (quantity <= 1) {
      alert("item can't be zero");
      return;
    } else {
      Remove_Quantity(menu_id);
    }
  };
  const backpage = (e) => {
    history.back();
  };

  // ****************Razorpay section***********************************************

  const Razorpay = useRazorpay();
  const navigate = useNavigate();

  const handlePayment = useCallback(
    (total) => {
      const options = {
        key: "rzp_test_1jxbxKZongAbMi",
        amount: total * 100,
        currency: "INR",
        name: "Aims restarunt",
        description: "Test Transaction",
        image:
          "https://www.aimsinfosoft.com/wp-content/uploads/2019/07/new1-main-1-e1563185826481.png",
        order_id: total.id,
        handler: function (response) {
          alert(response.razorpay_payment_id);
          navigate("/ThankYou");
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
    },
    [Razorpay]
  );

  return (
    <div className="wrapper">
      <div className="container">
        <div className="top-bar">
          <i className="fa-solid fa-arrow-left" onClick={backpage}></i>
          <span className="title">Payment</span>
        </div>
        <div className="row col-gap">
          {addedItems.length ? (
            addedItems.map((item) => {
              totalQuantity +=
                item && item.data && item.data.menu_price * item.quantity;
              return (
                <div
                  className="pay"
                  key={item && item.data && item.data.menu_id}
                >
                  <div className="item">
                    <span className="item-name">
                      {item && item.data && item.data.menu_name}
                    </span>
                    <div className="item-qty">
                      <CustomButton
                        className="add-qty"
                        name="+"
                        onClick={() => {
                          handleAddQuantity(
                            item && item.data && item.data.menu_id
                          );
                        }}
                      />
                      <span className="qty">{item.quantity}</span>
                      <CustomButton
                        className="add-qty"
                        name="-"
                        onClick={() => {
                          handleRemoveQuantity(
                            item && item.data && item.data.menu_id,
                            item.quantity
                          );
                        }}
                      />
                    </div>
                    <span className="item-price">
                      ₹
                      {item &&
                        item.data &&
                        item.data.menu_price * item.quantity}
                    </span>
                    <div className="btn">
                      <CustomButton
                        className="remove-item"
                        name="X"
                        type="Submit"
                        onClick={() => {
                          handleRemove(item && item.data && item.data.menu_id);
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h4>Your Plate is Empty, Please order some Food</h4>
          )}
        </div>
      </div>
      <div className="footer">
        <div className="col-12 footer-content">
          <div className="rupees">
            <a href="#">
              <i className="fa-solid fa-indian-rupee-sign"></i>
            </a>
            <span>{totalQuantity}</span>
          </div>
          <CustomButton
            className="button"
            name="PayNow"
            type="Submit"
            onClick={() => handlePayment(totalQuantity)}
          />
        </div>
      </div>
    </div>
  );
}
