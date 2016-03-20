const assign = Object.assign.bind(Object)
const secretarias = []

const registrar = (pattern, secretaria) => {
  secretarias.push({pattern, secretaria})
}

const consultar = (link) => {
  return secretarias
      .filter(({pattern}) => pattern.test(link))
      .map(({secretaria}) => secretaria.consultar(link))
      .reduce(assign, {})
}

module.exports = {consultar, registrar}

registrar(/dfeportal.fazenda.pr.gov.br/, require('./secretarias/parana'))
registrar(/sefaz.rs.gov.br/, require('./secretarias/rs'))
