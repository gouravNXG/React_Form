import { useState, useEffect } from "react";
import axios from "axios";
function Home() 
{
const [name, setname] = useState("");
  const [lastName, setlastName] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  const [email, setemail] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [pincode, setpincode] = useState("");
  const [users, setusers] = useState([]);
  const [edit, setedit] = useState(false);
  const [active, setactive] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    deleteUser();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => setusers(response.data));
  };

  function addUser() {
    let data = { name, lastName, mobileNo, email, city, address, pincode };
    console.log(name);
    axios.post("http://localhost:3000/users", data).then((response) => {
      console.log(response);
    });
  }

  function deleteUser(id) {
    axios.delete(`http://localhost:3000/users/${id}`).then((res) => {
      console.log("deleted", res);
      console.log(res.data);
    });
  };
  

  function editUser(index) {
      const user = users[index];
      setname(user.name);
      setlastName(user.lastName);
      setmobileNo(user.mobileNo);
      setemail(user.email);
      setcity(user.city);
      setaddress(user.address);
      setpincode(user.pincode);
      setactive(index);
      setedit(true);
    axios.put(`http://localhost:3000/users/${index}`,user).then((res) => {
      console.log("update", res);
      console.log(res.data);
    });
  };



  return (
    <div className="App">
      <h1> Registration-Form</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
            <div className="form-group">
              <label htmlFor="">Name :</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">LastName :</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Mobile No. :</label>
              <input
                type="text"
                className="form-control"
                value={mobileNo}
                onChange={(e) => setmobileNo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email :</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">City :</label>
              <input
                type="text"
                className="form-control"
                value={city}
                onChange={(e) => setcity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Address :</label>
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">PinCode :</label>
              <input
                type="text"
                className="form-control"
                value={pincode}
                onChange={(e) => setpincode(e.target.value)}
              />
            </div>
           <button
              className="btn btn-success form-control mt-3"
              onClick={() => addUser()}
            >
               {edit ? "Update" : "add"}
            </button>
          </div>
        </div>
      </div>
      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>Mobile No.</th>
            <th>Email</th>
            <th>City</th>
            <th>Address</th>
            <th>PinCode</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.mobileNo}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
                <td>{user.address}</td>
                <td>{user.pincode}</td>
                <td>
                <button
                    className="btn btn-info"
                    onClick={() => editUser(index)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button type="submit" onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default Home;
