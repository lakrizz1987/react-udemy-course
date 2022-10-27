import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
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

describe('test changeText button', () => {
    test('Some text here! is render', () => {
        render(<Greeting />);
        const elementText = screen.getByText('some text', { exact: false })
        expect(elementText).toBeInTheDocument()
    })

    test('Changed! is render when the button is clicked', () => {
        render(<Greeting />)
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const elementText = screen.getByText('changed', {exact:false});
        expect(elementText).toBeInTheDocument()

    })

    test('Some text here! is not render when the button is clicked', () => {
        render(<Greeting />)
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const elementText = screen.queryByText('Some text here!',{exact:false});
        expect(elementText).toBeNull()

    })
})
