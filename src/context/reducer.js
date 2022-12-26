import { IS_MEMBER_HANDLER, SHOW_SIDEBAR, CLEAR_SIDEBAR, DISPLAY_ALERT, CLEAR_ALERT, DISPLAY_SUCCESS} from "./action";

const reducer = (state, action) => {
  if (action.type === IS_MEMBER_HANDLER) {
    return {
      ...state,
      isMember: !state.isMember,
    };
  }

  if (action.type === SHOW_SIDEBAR) {
    return {
      ...state,
      show_SideBar: true,
    };
  }

  if (action.type === CLEAR_SIDEBAR) {
    return {
      ...state,
      show_SideBar: false,
    };
  }

  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "error",
      alertText: "Please provide all values!",
    };
  }


  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === DISPLAY_SUCCESS){
    return{
      ...state,
      showAlert: true,
      alertType: "success",
      alertText: "Successfully Added",
    }
  }


  throw new Error(`no such action :${action.type}`);
};

export default reducer;
