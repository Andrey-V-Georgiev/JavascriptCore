function logout (context) {
  let url = urlMaker.logoutUrl()
  let auth = support.kinveyAuth()
  let reqObj = reqObjMaker.postObj(url, auth)
  $.ajax(reqObj).then(function (res) {
    notify.showInfo('Logout successful.')
    sessionStorage.clear()
    context.redirect('#/index.html')
  }).catch(function (err) {
    sessionStorage.clear()
    notify.handleError(err)
    context.redirect('#/index.html')
  })
}
