module.exports = (page, date) => {
  page
    .click('@lessonsMenu')
    .api.pause(2000)
  page
    .click('@newLessonEntry')
    .api.pause(2000)
  page
    .waitForElementVisible('@lessonDate', 5000)
    .click('@lessonDate')
    .click('@today')
    .click('@startTime')
    .api.useXpath()
    .waitForElementVisible(`(//a[@ng-click="setHour('${date.startHour}')"])[1]`, 2000)
    .click(`(//a[@ng-click="setHour('${date.startHour}')"])[1]`)
    .click(`(//a[@ng-click="setMinute('${date.startMinute}')"])[1]`)
    .useCss()
  page
    .click('@setTime')
    .api.pause(2000)
  page
    .click('@duration')
    .api.useXpath()
    .click(`(//a[@ng-click="setHour('${date.finishHour}')"])[2]`)
    .click(`(//a[@ng-click="setMinute('${date.finishMinute}')"])[2]`)
    .useCss()
  page
    .click('@setDuration')
    .click('@save')
}