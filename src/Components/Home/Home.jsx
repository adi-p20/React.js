import React from "react";
import "../../../src/App.css";
import { getUsers } from "../../users";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/action";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { CircularProgress } from "@material-ui/core";

const progressStyle = {
  position: "absolute",
  top: "0",
  right: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
};

const Home = ({ handleLogout }) => {
  const [progress, setProgress] = React.useState(false);
  const dispatcher = useDispatch();
  const state = useSelector((state) => state);

  React.useEffect(() => {
    setProgress(true);
    getUsers().then((users) => {
      dispatcher(fetchUsers(users));
      console.log("Got users");
      setProgress(false);
    });
  }, [dispatcher]);

  return (
    <div class="home" class="split left">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>ID</b>
              </TableCell>
              <TableCell align="center">
                <b> Name</b>
              </TableCell>
              <TableCell align="center">
                {" "}
                <b> DOB</b>
              </TableCell>
              <TableCell align="center">
                {" "}
                <b> Contact No.</b>
              </TableCell>
              <TableCell align="center">
                {" "}
                <b> City</b>
              </TableCell>
              <TableCell align="center">
                {" "}
                <b> State</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.users.map((user) => (
              <TableRow>
                <TableCell align="center">{user.id}</TableCell>
                <TableCell align="center">
                  {user.name.first_name} {user.name.last_name}
                </TableCell>
                <TableCell align="center">{user.dob}</TableCell>
                <TableCell align="center">
                  {user.contact_no[0]},{user.contact_no[1]}
                </TableCell>
                <TableCell align="center">{user.city}</TableCell>
                <TableCell align="center">{user.state}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {progress ? (
        <div style={progressStyle}>
          <CircularProgress thickness={5} />
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Home;
