import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Test Async component', () => {
    test('We are looking for list elements', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return [{ id: 'pw', title: 'Test' }]
            }
        })
        render(<Async />)


        const listElement = await screen.findAllByRole('listitem');
        expect(listElement).not.toHaveLength(0);
    })
})