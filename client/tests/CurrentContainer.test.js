import {render, screen, fireEvent} from '@testing-library/react'

import '@testing-library/jest-dom'
import React from 'react'
import CurrentContainer from '../components/CurrentContainer'
import App from '../components/App'

import userEvent from '@testing-library/user-event'



describe('unit testing in CurrentContainer',()=>{
    
    
beforeEach(()=>{
    render(<App/>)
})

test('CurrentContainer renders correctly and header displays Current Reads', ()=>{
//    const app =  render(<CurrentContainer {...props} />)
 const header = screen.getByText(/Current Reads/i);
 expect(header).toBeInTheDocument();
 
})

test('CurrentContainer should have add Book button',  ()=>{
    const button = screen.getByTestId('curAddButton')
    expect(button).toBeInTheDocument()
})

test('CurrentContainer should have what my friends are reading button',  ()=>{
    const button = screen.getByRole('button', {
        name: /\+ what my friends are reading/i
      })
   
    expect(button).toBeInTheDocument()
     
   
})
test('Clicking add button should display a submit and cancel button for a blank entry', async ()=>{

   await userEvent.click(screen.getByTestId('curAddButton'))
    const submit = screen.getByTestId('blankSub')
    const cancel = screen.getByTestId('blankCancel')
    
    expect(submit).toBeInTheDocument();
    expect(cancel).toBeInTheDocument();
    
})

    describe('Testing options for adding a new book to current container', ()=>{
        beforeEach(async ()=>{
            await userEvent.click(screen.getByTestId('curAddButton'))})

        test('clicking cancel should close out the option to add a new book ',async ()=>{
           
            const submit = screen.getByTestId('blankSub') 
            await userEvent.click(screen.getByTestId('blankCancel'))
            return expect(submit).not.toBeInTheDocument();   
            })

            test('Blank entry should initialize with empty fields', async ()=>{
                const title = screen.getByRole('textbox', {
                    name: /title/i
                  })
                 
                 
                  expect(title.value).toEqual("")
                //   const button = screen.getByTestId('blankSub')

                //   console.log(button)
                // await userEvent.click(button)
                  
                  
                

            })

            test("Text in Submit and Cancel buttons should be 'submit' and 'cancel' respectively",  ()=>{
                const submit = screen.getByTestId('blankSub')
                const cancel = screen.getByTestId('blankCancel')
                expect(submit).toHaveTextContent('Submit')
                expect(cancel).toHaveTextContent('Cancel');
                
               
            })

 

    // console.log(curFriend)
    // const otherCon = await screen.findAllByTestId('otherContainer')

    
    
})

 

})