import { Link } from 'react-router-dom';

const Products = () => {
    return (
      <section>
        <h1>The Products Page</h1>
        <ul>
          <li>
            <Link to="products/p1">Books</Link>
          </li>
          <li>
            <Link to="products/p2">Figures</Link>
          </li>
          <li>
            <Link to="products/p3">Clothing</Link>
          </li>
        </ul>
      </section>
    );
};

export default Products;

//This page will display a list of products
//If you click on each product, you will be taken to a page with product info