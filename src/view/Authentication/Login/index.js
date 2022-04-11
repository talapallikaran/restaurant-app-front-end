import Login from "./Login";
import { connect } from "react-redux";
import { sendMobileNumber } from "../../../redux/action/userAction";

const mapStateToProps = (state) => {
  return {
    mobile: state.auth.mobile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userAction: (parameter) => {
      dispatch(sendMobileNumber(parameter));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
