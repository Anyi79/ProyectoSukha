import { render, screen} from "@testing-library/react";
import ProductInfo from "../src/components/ProductInfo.jsx";
import '@testing-library/jest-dom';

test("should render product title ", () => {
    render (<ProductInfo />);
    const productTitle = screen.getByText(/Aceites/);
    expect(productTitle).toBeInTheDocument();

})

vi.mock('react-router-dom', () => ({
    useLoaderData: vi.fn(() => ({
    product: {
    id: 1,
    name: "Aceites",
    description: "ingredientes naturales",
    category: "Aceites",
    brand: "Oil",
    price: 9.9,
    //image: 'https://example.com/product.jpg',
    },
    })),
    }));

    describe("product", () => {
        beforeEach(() => {
            render(<ProductInfo />);
        })
    })

