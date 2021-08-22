import React from 'react'
import { shallow } from 'enzyme'
import OrderingPage from "./OrderingPage";

describe('Ordering Page Component', ()=>{
    let tree;

    beforeEach(()=>{
        tree = shallow(<OrderingPage/>)
    })

    it('should render Rubin\'s Pizza at the top', ()=>{
        expect(tree.find('#titleId').text()).toEqual("Rubin\'s Pizza")
    })




})