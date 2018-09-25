module.exports = (page, loginInfo) => {
  page
    .click('@loginButton')
    .api.pause(5000)
  page
    .setValue('@loginEmail', loginInfo.email)
    .setValue('@loginPassword', loginInfo.password)
    .click('@login')
    .api.pause(5000)
  page
  .expect.element('@studentName').text.to.equal(loginInfo.studentName)
}