import { searchLocators } from "../locators/locators"

class SearchPage {

    // with this single function more checks are combine, as usually we would like to verify if all buttons in dedicated sections are visible
    // this approach increase readability and maintainability  of test case file (searchOnMao.cy.js)
    verifyIfDirectionTopButtonsVisible() {
        cy.get(searchLocators.searchBestDirectionButtonLocator).should('be.visible')
        cy.get(searchLocators.searchVehicleDirectionButtonLocator).should('be.visible')
        cy.get(searchLocators.searchPublicTransportDirectionButtonLocator).should('be.visible')
        cy.get(searchLocators.searchWalkDirectionButtonLocator).should('be.visible')
        cy.get(searchLocators.searchCyclingDirectionButtonLocator).should('be.visible')
        cy.get(searchLocators.searchFlightDirectionButtonLocator).should('be.visible')
    }

    // with this single function more checks are combine, as usually we would like to verify if all buttons in dedicated sections are visible
    // this approach increase readability and maintainability  of test case file (searchOnMao.cy.js)
    verifyIfDirectionBottomButtonsAreVisible() {
        cy.get(searchLocators.searchRoutePlanLocator).should('be.visible')
        cy.get(searchLocators.searchRouteSaveLocator).should('be.visible')
        cy.get(searchLocators.searchRouteNearbyLocator).should('be.visible')
        cy.get(searchLocators.searchRouteSendToPhoneLocator).should('be.visible')
        cy.get(searchLocators.searchRouteShareLocator).should('be.visible')
    }

    verifyDestinationDetails(searchDestination) {
        cy.get('.DUwDvf.lfPIob').should('have.text', searchDestination)
    }

    verifyIfDestinationDetailsContains(searchDestination) {
        cy.get('.DUwDvf.lfPIob').should('contain', searchDestination)
    }

    verifyFirstSuggestedRoute() {
        cy.get(searchLocators.searchResultVehicleTripIconLocator)
        .should('be.visible')
    }

    giveStartDestinationAndPressEnter(startPoint) {
        cy.get(searchLocators.startDestinationInputLocator).type(startPoint).type('{enter}')
    }

    giveSearchDestinationAndClickButton(searchDestination) {
        cy.get(searchLocators.searchBoxInputLocator).type(searchDestination);
        cy.get(searchLocators.searchBoxSearchButtonLocator).click();
    }

    verifyIfDirectionButtonIsVisible() {
        cy.get(searchLocators.searchDirectionButtonLocator).should('be.visible')
    }

    clickDirectionSearchButton() {
        cy.get(searchLocators.searchDirectionButtonLocator).click({force: true})
    }

    verifySearchErrorMessage(message) {
        cy.get(searchLocators.searchErrorMessageLocator)
        .should('be.visible')
        .should('contain', message)
    }
}

export const SearchDirection = new SearchPage()