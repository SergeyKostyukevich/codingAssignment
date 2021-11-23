import { render, screen, waitForElementToBeRemoved, RenderOptions } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';

import { setupServer } from 'msw/node';
import { SWRConfig } from 'swr';
import { handlers } from './../mocks/handlers';
import LeftPanel from './LeftPanel';


const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())


describe('Left Panel', () => {


    describe('folders list is loading', () => {

        beforeEach(async () => {
            customRender(<MemoryRouter initialEntries={['/']}><Routes><Route path="/" element={<LeftPanel />} /></Routes> </MemoryRouter>)
            await waitForElementToBeRemoved(() => screen.getByText('loading...'))
        })


        it('Inbox folder is loaded', () => {
            expect(screen.getByText('Inbox')).toBeInTheDocument();
        })

        it('Trash folder is loaded', () => {
            expect(screen.getByText('Trash')).toBeInTheDocument();
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