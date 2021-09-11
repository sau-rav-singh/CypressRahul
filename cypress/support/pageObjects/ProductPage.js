class ProductPage{

    getCheckout(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    getShopCheckout(){
        return cy.get("td button[type='button']").contains('Checkout')
    }

    getCountry(){
        return cy.get('#country')
    }

    getSuggesstions(){
        return cy.get("div[class='suggestions'] ul li a",{timeout:10000})
    }
}

export default ProductPage;