import { render, screen} from "@testing-library/react";
import ProductInfo from "../src/components/ProductInfo.jsx";
import '@testing-library/jest-dom';

test("should render product title ", () => {
    const productTitle = screen.getByText(/test product/i);
    expect(productTitle).toBeInTheDocument();

})

vi.mock('react-router-dom', () => ({
    useLoaderData: vi.fn(() => ({
    product: {
    name: "Oil",
    title: 'test product',
    description: "This is a test",
    category: "Oil"
   // brand: 'Dove',
    //price: 9.99,
    //image: 'https://example.com/product.jpg',
    },
    })),
    }));

    describe("product", () => {
        beforeEach(() => {
            render(<ProductInfo />);
        })
    })

