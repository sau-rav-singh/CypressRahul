/// <reference types='Cypress' />

describe('WebTable Test Suite', function () {
    it("WT", function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get("table[id='product'][name='courses'] tr td:nth-child(2)").each(($e1, index, $list) => {
        //     if ($e1.text().includes('Python')) {
        //         cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {//next can only applied to get, hence traversing to element again and using index to hit pyhton directly
        //             const priceText = price.text()
        //             expect(priceText).to.equal('25')
        //         })
        //     }
        // })
        // cy.get('div.mouse-hover-content').invoke('show')//show only shows chile hidden elements
        // cy.contains('Top').click()
        // cy.url().should('include','top')
      

    })
})