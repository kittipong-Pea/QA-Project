/// <reference types="cypress" />

import { onDatepickerPage } from "../support/PageObject/datePickerPage"
import { onformLayoutPage } from "../support/PageObject/formLayoutPage"
import { onNavigationPage } from "../support/PageObject/navigation"
import { onSmartTablePage } from "../support/PageObject/smartTablePage"

describe("Test with page object", () => {

    beforeEach("open application", () => {
        cy.goToHomePage()
    })

    it("verify navigationPage", () => {
        onNavigationPage.formLayoutPage()
        onNavigationPage.datepickerPage()
        onNavigationPage.toastrPage()
        onNavigationPage.smartTablePage()
        onNavigationPage.tooltipsPage()
    })
    it.only('should summit inline basic form and select tommorrow date in the calendar and edit table',()=>{
        onNavigationPage.formLayoutPage()
        onformLayoutPage.submitInlineFormWithNameAndEmail('test','test@gmail.com')
        onformLayoutPage.submitBasicFormWithEmailAndPassword('test@gmail.com','123')
        onNavigationPage.datepickerPage()
        onDatepickerPage.selectCommomDatePickerDateFormToday(1)
        onNavigationPage.smartTablePage()
        onSmartTablePage.updateAgeByFirstname('John','100')
        onSmartTablePage.addNewRecordWithFirstnameAndLastnameAndAge('test','Mike','40')
    })
})


