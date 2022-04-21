import SearchRestarunt from "./SearchRestarunt";
import { connect } from "react-redux";
import { restaurantGetdata } from "../../redux/action/restaurantDataAction";

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchRestarunt);
