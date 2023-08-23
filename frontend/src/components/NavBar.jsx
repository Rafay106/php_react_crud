import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">List Blogs</Link>
        </li>
        <li>
          <Link to="/create">Create a Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
