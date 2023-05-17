import Data from "./Data"
import { screen,render } from "@testing-library/react";

test("should display header",()=>{

    render(<Data/>);
    const header = screen.getByText("Data");
    expect(header).toBeVisible();

})