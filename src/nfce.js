const assign = Object.assign.bind(Object)
const secretarias = []

const registrar = (pattern, secretaria) => {
  secretarias.push({pattern, secretaria})
}

const consultar = (link) => {
  const consultas = secretarias
      .filter(({pattern}) => pattern.test(link))
      .map(({secretaria}) => secretaria.consultar(link))

  return Promise.all(consultas)
    .then(nfes => nfes.reduce(assign, []))
    .then(([nota = {}]) => nota)
}

module.exports = {consultar, registrar}

registrar(/dfeportal.fazenda.pr.gov.br/, require('./secretarias/parana'))
registrar(/sefaz.rs.gov.br/, require('./secretarias/rs'))
