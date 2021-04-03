import React from "react";
import { updateUser } from "../../users";
import { useDispatch } from "react-redux";
import { updateUsers } from "../../redux/action";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Home from "../Home";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Update = () => {
  const [id, setId] = React.useState("");
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [contact1, setContact1] = React.useState("");
  const [contact2, setContact2] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const dispatcher = useDispatch();

  function update() {
    const user = {
      id: id,
      first_name: fname,
      last_name: lname,
      dob: dob,
      contact1: contact1,
      contact2: contact2,
      city: city,
      state: state,
    };
    console.log(user);
    updateUser(user).then((result) => console.log(result));
    dispatcher(updateUsers({ ...user, id: id }));
  }
  const classes = useStyles();
  return (
    <div class="home" class="split left">
      <Home />
      <div class="Create-Account" class="split right">
        <h1 style={{ textAlign: "center" }}>Update Account</h1>
        <div class="form">
          <form class="register-form" className={classes.root}>
            <TextField
              value={id}
              onChange={(event) => setId(event.target.value)}
              type="text"
              placeholder="Id"
            />
            <TextField
              value={fname}
              onChange={(event) => setFname(event.target.value)}
              type="text"
              placeholder="First Name"
            />
            <TextField
              value={lname}
              onChange={(event) => setLname(event.target.value)}
              type="text"
              placeholder="Last Name"
            />
            <TextField
              value={dob}
              onChange={(event) => setDob(event.target.value)}
              type="date"
              placeholder="DOB"
            />
            <TextField
              value={contact1}
              onChange={(event) => setContact1(event.target.value)}
              type="text"
              placeholder="Contact No."
            />
            <TextField
              value={contact2}
              onChange={(event) => setContact2(event.target.value)}
              type="text"
              placeholder="Alternet Contact No."
            />
            <TextField
              value={city}
              onChange={(event) => setCity(event.target.value)}
              type="text"
              placeholder="City"
            />
            <TextField
              value={state}
              onChange={(event) => setState(event.target.value)}
              type="text"
              placeholder="State"
            />
            <Button onClick={update} variant="contained" color="primary">
              {" "}
              Update{" "}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Update;
