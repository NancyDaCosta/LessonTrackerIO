module.exports = (page, addTimetable) => {
  page
    .click('@timetableMenu')
    .api.pause(2000)
  page
    .click('@newTimeTableEntry')
    .api.pause(2000)
  page
    .click('@dayOfTheWeek')
    .api.useXpath()
    .click(`//a[text()="${addTimetable.dayOfTheWeek}"]`)
    .waitForElementNotVisible(`//a[text()="${addTimetable.dayOfTheWeek}"]`, 2000)
    .useCss()
  page
    .click('@startTime')
    .api.useXpath()
    .waitForElementVisible(`(//a[@ng-click="setHour('${addTimetable.startHour}')"])[1]`, 2000)
    .click(`(//a[@ng-click="setHour('${addTimetable.startHour}')"])[1]`)
    .click(`(//a[@ng-click="setMinute('${addTimetable.startMinute}')"])[1]`)
    .useCss()
  page
    .click('@setTime')
    .click('@duration')
    .api.useXpath()
    .click(`(//a[@ng-click="setHour('${addTimetable.finishHour}')"])[2]`)
    .click(`(//a[@ng-click="setMinute('${addTimetable.finishMinute}')"])[2]`)
    .useCss()
  page
    .click('@setDuration')
    .click('@save')
}