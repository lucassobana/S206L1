///  <reference types="cypress"/>

describe('Login HBO Max',() => {
    
    it.skip('Caso de teste: Login errado Amazon',()=>{

      cy.visit('https://www.amazon.com.br')
      cy.get('#nav-link-accountList > .nav-line-2').click()
      cy.get('#ap_email').type('25222453145')
      cy.get('.a-button-inner > #continue').click()
      cy.get('.a-alert-heading').should('contain.text', 'Número de telefone incorreto')

    })

    it.skip('Caso de teste: Escolhendo CEP',() => {

      cy.visit('https://www.amazon.com.br')
      cy.get('#glow-ingress-line2').click()
      cy.get('#GLUXZipUpdateInput_0').type('37540')
      cy.get('#GLUXZipUpdateInput_1').type('000')
      cy.get('#GLUXZipUpdate').click()
      cy.get('#glow-ingress-line2').should('contain.text', '37540000')
     
    })

    it.skip('Caso de teste: Selecionando departamento',() => {

      cy.visit('https://www.amazon.com.br')
      cy.get('#twotabsearchtextbox').type('Acessorios')
      cy.get('#nav-search-submit-button').click()
      cy.get('.a-color-state').should('contain.text', 'acessórios')
      
    })

    it.skip('Caso de teste: Selecionando departamento',() => {

      cy.visit('https://www.amazon.com.br')
      cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').click()
      cy.get('#zg_banner_text').should('contain.text','Mais vendidos')
      
    })


  

 })