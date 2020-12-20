/// <reference types="cypress" />

context("HomeAssertions", () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })

    describe("Home banner asssertion", () => {

        it(".should() - make assertion that voe-material-chips loaded or not", () => {
            cy.get('.mt-chip.mt-chip-large.black-chip')
        })

    })

    describe("Posts href render asssertion", () => {

        it(".should() - have a posts href rendered in navbar", () => {
            cy.get("ul li a.nav-link[href='#/posts']").contains('Posts').click()
        })

        it("assert you were routed to posts page", () => {
            cy.get("ul li a.nav-link[href='#/posts']").contains('Posts').click()

            cy.get('#postsHeading')
                .contains('Posts')
        })

    })
})