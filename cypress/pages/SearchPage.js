import { searchLocators } from "../locators/locators"

class SearchPage {

    verifyIfDirectionTopButtonsVisible() {
        cy.get(searchLocators.searchBestDirectionButtonLocator).should('be.visible')
        cy.get(searchLocators.searchVehicleDirectionButtonLocator).should('be.visible')
        cy.get(searchLocators.searchPublicTransportDirectionButtonLocator).should('be.visible')
        cy.get(searchLocators.searchWalkDirectionButtonLocator).should('be.visible')
        cy.get(searchLocators.searchCyclingDirectionButtonLocator).should('be.visible')
        cy.get(searchLocators.searchFlightDirectionButtonLocator).should('be.visible')
    }

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

    verifyFirstSuggestedRoute() {
        cy.get(searchLocators.searchResultVehicleTripIconLocator)
        .should('be.visible')
    }

    giveStartDestination(startPoint) {
        cy.get(searchLocators.startDestinationInputLocator).type(startPoint).type('{enter}')
    }


    giveValueForSearch(searchDestination) {
        cy.get(searchLocators.searchBoxInputLocator).type(searchDestination);
        cy.get(searchLocators.searchBoxSearchButtonLocator).click();
    }

    verifyIfDirectionButtonIsVisible() {
        cy.get(searchLocators.searchDirectionButtonLocator, {timeout: 15000}).should('be.visible')
    }

    forceDirectionSearch() {
        cy.get(searchLocators.searchDirectionButtonLocator).click({force: true})
    }

    verifySearchErrorMessage(message) {
        cy.get(searchLocators.searchErrorMessageLocator, {timeout: 15000})
        .should('be.visible')
        .should('contain', message)
    }

}

export const SearchDirection = new SearchPage()