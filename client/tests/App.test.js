import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import App from '../components/App'

// describe('Unit testing App.jsx', () =>{
    
    test('renders Bookworm header in App', ()=> {

        render(<App/>);
        const header = screen.getByText('BOOKWORM');
        expect(header).toBeInTheDocument();
        
        });




