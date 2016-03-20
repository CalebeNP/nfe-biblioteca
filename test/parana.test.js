import {expect} from 'chai'
import {consultar} from '../src/secretarias/parana'

describe('NFCe Parana @noci', function () {
  describe('.consultar', function () {
    vcr(it('converte NFCe para JSON', async () => {
      const link = 'http://www.dfeportal.fazenda.pr.gov.br/dfe-portal/rest/servico/consultaNFCe?chNFe=41160214953750000192650020000777871331742869&nVersao=100&tpAmb=1&dhEmi=323031362d30322d32315430373a33383a35302d30333a3030&vNF=135.72&vICMS=0.00&digVal=36397577774536594c6c5233547a774a4c7431764273496634636b3d&cIdToken=000001&cHashQRCode=940323cec1085f246de3f87b7b069556cd58aae7'
      const nota = await consultar(link)
      expect(nota).to.eql(NOTA)
    }))
  })
})

const NOTA =
  {
    'cabecalho': {
      'modelo': '65',
      'serie': '2',
      'numero': '77787',
      'dataEmissao': '21/02/2016 07:38:50-03:00',
      'dataEntradaSaida': '',
      'total': '135,72'
    },
    'total': '',
    'dataCriacao': '',
    'emitente': {
      'nome': '',
      'razaoSocial': 'AUTO POSTO PARANA LTDA',
      'cnpj': '14.953.750/0001-92',
      'rua': 'ITATIAIA, 320 ',
      'bairro': 'PORTAO',
      'cep': '81070-100',
      'cidade': '4106902 - Curitiba',
      'telefone': '(41)9212-6810',
      'estado': 'PR'
    },
    'produtos': [
      {
        'descricao': 'AGUA MINERAL FONT LIFE S GAS',
        'quantidade': '2,0000',
        'unidade': 'un',
        'preco': '6,00',
        'codigo': '7898912374011',
        'ncm': '22011000',
        'cest': '22011000',
        'cfop': '5405',
        'eanComercial': '',
        'unidadeComercial': '',
        'quantidadeComercial': ''
      },
      {
        'descricao': 'BOMBOM FERRERO ROCHER 37,5G C',
        'quantidade': '1,0000',
        'unidade': 'un',
        'preco': '3,99'
      },
      {
        'descricao': 'GASOLINA COMUM',
        'quantidade': '36,9910',
        'unidade': 'L',
        'preco': '125,73'
      }
    ]
  }
