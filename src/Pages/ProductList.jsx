import { Link, useLoaderData } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Product from "../components/Product";



function ProductList() {
  const { products } = useLoaderData();
  
  return (
    <>
      <Product/>
    </>
  )
}
export default ProductList;