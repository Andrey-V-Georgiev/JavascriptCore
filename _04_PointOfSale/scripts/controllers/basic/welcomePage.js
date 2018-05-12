function welcomePage (context) {
  context.isLogged = support.isLogged()
  let partials = {
    footer: './templates/common/footer.hbs',
    notif: './templates/common/notif.hbs',
  }
  context.loadPartials(partials).then(function () {
    this.partial('./templates/welcomePageView/welcomePage.hbs')
  })
}

