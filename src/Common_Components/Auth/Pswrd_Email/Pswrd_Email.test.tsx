import {render, screen} from "@testing-library/react";

import PswrdEmail from "./PswrdEmail";

it('Should have a Login button', () => { 
render (<PswrdEmail />)

const image = screen.getByAltText(/logo/i);
const loginButton = screen.getByText(/Back To Login/i);

expect(image).toBeInTheDocument();
expect(loginButton).toBeInTheDocument();

})
