module.exports = {
  url: 'https://www.lessontracker.io',
  elements: {
    load: 'a[class="header-logo"]',
    loginButton: 'li[class="login"]',
    loginEmail: 'input[placeholder="Enter your email address"]',
    loginPassword: 'input[placeholder="Enter your password"]',
    login: 'button[class="pure-button pure-button-primary large"]',
    studentName: 'div[class="account-name"]',
    footer: 'img[class="footer-icon"]',
    clientsMenu: {
      selector: '(//a[@ui-sref="clients"])[1]',
      locateStrategy: 'xpath'
    },
    newClient: 'button[ui-sref="client_new"]',
    newClientFirstName: '#first_name',
    newClientLastName: '#last_name',
    newClientEmail: '#email',
    newClientPhone: '#contact_number',
    newClientCancel: 'a[class="pure-button large"]',
    newClientNext: 'a[class="pure-button pure-button-highlight large ng-scope"]',
    done: 'button[class="pure-button pure-button-primary large"]',
    newClientContact: 'input[class="pure-u-1 emergency-contact-search ng-pristine ng-untouched ng-valid ng-empty"]',
    newClientContactEmail: {
      selector: '(//input[@class="pure-u-1 ng-pristine ng-untouched ng-valid ng-empty"])[1]',
      locateStrategy: 'xpath'
    },
    newClientContactNumber1: '#contact_number_1',
    newClientContactNumber2: '#contact_number_2',
    newClientHeader: 'h2[class="ng-binding"]',
    clientName: {
      selector: '//div[@class="col primary ng-binding"]',
      locateStrategy: 'xpath'
    },
    editPencil: 'i[class="fa fa-pencil"]',
    billingTab: {
      selector: '//a[text()="Billing"]',
      locateStrategy: 'xpath'
    },
    billToName: 'input[id="name"]',
    billToEmail: 'input[id="email"]',
    billToContactNumber: 'input[id="contact_number"]',
    billToBillingAddress1: 'input[id="address_1"]',
    billToBillingAddress2: 'input[id="address_2"]',
    billToBillingAddress3: 'input[id="address_3"]',
    billToCity: 'input[id="city"]',
    billToState: 'input[id="state"]',
    billToCountry: 'input[id="country"]',
    billToZip: 'input[id="zip"]',
    timetableMenu: {
      selector: '(//a[@ui-sref="timetable"])[1]',
      locateStrategy: 'xpath'
    }, 
    newTimeTableEntry: 'button[ui-sref="timetable_entry_new"]',
    dayOfTheWeek: {
      selector: '//span[text()="Select a day of the week"]',
      locateStrategy: 'xpath'
    },
    startTime: {
      selector: '//span[text()="Enter a start time"]',
      locateStrategy: 'xpath'
    },
    setTime: 'button[ng-click="setTime()"]',
    setDuration: 'button[ng-click="setDuration()"]',
    duration: {
      selector: '//span[text()="Enter duration"]',
      locateStrategy: 'xpath'
    },
    save: {
      selector: '//button[text()="Save"]',
      locateStrategy: 'xpath'
    },
    lessonsMenu: {
      selector: '(//a[@ui-sref="lessons"])[1]',
      locateStrategy: 'xpath'
    }, 
    newLessonEntry: 'button[ui-sref="lesson_new"]',
    lessonDate: {
      selector: '//span[text()="Select a lesson date"]',
      locateStrategy: 'xpath'
    },
    today: {
      selector: '(//button[@class="pure-button pure-button-highlight small"])[1]',
      locateStrategy: 'xpath'
    }
  }
}