import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from "./LandingPage";
import pizzaLogoIcon from '../../assets/pizzaLogoIcon.png'

describe('Landing Page Component', () => {
    //tree is what we will call the DOM, or object that represents whats on the screen
    let tree;

    beforeEach(() => {
        tree = shallow(<LandingPage></LandingPage>)
    })

    it('should render Rubin\'s Pizza ', () => {
        expect(tree.find('#titleId').text()).toEqual("Rubin\'s Pizza")
    });

    it('should render a pizza icon', () => {
        expect(tree.find('#pizzaIconId').props().src).toEqual(pizzaLogoIcon)
    });

    describe('order pizza button', () => {
        let orderPizzaButton;
        beforeEach(() => {
            orderPizzaButton = tree.find("#orderPizzaButtonId")
        })

        it('should have Order A Pizza as the text', () => {
            expect(orderPizzaButton.text()).toEqual("Order a Pizza")
        });

        it('should route to /order when on click', () => {
            let link = tree.find("Link")

            expect(link.exists()).toBeTruthy()
            expect(link.props().to).toEqual("/order")
            expect(link.children()).toEqual(orderPizzaButton)
        });
    });
});

