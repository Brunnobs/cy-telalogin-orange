import userData from '../fixtures/UserData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPages from '../pages/menuPages.js'
import MyInfoPage from '../pages/myinfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPages = new MenuPages()
const myInfoPage = new MyInfoPage()

describe('Orange Test', () => {
   
  it('User Info Update', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()

    menuPages.accessMyInfo()

    myInfoPage.fillPersonalDetail('Sara', 'Carolina', 'Connor', 'Sarinha')
    myInfoPage.fillEmployeeDetails('123456', '654321', '123456789', '2034-12-31')
    myInfoPage.fillStatus('Brazilian', 'Married', '1980-04-01' , 'B-', 'Test') 
    myInfoPage.saveForm()
    myInfoPage.saveForm2()
  })

})
