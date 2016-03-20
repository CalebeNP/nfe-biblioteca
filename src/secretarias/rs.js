import iconv from 'iconv-lite'
import {navegar} from '../browser'
import {converterNota} from '../nfce-conversor'

const consultar = link => (
  abrirPagina(getLinkAbas(link))
    .then(extrairHTML)
    .then(converterNota)
)

const getLinkAbas = link => (
  link
    .replace('NFC_2', 'COM_2')
    .replace('NF=', 'NF')
)

const abrirPagina = link => navegar(link, {encoding: 'binary'})

const extrairHTML = window => {
  let body = new Buffer(window.document.documentElement.outerHTML, 'binary')
  let html = iconv.decode(body, 'iso-8859-1')
  return Promise.resolve(html)
}

module.exports = {consultar}
