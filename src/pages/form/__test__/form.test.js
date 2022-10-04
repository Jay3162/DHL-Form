import { render, screen, fireEvent, act } from '@testing-library/react';
import Form from '../form.js';
import {MemoryRouter} from 'react-router-dom';

test('renders building type buttons', () => {
    render(
        <MemoryRouter>
            <Form/>
        </MemoryRouter>
        );
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
    render(
        <MemoryRouter>
            <Form/>
        </MemoryRouter>
        );
    const officeElement = screen.getByTestId("officeBtn");

    fireEvent.click(officeElement);
    const formElement = screen.getByTestId("inputBar");
    expect(formElement).toBeVisible();
})

test('scrolls down to form element on click', () => {
    render(
        <MemoryRouter>
            <Form/>
        </MemoryRouter>
        );
    const officeElement = screen.getByTestId("officeBtn");
    fireEvent.click(officeElement);
    const formElement = screen.getByTestId("inputBar");
    fireEvent.scroll(formElement);
    
    expect(formElement).toBeVisible();

})

test('locations load on page', async () => {
    render(
    <MemoryRouter>
        <Form/>
    </MemoryRouter>
    );
    const officeElement = screen.getByTestId("officeBtn");
    fireEvent.click(officeElement);
    await act(async () => {
        render(<option data-testid={"dropdownElement"}>Afghanistan</option>);
    })
})
