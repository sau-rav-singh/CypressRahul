/// <reference types='Cypress' />

import HomePage from '../../support/pageObjects/HomePage';
import ProductPage from '../../support/pageObjects/ProductPage.js';

describe('Hooks', function () {
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })
    it("Hooks Test", function () {
        const hP = new HomePage()
        const productPage = new ProductPage()
        cy.visit(Cypress.env("url") + "/angularpractice")
        hP.getEditBox().type(this.data.name)
        hP.getGender().select(this.data.gender)
        hP.getTwoWayDataBinding().should('have.value', this.data.name)
        hP.getEditBox().should('have.attr', 'minlength', '2')
        hP.getEntRadioButton().should('be.disabled')
        hP.getShopTab().click()
        var sum = 0
        this.data.productName.forEach(element => cy.selectProduct(element));
        productPage.getCheckout().click()
        cy.get("table.table tbody tr td:nth-child(4) strong").each(($el, index, $list) => {
            const acttext = $el.text()
            var result = acttext.split(" ")
            result = result[1].trim()
            sum = Number(sum) + Number(result)
            cy.log(result)
        }).then(function () {
            cy.log(sum)
        })
        cy.get("h3 strong").then(function (el) {
            const totalPrice = el.text()
            var total = totalPrice.split(" ")
            total = total[1].trim()
            expect(Number(total)).to.equal(sum)
        })
        productPage.getShopCheckout().click()
        productPage.getCountry().type('ind')
        productPage.getSuggesstions().each(($el, index, $list) => {
            if ($el.text().includes('India')) {
                productPage.getSuggesstions().eq(index).click()
                cy.log('in the loop')
            }
        })
        cy.get('input[type="checkbox"]').click({ force: true })
        cy.get("input[type='submit']").click()
        // cy.get('.alert').should('have.text ',"Success! Thank you! Your order will be delivered in next few weeks :-).")
        cy.get('.alert').then(function (message) {
            const actualText = message.text()
            expect(actualText.includes('Thank you')).to.be.true
        })

    })
})