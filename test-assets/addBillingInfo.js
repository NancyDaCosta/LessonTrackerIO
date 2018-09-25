module.exports = (page, addBillingInfo, clientName) => {
  page
    .click('@clientsMenu')
    .api.pause(2000)
  page
    .api.useXpath()
  page.waitForElementPresent('//div[text()="' + addBillingInfo.clientName + '"]', 2000)
    .click(`//div[text()="${addBillingInfo.clientName}"]`)
    .api.useCss()
    .pause(2000)
  page
    .click('@editPencil')
    .api.pause(1000)
  page
    .click('@billingTab')
    .api.pause(1000)
  page
    .setValue('@billToName', addBillingInfo.billToName)
    .setValue('@billToEmail', addBillingInfo.billToEmail)
    .setValue('@billToContactNumber', addBillingInfo.billToContactNumber)
    .setValue('@billToBillingAddress1', addBillingInfo.billToBillingAddress1)
    .setValue('@billToBillingAddress2', addBillingInfo.billToBillingAddress2)
    .setValue('@billToBillingAddress3', addBillingInfo.billToBillingAddress3)
    .setValue('@billToCity', addBillingInfo.billToCity)
    .setValue('@billToState', addBillingInfo.billToState)
    .setValue('@billToCountry', addBillingInfo.billToCountry)
    .setValue('@billToZip', addBillingInfo.billToZip)
    .api.pause(10000)
  page
    .click('@done')
}