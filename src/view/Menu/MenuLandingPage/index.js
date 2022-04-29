import MenuLandingPage from "./MenuLandingPage";
import { connect } from "react-redux";
import {
  MenuFetchData,
  Add_To_Plate,
} from "../../../redux/action/restaurantDataAction";

const mapStateToProps = (state) => {
  return {
    menu: state.GetMenuData.menu.menu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    MenuFetchData: (id) => dispatch(MenuFetchData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuLandingPage);
