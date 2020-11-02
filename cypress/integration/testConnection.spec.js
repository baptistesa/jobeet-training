describe('Connection', () => {
    it("Can connect", () => {
      cy.visit('http://localhost:4200')
      cy.get('[data-cy=username]').type('baptiste.saintandre@gmail.com') 
      cy.get('[data-cy=password]').type('232280638614907bSA') 
      cy.get('[data-cy=login]').click() 
      cy.wait(1000);
      cy.reload();
      cy.get('[data-cy=l]').should("not.be.visible");
    })

    it("It can't connect", () => {
        cy.visit('http://localhost:4200')
        cy.get('[data-cy=username]').type('baptiste.saintandre@gmail.com') 
        cy.get('[data-cy=password]').type('232280638614907bSA') 
        cy.get('[data-cy=login]').click() 
        cy.wait(1000);
        cy.reload();
        cy.get('[data-cy=menu]').should("be.visible");
      })
})