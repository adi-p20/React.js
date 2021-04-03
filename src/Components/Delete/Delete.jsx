import React from "react";
import { deleteUser } from "../../users";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { deleteUsers } from "../../redux/action";
import TextField from "@material-ui/core/TextField";
import Home from "../Home";

const Delete = () => {
  const [id, setId] = React.useState("");
  const dispatcher = useDispatch();

  function delete1() {
    const user = {
      id: id,
    };

    deleteUser(user).then((result) => console.log(result));
    dispatcher(deleteUsers({ ...user, id: id }));
  }

  return (
    <div class="home" class="split left">
      <Home />
      <div class="Create-Account" class="split right">
        <h1 style={{ textAlign: "center" }}>Delete Account</h1>
        <div class="form">
          <form class="register-form">
            <TextField
              value={id}
              onChange={(event) => setId(event.target.value)}
              type="text"
              placeholder="Id"
            />
            <br></br>
            <br></br>
            <Button onClick={delete1} variant="contained" color="primary">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Delete;
