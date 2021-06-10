import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <p>This is Products page.</p>
      <ul>
        <li>
          <Link to="/products/p1">A book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An online course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
