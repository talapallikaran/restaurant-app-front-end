import CheckOut from "./CheckOut";
import { connect } from "react-redux";
import {
  Remove_To_Plate,
  ADD_Quantity,
  Remove_Quantity,
} from "../../redux/action/restaurantDataAction";

const mapStateToProps = (state) => {

  return {
    addedItems: state.GetMenuData.addedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ADD_Quantity: (menu_id) => dispatch(ADD_Quantity(menu_id)),
    Remove_Quantity: (menu_id) => dispatch(Remove_Quantity(menu_id)),
    Remove_To_Plate: (menu_id) => dispatch(Remove_To_Plate(menu_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
