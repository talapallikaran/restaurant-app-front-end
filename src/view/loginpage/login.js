import React from "react";
import logo from '../../assets/img/logo.png';

function validation2() {
    return(
        <div className="wrapper login-page">
            <div className="container">
                <div className="restaurant-inp">
                    <img src={logo} alt="does not open" className="logo"/>
                </div>
                <div className="login-flex">
                    <input type="number" placeholder="0" name="mobile" id="mobile" maxLength={1} required className="login-data" />
                    <input type="number" placeholder="0" name="mobile" id="mobile" maxLength={1} required className="login-data" />
                    <input type="number" placeholder="0" name="mobile" id="mobile" maxLength={1} required className="login-data" />
                    <input type="number" placeholder="0" name="mobile" id="mobile" maxLength={1} required className="login-data" />
                </div>
                <div className="login-btn">
                <button type="submit" class="valid-btn">Send OTP</button>
                </div>
            </div>
        </div>
    )
}

export default validation2;