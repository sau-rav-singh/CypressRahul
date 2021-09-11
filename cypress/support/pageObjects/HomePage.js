class HomePage{

    getEditBox(){
        return  cy.get("input[name='name']:nth-child(2)")
    }

    getTwoWayDataBinding(){
        return  cy.get("input[name='name']:nth-child(1)")
    }
    getEntRadioButton(){
        return cy.get('#inlineRadio3')
    }
    getGender(){
       return cy.get('select')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage;