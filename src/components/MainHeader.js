import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/products">Product</Link>
        </ul>
        <ul>
          <Link to="/welcome">Welcome</Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
