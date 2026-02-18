describe('Orange Test', () => {
  const selectorslist = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    submitButton: '[type="submit"]',
    sessionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialsAlert: '.oxd-alert'
  }

  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type('Admin')
    cy.get(selectorslist.passwordField).type('admin123')
    cy.get(selectorslist.submitButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.sessionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type('Test')
    cy.get(selectorslist.passwordField).type('test')
    cy.get(selectorslist.submitButton).click()
    cy.get(selectorslist.wrongCredentialsAlert)
  })
})
