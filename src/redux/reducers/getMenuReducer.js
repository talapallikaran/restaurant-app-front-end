import { menuData, resetState } from "../constants/actionsConstants";

// localStorage.removeItem("menuItems")
const GetMenuData = {
  menu: [],
  addedItems: localStorage.getItem("menuItems")
    ? JSON.parse(localStorage.getItem("menuItems"))
    : [],
  count: 0,
  apiLoading: false,
  apiGetDataSuccess: false,
  apiGetDataFail: false,
};

const initialState = {
  ...GetMenuData,
};

const getMenuData = (state = initialState, action) => {
  let addedItems = state.addedItems;
  let count = state.count;

  switch (action.type) {
    case menuData.GET_MENU_REQUESTED: {
      return { ...state, apiLoading: true };
    }
    case menuData.GET_MENU_SUCCESS: {
      return {
        ...state,
        menu: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    }
    case menuData.GET_MENU_FAILED: {
      return {
        ...state,
        menu: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    }
    case menuData.ADD_TO_PLATE: {
      addedItems.push(action.payload);

      localStorage.setItem("menuItems", JSON.stringify(addedItems));
      return {
        ...state,
        addedItems: addedItems,
        count: count + 1,
      };
    }

    case menuData.REMOVE_TO_PLATE: {
      let newCart2 = addedItems.filter(
        (item) => item.data.menu_id !== action.payload
      );
      localStorage.setItem("menuItems", JSON.stringify(newCart2));
      return {
        ...state,
        addedItems: newCart2,
        count: count - 1,
      };
    }

    case menuData.ADD_QUANTITY: {
      let addedQuantity = addedItems.find(
        (item) => item.data.menu_id === action.payload
      );

      addedQuantity.quantity++;

      let newCart = addedItems.filter(
        (item) => item.data.menu_id !== action.payload
      );
      newCart.push(addedQuantity);

      localStorage.setItem("menuItems", JSON.stringify(addedItems));
      return {
        ...state,
        addedItems: newCart,
      };
    }
    case menuData.REMOVE_QUANTITY: {
      let RemoveQuantity = addedItems.find(
        (item) => item.data.menu_id === action.payload
      );

      RemoveQuantity.quantity--;

      let removeCart = addedItems.filter(
        (item) => item.data.menu_id !== action.payload
      );
      removeCart.push(RemoveQuantity);

      localStorage.setItem("menuItems", JSON.stringify(addedItems));
      return {
        ...state,
        addedItems: removeCart,
      };
    }
    case resetState.RESET_STATE: {
      localStorage.removeItem("menuItems");
      return {
        ...state,
        addedItems: [],
        count: 0,
      };
    }
    default:
      return state;
  }
};

export default getMenuData;
