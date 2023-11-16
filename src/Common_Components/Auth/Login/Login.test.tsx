import {render, screen} from "@testing-library/react";

import Login from "./Login";

test('Should have a email and password field and also a button', () => { 
render (<Login />)

const emailField =  screen.getByText(/Email/i)
const loginField = screen.getByLabelText(/Login As/i)
const pswrdField =  screen.getByLabelText(/Password/i)
const submitButton = screen.getByText(/Login /i)

expect(emailField).toBeInTheDocument();
expect(loginField).toBeInTheDocument();
expect(pswrdField).toBeInTheDocument();
expect(submitButton).toBeInTheDocument();
})
