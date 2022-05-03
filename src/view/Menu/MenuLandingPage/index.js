import MenuLandingPage from "./MenuLandingPage";
import { connect } from "react-redux";
import {
  MenuFetchData,
  Add_To_Plate,
  resetState,
} from "../../../redux/action/restaurantDataAction";

const mapStateToProps = (state) => {
  return {
    menu: state.GetMenuData.menu.menu,
    addedItems: state.GetMenuData.addedItems,
    count: state.GetMenuData.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    MenuFetchData: (id) => dispatch(MenuFetchData(id)),

    Add_To_Plate: (data) => {
      dispatch(Add_To_Plate(data));
    },
    resetState: () => {
      dispatch(resetState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuLandingPage);
