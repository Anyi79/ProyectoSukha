import { useRouteError, Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const NotFound = () => {
    const error = useRouteError()
    console.log(error);

    return (
        <Alert variant="danger" className="text-center">
            <Alert.Heading>404</Alert.Heading>
            <p>Page not found</p>
            <p>{error.statusText || error.message}</p>
            <hr />

            <div className="d-flex justify-content-center">
                <Link to="/" className="btn btn-primary">
                    <Button>Volver a Home</Button>
                </Link>

            </div>
        </Alert>
    );
};
export default NotFound;
