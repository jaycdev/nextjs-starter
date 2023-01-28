import Example from 'lib/components/example'

describe('Example', () => {
  it('should display the name', () => {
    cy.mount(<Example />)
    cy.get('#input').type('John Doe')
    cy.get('#button').click()
    cy.get('#text-display').should('have.text', 'My name is John Doe')
  })
})
