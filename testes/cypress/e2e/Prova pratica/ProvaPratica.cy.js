///  <reference types="cypress"/>

describe('Login HBO Max',() => {
    
    it('Caso de teste: Criando usuário',()=>{

      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      cy.get(':nth-child(3) > .btn').click()
      cy.get('[ng-class="btnClass1"]').click()
      cy.get(':nth-child(1) > .form-control').type('Cristiano')
      cy.get(':nth-child(2) > .form-control').type('Ronaldo')
      cy.get(':nth-child(3) > .form-control').type('CR7')
      cy.get('form.ng-dirty > .btn').click()


    })

    it('Caso de teste: Deletando usuário',() => {

        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.get(':nth-child(3) > .btn').click()
        cy.get('[ng-class="btnClass3"]').click()
        cy.get(':nth-child(3) > :nth-child(5) > button').click()
     
    })

    it('Caso de teste: Depositando e retirando valor a mais do que depositado',() => {

        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.get('.borderM > :nth-child(1) > .btn').click()
        cy.get('#userSelect').select('Harry Potter')
        cy.get('form.ng-valid > .btn').click()
        cy.get('.borderM > :nth-child(3) > :nth-child(3)').should('have.text', 'Dollar')
        cy.get('[ng-class="btnClass2"]').click()
        cy.get('.form-control').type('1000')
        cy.get('form.ng-dirty > .btn').click()
        cy.get('.error').should('have.text', 'Deposit Successful')
        cy.get('[ng-class="btnClass1"]').click()
        cy.get('.fixedTopBox > [style="float:left"]').click()
        cy.get('[ng-class="btnClass3"]').click()
        cy.get('.form-control').type('1200')
        cy.get('form.ng-dirty > .btn').click()
        cy.get('.error').should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.')
      
    })

  

 })