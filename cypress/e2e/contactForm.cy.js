/*
Task: visit https://aluminati.net, browse to the contact form, and fill out the form with whatever details you deem appropriate.
You will not be able to submit the form as it's behind a CAPTCHA, but simply filling out the data is enough for this exercise.
*/

describe('Contact form', () =>{
	beforeEach(() => {
        cy.intercept('https://www.aluminati.net/contact').as('getContactPage'); // Alias the intercepted request
    });

	it('should be able to fill out the contact form', () =>
	{
		cy.visit('/')
		cy.get('#menu-item-17180').click();
		cy.wait('@getContactPage')
		cy.get('[data-name="your-name"]').type('hello name')
		cy.get('[data-name="your-email"]').type('hello email')
		cy.get('[data-name="your-phone"]').type('hello phone')
		cy.get('[data-name="your-organisation"]').type('hello organisation')
		cy.get('[data-name="your-job"]').type('hello job')
		cy.get('[data-name="your-message"]').type('hello job')
	});
});
