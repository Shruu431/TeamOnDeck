import {render, screen} from "@testing-library/react";

import ForgotPswrd from "./ForgotPswrd";

it('Should have a Login button', () => { 
render (<ForgotPswrd />)

const image = screen.getByAltText(/logo/i);
const emailField =  screen.getByText(/Email/i)

const loginButton = screen.getByText(/Reset Password/i);

expect(image).toBeInTheDocument();
expect(emailField).toBeInTheDocument();
expect(loginButton).toBeInTheDocument();

})
