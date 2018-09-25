module.exports = (page, addClient) => {
  page
    .click('@clientsMenu')
    .api.pause(2000)
  page
    .click('@newClient')
    .api.pause(2000)
  page
    .setValue('@newClientFirstName', addClient.clientFirstName)
    .setValue('@newClientLastName', addClient.clientLastName)
    .setValue('@newClientEmail', addClient.clientEmail)
    .setValue('@newClientPhone', addClient.clientPhone)
    .click('@done')
    .api.pause(3000)
  // page
    // .setValue('@newClientContact', addClient.clientContactName)
    // .setValue('@newClientContactEmail', addClient.clientContactEmail)
    // .setValue('@newClientContactNumber1', addClient.clientContactNumber1)
    // .setValue('@newClientContactNumber2', addClient.clientContactNumber2)
    // .click('@done')
    // .api.pause(2000)
  page
    .expect.element('@newClientHeader').text.to.equal(addClient.clientName)
    .before(5000)
}