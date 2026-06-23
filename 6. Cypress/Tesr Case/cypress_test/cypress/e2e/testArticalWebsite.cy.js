/// <reference types="cypress" />

describe('Test Artical Web', () => {
    beforeEach('login', () => {
        cy.LogininToApplication()
    })
    it('should login success', () => {
        cy.log('Login Success')
    })
    it('verify response', () => {
        cy.intercept('POST', 'https://conduit-api.bondaracademy.com/api/articles/').as('postArticle')

        let title = 'Test QA 001'
        cy.contains('New Article').click()
        cy.get('[formcontrolname="title"]').type('Test QA 001')
        cy.get('[formcontrolname="description"]').type('kittipong QA')
        cy.get('[formcontrolname="body"]').type('Try to test')

        cy.contains('Publish Article').click()

        cy.wait('@postArticle')

        cy.get('@postArticle').then(xhr => {
            console.log(xhr);
            expect(xhr.response.statusCode).to.equal(201)
            expect(xhr.response.body.article.title).to.equal(title)
        })

    })
    it('verify tags response', () => {
        cy.intercept('GET', 'https://api.realworld.io/api/tags', { fixture: 'tags.json' })
        cy.get('.tag-list').should('contain', 'Test')
            .and('contain', 'Blog')
            .and('contain', 'Git')
    })
    // it('verify article response', () => {
    //     cy.intercept('GET', 'https://api.realworld.io/api/articles*', { fixture: 'article.json' })
    //     cy.get('app-article-list').each(article => {
    //         cy.wrap(article).find('h1').eq(0).should('contain', 'Test QA 001')
    //     })
    // })
})



