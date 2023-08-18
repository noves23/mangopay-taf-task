import { searchLocators } from "../locators/locators"
import { SearchDirection } from "../pages/SearchPage";
import { searchDestinationsData } from "../testData/searchDestinations";
import { searchErrorMessagesData } from "../testData/searchErrorMessages";

describe('Verify basic search functionality of Google Maps.', () => {

  beforeEach(() => {
    cy.viewport('macbook-16');
    cy.visit('/maps', {
      // this hook is needed to perform test cases from any local machine, to ensure proper assertion strings (set language to English)
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

  it('Verify if search button returns proper destination, when user gives valid city name - Paris.', () => {
    SearchDirection.giveSearchDestinationAndClickButton(searchDestinationsData.firstTestCity.city);
    SearchDirection.verifyDestinationDetails(searchDestinationsData.firstTestCity.city);
    SearchDirection.verifyIfDirectionBottomButtonsAreVisible();
  })

  it('Verify if direction button returns proper route details for given points (from Leeds to London).', () => {
    SearchDirection.giveSearchDestinationAndClickButton(searchDestinationsData.secondTestCity.city);
    SearchDirection.verifyIfDirectionButtonIsVisible();
    SearchDirection.clickDirectionSearchButton();
    SearchDirection.giveStartDestinationAndPressEnter(searchDestinationsData.startDestinationCity.city);
    SearchDirection.verifyIfDirectionTopButtonsVisible();
    SearchDirection.verifyFirstSuggestedRoute();
  });

  it('Verify if search button returns proper destination, when user gives valid postcode.', () => {
    SearchDirection.giveSearchDestinationAndClickButton(searchDestinationsData.correctPostCodeCity.postcode);
    SearchDirection.verifyIfDestinationDetailsContains(searchDestinationsData.correctPostCodeCity.city);
    SearchDirection.verifyIfDirectionBottomButtonsAreVisible();
  })

  it('Verify if search button returns proper error message, when user gives invalid city name.', () => {
    SearchDirection.giveSearchDestinationAndClickButton(searchDestinationsData.incorrectCityName.city);
    SearchDirection.verifySearchErrorMessage(searchErrorMessagesData.searchResaultErrorMessage);
  });

  it('Verify if search button returns proper error message, when user gives invalid coordinations.', () => {
    SearchDirection.giveSearchDestinationAndClickButton(searchDestinationsData.incorrectCoordinations.coordinations);
    SearchDirection.verifySearchErrorMessage(searchErrorMessagesData.searchResaultErrorMessage);
  });
})




