module.exports = (page, addLessons) => {
  page
    .click('@lessonsMenu')
    .api.pause(2000)
  page
    .click('@newLessonEntry')
    .api.pause(2000)
  page
    .click('@lessonDate')
    
    // .api.useXpath()
    //NEED HELP WITH DATE PICKER!!!
    // .click(`//a[text()="${addTimetable.dayOfTheWeek}"]`)
    // .waitForElementNotVisible(`//a[text()="${addTimetable.dayOfTheWeek}"]`, 2000)
    // .useCss()
  // page
    .click('@startTime')
    .api.useXpath()
    .waitForElementVisible(`(//a[@ng-click="setHour('${addLessons.startHour}')"])[1]`, 2000)
    .click(`(//a[@ng-click="setHour('${addLessons.startHour}')"])[1]`)
    .click(`(//a[@ng-click="setMinute('${addLessons.startMinute}')"])[1]`)
    .useCss()
  page
    .click('@setTime')
    .click('@duration')
    .api.useXpath()
    .click(`(//a[@ng-click="setHour('${addLessons.finishHour}')"])[2]`)
    .click(`(//a[@ng-click="setMinute('${addLessons.finishMinute}')"])[2]`)
    .useCss()
  page
    .click('@setDuration')
    .click('@save')
}