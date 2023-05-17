import { BrowserRouter } from "react-router-dom";
import Home from "./Home"
import { screen,render } from "@testing-library/react";

const MockHome = ()=> {
    return(
    <BrowserRouter>
    <Home/>
    </BrowserRouter>
    )
}

test("should display header",()=>{

    render(<MockHome/>);
    const header = screen.getByText("Home");
    expect(header).toBeVisible();

})

test("should provide link for aboutPage",()=>{
    render(<MockHome/>)
    const links = ["About", "Data"]
    const getAllByLinks = screen.getAllByTestId("linkid");
    getAllByLinks.forEach((element,index)=>{
        expect(element.innerHTML).toBe(links[index])
          
    })

})