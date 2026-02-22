import userData from '../fixtures/UserData.json'

describe('Orange Test', () => {
  const selectorslist = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    submitButton: '[type="submit"]',
    sessionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashbordGrid: '.orangehrm-dashboard-grid',
    wrongCredentialsAlert: '.oxd-alert'
  }

 
  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorslist.passwordField).type(userData.userSuccess.password)
    cy.get(selectorslist.submitButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.dashbordGrid)
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userFail.username)
    cy.get(selectorslist.passwordField).type(userData.userFail.password)
    cy.get(selectorslist.submitButton).click()
    cy.get(selectorslist.wrongCredentialsAlert)
  })
})
