#!/usr/bin/env node

import { consultar } from './nfce'

const url = process.argv.pop()

if (!/\d{44}/.test(url)) {
  throw new Error('URL Inválida')
}

consultar(url)
  .catch(err => {
    throw new Error(err)
  })
  .then(nota => {
    console.log(JSON.stringify(nota, null, 4))
  })
