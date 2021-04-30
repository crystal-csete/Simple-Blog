import actionTypes from "../actionTypes";

// need to assign id's in a more dynamic way (uuid?)
const inititalState = {
  id: -1,
  title: "",
  content: "",
};

export default (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.SET_NEW_TITLE:
      const { title } = action;
      return {
        ...state,
        title,
      };
    case actionTypes.SET_NEW_CONTENT:
      const { content } = action;
      return {
        ...state,
        content,
      };
    case actionTypes.SET_NEW_ID:
      const { id } = action;
      return {
        ...state,
        id,
      };
    case actionTypes.RESET_NEW:
      return inititalState;
    default:
      return state;
  }
};
