var login = require('../test-assets/login')
var addClient = require('../test-assets/addClient')
var addBillingInfo = require('../test-assets/addBillingInfo')
var addTimetable = require('../test-assets/addTimetable')
var addLessons = require('../test-assets/addLessons')
var testData = require('../test-assets/testData')
var lessonTracker = ''

module.exports = {
  beforeEach: browser => {
    lessonTracker = browser.page.lessonTracker()
    lessonTracker.navigate()
    // .api.pause()
  },
  'Does this load?': browser => {
    lessonTracker
      .waitForElementVisible('@load', 1000)
  },
  'Signing into account': browser => {
    //https://dmutah.atlassian.net/browse/LT-2
    testData.validLogin.forEach(test => {
      login(lessonTracker, test)
    })
  },
  'Add Client and Billing Info': browser => {
    testData.validClients.forEach(test => {
    //https://dmutah.atlassian.net/browse/LT-5
      addClient(lessonTracker, test)
    //https://dmutah.atlassian.net/browse/LT-9
      addBillingInfo(lessonTracker, test)
    })
  },
  'Add Timetable Entry': browser => {
    //https://dmutah.atlassian.net/browse/LT-6
    testData.timeTables.forEach(test => {
      addTimetable(lessonTracker, test)
    })
  },
  'Add Lesson': browser => {
    //https://dmutah.atlassian.net/browse/LT-7
    testData.lessons.forEach(date => {
      addLessons(lessonTracker, date)
    })
  },
  after: browser => {
    browser.end()
  }
}