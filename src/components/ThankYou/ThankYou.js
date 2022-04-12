import React from "react";
import { useNavigate } from "react-router-dom";


const ThankYou = () => {
    const handleClick = (e) => {
        navigate("/");
    };

    const navigate = useNavigate();

    return (
        <div className="thankyoucontent">
            <div className="wrapper-1">
                <div className="wrapper-2">
                    <h1>Thank you!</h1>
                    <button className="go-home" onClick={handleClick}>
                        home page
                    </button>
                </div>
            </div>





        </div>
    )
};

export default ThankYou;