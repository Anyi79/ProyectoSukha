import { Link, useLoaderData } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Product from "../components/Product";



function ProductList() {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <>
      <Product/>
    </>
  )
}
export default ProductList;