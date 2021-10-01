import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);

    const firstNameInput = screen.getByLabelText('First Name:');
    userEvent.type(firstNameInput, 'Monica');

    const lastNameInput = screen.getByLabelText('Last Name:');
    userEvent.type(lastNameInput, 'Salas');

    const addressInput = screen.getByLabelText('Address:');
    userEvent.type(addressInput, '123 Abc St');

    const cityInput = screen.getByLabelText('City:');
    userEvent.type(cityInput, 'thisTown');

    const stateInput = screen.getByLabelText('State:');
    userEvent.type(stateInput, 'IL');

    const zipInput = screen.getByLabelText('Zip:');
    userEvent.type(zipInput, '12345');

    const submit = screen.getByRole('button');
    userEvent.click(submit);

    await waitFor(() => {
        const successMessage = screen.queryByTestId('successMessage');
        expect(successMessage).toBeInTheDocument();
        expect(successMessage).toBeInTheDocument('Monica');
        expect(successMessage).toBeInTheDocument('Salas');
        expect(successMessage).toBeInTheDocument('123 Abc St');
        expect(successMessage).toBeInTheDocument('thisTown');
        expect(successMessage).toBeInTheDocument('IL');
        expect(successMessage).toBeInTheDocument('12345');
    })
});
