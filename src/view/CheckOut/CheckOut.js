import React from "react";
import { useNavigate } from "react-router-dom";


function CheckOut() {
    const navigate = useNavigate();
    const pizzaPrice = 150;

    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",

        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    const loadScript = (src) => {
        return new Promise((resovle) => {
            const script = document.createElement("script");
            script.src = src;

            script.onload = () => {
                resovle(true);
            };

            script.onerror = () => {
                resovle(false);
            };

            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async (amount) => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("You are offline... Failed to load Razorpay SDK");
            return;
        }

        const options = {
            key: "rzp_test_HZXLmebwWQeaza",
            currency: "INR",
            amount: amount * 100,
            name: "Restrunt React.js Team",
            description: "Thanks for ordering Food",
            image:
                "https://www.aimsinfosoft.com/wp-content/uploads/2019/07/new1-main-1-e1563185826481.png",

            handler: function (response) {
                alert(response.razorpay_payment_id);
                 navigate("/ThankYou")
                console.log("Payment is getting successfully")
                console.log("checking-->",response.razorpay_payment_id);

            },
            prefill: {
                name: "Sarthak Modi ",
                number: 6355178552,
                restruntname: "darshan restrunt",
                Table_no: 5
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };
    return (
        <div className="App">
            <>
                <h1>margherita pizza</h1>
                <p>{formatter.format(pizzaPrice)}</p>
                <div className="buttons">
                    <button onClick={() => displayRazorpay(pizzaPrice)}>
                        BUY NOW
                    </button>
                </div>
            </>
        </div>
    );
}

export default CheckOut;
