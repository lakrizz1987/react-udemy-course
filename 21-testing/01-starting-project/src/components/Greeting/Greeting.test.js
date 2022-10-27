import { render,screen } from "@testing-library/react"
import Greeting from "./Greeting"

test('is Hello World rendering', () => {
    render(<Greeting />);
    const element = screen.getByText('Hello World',{exact:false});
    expect(element).toBeInTheDocument();
})