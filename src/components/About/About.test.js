import About from "./About"
import { screen,render } from "@testing-library/react";

test("should display header",()=>{

    render(<About/>);
    const header = screen.getByText("About");
    expect(header).toBeVisible();

})