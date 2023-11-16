import {render, screen} from "@testing-library/react";
import Attendance from "./Attendance";

describe("Attendance model testing", () =>{
    
test('Should have attendance',()=>{
render(<Attendance />)
const summery = screen.getByText(/attendance summery/i)
expect(summery).toBeInTheDocument();
})
}) 

