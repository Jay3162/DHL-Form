import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../form.js'

test('renders building type buttons', () => {
    render(<Form/>);
    const officeElement = screen.getByTestId("officeBtn");
    const warehouseElement = screen.getByTestId("warehouseBtn");
    const deliveryElement = screen.getByTestId("deliveryBtn");
    const landElement = screen.getByTestId("landBtn");
    expect(officeElement).toBeInTheDocument();
    expect(warehouseElement).toBeInTheDocument();
    expect(deliveryElement).toBeInTheDocument();
    expect(landElement).toBeInTheDocument();

});

test('renders form on click', () => {
    render(<Form/>);
    const officeElement = screen.getByTestId("officeBtn");

    fireEvent.click(officeElement);
    const formElement = screen.getByTestId("inputBar");
    expect(formElement).toBeVisible();
})

test('scrolls down to form element on click', () => {
    render(<Form/>);
    const officeElement = screen.getByTestId("officeBtn");
    fireEvent.click(officeElement);
    const formElement = screen.getByTestId("inputBar");
    fireEvent.scroll(formElement);
    
    expect(formElement).toBeVisible();

})

test('locations load on page', () => {
    render(<Form/>);
    const officeElement = screen.getByTestId("officeBtn");
    fireEvent.click(officeElement);
    const dropdownElement = screen.getByTestId("dropdownEl");
    expect(dropdownElement).toBeVisible();
})