// Navbar.js
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/toys">Toys</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          <Link to="/create">Create Listing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
