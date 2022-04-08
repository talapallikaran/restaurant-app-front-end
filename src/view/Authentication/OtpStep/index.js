import OtpStep from "./OtpStep";
import { connect } from "react-redux";
import { postOTP } from "../../../redux/action/userAction";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    otpAction: (parameter) => {
      dispatch(postOTP(parameter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OtpStep);
