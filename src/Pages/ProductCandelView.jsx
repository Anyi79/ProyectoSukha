import { Link, useLoaderData } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Product from "../components/Product";
import CandleView from "../components/CandleView"
import Footer from "../components/Footer";




function ProductCandelView() {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <>
    <CandleView />
    <Products/>
    <Footer />
    </>
  )
}
export default ProductCandelView;

