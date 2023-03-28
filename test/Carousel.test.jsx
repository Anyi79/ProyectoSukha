import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from './test/Carousel.test.jsx';
import '@testing-library/jest-dom';
test('should contain a link element', () => {
    render(<Carousel />);
    const ImageElement = screen.getByAltText(/First slide/i);
    expect(ImageElement).toBeInTheDocument();
});