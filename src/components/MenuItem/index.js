import MenuItem from "./MenuItem";
import { connect } from "react-redux";
import { Add_To_Plate } from "../../redux/action/restaurantDataAction";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    Add_To_Plate: (data) => {
      dispatch(Add_To_Plate(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
