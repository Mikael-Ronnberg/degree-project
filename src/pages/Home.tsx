import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h2>Home</h2>

      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
      </ul>
    </>
  );
};
