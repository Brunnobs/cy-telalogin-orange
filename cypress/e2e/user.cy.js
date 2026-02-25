import userData from '../fixtures/UserData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPages from '../pages/menuPages.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPages = new MenuPages()

describe('Orange Test', () => {
  const selectorslist = {
    
    personalDetailMyInfo: '[href="/web/index.php/pim/viewPersonalDetails/empNumber/7"]',
    infoPersonalDetails: '.oxd-input--active',
    licenseExpiryDate: '[placeholder="yyyy-dd-mm"]',
    tabelField: '[tabindex="0"]',
    dateCloseButton: ".--close",
  }  
 
  it.only('User Info Update', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPages.accessMyInfo()
  /* 
    cy.get(selectorslist.personalDetailMyInfo).click()
    cy.get('[name="firstName"]').clear().type('Allan')
    cy.get('[name="middleName"]').clear().type('Borges')
    cy.get('[name="lastName"]').clear().type('Silva')
  //  cy.get(selectorslist.infoPersonalDetails).eq(3).clear().type('Alô Borginhos')
    cy.get(selectorslist.infoPersonalDetails).eq(3).clear().type('Empl007')
    cy.get(selectorslist.infoPersonalDetails).eq(4).clear().type('Other007')
    cy.get(selectorslist.infoPersonalDetails).eq(5).clear().type('Drive007')
    cy.get(selectorslist.licenseExpiryDate).eq(0).clear().type('2030-09-20')
    cy.get(selectorslist.dateCloseButton).click()
    cy.get(selectorslist.licenseExpiryDate).eq(1).clear().type('1945-09-07')
    cy.get(selectorslist.dateCloseButton).click()
    cy.get('.oxd-select-text').eq(0).click()
    cy.get('.oxd-select-wrapper').contains('Belgian').click()
    cy.get('.oxd-select-text').eq(1).click()
    cy.get('.oxd-select-wrapper').contains('Other').click()
    cy.get('.--label-right').eq(1).click()
    cy.get("[type='submit']").eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-select-text').eq(2).click()
    cy.get('.oxd-select-wrapper').contains('O+').click()
    cy.get("[options='']").clear().type('Deu certo')
    cy.get("[type='submit']").eq(1).click()
    cy.get('body').should('contain', 'Successfully Updated') */
      
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userFail.username)
    cy.get(selectorslist.passwordField).type(userData.userFail.password)
    cy.get(selectorslist.submitButton).click()
    cy.get(selectorslist.wrongCredentialsAlert)
  })
})
