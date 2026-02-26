class MyInfoPage {

    selectorsList() {
        const selectors = {
            fistNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            personalDetailMyInfo: '[href="/web/index.php/pim/viewPersonalDetails/empNumber/7"]',
            infoPersonalDetails: '.oxd-input--active',
            selectDate: '[placeholder="yyyy-dd-mm"]',
            tabelField: '[tabindex="0"]',
            dateCloseButton: ".--close",
            genericComoBox: '.oxd-select-text',
            wrapperComboBox: '.oxd-select-wrapper',
            genderLabel: '.--label-right',
            saveButton: '[type="submit"]',
            customFields: '[options=""]',
        }
        return selectors
    }

    fillPersonalDetail(fistName, middleName, lastName, /* nickName */) {
        cy.get(this.selectorsList().personalDetailMyInfo).click()
        cy.get(this.selectorsList().fistNameField).clear().type(fistName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        /* cy.get(this.selectorsList().infoPersonalDetails).eq(3).clear().type(nickName) */

    }

    fillEmployeeDetails(employId, otherId, driverLicenseNumber, licenseExpiryDate) {
        cy.get(this.selectorsList().infoPersonalDetails).eq(3).clear().type(employId)
        cy.get(this.selectorsList().infoPersonalDetails).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().infoPersonalDetails).eq(5).clear().type(driverLicenseNumber)
        cy.get(this.selectorsList().selectDate).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        
        
    }

    fillStatus(nationalityStatus, maritalStatus, dataOfBirth, bloodType, testField) {
        cy.get(this.selectorsList().genericComoBox).eq(0).click()
        cy.get(this.selectorsList().wrapperComboBox).eq(0).contains(nationalityStatus).click()
        cy.get(this.selectorsList().genericComoBox).eq(1).click()
        cy.get(this.selectorsList().wrapperComboBox).eq(1).contains(maritalStatus).click()
        cy.get(this.selectorsList().selectDate).eq(1).clear().type(dataOfBirth)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genderLabel).eq(1).click()
        cy.get(this.selectorsList().genericComoBox).eq(2).click()
        cy.get(this.selectorsList().wrapperComboBox).eq(2).contains(bloodType).click()
        cy.get(this.selectorsList().customFields).clear().type(testField)
    
    }

    saveForm() {
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }
    saveForm2() {
        cy.get(this.selectorsList().saveButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }
}

export default MyInfoPage