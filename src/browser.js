import jsdom from 'jsdom'

module.exports.navegar = (link, options) => {
  return new Promise((resolve, reject) => {
    Object.assign(options, {
      url: link,
      features: {
        FetchExternalResources: ['script'],
        ProcessExternalResources: ['script']
      },
      done: (err, window) => err
        ? reject(err)
        : resolve(window)
    })

    jsdom.env(options)
  })
}

