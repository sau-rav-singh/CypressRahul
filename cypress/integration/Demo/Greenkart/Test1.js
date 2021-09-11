/// <reference types="Cypress" />
describe('My First Test Suite', function() {

    it('My First Test Case', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get(".search-keyword").type('ca')
      cy.wait(2000)
      cy.get(".products").as('productLocator')
      cy.get("div[class='products'] div[class='product']").should('have.length',4)
      cy.get("@productLocator").find(".product").should('have.length',4)
      cy.get("@productLocator").find(".product").eq(1).contains("CART").click()
      cy.get("@productLocator").find(".product").each(($el, index, $list) => {
        const vegText=$el.find("h4[class='product-name']").text()
        if(vegText.includes("Cashews")){
           // $el.find('button').trigger("click");
           cy.wrap($el).contains('ADD TO CART').click()
            
        }
      })
      const logo=cy.get('.brand').then(function(logoElement){
        cy.log(logoElement.text())
      })
     cy.get('.brand').should('have.text','GREENKART')
    })

})