
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.19.1
 * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
 */
Prisma.prismaVersion = {
  client: "5.19.1",
  engine: "69d742ee20b815d88e17e54db4a2a7a3b30324e3"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.PropertyScalarFieldEnum = {
  id: 'id',
  CodigoCliente: 'CodigoCliente',
  CodigoImovel: 'CodigoImovel',
  TipoImovel: 'TipoImovel',
  SubTipoImovel: 'SubTipoImovel',
  CategoriaImovel: 'CategoriaImovel',
  Cidade: 'Cidade',
  Bairro: 'Bairro',
  CEP: 'CEP',
  PrecoVenda: 'PrecoVenda',
  PrecoLocacao: 'PrecoLocacao',
  PrecoLocacaoTemporada: 'PrecoLocacaoTemporada',
  PrecoCondominio: 'PrecoCondominio',
  AreaUtil: 'AreaUtil',
  AreaTotal: 'AreaTotal',
  QtdDormitorios: 'QtdDormitorios',
  QtdSuites: 'QtdSuites',
  QtdBanheiros: 'QtdBanheiros',
  QtdSalas: 'QtdSalas',
  QtdVagas: 'QtdVagas',
  QtdElevador: 'QtdElevador',
  QtdUnidadesAndar: 'QtdUnidadesAndar',
  QtdAndar: 'QtdAndar',
  AnoConstrucao: 'AnoConstrucao',
  Observacao: 'Observacao',
  titulo: 'titulo',
  TipoOferta: 'TipoOferta',
  AceitaPermuta: 'AceitaPermuta',
  ArCondicionado: 'ArCondicionado',
  Cerca: 'Cerca',
  Churrasqueira: 'Churrasqueira',
  Esgoto: 'Esgoto',
  EstacionamentoRotativo: 'EstacionamentoRotativo',
  EstacionamentoVisitantes: 'EstacionamentoVisitantes',
  Heliponto: 'Heliponto',
  InfraInternet: 'InfraInternet',
  Jardim: 'Jardim',
  Lago: 'Lago',
  Lavoura: 'Lavoura',
  Pasto: 'Pasto',
  Piscina: 'Piscina',
  Playground: 'Playground',
  QuadraTenis: 'QuadraTenis',
  QuadraPoliEsportiva: 'QuadraPoliEsportiva',
  RuaAsfaltada: 'RuaAsfaltada',
  SalaGinastica: 'SalaGinastica',
  SalaoFestas: 'SalaoFestas',
  SalaoJogos: 'SalaoJogos',
  Sauna: 'Sauna',
  Silos: 'Silos',
  Telefone: 'Telefone',
  TVCabo: 'TVCabo',
  Varanda: 'Varanda',
  CasaCaseiro: 'CasaCaseiro',
  EnergiaEletrica: 'EnergiaEletrica',
  Interfone: 'Interfone',
  PocoArtesiano: 'PocoArtesiano',
  Paiol: 'Paiol',
  ProntoMorar: 'ProntoMorar',
  Curral: 'Curral',
  UtilizeFGTS: 'UtilizeFGTS',
  Terraco: 'Terraco',
  Lavabo: 'Lavabo',
  campodefutebol: 'campodefutebol',
  NomeCondominio: 'NomeCondominio'
};

exports.Prisma.PhotoScalarFieldEnum = {
  id: 'id',
  property_id: 'property_id',
  URLArquivo: 'URLArquivo',
  Principal: 'Principal',
  Alterada: 'Alterada'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.PropertyOrderByRelevanceFieldEnum = {
  CodigoCliente: 'CodigoCliente',
  CodigoImovel: 'CodigoImovel',
  TipoImovel: 'TipoImovel',
  SubTipoImovel: 'SubTipoImovel',
  CategoriaImovel: 'CategoriaImovel',
  Cidade: 'Cidade',
  Bairro: 'Bairro',
  CEP: 'CEP',
  Observacao: 'Observacao',
  titulo: 'titulo',
  TipoOferta: 'TipoOferta',
  NomeCondominio: 'NomeCondominio'
};

exports.Prisma.PhotoOrderByRelevanceFieldEnum = {
  URLArquivo: 'URLArquivo'
};


exports.Prisma.ModelName = {
  Property: 'Property',
  Photo: 'Photo'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
