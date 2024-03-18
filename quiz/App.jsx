import React from "react";
import PropTypes from "prop-types";

function Product({ name, price, description }) {
  return (
    <div className="Product">
      <h2>{name}</h2>
      <p>Price: {price ? `$${price}` : "Price not available"}</p>
      <p>Description: {description || "No description available"}</p>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  description: PropTypes.string,
};

Product.defaultProps = {
  description: "No description available",
  price: null,
};

export function App(props) {
  return (
    <div className="App">
      <h1>Hello React.</h1>
      <Product
        name="Instant Decaf Coffee"
        price={2.99}
        description="100% Arabica beans"
      />
      <Product name="Airtag" description="an Apple product" />
      <Product name="G Pro Wireless Gaming Mouse" price={99.9} />
    </div>
  );
}

console.log("Hello console");
