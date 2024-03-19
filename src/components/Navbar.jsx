import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <Link style={{ margin: "0 10px" }} to="/">
        Home
      </Link>
      <Link style={{ margin: "0 10px" }} to="/toys">
        Toys
      </Link>
      <Link style={{ margin: "0 10px" }} to="/login">
        Login
      </Link>
      <Link style={{ margin: "0 10px" }} to="/profile">
        Profile
      </Link>
      <Link style={{ margin: "0 10px" }} to="/messages">
        Messages
      </Link>
      <Link style={{ margin: "0 10px" }} to="/create">
        Create Listing
      </Link>
    </nav>
  );
};

export default Navbar;
