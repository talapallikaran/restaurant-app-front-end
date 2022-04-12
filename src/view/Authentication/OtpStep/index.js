import OtpStep from "./OtpStep";
import { connect } from "react-redux";
import { sendMobileVerificationOTP } from "../../../redux/action/userAction";

const mapStateToProps = (state) => {
  return {
    mobile: state.auth.mobile.mobile,
    otp: state.auth.otp.otp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    otpAction: (parameter) => {
      dispatch(sendMobileVerificationOTP(parameter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OtpStep);
