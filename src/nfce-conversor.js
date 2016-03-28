import moment from 'moment'
import cheerio from 'cheerio'

export var converterNota = html => {
  let documento = cheerio.load(html, { normalizeWhitespace: true })
  return {
    cabecalho: extrairCabecalho(documento),
    emitente: extrairEmitente(documento),
    produtos: extrairProdutos(documento)
  }
}

const extrairEmitente = (html) => {
  return {
    nome: html('#Emitente tr:nth-child(1) > td:nth-child(2) > span').text(),
    razaoSocial: html('#Emitente tr:nth-child(1) > td:nth-child(1) > span').text(),
    cnpj: html('#Emitente tr:nth-child(2) > td:nth-child(1) > span').text(),
    rua: html('#Emitente tr:nth-child(2) > td:nth-child(2) > span').text(),
    bairro: html('#Emitente tr:nth-child(3) > td:nth-child(1) > span').text(),
    cep: html('#Emitente tr:nth-child(3) > td:nth-child(2) > span').text(),
    cidade: html('#Emitente tr:nth-child(4) > td:nth-child(1) > span').text(),
    telefone: html('#Emitente tr:nth-child(4) > td:nth-child(2) > span').text(),
    estado: html('#Emitente tr:nth-child(5) > td:nth-child(1) > span').text()
  }
}

const extrairCabecalho = documento => {
  const campos = documento('#NFe > fieldset:nth-child(1) > table tr > td')
  const campo = idx => campos.eq(idx).find('span').text()
  const toDate = (val) => moment(val, 'DD/MM/YYYY HH:mm:ss-HH:mm').toDate()

  return {
    modelo: campo(0),
    serie: campo(1),
    numero: campo(2),
    dataEmissao: toDate(campo(3)),
    dataEntradaSaida: toDate(campo(4)),
    total: campo(5)
  }
}

const extrairProdutos = (html) => {
  const produtos = html('#Prod .toggle.box').map((i, produto) => {
    return {
      descricao: html('.fixo-prod-serv-descricao > span', produto).text(),
      quantidade: html('.fixo-prod-serv-qtd > span', produto).text(),
      unidade: html('.fixo-prod-serv-uc > span', produto).text(),
      preco: html('.fixo-prod-serv-vb > span', produto).text()
    }
  }).get()

  const detalhes = html('#Prod .toggable.box:nth-child(3n)').map((i, produto) => {
    return {
      codigo: html('table:nth-child(1) tr:nth-child(1) > td:nth-child(1) > span', produto).text(),
      ncm: html('table:nth-child(1) tr:nth-child(1) > td:nth-child(2) > span', produto).text(),
      cest: html('table:nth-child(1) tr:nth-child(1) > td:nth-child(2) > span', produto).text(),
      cfop: html('table:nth-child(1) tr:nth-child(2) > td:nth-child(2) > span', produto).text(),
      eanComercial: html('table:nth-child(2) tr:nth-child(2) > td:nth-child(1) > span', produto).text(),
      unidadeComercial: html('table:nth-child(2) tr:nth-child(2) > td:nth-child(2) > span', produto).text(),
      quantidadeComercial: html('table:nth-child(2) tr:nth-child(2) > td:nth-child(3) > span', produto).text()
    }
  }).get()

  return produtos.map((produto, index) => Object.assign({}, produto, detalhes[index]))
}
