import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  localStorage.clear();
  console.log();
  const navigate = useNavigate();
  navigate("/");
};

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">GoGo</span>
        </Link>
        {user ? (
          // user.username
          <>
            <span className="username">{user.username}</span>

            <button className="navButton" onClick={Logout}>
              Logout
            </button>
          </>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton" href="/register">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="navButton" href="/login">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
