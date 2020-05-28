import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CreateUser = () => {
  const [userName, setUsername] = useState("");
  const history = useHistory();
  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      userName: userName,
    };
    console.log(newUser);

    axios
      .post("http://localhost:5000/users/add", newUser)
      .then((res) => console.log(res.data));

    setUsername("");
    history.push("/");
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            defaultValue={userName}
            onChange={changeUsername}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
