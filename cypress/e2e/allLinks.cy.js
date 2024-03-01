/*
Task: In mobile view, browse to `Products` -> `Aluminate for education` and get the value for every 
`href` on every anchor (`<a />` tag) on the page.

Output the `href` values to the console. Logging to cypress or the standard dev console is fine.

Please perform this entire task on the mobile site, including the navigation and link data fetching.
*/
describe('Get all links', () => {
	beforeEach(() => {
        cy.intercept('https://www.aluminati.net/aluminate-for-education-alumni-engagement-software/').as('getAlumniEngagementSoftwarePage'); // Alias the intercepted request
		cy.viewport('iphone-x');
	});


	
	it('should be able to browse to the product page in mobile view and real all links', () => {
		cy.visit('/')
		cy.get('a.fusion-icon.awb-icon-bars').click();
		cy.get('#mobile-menu-item-2862').within(() => {
            cy.get('button.fusion-open-submenu').click();
            cy.get('ul.sub-menu').should('be.visible');
            cy.get('ul.sub-menu > li:nth-child(2)').click();
        });
		cy.wait('@getAlumniEngagementSoftwarePage');
		cy.get('a').each(($a) => {
            // Extract the href attribute value
            const href = $a.attr('href');
            
			// Check if href is defined and not equal to "#" before logging
			if (href !== undefined && href !== "#")  {
                // Log the href value to the Cypress command log
                cy.log(`Href value: ${href}`);
                
            }
        });
		});
});