import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"


describe('Greeting component', () => {
    test('is Hello World rendering', () => {
        render(<Greeting />);
        const element = screen.getByText('Hello World', { exact: false });
        expect(element).toBeInTheDocument();
    })

    test('is Hello World rendering', () => {
        render(<Greeting />);
        const element = screen.getByText('some text', { exact: false });
        expect(element).toBeInTheDocument();
    })
})
