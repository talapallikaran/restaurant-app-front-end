import SearchRestarunt from "./SearchRestarunt";
import { connect } from "react-redux";
import { restaurantGetdata } from "../../redux/action/restaurantDataAction";
import { resetState } from "../../redux/action/userAction";

const mapStateToProps = (state) => {
  return {
    items: state.restaurantDataReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getdataAction: () => {
      dispatch(restaurantGetdata());
    },
    resetState: () => {
      dispatch(resetState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchRestarunt);
