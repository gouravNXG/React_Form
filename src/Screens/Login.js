import React, { useEffect, useState } from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  AddUser,
  DeleteUser,
  Edit_User,
  loadUsers,
  getSingleUser,
} from "../Redux/action";
import { Link } from "react-router-dom";

export default function Login() {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  let paramData = useParams("id");
  const updateID = paramData.id;

  const location = useLocation();
  const searchparam = new URLSearchParams(location.search);
  let type = searchparam.get("type");

  const {
    users,
    addStatus,
    editaddtid,
    geteditsinglesuccess,
    geteditsingleloading,
  } = useSelector((state) => state.data);

  const [statusAdd, setStatusAdd] = useState(addStatus);

  var toeditsinglename = geteditsinglesuccess.name;
  
  useEffect(() => {
    dispatch(loadUsers());

    if (type == "update") {
      dispatch(getSingleUser(updateID));
      if (geteditsingleloading == false) {
        setname(toeditsinglename);
        setEmail(geteditsinglesuccess.email);
        setaddress(geteditsinglesuccess.address);
        setlastName(geteditsinglesuccess.lastName);
      }
    }
  }, [dispatch, updateID, toeditsinglename, addStatus]);

  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setaddress] = useState("");
  const [error, seterror] = useState("");

  function toaddUser() {
    let data = { name, lastName, email, address };
    let updatedata = { name, lastName, email, address, updateID };

    if (!name || !lastName || !email || !address) {
      seterror("please input all the input field");
    } else {
      if (type == "update") {
        dispatch(Edit_User(updatedata));
        seterror("");
        setname("");
        setlastName("");
        setEmail("");
        setaddress("");
        navigate("/Login");
      } else {

        dispatch(AddUser(data));
        seterror("");
        setname("");
        setlastName("");
        setEmail("");
        setaddress("");
        setStatusAdd("");
      }
    }
  }

  function todeleteUser(id) {
    if (window.confirm("Delete the user?")) {
    }
    dispatch(DeleteUser(id));
  }

  return (
    <div className="App">
      <div className="login">
        <h1>Hello My React Redux Setup</h1>
        <h2>---Form-----</h2>
        <form>
          <div>
            <div>
              <input
                type="name"
                placeholder="Enter FirstName"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div>
              <input
                type="name"
                placeholder="Enter LastName"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="address"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
            </div>
          </div>
        </form>

        <div>
          <div>
            <button
              className="btn btn-success form-control mt-3"
              onClick={() => toaddUser()}
            >
              {type == "update" ? "Update" : "Add"}
            </button>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
          </div>
          <table className="table table-bordered mt-5">
            <thead>
              <tr>
                <th>Name</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Address</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users?.length > 0
                ? users.map((users, key, index) => {
                  return (
                    <tr key={key}>
                      <td>{users.name}</td>
                      <td>{users.lastName}</td>
                      <td>{users.email}</td>
                      <td>{users.address}</td>

                      <td>
                        <Link to={`/Login/${users.id}?type=update`}>
                          <button className="btn btn-info">Edit</button>
                        </Link>
                      </td>
                      <td>
                        <button
                          type="submit"
                          onClick={() => todeleteUser(users.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
