module.exports = (pageObject, date) => {
  let currentMonth = ""
  pageObject.getText('div[class="calendar-title ng-binding"]', result => {currentMonth = result.value})
  while (currentMonth !== date.month) {
    pageObject.click('i[class="fa fa-arrow-right"]')
      .expect.element('div[class="calendar-title ng-binding"]').text.not.to.equal(currentMonth).before(1000)
      .getText('div[class="calendar-title ng-binding"]', result => {currentMonth = result.value})
  }
  pageObject.click(`(//a[contains(@class,"ui-state-default")])[text()="${date.day}"]`)
}
