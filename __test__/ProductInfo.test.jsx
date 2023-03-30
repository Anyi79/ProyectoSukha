import { render, screen } from "@testing-library/react";
import ProductInfo from "../src/components/ProductInfo";
import '@testing-library/jest-dom';

vi.mock('react-router-dom', () => ({
    useLoaderData: vi.fn(() => ({
        product: {
            id: 1,
            name: "Aceites",
            description: "ingredientes naturales",
            category: "Aceites",
            brand: "Oil",
            price: 9.9,
            image: 'https://example.com/aceites.jpg',
        },
    })),
}));

describe("product", () => {
    beforeEach(() => {
        render(<ProductInfo />);
    })

    test("should render product title ", () => {
        screen.debug();
        const productTitle = screen.getAllByText("Aceites");
        expect(productTitle[0]).toBeInTheDocument();
    
    })
})





