import { searchLocators } from "../locators/locators"
import { SearchDirection } from "../pages/SearchPage";
import { searchDestinationsData } from "../testData/searchDestinations";
import { searchErrorMessagesData } from "../testData/searchErrorMessages";

describe('My First Test', () => {

  beforeEach(() => {
    cy.visit('/maps', {
      // this hook is needed to perform test cases from any local machine, to ensure proper assertion strings
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

  it('User search for Paris city', () => {
    SearchDirection.giveValueForSearch(searchDestinationsData.firstTestCity.city);
    SearchDirection.verifyDestinationDetails(searchDestinationsData.firstTestCity.city);
    SearchDirection.verifyIfDirectionBottomButtonsAreVisible();
  })

  it('Goes to google maps gives start and end point, and chacking destinations details', () => {
    SearchDirection.giveValueForSearch(searchDestinationsData.secondTestCity.city);
    SearchDirection.verifyIfDirectionButtonIsVisible();
    SearchDirection.forceDirectionSearch()
    SearchDirection.giveStartDestination(searchDestinationsData.startDestinationCity.city);
    SearchDirection.verifyIfDirectionTopButtonsVisible()
    SearchDirection.verifyFirstSuggestedRoute()
  });

  it('User search for city by coordinations', () => {
    SearchDirection.giveValueForSearch(searchDestinationsData.correctCoordinationsCity.coordinations);
    //SearchDirection.verifyDestinationDetails(searchDestinationsData.correctCoordinationsCity.city);
    SearchDirection.verifyIfDirectionBottomButtonsAreVisible();
  })

  it('User search for city by postcode', () => {
    SearchDirection.giveValueForSearch(searchDestinationsData.correctPostCodeCity.postcode);
    SearchDirection.verifyDestinationDetails(searchDestinationsData.correctPostCodeCity.city);
    SearchDirection.verifyIfDirectionBottomButtonsAreVisible();
  })

  it('incorrect city name', () => {
    SearchDirection.giveValueForSearch(searchDestinationsData.incorrectCityName.city)
    SearchDirection.verifySearchErrorMessage(searchErrorMessagesData.searchResaultErrorMessage)
  });

  it('incorrect coordinations (out of scope)', () => {
    SearchDirection.giveValueForSearch(searchDestinationsData.incorrectCoordinations.coordinations)
    SearchDirection.verifySearchErrorMessage(searchErrorMessagesData.searchResaultErrorMessage)
  });

  // below just an example of API test, due to lack off API_KEY 
  it.skip("Retrieves location address based on latitude and longitude", () => {
    const latitude = 51.20748037341781; 
    const longitude = 16.157240196628603; 
    cy.request({
      method: "GET",
      url: `https://www.google.pl/search?tbm=map?lat=${latitude}&lng=${longitude}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("address");
    });
  });

})




