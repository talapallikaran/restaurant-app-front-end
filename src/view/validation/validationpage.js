import React from "react";
import logo from '../../assets/img/logo.png';

function validation() {
    return(
        <div className="wrapper registration-form">
            <div className="container">
                <div className="restaurant-img">
                    <img src={logo} alt="does not open" className="logo"/>
                </div>
                <div className="validation">
                    <input type="number" placeholder="your mobile number" name="mobile" id="mobile" required className="validation-data" />
                    <button type="submit" class="valid-btn">Send OTP</button>
                </div>
            </div>
        </div>
    )
}

export default validation;