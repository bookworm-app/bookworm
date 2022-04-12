import {render, screen} from '@testing-library/react'
import React from 'react'
import App from './components/App'

test('renders Bookworm header in App', ()=> {

render(<App/>);
const header = screen.getByText('BOOKWORM');
expect(header).toBeInTheDocument();

});