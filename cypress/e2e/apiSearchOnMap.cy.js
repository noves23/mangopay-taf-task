describe('Verify basic search functionality of Google Maps.', () => {

  //just an example of API test, due to lack off API_KEY 
  it.skip('Retrieves location address based on latitude and longitude.', () => {
    const latitude = 51.20748037341781; 
    const longitude = 16.157240196628603; 
    cy.request({
      method: "GET",
      url: `https://www.google.pl/search?tbm=map?lat=${latitude}&lng=${longitude}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("address");
      expect(response.durations).to.not.be.greaterThan(1000);  
    });
  });

})




