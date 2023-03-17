import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: true,
  errorMessage: null,

  deleteusers: [],
  deleteloading: false,

  adduser: [],
  addStatus: "",
  adduserloading: false,

  edituser: [],
  editaddtid: "",
  editloading: false,

  usersxyz: [],
  geteditsingleloading: false,
  geteditsinglesuccess: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return {
        ...state,
        users: action.payload,
        loading: true,
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case types.ADD_USERS_REQUEST:
      return {
        ...state,
        adduser: action.payload,
        adduserloading: true,
      };
    case types.ADD_USERS_SUCCESS:
      return {
        ...state,
        adduser: action.payload,
        editaddtid: action.addtid,
        adduserloading: false,
      };

    case types.GET_SINGLE_USERS:
      return {
        ...state,
        usersxyz: action.payload,
        loading: false,
      };

    case types.DELETE_USERS_REQUEST:
      return {
        ...state,
        deleteusers: action.payload,
        deleteloading: true,
      };
    case types.DELETE_USERS_SUCCESS:
      return {
        ...state,
        deleteusers: action.payload,
        deleteloading: false,
      };

    case types.EDIT_USERS_REQUEST:
      return {
        ...state,

        editloading: true,
      };
    case types.EDIT_USERS_SUCCESS:
      return {
        ...state,
        edituser: action.payload,
        editstatus: action.status,
        editloading: false,
      };

    case types.GET_EDIT_OF_SINGLE_REQUEST:
      return {
        ...state,
        geteditsingleloading: true,
      };

    case types.GET_EDIT_OF_SINGLE_SUCCESS:
      return {
        ...state,
        geteditsinglesuccess: action.payload,
        geteditsingleloading: false,
      };

    default:
      return state;
  }
};
export default usersReducer;
