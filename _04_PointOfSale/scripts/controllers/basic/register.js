function register (context) {

  let url = urlMaker.registrationUrl()
  let auth = support.basicAuth()

  let username = context.params.username
  let password = context.params.password
  let repeatPass = context.params.passwordConfirm

  if (!/[\w]{5,}/.test(username)) {
    notify.showError('Username must be 5 or more letters long!')
  } else if (password.length === 0) {
    notify.showError('Password can not be empty!')
  } else if (password !== repeatPass) {
    notify.showError('Password and repeated password must match!')
  } else {

    let data = JSON.stringify({username: username, password: password})
    let requestObj = reqObjMaker.postObj(url, auth, data)
    $.ajax(requestObj)
      .then(function (res) {
        support.saveSession(res)
        notify.showInfo('User registration successful.')
        context.redirect('#/editor')
      })
      .catch(function (err) {
        notify.handleError(err)
        context.redirect('#/editor')
      })

  }
}
