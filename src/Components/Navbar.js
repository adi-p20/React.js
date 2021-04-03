import { NavLink } from "react-router-dom";
import fire from "./fire";
import { useHistory } from "react-router-dom";
export default function Navbar() {
  const history = useHistory();
  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then((res) => {
        console.log("Logout successfully.");
        history.push("/Login");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Router>
        <div class="split left">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/create-user" activeClassName="active">
            Create
          </NavLink>
          <NavLink to="/update-user" activeClassName="active">
            Update
          </NavLink>
          <NavLink to="/delete-user" activeClassName="active">
            Delete
          </NavLink>
          <button class="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </Router>
    </div>
  );
}
