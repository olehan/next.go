context('HomePage', () => {
  test('should display correct sum of two queries', () => {
    const num1 = 2352524;
    const num2 = 3463542;

    const expectedSum = num1 + num2;

    cy.visit(`/?a=${num1}&b=${num2}`);
    cy.get('.add-wasm').should('have.text', expectedSum);
    cy.get('.add-node').should('have.text', expectedSum);
  });
});
