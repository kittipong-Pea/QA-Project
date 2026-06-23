/// <reference types="cypress" />

export class datepickerPage {
    selectCommomDatePickerDateFormToday(dateFormToday) {
        let date = new Date()
        date.setDate(date.getDate() + dateFormToday)
        console.log(date);
        let futureDate = date.getDate()
        let futureMonth = date.toLocaleString('default', { month: 'short' })
        let futureYear = date.getFullYear()
        let dataAssert = `${futureMonth} ${futureDate}, ${futureYear}`

        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()

            function selectDayFromCurrent() {
                cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
                    if (!dateAttribute.includes(futureMonth)) {
                        cy.get('[data-name="chevron-right"]').click()
                        selectDayFromCurrent()
                    } else {
                        cy.get('.day-cell').not('.bounding-month').contains(futureDate).click()
                    }
                })
            }

            selectDayFromCurrent()
            cy.wrap(input).invoke('prop', 'value').should('contain', dataAssert)
            cy.wrap(input).should('have.value', dataAssert)
        })
    }


}

export const onDatepickerPage = new datepickerPage()

