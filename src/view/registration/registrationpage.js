import React from "react";

function reg() {
    return(
    <div>
        <div className="wrapper">
    <div className="container">
    <form>
    <h1>Registration</h1>
    <p>Please fill this form for Registration.</p>
    <label for="text"><h3>name</h3></label>
    <input type="text" placeholder="Enter name" name="name" id="name" required className="form-detail" />
    <label for="email"><h3>Email</h3></label>
    <input type="email" placeholder="Enter email" name="email" id="email" required className="form-detail" />
    <label for="mobile-num"><h3>mobile number</h3></label>
    <input type="number" placeholder="mobile number" name="mobile" id="mobile" required className="form-detail" />

    <button type="submit" class="registerbtn">Registration</button>
    </form>
    </div>
</div>
    </div>

    )
}

export default reg;