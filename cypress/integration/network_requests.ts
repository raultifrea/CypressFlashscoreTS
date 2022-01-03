describe("test API", ()=>{
    it("cy.request() - make an XHR request",()=>{
        cy.request('/comments').should((response)=>{
            expect(response).to.have.property('body');
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.body).to.have.property('length').and.be.oneOf([500,501])
            })
    })
    
    it("Check response using then", ()=>{
        cy.request('/comments').then((resp)=>{
            expect(resp.status).to.eq(200);
            expect(resp.body).to.have.length(500);
            expect(resp).to.have.property('headers');
            expect(resp).to.have.property('duration');
        })
    })

    it("cy.request() - verify response using BDD syntax", ()=>{
        cy.request('/comments').then((response)=>{
            expect(response).property('status').to.equal(200);
            expect(response).property('body').to.have.property('length').and.be.oneOf([500,501]);
            expect(response).to.include.keys('headers', 'duration');
        })
    })

    it("cy.request() with query parameters", ()=>{
        cy.request({
            url: '/comments',
            qs: {
                postId: 1,
                id: 3,
            },
        }).its('body').should('be.an', 'array')
        .and('have.length', 1)
        .its('0').should('contain',{
            postId:1,
            id: 3,
        })
    })

    it("cy.request() - pass result to the second request", ()=>{
        cy.request('/users?_limit=1').its('body.0').then((user)=>{
            expect(user).property('id').to.be.a('number')
            cy.request('POST', '/posts', {
                userId : user.id,
                title: "Cypress test runner",
                body: "Fast and easy bla bla bla",
            })
        })
        .then((response)=>{
            expect(response).property('status').to.be.eq(201);
            expect(response).property('body').to.contain({
                title: "Cypress test runner",
            })
            expect(response.body).property('id').to.be.a('number')
            .and.to.be.gt(100);
            expect(response.body).property('userId').to.be.a('number');
        })
    })

    it("cy.request() - save response in the shared test context", ()=>{
        cy.request('/users?_limit=1')
        .its('body.0').as('user').then(function(){
            cy.request('POST', '/posts', {
                userId: this.user.id,
                title: 'Automation POST request',
                body: "What a nice method to post a request.",
            })
            .its('body').as('post')
        })
       .then(function(){
        expect(this.post, 'user id').property('userId').to.equal(this.user.id)
       })
    })

    it("cy.intercept() - route responses to matching requests", ()=>{
        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.intercept('GET', '/comments/1').as('getComment');
        cy.get('.network-btn').click();
        cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200,304]);
        cy.intercept('POST', '/comments').as('postComment');
        cy.get('.network-post').click();
        cy.wait('@postComment').should(({request, response})=>{
            expect(request.body).to.include('email');
            expect(request.headers).to.have.property('content-type');
            expect(response && response.body).to.have.property('name','Using POST in cy.intercept()')
        })
    })

    })

