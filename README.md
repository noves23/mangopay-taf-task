# Mangopay - Test Automation Framework for basic search functionality of Google Maps.  
Summary
This repository contains Test Automation Framework for Google maps webpage. It was created as a part of MANGOPAY recruitment process. It is based on Cypress test framemork and javascript language. During creating process only standard documentation for Cypress has been used. 
Solution has been done using Page Object Pattern, although some recomendations prefering Cypress Commands. Both solutions are similar and I chose first one, as I used it in other test frameworks, like Selenium. For better understanding of my approach I encourage reviewers to read comments in the code. 

Stracture of the framework:
-> SearchPage.js - contains collection of reusable functions. 
-> locators.js - separate file to collect all locators for dedicated page. 
-> testData folder - contains test data inputs and test oracle. Although it's small portion of data, it is a good practice to saparate it from the test case file. 
-> searchOnMap.cy.js - contains implementation of designed test cases, based on Acceptance Criteria. 

As mentioned in test task, it should be runable on a local machine of the user (not part of CI/CD), so variaty of configurations for different browsers and devices are very limited. It could be extended on demand in 'cypress.config.js'. 
Also screenshots and videos are taken only "on failure", when prefered form of running test is used - 'npx cypress run'.

Solution includes two required test scenarios and covers couple more:

Verify if search button returns proper destination, when user gives valid city name - Paris.
Verify if direction button returns proper route details for given points (from Leeds to London).
Verify if search button returns proper destination, when user gives valid postcode.
Verify if search button returns proper error message, when user gives invalid city name.
Verify if search button returns proper error message, when user gives invalid coordinations.

In addition one extra test case (set to be not included in run) to test basic API functionality. 
Retrieves location address based on latitude and longitude.

Instructions
To run tests locally follow the steps below:

Install dependences: 'npm install'
Run tests from the command line: 'npx cypress run'
Optionaly to be able to watch on real time what it happens this command can be use: 'npx cypress open'. Then on GUI interface select E2E and select test to run (only one is included).
