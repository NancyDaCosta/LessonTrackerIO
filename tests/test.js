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
    //Running Automated Test for LT-2
    testData.validLogin.forEach(test => {
      login(lessonTracker, test)
    })
  },
  // 'Add Client': browser => {
  //   //Running Automated Test for LT-5
  //   testData.validClients.forEach(test => {
  //     addClient(lessonTracker, test)
  //   })
  // },
  'Add Billing Info': browser => {
    //Running Automated Test for LT-9
    testData.validClients.forEach(test => {
      console.log(test)
      addBillingInfo(lessonTracker, test)
    })   
  },
  // 'Add Timetable Entry': browser => {
  //   //Running Automated Test for LT-6
  //   testData.timeTables.forEach(test => {
  //     addTimetable(lessonTracker, test)
  //   })
  // },
  // 'Add Lesson': browser => {
  //   //Running Automated Test for LT-7
  //   testData.lessons.forEach(test => {
  //     addLessons(lessonTracker, test)
  //   })
  // },
  after: browser => {
    browser.end()
  }
}