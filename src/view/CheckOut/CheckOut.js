import React, { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { useNavigate, Link } from "react-router-dom";
import CustomButton from "../../../src/components/CustomButton/CustomButton";

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
    },
    [Razorpay]
  );

  return (
    <div className="wrapper">
      <div className="container">
        <div className="top-bar">
          <Link to={"/SearchRestarunt"}>
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <span>
            <h2>payment</h2>
            <div className="Quantity">
              {/* <h2>Total Quantity:{addedItems.map(
                (item) =>
                console.log("this is ndjnf-->",item.quantity),
                  // (totalQuantity=+item.quantity)
              )}</h2> */}
            </div>
          </span>
        </div>
        <div className="row col-gap">
          {addedItems.length ? (
            addedItems.map((item) => {
              totalQuantity +=
                item && item.data && item.data.menu_price * item.quantity;
              return (
                <div
                  className="col-12 pay"
                  key={item && item.data && item.data.menu_id}
                >
                  <h4>{item && item.data && item.data.menu_name}</h4>
                  <h4>₹{item && item.data && item.data.menu_price}</h4>
                  <h5>Quantity:{item.quantity}</h5>

                  <CustomButton
                    className="button"
                    name="Remove"
                    type="Submit"
                    onClick={() => {
                      handleRemove(item && item.data && item.data.menu_id);
                    }}
                  />

                  <CustomButton
                    className="btn btn-primary btn-lg me-2"
                    name="Add quantity"
                    onClick={() => {
                      handleAddQuantity(item && item.data && item.data.menu_id);
                    }}
                  />
                  <CustomButton
                    className="btn btn-primary btn-lg me-2"
                    name="Remove quantity"
                    onClick={() => {
                      handleRemoveQuantity(
                        item && item.data && item.data.menu_id,
                        item.quantity
                      );
                    }}
                  />
                </div>
              );
            })
          ) : (
            <h4>Your Plate is Empty, Please order some Food</h4>
          )}
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
                <h2>{totalQuantity}</h2>
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
      </div>
    </div>
  );
}
