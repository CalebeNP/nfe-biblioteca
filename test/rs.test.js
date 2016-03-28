import {expect} from 'chai'
import {consultar} from '../src/secretarias/rs'

describe('NFCe Rio Grande do Sul @noci', function () {
  describe('.consultar', function () {
    vcr(it('converte NFCe para JSON', async () => {
      const link = 'https://www.sefaz.rs.gov.br/ASP/AAE_ROOT/NFE/SAT-WEB-NFE-NFC_2.asp?chaveNFe=43160193015006003210651190000107801596132885&HML=false&NF=90B16F105'
      const nota = await consultar(link)
      expect(nota).to.eql(NOTA)
    }))
  })
})

const NOTA =
  {
    'cabecalho': {
      'modelo': '65',
      'serie': '119',
      'numero': '10780',
      'dataEmissao': new Date('2016-01-27T04:00:01.000Z'),
      'dataEntradaSaida': new Date(''),
      'total': '93,46'
    },
    'emitente': {
      'nome': '',
      'razaoSocial': 'COMPANHIA ZAFFARI COMÉRCIO E INDÚSTRIA',
      'cnpj': '93.015.006/0032-10',
      'rua': 'AVENIDA IPIRANGA, 5200 ',
      'bairro': 'AZENHA',
      'cep': '90610-000',
      'cidade': '4314902 - PORTO ALEGRE',
      'telefone': '(51)3315-5111',
      'estado': 'RS'
    },
    'produtos': [
      {
        'descricao': 'AG MINERAL AGUA D PEDRA S/GAS 5L',
        'quantidade': '1,0000',
        'unidade': 'UN',
        'preco': '4,95',
        'codigo': '789643610058106 - Operação Tributável (alíquota zero)06 - Operação Tributável (alíquota zero)',
        'ncm': '22011000',
        'cest': '22011000',
        'cfop': '5405',
        'eanComercial': '',
        'unidadeComercial': '',
        'quantidadeComercial': ''
      },
      {
        'descricao': 'MELANCIA PEDACOS',
        'quantidade': '3,0270',
        'unidade': 'KG',
        'preco': '8,96',
        'codigo': '200772000000406 - Operação Tributável (alíquota zero)06 - Operação Tributável (alíquota zero)',
        'ncm': '08051000',
        'cest': '08051000',
        'cfop': '5102',
        'eanComercial': '',
        'unidadeComercial': '',
        'quantidadeComercial': ''
      },
      {
        'descricao': 'MORT DEFUMADA SADIA AT',
        'quantidade': '0,1181',
        'unidade': 'KG',
        'preco': '2,35',
        'codigo': '000002013232306 - Operação Tributável (alíquota zero)06 - Operação Tributável (alíquota zero)',
        'ncm': '07099990',
        'cest': '07099990',
        'cfop': '5102',
        'eanComercial': '',
        'unidadeComercial': '',
        'quantidadeComercial': ''
      },
      {
        'descricao': 'LARANJA PERA *V*',
        'quantidade': '0,7946',
        'unidade': 'KG',
        'preco': '2,05',
        'codigo': '789830587016801 - Operação Tributável (base de cálculo = valor da operação alíquota normal (cumulativo/não cumulativo))01 - Operação Tributável (base de cálculo = valor da operação alíquota normal (cumulativo/não cumulativo))',
        'ncm': '19053100',
        'cest': '19053100',
        'cfop': '54051,65007,6000',
        'eanComercial': '',
        'unidadeComercial': '',
        'quantidadeComercial': ''
      },
      {
        'descricao': 'ACUCAR MASC ORG SAUDE TERRA 500G',
        'quantidade': '1,0000',
        'unidade': 'UN',
        'preco': '5,98',
        'codigo': '208969000000006 - Operação Tributável (alíquota zero)06 - Operação Tributável (alíquota zero)',
        'ncm': '19022000',
        'cest': '19022000',
        'cfop': '5102',
        'eanComercial': '2,29',
        'unidadeComercial': '18,0000',
        'quantidadeComercial': '0,41'
      },
      {
        'descricao': 'ALFACE MIMOSA ROXA',
        'quantidade': '1,0000',
        'unidade': 'PC',
        'preco': '2,25'
      },
      {
        'descricao': 'RUCULA HIDROPONICA HIDROP',
        'quantidade': '1,0000',
        'unidade': 'UN',
        'preco': '2,85'
      },
      {
        'descricao': 'BISC PIRAQUE AGUA GERGELIM 200G',
        'quantidade': '1,0000',
        'unidade': 'UN',
        'preco': '3,99'
      },
      {
        'descricao': 'COOKIES BAUDUCCO ORIGINAL 110G',
        'quantidade': '1,0000',
        'unidade': 'UN',
        'preco': '2,95'
      },
      {
        'descricao': 'BISC D.SABOR POLVILHO 200G',
        'quantidade': '1,0000',
        'unidade': 'UN',
        'preco': '4,98'
      },
      {
        'descricao': 'PAO CACETINHO ZAF',
        'quantidade': '0,3734',
        'unidade': 'KG',
        'preco': '2,98'
      },
      {
        'descricao': 'SAB LIQ PROTEX VIT E REFIL 200ML',
        'quantidade': '1,0000',
        'unidade': 'UN',
        'preco': '6,98'
      },
      {
        'descricao': 'SONHO CREME ZAF',
        'quantidade': '0,1579',
        'unidade': 'KG',
        'preco': '2,29'
      },
      {
        'descricao': 'MINI VASILHA GIRATOR KS122 S-BRA',
        'quantidade': '1,0000',
        'unidade': 'UN',
        'preco': '39,90'
      }
    ]
  }

