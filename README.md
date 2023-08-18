# Mangopay - Test Automation Framework for Basic Search Functionality of Google Maps

## Summary

This repository contains a Test Automation Framework for testing the basic search functionality of the Google Maps webpage. The framework was created as a part of the MANGOPAY recruitment process. It is based on the Cypress test framework and JavaScript language. Throughout the creation process, standard documentation for Cypress was used.

The solution utilizes the Page Object Pattern, although some recommendations prefer using Cypress Commands. Both solutions are similar, and I chose the Page Object Pattern as it aligns with my experience in other test frameworks like Selenium. To better understand my approach, I encourage reviewers to read the comments in the code.

## Structure of the Framework

- `SearchPage.js` - contains a collection of reusable functions.
- `locators.js` - a separate file to collect all locators for a dedicated page.
- `testData` folder - contains test data inputs and test oracle. Separating this data from the test case file is considered good practice.
- `searchOnMap.cy.js` - contains the implementation of designed test cases based on the Acceptance Criteria.

As specified in the test task, the framework is intended to be runnable on a local machine of the user (not as part of CI/CD). Therefore, the variety of configurations for different browsers and devices is very limited. However, this could be extended as needed in the `cypress.config.js`. Screenshots and videos are taken only on failure when using the preferred form of running tests: `npx cypress run`.

The solution includes the two required test scenarios:
- Verify if the search button returns the proper destination when the user provides a valid city name (Paris).
- Verify if the direction button returns the proper route details for given points (from Leeds to London).

additional three tests, where two of them expects to receive an error message:
- Verify if the search button returns the proper destination when the user provides a valid postcode.
- Verify if the search button returns a proper error message when the user provides an invalid city name.
- Verify if the search button returns a proper error message when the user provides invalid coordinates.

## API additional test scenario. 
In addition, there is one extra test case marked as to be not included in the run ('cy.skip()' is used).
It retrieves the location address based on latitude and longitude and measures duration. 

## Instructions

To run tests locally, follow the steps below:

1. Install dependencies: `npm install`
2. Run tests from the command line: `npx cypress run`
3. Optionally, to be able to watch in real-time what is happening, use this command: `npx cypress open`. Then, on the GUI interface, select E2E and choose the test to run (only one is included).

