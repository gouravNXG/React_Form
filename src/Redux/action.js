import * as types from "./actionType";
import axios from "axios";


export const loadUsers = () => async (dispatch) => {
  dispatch({
    type: types.GET_USERS_REQUEST,
    payload: {},
  });
  try {
    axios.get("http://localhost:3000/users").then((response) => {

      dispatch({
        type: types.GET_USERS_SUCCESS,
        payload: response.data,
      });
    });
  } catch (error) {
    console.log(error);
  }
};




export const DeleteUser = (id) => async (dispatch) => {
  dispatch({
    type: types.DELETE_USERS_REQUEST,
    payload: {},
  });
  try {
    axios.delete(`http://localhost:3000/users/${id}`).then((response) => {

      dispatch({
        type: types.DELETE_USERS_SUCCESS,
        payload: response.data,
      });
      dispatch(loadUsers());
    });
  } catch (error) {
    console.log(error);
  }

};



export const getSingleUser = (id) => async (dispatch) => {
  dispatch({
    type: types.GET_EDIT_OF_SINGLE_REQUEST,
    payload: {},
  });
  try {
    axios.get(`http://localhost:3000/users/${id}`).then((response) => {

      dispatch({
        type: types.GET_EDIT_OF_SINGLE_SUCCESS,
        payload: response.data,
      });
    });
  } catch (error) {
    console.log(error);
  }
};



export const AddUser = (data) => async (dispatch) => {
  dispatch({
    type: types.ADD_USERS_REQUEST,
    payload: {},
  });
  try {
    axios.post("http://localhost:3000/users",data).then((response) => {
         console.log("add resp",response)
      dispatch({
        type: types.ADD_USERS_SUCCESS,
        payload: response.data,
        addtid: response.data.id,
      });
    });
  

  } catch (error) {
    console.log(error);
  }
};












export const Edit_User = (obj) => async (dispatch) => {
  dispatch({
    type: types.EDIT_USERS_REQUEST,
    payload: {},
  });

  var apiobj={
    name:obj.name,
    lastName:obj.lastName,
    address:obj.address,
    email:obj.email,
    updateID:parseInt(obj.updateID)
  }
  try {
    axios.put(`http://localhost:3000/users/${apiobj.updateID}`,apiobj).then((response) => {
         console.log("action resp",response)
      dispatch({
        type: types.EDIT_USERS_REQUEST,
        payload: response.data,
        status: response.status,
      });
    });

  } catch (error) {
    console.log(error);
  }
};