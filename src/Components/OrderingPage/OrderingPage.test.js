import React from 'react'
import { shallow } from 'enzyme'
import OrderingPage from "./OrderingPage";
import pizzaLogoIcon from '../../assets/pizzaLogoIcon.png'

describe('Ordering Page Component', ()=>{
    let tree;

    beforeEach(()=>{
        tree = shallow(<OrderingPage/>)
    })
    it('should render Rubin\'s Pizza at the top', ()=>{
        console.log(tree.debug())
        expect(tree.find('#titleId').text()).toEqual("Rubin\'s Pizza")
    })
    it('should render a Pizza Logo image', ()=>{
        expect(tree.find('#pizzaIconId').props().src).toEqual(pizzaLogoIcon)
    })
    it('should render text Size', ()=>{
        expect(tree.find('#pizzaSizeId').text()).toEqual("Size")
    })
    it('should render text Crust Type', ()=>{
        expect(tree.find('#pizzaCrustTypeId').text()).toEqual("Crust Type")
    })
    it('should render text Toppings',()=>{
        expect(tree.find('#pizzaToppingsId').text()).toEqual("Toppings")
    })




})