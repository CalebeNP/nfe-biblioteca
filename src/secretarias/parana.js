import {converterNota} from '../nfce-conversor'
import {navegar} from '../browser'
import {createCookieJar} from 'jsdom'

const consultar = (link) => {
  const jar = createCookieJar()

  return abrirPagina(link, jar)
    .then(window => abrirNotaCompleta(window, jar))
    .then(window => window.document.documentElement.outerHTML)
    .then(converterNota)
}

const abrirPagina = (link, cookieJar) => navegar(link, {cookieJar})

const abrirNotaCompleta = (window, jar) => {
  return new Promise((resolve, reject) => {
    window.open = (link) => (
      abrirPagina(`${window.location.protocol}${link}`, jar).then(resolve, reject)
    )
    window.consultaPorAbas()
  })
}

module.exports = {consultar}

