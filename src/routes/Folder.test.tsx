import { render, screen, waitForElementToBeRemoved, RenderOptions } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { MemoryRouter, Route, Routes } from 'react-router';
import { SWRConfig } from 'swr';
import { handlers } from './../mocks/handlers';
import Folder from './Folder';


const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())


describe('Folder', () => {


    describe('folder is loading', () => {

        beforeEach(async () => {
            customRender(<MemoryRouter initialEntries={['/folders/Inbox']}><Routes><Route path="/folders/:folderName" element={<Folder />} /></Routes> </MemoryRouter>)
            await waitForElementToBeRemoved(() => screen.getByText('loading...'))
        })


        it('folder is loaded', () => {
            expect(screen.getByTitle('Inbox')).toBeInTheDocument();
        })


        it('messages are loaded', () => {
            expect(screen.getByText('Jane Doe')).toBeInTheDocument();
            expect(screen.getByText('Re: Postgres Meetup Thursday')).toBeInTheDocument();
        })
    })
})




const AllTheProviders: React.FC = ({ children }) => {
    return (
        <SWRConfig value={{ refreshInterval: 0, provider: () => new Map() }}>
            {children}
        </SWRConfig>
    )
}

const customRender = (
    ui: React.ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })