import React from 'react'
import {shallow} from 'enzyme'
import ConfirmYourOrderPage from "./ConfirmYourOrderPage";
import pizzaLogoIcon from '../../assets/pizzaLogoIcon.png'

describe('ConfirmYourOrderPage Component', () => {
    let tree;
    beforeEach(() => {
        tree = shallow(<ConfirmYourOrderPage/>)
    })
    it('should render Rubin\'s Pizza',()=>{
        expect(tree.find('#titleId').text()).toEqual("Rubin\'s Pizza")
    })
    it('should render the pizza logo image',()=>{
        expect(tree.find('#pizzaLogoId').props().src).toEqual(pizzaLogoIcon)
    })
    it('should render text Your Pizza:',()=>{
        expect(tree.find('#yourPizzaId').text()).toEqual("Your Pizza: ")
    })
   it('should render text describing the pizza to be ordered',()=>{

    })

})
