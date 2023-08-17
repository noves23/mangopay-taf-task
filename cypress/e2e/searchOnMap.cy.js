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
      city: "Leeds"
    },

    correctPostCodeCity: {
      postcode: "81677",
      city: "Munich"
    },

    correctCoordinationsCity: {
      city: "Warsaw",
      coordinations: "51.20748037341781, 16.157240196628603"
    },

    incorrectCoordinations: {
      coordinations: "551.20748037341781, 16.157240196628603"
    },

    incorrectCityName: {
      city: "ajjahdshdghdhh"
    },
  }

  const errorMessages = {
    searchResaultErrorMessage: "Google Maps can't find",
  }


  it('User search for Paris city', () => {

    SearchDirection.giveValueForSearch(testData.firstTestCity.city);
    SearchDirection.verifyDestinationDetails(testData.firstTestCity.city);
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

  it.only('User search for city by coordinations', () => {

    SearchDirection.giveValueForSearch(testData.correctCoordinationsCity.coordinations);
    SearchDirection.verifyDestinationDetails(testData.correctCoordinationsCity.city);
    SearchDirection.verifyIfDirectionBottomButtonsAreVisible();

  })

  it('User search for city by postcode', () => {

    SearchDirection.giveValueForSearch(testData.correctPostCodeCity.postcode);
    SearchDirection.verifyDestinationDetails(testData.correctPostCodeCity.city);
    SearchDirection.verifyIfDirectionBottomButtonsAreVisible();

  })


  it('incorrect city name', () => {

    SearchDirection.giveValueForSearch(testData.incorrectCityName.city)
    SearchDirection.verifySearchErrorMessage(errorMessages.searchResaultErrorMessage)

  });

  it.skip('incorrect coordinations (out of scope)', () => {

    SearchDirection.giveValueForSearch(testData.incorrectCoordinations.coordinations)
    SearchDirection.verifySearchErrorMessage(errorMessages.searchResaultErrorMessage)

  });

})




