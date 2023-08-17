import { searchLocators } from "../locators/locators"
import { SearchDirection } from "../pages/SearchPage";

describe('My First Test', () => {

  beforeEach(() => {
    cy.visit('/maps', {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, 'language', { value: 'en' });
        Object.defineProperty(win.navigator, 'languages', { value: ['en'] });
        Object.defineProperty(win.navigator, 'accept_languages', { value: ['en'] });
      },
      headers: {
        'Accept-Language': 'en-GB',
      },
    });
    cy.get(searchLocators.acceptSettingsLocator).contains("Accept all").click()
  })

  const testData = {

    firstTestCity: {
      city: "Paris"
    },

    secondTestCity: {
      city: "London"
    },

    startDestinationCity: {
      city: "Liverpool"
    },

    correctPostCode: {
      postcode: "81677",
      city: "Munich"
    },

    thirdTestCity: {
      city: "Warsaw",
      country: "Poland",
      coordinations: "51.20748037341781, 16.157240196628603"
    },

    incorrectCity: {
      city: "ajjahdshdghdhh"
    },

    searchResaultErrorMessage: "Google Maps can't find",
  }


  it('User search for Paris city', () => {

    SearchDirection.giveValueForSearch(testData.firstTestCity.city);
    // should verify city name
    SearchDirection.verifyIfDirectionBottomButtonsAreVisible();

  })


  it('Goes to google maps gives start and end point, and chacking destinations details', () => {

    SearchDirection.giveValueForSearch(testData.secondTestCity.city);
    SearchDirection.verifyIfDirectionButtonIsVisible();
    SearchDirection.forceDirectionSearch()
    SearchDirection.giveStartDestination(testData.startDestinationCity.city);
    SearchDirection.verifyIfDirectionTopButtonsVisible()
    SearchDirection.verifyFirstSuggestedRoute()

  });

  it('User search for city by coordinations', () => {

    SearchDirection.giveValueForSearch(testData.thirdTestCity.coordinations);
    // should verify city name
    SearchDirection.verifyIfDirectionBottomButtonsAreVisible();


  })

  it('User search for city by postcode', () => {

    SearchDirection.giveValueForSearch(testData.correctPostCode.postcode);
    // should verify city name
    SearchDirection.verifyIfDirectionBottomButtonsAreVisible();


  })


  it('incorrect destination', () => {

    SearchDirection.giveValueForSearch(testData.incorrectCity.city)
    SearchDirection.verifySearchErrorMessage(testData.searchResaultErrorMessage)



  });

})




