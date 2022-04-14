import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import App, {fetchAll} from '../components/App'
import CurrentContainer from '../components/CurrentContainer'





 describe('Unit testing App.jsx', () =>{
    let app;
    const initialState = {
        current: [],
        past: [],
        future: [],
        otherCurrent: [],
        otherPast: [],
        otherFuture: []}
       beforeEach(async ()=>{
          app = render(<App/>)
          
       })

        test('App renders correctly and header displays BOOKWORM', ()=>{
           
            
         console.log(screen.logTestingPlaygroundURL())
            const header = app.getByText(/BOOKWORM/);
            
            expect(header).toBeInTheDocument();
        })

        test('Expect 8 buttons to be rendered upon starting the applications',async()=>{
            const buttons = await screen.findAllByRole('button')
            
            expect(buttons.length).toEqual(5)
        })

        // test('State changes after componentDidMount runs the fetchall() function', async ()=>{
        //     const curTitle = await screen.findAllByTestId(/test/i)
            
        //     expect(curTitle).toBeInTheDocument();
   
        // })

        


        // describe('child components are receiving correct props', () => {
        //     const mockChildComponent = jest.fn();
        //     const mockFunction = jest.fn()
        //     jest.mock("../components/CurrentContainer", ()=> (props) => {
        //         mockChildComponent(props);

        //         return <mockChildComponent/>
        //     })

            // test("App.jsx is passing down props to current container child component", () => {
            //     render(<App current = {[]} othercurrent = {[]} addBookFetch = {mockFunction} />)
            //     expect(mockChildComponent).toHaveBeenCalledWith(expect.objectContaining({
            //         current: [],
            //         othercurrent:[],
            //         addBookFetch: mockFunction
            //     }))
            // })




        // })


       
    
    
    


})

