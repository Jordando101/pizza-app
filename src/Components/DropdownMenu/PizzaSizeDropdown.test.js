import React from 'react'
import {shallow} from 'enzyme'
import {PizzaSizeDropdown} from "./PizzaSizeDropdown";


//find simulate .click make sure callback function is called
//mock const  handleChange = jest.fn()
//pass in props WHEN its shallow rendered

describe('PizzaSizeDropdown Component handles callback function correctly', () => {
    let tree;
    let mockHandlePizzaSizeChange;
    let mockPizzaSizes={
        small:"Small",
        medium:"Medium",
        large:"Large",
        extraLarge:"Extra Large"
    };

    beforeEach(() => {

        mockHandlePizzaSizeChange = jest.fn() //this is a jest mock function
        tree = shallow(<PizzaSizeDropdown handlePizzaSizeChange={
            //need to mock out this externality (in this case, OrderingPage.js)
            mockHandlePizzaSizeChange
        }/>)
    })

    it('renders a select component with the correct callback from props', () => {
        let mockEvent = {target: {value: "large"}}
        tree.find("#size-select").props().onChange(mockEvent)
        expect(mockHandlePizzaSizeChange).toHaveBeenCalledWith(
            'large')
    })

    it('invokes callback when select value changes', () => {
        let mockEvent = {target: {value: "large"}}
        tree.find("#size-select").simulate('change', mockEvent)
        expect(mockHandlePizzaSizeChange).toHaveBeenCalledWith(
            'large')
    })

    Object.keys(mockPizzaSizes).map((size)=>{
        it('invokes callback with pizzaSize key is '+size,()=>{
            let mockEvent = {target:{value:size}}
            tree.find('#pizza-select-option-'+size).simulate('change',mockEvent)
            expect(mockHandlePizzaSizeChange).toHaveBeenCalledWith(size+'')
        })
    })


})