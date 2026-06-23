import { it } from "mocha"

describe("First_test", () => {
  it("Test Case 1", () => {
    //cy.visit("/pages/forms/layouts")
    cy.visit("/")
    cy.contains("Forms").click()
    cy.contains("Form Layouts").click()

    // Tag Name
    cy.get("input")
    // By ID
    cy.get("#inputEmail1")
    // By Class
    cy.get(".input-full-width")
    // By Attribute name
    cy.get("[fullwidth]")
    //By attribute name and value
    cy.get('[placeholder="Email"]')
    //By Class and Values
    cy.get('[class="input-full-width size-medium shape-rectangle"]')
    //By two attribute
    cy.get('[fullwidth][placeholder="Email"]')
    //By tag attribute id and class
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
  })
  it("Text Case 2", () => {
    cy.visit("/")
    cy.contains("Forms").click()
    cy.contains("Form Layouts").click()

    cy.contains("Sign in")
    cy.contains('[status="warning"]', "Sign in")
    cy.contains('nb-card', 'Horizontal form').find('button')
    cy.contains('nb-card', 'Horizontal form').get('button')
    cy.contains('nb-card', 'Horizontal form').contains("Sign in")


    //cypress chains and DOM
    cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click()

  })
  it("Save subject of the command", () => {
    cy.visit("/")
    cy.contains("Forms").click()
    cy.contains("Form Layouts").click()

    cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
    cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

    //1. cypress alias
    cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
    cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')

    //2. cypress then method
    cy.contains('nb-card', 'Using the Grid').then(usingTheGrid => {
      cy.wrap(usingTheGrid).find('[for="inputEmail1"]').should('contain', 'Email')
      cy.wrap(usingTheGrid).find('[for="inputPassword2"]').should('contain', 'Password')
    })

  })
  it("Extracting text value", () => {
    cy.visit("/")
    cy.contains("Forms").click()
    cy.contains("Form Layouts").click()


    //EXtracting จาก HTML
    //1
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

    //2 .then
    cy.get('[for="exampleInputEmail1"]').then(label => {
      const labelText = label.text()
      expect(labelText).to.equal('Email address')
    })

    //3
    cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
      expect(text).to.equal('Email address')
    })

    //3.1 ได้เหมือนกัน  เเต่เก้ไขไม่ได้
    cy.get('[for="exampleInputEmail1"]').invoke('text').should('contain', 'Email address')

    //EXtracting values ของ Attribute
    //4
    cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(value => {
      expect(value).to.equal('label')
    })

    //5 EXtracting values ที่อยู่ใน input fillter ต้องไป เอาข้อมูลใน Properties ไม่ไม่ขึ้น $0.value
    cy.get('#exampleInputEmail1').type('test@gmail.com')
    cy.get('#exampleInputEmail1').invoke('prop', 'value').should('contain', 'test@gmail.com')
    cy.get('#exampleInputEmail1').invoke('prop', 'value').then(value => {
      expect(value).to.equal('test@gmail.com')
    })

  })
  it("Redio button", () => {
    cy.visit('/')
    cy.contains("Forms").click()
    cy.contains("Form Layouts").click()

    cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButton => {
      cy.wrap(radioButton).eq(0).check({ force: true }).should('be.checked')
      cy.wrap(radioButton).eq(1).check({ force: true })
      cy.wrap(radioButton).eq(0).should('not.be.checked')
      cy.wrap(radioButton).eq(2).should('be.disabled')
    })
  })
  it("Check box", () => {
    cy.visit("/")
    cy.contains("Modal & Overlays").click()
    cy.contains("Toastr").click()

    cy.get('[type="checkbox"]').eq(0).click({ force: true })
    cy.get('[type="checkbox"]').eq(1).click({ force: true })
  })
  it("Date Pickers Basic", () => {
    cy.visit("/")
    cy.contains("Form").click()
    cy.contains("Datepicker").click()

    //เเบบเลือกปกติ
    // cy.contains("nb-card","Common Datepicker").find("input").then(input =>{
    //   cy.wrap(input).click()
    //   cy.get(".day-cell").not("bounding-month").contains("14").click()
    //   cy.wrap(input).invoke("prop","value").should("contain","May 14, 2026") //เช็คว่าค่าที่ออกมาตรงกัน
    //   cy.wrap(input).should("have.value","May 14, 2026") //เช็คเเบบ2
    // })

    //เเบบลอง+5วัน
    let date = new Date()
    date.setDate(date.getDate() + 5)
    console.log(date);
    let futureDate = date.getDate()
    let dataAssert = `May ${futureDate}, 2026`

    cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
      cy.wrap(input).click()
      cy.get('.day-cell').not('.bounding-month').contains(futureDate).click()
      cy.wrap(input).invoke('prop', 'value').should('contain', dataAssert)
      cy.wrap(input).should('have.value', dataAssert)
    })
  })
  it("Date picker Advance", () => {
    cy.visit("/")
    cy.contains("Forms").click()
    cy.contains("Datepicker").click()

    let date = new Date()
    date.setDate(date.getDate() + 40)
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
  })
  it("Dropdown Lists", () => {
    cy.visit('/')
    //1
    //     cy.get('nav nb-select').click()
    //     cy.get('.options-list').contains('Dark').click()
    //     cy.get('nav nb-select').should('contain', 'Dark')

    //2
    cy.get('nav nb-select').then(dropdown => {
      cy.wrap(dropdown).click()
      cy.get('.options-list nb-option').each(list => {
        const item = list.text()
        cy.wrap(list).click()
        cy.wrap(dropdown).should('contain', item)
        cy.wrap(dropdown).click()
      })
    })

  })
  it('Web Tables', () => {
    cy.visit('/')
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()

    //1 get row by text
    cy.get('tbody').contains('tr', 'Larry').then(row => {
      cy.wrap(row).find('[class="nb-edit"]').click()
      cy.wrap(row).find('[placeholder="Age"]').clear().type('35')
      cy.wrap(row).find('[class="nb-checkmark"]').click()
      cy.wrap(row).find('td').eq(6).should('contain', '35')
    })

    //2 get row by index
    cy.get('thead').find('[class="nb-plus"]').click()
    cy.get('thead').find('tr').eq(2).then(row => {
      cy.wrap(row).find('[placeholder="First Name"]').type('Wesdtride')
      cy.wrap(row).find('[placeholder="Last Name"]').type('QA')
      cy.wrap(row).find('[placeholder="Age"]').clear().type('35')
      cy.wrap(row).find('[class="nb-checkmark"]').click()
    })

    cy.get('tbody tr').first().find('td').then(column => {
      cy.wrap(column).eq(2).should('contain', 'Wesdtride')
      cy.wrap(column).eq(3).should('contain', 'QA')
      cy.wrap(column).eq(6).should('contain', '35')
    })
    
    const age = [20, 30, 40, 200]

    cy.wrap(age).each( age => {
        cy.get('thead').find('[placeholder="Age"]').clear().type(age)
        cy.wait(500)
        cy.get('tbody tr').each( row => {
            if(age == 200){
                cy.wrap(row).should('contain', 'No data found')
            } else {
                cy.wrap(row).find('td').eq(6).should('contain', age)
            }
        })
  })
  
  })
  it("Tooltip", () => {
    cy.visit('/')
    cy.contains('Modal & Overlays').click()
    cy.contains('Tooltip').click()

    cy.contains('nb-card', 'Colored Tooltips').contains('Default').click()
    cy.get('nb-tooltip').should('contain', 'This is a tooltip')
  })
  it('Dialog', () => {
    cy.visit('/')
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()

    cy.get('tbody tr').first().find('[class="nb-trash"]').click()
    cy.on('window:confirm', (confirm) => {
        expect(confirm).to.equal('Are you sure you want to delete?')
    })
  })
})