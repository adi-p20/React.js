import {
  Switch,
  Route,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";
import { fetchUsers } from "../redux/action";
import { useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, withTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Delete from "./Delete";
import Create from "./Create";
import Update from "./Update";
import fire from "../fire";
import Home from "./Home";
import { useHistory } from "react-router-dom";
import { getUsers } from "../users";
import { useState } from "react";
import "../nav.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  title: {
    flexGrow: 1,
  },
}));

export default function Dashboard() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then((res) => {
        history.push("/Login");
      })
      .catch((error) => console.log(error));
  };
  function refresh() {
    getUsers().then((users) => {
      dispatch(fetchUsers(users));
    });
  }
  function find() {
    getUsers().then((users) => {
      var arr = [];
      for (var i = 0; i < users.length; i++) {
        if (users[i].city === search || users[i].state === search) {
          arr.push(users[i]);
        }
      }
      if (arr.length <= 0) {
        alert("Invalid input");
        return;
      }
      dispatch(fetchUsers(arr));
    });
  }

  return (
    <div>
      <Router>
        <div class="split left" className={classes.root}>
          <Paper elevation={0} />

          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">
                <ul id="Nav_menu">
                  <li>
                    <Button color="primary">
                      <NavLink
                        exact
                        to="/"
                        activeClassName="active"
                        className="Nav_link"
                      >
                        <b>Home</b>
                      </NavLink>
                    </Button>
                  </li>
                  <li>
                    <Button color="primary">
                      <NavLink
                        to="/create-user"
                        activeClassName="active"
                        className="Nav_link"
                      >
                        <b>Create</b>
                      </NavLink>
                    </Button>
                  </li>
                  <li>
                    <Button color="primary">
                      <NavLink
                        to="/update-user"
                        activeClassName="active"
                        className="Nav_link"
                      >
                        <b> Update</b>
                      </NavLink>
                    </Button>
                  </li>
                  <li>
                    <Button color="primary">
                      <NavLink
                        to="/delete-user"
                        activeClassName="active "
                        className="Nav_link"
                      >
                        <b>Delete</b>
                      </NavLink>
                    </Button>
                  </li>

                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleLogout}
                    className="logout"
                  >
                    Logout
                  </Button>
                </ul>
              </Typography>
            </Toolbar>
          </AppBar>
          <Button onClick={refresh} variant="contained" color="primary">
            REFRESH
          </Button>
          <TextField
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            type="text"
            placeholder="Search"
            className="search"
          />
          <Button
            onClick={find}
            className="search"
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create-user" component={Create} />
          <Route path="/update-user" component={Update} />
          <Route path="/delete-user" component={Delete} />
        </Switch>
      </Router>
    </div>
  );
}
