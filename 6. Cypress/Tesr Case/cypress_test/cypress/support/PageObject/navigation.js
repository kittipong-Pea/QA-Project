export class navigationPage {

    formLayoutPage() {
        selectGroupMenu('Forms')
        cy.contains('Form Layouts').click()
    }

    datepickerPage() {
        selectGroupMenu('Forms')
        cy.contains('Datepicker').click(({ force: true }))
    }

    toastrPage() {
        selectGroupMenu('Modal & Overlays')
        cy.contains('Toastr').click()
    }
    
    smartTablePage() {
        selectGroupMenu('Tables & Data')
        cy.contains('Smart Table').click()
    }

    tooltipsPage() {
        selectGroupMenu('Modal & Overlays')
        cy.contains('Tooltip').click()
    }
}


// function selectGroupMenu(groupName) {
//     cy.contains('a', groupName).then(menu => {
//         cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
//             if (attr.includes('left')) {
//                 cy.wrap(menu).click()
//             }
//         })
//     })
// }

function selectGroupMenu(groupName) {
    // ปิด menu ที่ expand อยู่ก่อน (ถ้ามี และไม่ใช่ group ที่ต้องการ)
    cy.get('nb-menu').then($menu => {
        const expanded = $menu.find('.menu-item.expanded a')
        if (expanded.length > 0) {
            expanded.each((i, el) => {
                if (!el.textContent.trim().includes(groupName)) {
                    cy.wrap(el).click()
                }
            })
        }
    })

    // แล้วค่อยเปิด group ที่ต้องการ
    cy.contains('a', groupName).then(menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
            if (attr.includes('left')) {
                cy.wrap(menu).click()
            }
        })
    })
}



export const onNavigationPage = new navigationPage()

