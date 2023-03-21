import { Link, useLoaderData } from "react-router-dom";
import { Card, Button } from "react-bootstrap";



function ProductList() {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <>
      {products.map((product) => (
        <Card key={product.id} className="my-3">
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.brand}</Card.Text>
            <Card.Text>{product.price}€</Card.Text>


            <Button variant="primary" href={`/productInfo/${product.id}`}> More info</Button>
            <Button variant="outline-secondary" className="mx-2">Favorite</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}
export default ProductList;