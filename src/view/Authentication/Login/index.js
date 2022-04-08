import Login from "./Login";
import { connect } from "react-redux";
import { getUsers } from "../../../redux/action/userAction";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    userAction: (parameter) => {
      dispatch(getUsers(parameter));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
