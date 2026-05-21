
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Obreiros
 * 
 */
export type Obreiros = $Result.DefaultSelection<Prisma.$ObreirosPayload>
/**
 * Model ObreirosNaCongregacao
 * 
 */
export type ObreirosNaCongregacao = $Result.DefaultSelection<Prisma.$ObreirosNaCongregacaoPayload>
/**
 * Model Congregacao
 * 
 */
export type Congregacao = $Result.DefaultSelection<Prisma.$CongregacaoPayload>
/**
 * Model Eventos
 * 
 */
export type Eventos = $Result.DefaultSelection<Prisma.$EventosPayload>
/**
 * Model Lives
 * 
 */
export type Lives = $Result.DefaultSelection<Prisma.$LivesPayload>
/**
 * Model Galeria
 * 
 */
export type Galeria = $Result.DefaultSelection<Prisma.$GaleriaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Obreiros
 * const obreiros = await prisma.obreiros.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Obreiros
   * const obreiros = await prisma.obreiros.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.obreiros`: Exposes CRUD operations for the **Obreiros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Obreiros
    * const obreiros = await prisma.obreiros.findMany()
    * ```
    */
  get obreiros(): Prisma.ObreirosDelegate<ExtArgs>;

  /**
   * `prisma.obreirosNaCongregacao`: Exposes CRUD operations for the **ObreirosNaCongregacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ObreirosNaCongregacaos
    * const obreirosNaCongregacaos = await prisma.obreirosNaCongregacao.findMany()
    * ```
    */
  get obreirosNaCongregacao(): Prisma.ObreirosNaCongregacaoDelegate<ExtArgs>;

  /**
   * `prisma.congregacao`: Exposes CRUD operations for the **Congregacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Congregacaos
    * const congregacaos = await prisma.congregacao.findMany()
    * ```
    */
  get congregacao(): Prisma.CongregacaoDelegate<ExtArgs>;

  /**
   * `prisma.eventos`: Exposes CRUD operations for the **Eventos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.eventos.findMany()
    * ```
    */
  get eventos(): Prisma.EventosDelegate<ExtArgs>;

  /**
   * `prisma.lives`: Exposes CRUD operations for the **Lives** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lives
    * const lives = await prisma.lives.findMany()
    * ```
    */
  get lives(): Prisma.LivesDelegate<ExtArgs>;

  /**
   * `prisma.galeria`: Exposes CRUD operations for the **Galeria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galerias
    * const galerias = await prisma.galeria.findMany()
    * ```
    */
  get galeria(): Prisma.GaleriaDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Obreiros: 'Obreiros',
    ObreirosNaCongregacao: 'ObreirosNaCongregacao',
    Congregacao: 'Congregacao',
    Eventos: 'Eventos',
    Lives: 'Lives',
    Galeria: 'Galeria'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "obreiros" | "obreirosNaCongregacao" | "congregacao" | "eventos" | "lives" | "galeria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Obreiros: {
        payload: Prisma.$ObreirosPayload<ExtArgs>
        fields: Prisma.ObreirosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObreirosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObreirosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosPayload>
          }
          findFirst: {
            args: Prisma.ObreirosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObreirosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosPayload>
          }
          findMany: {
            args: Prisma.ObreirosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosPayload>[]
          }
          create: {
            args: Prisma.ObreirosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosPayload>
          }
          createMany: {
            args: Prisma.ObreirosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ObreirosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosPayload>
          }
          update: {
            args: Prisma.ObreirosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosPayload>
          }
          deleteMany: {
            args: Prisma.ObreirosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObreirosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ObreirosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosPayload>
          }
          aggregate: {
            args: Prisma.ObreirosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObreiros>
          }
          groupBy: {
            args: Prisma.ObreirosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObreirosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObreirosCountArgs<ExtArgs>
            result: $Utils.Optional<ObreirosCountAggregateOutputType> | number
          }
        }
      }
      ObreirosNaCongregacao: {
        payload: Prisma.$ObreirosNaCongregacaoPayload<ExtArgs>
        fields: Prisma.ObreirosNaCongregacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObreirosNaCongregacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosNaCongregacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObreirosNaCongregacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosNaCongregacaoPayload>
          }
          findFirst: {
            args: Prisma.ObreirosNaCongregacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosNaCongregacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObreirosNaCongregacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosNaCongregacaoPayload>
          }
          findMany: {
            args: Prisma.ObreirosNaCongregacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosNaCongregacaoPayload>[]
          }
          create: {
            args: Prisma.ObreirosNaCongregacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosNaCongregacaoPayload>
          }
          createMany: {
            args: Prisma.ObreirosNaCongregacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ObreirosNaCongregacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosNaCongregacaoPayload>
          }
          update: {
            args: Prisma.ObreirosNaCongregacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosNaCongregacaoPayload>
          }
          deleteMany: {
            args: Prisma.ObreirosNaCongregacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObreirosNaCongregacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ObreirosNaCongregacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreirosNaCongregacaoPayload>
          }
          aggregate: {
            args: Prisma.ObreirosNaCongregacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObreirosNaCongregacao>
          }
          groupBy: {
            args: Prisma.ObreirosNaCongregacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObreirosNaCongregacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObreirosNaCongregacaoCountArgs<ExtArgs>
            result: $Utils.Optional<ObreirosNaCongregacaoCountAggregateOutputType> | number
          }
        }
      }
      Congregacao: {
        payload: Prisma.$CongregacaoPayload<ExtArgs>
        fields: Prisma.CongregacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CongregacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CongregacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregacaoPayload>
          }
          findFirst: {
            args: Prisma.CongregacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CongregacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregacaoPayload>
          }
          findMany: {
            args: Prisma.CongregacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregacaoPayload>[]
          }
          create: {
            args: Prisma.CongregacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregacaoPayload>
          }
          createMany: {
            args: Prisma.CongregacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CongregacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregacaoPayload>
          }
          update: {
            args: Prisma.CongregacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregacaoPayload>
          }
          deleteMany: {
            args: Prisma.CongregacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CongregacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CongregacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregacaoPayload>
          }
          aggregate: {
            args: Prisma.CongregacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCongregacao>
          }
          groupBy: {
            args: Prisma.CongregacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CongregacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CongregacaoCountArgs<ExtArgs>
            result: $Utils.Optional<CongregacaoCountAggregateOutputType> | number
          }
        }
      }
      Eventos: {
        payload: Prisma.$EventosPayload<ExtArgs>
        fields: Prisma.EventosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          findFirst: {
            args: Prisma.EventosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          findMany: {
            args: Prisma.EventosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>[]
          }
          create: {
            args: Prisma.EventosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          createMany: {
            args: Prisma.EventosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          update: {
            args: Prisma.EventosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          deleteMany: {
            args: Prisma.EventosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          aggregate: {
            args: Prisma.EventosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventos>
          }
          groupBy: {
            args: Prisma.EventosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventosGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventosCountArgs<ExtArgs>
            result: $Utils.Optional<EventosCountAggregateOutputType> | number
          }
        }
      }
      Lives: {
        payload: Prisma.$LivesPayload<ExtArgs>
        fields: Prisma.LivesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LivesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LivesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivesPayload>
          }
          findFirst: {
            args: Prisma.LivesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LivesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivesPayload>
          }
          findMany: {
            args: Prisma.LivesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivesPayload>[]
          }
          create: {
            args: Prisma.LivesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivesPayload>
          }
          createMany: {
            args: Prisma.LivesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LivesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivesPayload>
          }
          update: {
            args: Prisma.LivesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivesPayload>
          }
          deleteMany: {
            args: Prisma.LivesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LivesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LivesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivesPayload>
          }
          aggregate: {
            args: Prisma.LivesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLives>
          }
          groupBy: {
            args: Prisma.LivesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LivesCountArgs<ExtArgs>
            result: $Utils.Optional<LivesCountAggregateOutputType> | number
          }
        }
      }
      Galeria: {
        payload: Prisma.$GaleriaPayload<ExtArgs>
        fields: Prisma.GaleriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GaleriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GaleriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload>
          }
          findFirst: {
            args: Prisma.GaleriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GaleriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload>
          }
          findMany: {
            args: Prisma.GaleriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload>[]
          }
          create: {
            args: Prisma.GaleriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload>
          }
          createMany: {
            args: Prisma.GaleriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GaleriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload>
          }
          update: {
            args: Prisma.GaleriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload>
          }
          deleteMany: {
            args: Prisma.GaleriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GaleriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GaleriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload>
          }
          aggregate: {
            args: Prisma.GaleriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGaleria>
          }
          groupBy: {
            args: Prisma.GaleriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<GaleriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.GaleriaCountArgs<ExtArgs>
            result: $Utils.Optional<GaleriaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ObreirosCountOutputType
   */

  export type ObreirosCountOutputType = {
    Congregacao: number
  }

  export type ObreirosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Congregacao?: boolean | ObreirosCountOutputTypeCountCongregacaoArgs
  }

  // Custom InputTypes
  /**
   * ObreirosCountOutputType without action
   */
  export type ObreirosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObreirosCountOutputType
     */
    select?: ObreirosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObreirosCountOutputType without action
   */
  export type ObreirosCountOutputTypeCountCongregacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObreirosNaCongregacaoWhereInput
  }


  /**
   * Count Type CongregacaoCountOutputType
   */

  export type CongregacaoCountOutputType = {
    Obreiros: number
    Eventos: number
  }

  export type CongregacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Obreiros?: boolean | CongregacaoCountOutputTypeCountObreirosArgs
    Eventos?: boolean | CongregacaoCountOutputTypeCountEventosArgs
  }

  // Custom InputTypes
  /**
   * CongregacaoCountOutputType without action
   */
  export type CongregacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CongregacaoCountOutputType
     */
    select?: CongregacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CongregacaoCountOutputType without action
   */
  export type CongregacaoCountOutputTypeCountObreirosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObreirosNaCongregacaoWhereInput
  }

  /**
   * CongregacaoCountOutputType without action
   */
  export type CongregacaoCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Obreiros
   */

  export type AggregateObreiros = {
    _count: ObreirosCountAggregateOutputType | null
    _min: ObreirosMinAggregateOutputType | null
    _max: ObreirosMaxAggregateOutputType | null
  }

  export type ObreirosMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    cargo: string | null
    created_at: Date | null
    status: boolean | null
  }

  export type ObreirosMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    cargo: string | null
    created_at: Date | null
    status: boolean | null
  }

  export type ObreirosCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    cargo: number
    created_at: number
    status: number
    _all: number
  }


  export type ObreirosMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    cargo?: true
    created_at?: true
    status?: true
  }

  export type ObreirosMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    cargo?: true
    created_at?: true
    status?: true
  }

  export type ObreirosCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    cargo?: true
    created_at?: true
    status?: true
    _all?: true
  }

  export type ObreirosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obreiros to aggregate.
     */
    where?: ObreirosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obreiros to fetch.
     */
    orderBy?: ObreirosOrderByWithRelationInput | ObreirosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObreirosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obreiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obreiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Obreiros
    **/
    _count?: true | ObreirosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObreirosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObreirosMaxAggregateInputType
  }

  export type GetObreirosAggregateType<T extends ObreirosAggregateArgs> = {
        [P in keyof T & keyof AggregateObreiros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObreiros[P]>
      : GetScalarType<T[P], AggregateObreiros[P]>
  }




  export type ObreirosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObreirosWhereInput
    orderBy?: ObreirosOrderByWithAggregationInput | ObreirosOrderByWithAggregationInput[]
    by: ObreirosScalarFieldEnum[] | ObreirosScalarFieldEnum
    having?: ObreirosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObreirosCountAggregateInputType | true
    _min?: ObreirosMinAggregateInputType
    _max?: ObreirosMaxAggregateInputType
  }

  export type ObreirosGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    cargo: string | null
    created_at: Date
    status: boolean
    _count: ObreirosCountAggregateOutputType | null
    _min: ObreirosMinAggregateOutputType | null
    _max: ObreirosMaxAggregateOutputType | null
  }

  type GetObreirosGroupByPayload<T extends ObreirosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObreirosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObreirosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObreirosGroupByOutputType[P]>
            : GetScalarType<T[P], ObreirosGroupByOutputType[P]>
        }
      >
    >


  export type ObreirosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    cargo?: boolean
    created_at?: boolean
    status?: boolean
    Congregacao?: boolean | Obreiros$CongregacaoArgs<ExtArgs>
    _count?: boolean | ObreirosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obreiros"]>


  export type ObreirosSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    cargo?: boolean
    created_at?: boolean
    status?: boolean
  }

  export type ObreirosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Congregacao?: boolean | Obreiros$CongregacaoArgs<ExtArgs>
    _count?: boolean | ObreirosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ObreirosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Obreiros"
    objects: {
      Congregacao: Prisma.$ObreirosNaCongregacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      cargo: string | null
      created_at: Date
      status: boolean
    }, ExtArgs["result"]["obreiros"]>
    composites: {}
  }

  type ObreirosGetPayload<S extends boolean | null | undefined | ObreirosDefaultArgs> = $Result.GetResult<Prisma.$ObreirosPayload, S>

  type ObreirosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ObreirosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ObreirosCountAggregateInputType | true
    }

  export interface ObreirosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Obreiros'], meta: { name: 'Obreiros' } }
    /**
     * Find zero or one Obreiros that matches the filter.
     * @param {ObreirosFindUniqueArgs} args - Arguments to find a Obreiros
     * @example
     * // Get one Obreiros
     * const obreiros = await prisma.obreiros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObreirosFindUniqueArgs>(args: SelectSubset<T, ObreirosFindUniqueArgs<ExtArgs>>): Prisma__ObreirosClient<$Result.GetResult<Prisma.$ObreirosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Obreiros that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ObreirosFindUniqueOrThrowArgs} args - Arguments to find a Obreiros
     * @example
     * // Get one Obreiros
     * const obreiros = await prisma.obreiros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObreirosFindUniqueOrThrowArgs>(args: SelectSubset<T, ObreirosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObreirosClient<$Result.GetResult<Prisma.$ObreirosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Obreiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreirosFindFirstArgs} args - Arguments to find a Obreiros
     * @example
     * // Get one Obreiros
     * const obreiros = await prisma.obreiros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObreirosFindFirstArgs>(args?: SelectSubset<T, ObreirosFindFirstArgs<ExtArgs>>): Prisma__ObreirosClient<$Result.GetResult<Prisma.$ObreirosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Obreiros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreirosFindFirstOrThrowArgs} args - Arguments to find a Obreiros
     * @example
     * // Get one Obreiros
     * const obreiros = await prisma.obreiros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObreirosFindFirstOrThrowArgs>(args?: SelectSubset<T, ObreirosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObreirosClient<$Result.GetResult<Prisma.$ObreirosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Obreiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreirosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Obreiros
     * const obreiros = await prisma.obreiros.findMany()
     * 
     * // Get first 10 Obreiros
     * const obreiros = await prisma.obreiros.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obreirosWithIdOnly = await prisma.obreiros.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObreirosFindManyArgs>(args?: SelectSubset<T, ObreirosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObreirosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Obreiros.
     * @param {ObreirosCreateArgs} args - Arguments to create a Obreiros.
     * @example
     * // Create one Obreiros
     * const Obreiros = await prisma.obreiros.create({
     *   data: {
     *     // ... data to create a Obreiros
     *   }
     * })
     * 
     */
    create<T extends ObreirosCreateArgs>(args: SelectSubset<T, ObreirosCreateArgs<ExtArgs>>): Prisma__ObreirosClient<$Result.GetResult<Prisma.$ObreirosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Obreiros.
     * @param {ObreirosCreateManyArgs} args - Arguments to create many Obreiros.
     * @example
     * // Create many Obreiros
     * const obreiros = await prisma.obreiros.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObreirosCreateManyArgs>(args?: SelectSubset<T, ObreirosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Obreiros.
     * @param {ObreirosDeleteArgs} args - Arguments to delete one Obreiros.
     * @example
     * // Delete one Obreiros
     * const Obreiros = await prisma.obreiros.delete({
     *   where: {
     *     // ... filter to delete one Obreiros
     *   }
     * })
     * 
     */
    delete<T extends ObreirosDeleteArgs>(args: SelectSubset<T, ObreirosDeleteArgs<ExtArgs>>): Prisma__ObreirosClient<$Result.GetResult<Prisma.$ObreirosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Obreiros.
     * @param {ObreirosUpdateArgs} args - Arguments to update one Obreiros.
     * @example
     * // Update one Obreiros
     * const obreiros = await prisma.obreiros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObreirosUpdateArgs>(args: SelectSubset<T, ObreirosUpdateArgs<ExtArgs>>): Prisma__ObreirosClient<$Result.GetResult<Prisma.$ObreirosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Obreiros.
     * @param {ObreirosDeleteManyArgs} args - Arguments to filter Obreiros to delete.
     * @example
     * // Delete a few Obreiros
     * const { count } = await prisma.obreiros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObreirosDeleteManyArgs>(args?: SelectSubset<T, ObreirosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obreiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreirosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Obreiros
     * const obreiros = await prisma.obreiros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObreirosUpdateManyArgs>(args: SelectSubset<T, ObreirosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Obreiros.
     * @param {ObreirosUpsertArgs} args - Arguments to update or create a Obreiros.
     * @example
     * // Update or create a Obreiros
     * const obreiros = await prisma.obreiros.upsert({
     *   create: {
     *     // ... data to create a Obreiros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Obreiros we want to update
     *   }
     * })
     */
    upsert<T extends ObreirosUpsertArgs>(args: SelectSubset<T, ObreirosUpsertArgs<ExtArgs>>): Prisma__ObreirosClient<$Result.GetResult<Prisma.$ObreirosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Obreiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreirosCountArgs} args - Arguments to filter Obreiros to count.
     * @example
     * // Count the number of Obreiros
     * const count = await prisma.obreiros.count({
     *   where: {
     *     // ... the filter for the Obreiros we want to count
     *   }
     * })
    **/
    count<T extends ObreirosCountArgs>(
      args?: Subset<T, ObreirosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObreirosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Obreiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreirosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObreirosAggregateArgs>(args: Subset<T, ObreirosAggregateArgs>): Prisma.PrismaPromise<GetObreirosAggregateType<T>>

    /**
     * Group by Obreiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreirosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObreirosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObreirosGroupByArgs['orderBy'] }
        : { orderBy?: ObreirosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObreirosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObreirosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Obreiros model
   */
  readonly fields: ObreirosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Obreiros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObreirosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Congregacao<T extends Obreiros$CongregacaoArgs<ExtArgs> = {}>(args?: Subset<T, Obreiros$CongregacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObreirosNaCongregacaoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Obreiros model
   */ 
  interface ObreirosFieldRefs {
    readonly id: FieldRef<"Obreiros", 'String'>
    readonly name: FieldRef<"Obreiros", 'String'>
    readonly phone: FieldRef<"Obreiros", 'String'>
    readonly cargo: FieldRef<"Obreiros", 'String'>
    readonly created_at: FieldRef<"Obreiros", 'DateTime'>
    readonly status: FieldRef<"Obreiros", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Obreiros findUnique
   */
  export type ObreirosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obreiros
     */
    select?: ObreirosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosInclude<ExtArgs> | null
    /**
     * Filter, which Obreiros to fetch.
     */
    where: ObreirosWhereUniqueInput
  }

  /**
   * Obreiros findUniqueOrThrow
   */
  export type ObreirosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obreiros
     */
    select?: ObreirosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosInclude<ExtArgs> | null
    /**
     * Filter, which Obreiros to fetch.
     */
    where: ObreirosWhereUniqueInput
  }

  /**
   * Obreiros findFirst
   */
  export type ObreirosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obreiros
     */
    select?: ObreirosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosInclude<ExtArgs> | null
    /**
     * Filter, which Obreiros to fetch.
     */
    where?: ObreirosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obreiros to fetch.
     */
    orderBy?: ObreirosOrderByWithRelationInput | ObreirosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obreiros.
     */
    cursor?: ObreirosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obreiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obreiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obreiros.
     */
    distinct?: ObreirosScalarFieldEnum | ObreirosScalarFieldEnum[]
  }

  /**
   * Obreiros findFirstOrThrow
   */
  export type ObreirosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obreiros
     */
    select?: ObreirosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosInclude<ExtArgs> | null
    /**
     * Filter, which Obreiros to fetch.
     */
    where?: ObreirosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obreiros to fetch.
     */
    orderBy?: ObreirosOrderByWithRelationInput | ObreirosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obreiros.
     */
    cursor?: ObreirosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obreiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obreiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obreiros.
     */
    distinct?: ObreirosScalarFieldEnum | ObreirosScalarFieldEnum[]
  }

  /**
   * Obreiros findMany
   */
  export type ObreirosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obreiros
     */
    select?: ObreirosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosInclude<ExtArgs> | null
    /**
     * Filter, which Obreiros to fetch.
     */
    where?: ObreirosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obreiros to fetch.
     */
    orderBy?: ObreirosOrderByWithRelationInput | ObreirosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Obreiros.
     */
    cursor?: ObreirosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obreiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obreiros.
     */
    skip?: number
    distinct?: ObreirosScalarFieldEnum | ObreirosScalarFieldEnum[]
  }

  /**
   * Obreiros create
   */
  export type ObreirosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obreiros
     */
    select?: ObreirosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosInclude<ExtArgs> | null
    /**
     * The data needed to create a Obreiros.
     */
    data: XOR<ObreirosCreateInput, ObreirosUncheckedCreateInput>
  }

  /**
   * Obreiros createMany
   */
  export type ObreirosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Obreiros.
     */
    data: ObreirosCreateManyInput | ObreirosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Obreiros update
   */
  export type ObreirosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obreiros
     */
    select?: ObreirosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosInclude<ExtArgs> | null
    /**
     * The data needed to update a Obreiros.
     */
    data: XOR<ObreirosUpdateInput, ObreirosUncheckedUpdateInput>
    /**
     * Choose, which Obreiros to update.
     */
    where: ObreirosWhereUniqueInput
  }

  /**
   * Obreiros updateMany
   */
  export type ObreirosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Obreiros.
     */
    data: XOR<ObreirosUpdateManyMutationInput, ObreirosUncheckedUpdateManyInput>
    /**
     * Filter which Obreiros to update
     */
    where?: ObreirosWhereInput
  }

  /**
   * Obreiros upsert
   */
  export type ObreirosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obreiros
     */
    select?: ObreirosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosInclude<ExtArgs> | null
    /**
     * The filter to search for the Obreiros to update in case it exists.
     */
    where: ObreirosWhereUniqueInput
    /**
     * In case the Obreiros found by the `where` argument doesn't exist, create a new Obreiros with this data.
     */
    create: XOR<ObreirosCreateInput, ObreirosUncheckedCreateInput>
    /**
     * In case the Obreiros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObreirosUpdateInput, ObreirosUncheckedUpdateInput>
  }

  /**
   * Obreiros delete
   */
  export type ObreirosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obreiros
     */
    select?: ObreirosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosInclude<ExtArgs> | null
    /**
     * Filter which Obreiros to delete.
     */
    where: ObreirosWhereUniqueInput
  }

  /**
   * Obreiros deleteMany
   */
  export type ObreirosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obreiros to delete
     */
    where?: ObreirosWhereInput
  }

  /**
   * Obreiros.Congregacao
   */
  export type Obreiros$CongregacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObreirosNaCongregacao
     */
    select?: ObreirosNaCongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosNaCongregacaoInclude<ExtArgs> | null
    where?: ObreirosNaCongregacaoWhereInput
    orderBy?: ObreirosNaCongregacaoOrderByWithRelationInput | ObreirosNaCongregacaoOrderByWithRelationInput[]
    cursor?: ObreirosNaCongregacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObreirosNaCongregacaoScalarFieldEnum | ObreirosNaCongregacaoScalarFieldEnum[]
  }

  /**
   * Obreiros without action
   */
  export type ObreirosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obreiros
     */
    select?: ObreirosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosInclude<ExtArgs> | null
  }


  /**
   * Model ObreirosNaCongregacao
   */

  export type AggregateObreirosNaCongregacao = {
    _count: ObreirosNaCongregacaoCountAggregateOutputType | null
    _avg: ObreirosNaCongregacaoAvgAggregateOutputType | null
    _sum: ObreirosNaCongregacaoSumAggregateOutputType | null
    _min: ObreirosNaCongregacaoMinAggregateOutputType | null
    _max: ObreirosNaCongregacaoMaxAggregateOutputType | null
  }

  export type ObreirosNaCongregacaoAvgAggregateOutputType = {
    position: number | null
  }

  export type ObreirosNaCongregacaoSumAggregateOutputType = {
    position: number | null
  }

  export type ObreirosNaCongregacaoMinAggregateOutputType = {
    id: string | null
    obreirosId: string | null
    congregacaoId: string | null
    position: number | null
  }

  export type ObreirosNaCongregacaoMaxAggregateOutputType = {
    id: string | null
    obreirosId: string | null
    congregacaoId: string | null
    position: number | null
  }

  export type ObreirosNaCongregacaoCountAggregateOutputType = {
    id: number
    obreirosId: number
    congregacaoId: number
    position: number
    _all: number
  }


  export type ObreirosNaCongregacaoAvgAggregateInputType = {
    position?: true
  }

  export type ObreirosNaCongregacaoSumAggregateInputType = {
    position?: true
  }

  export type ObreirosNaCongregacaoMinAggregateInputType = {
    id?: true
    obreirosId?: true
    congregacaoId?: true
    position?: true
  }

  export type ObreirosNaCongregacaoMaxAggregateInputType = {
    id?: true
    obreirosId?: true
    congregacaoId?: true
    position?: true
  }

  export type ObreirosNaCongregacaoCountAggregateInputType = {
    id?: true
    obreirosId?: true
    congregacaoId?: true
    position?: true
    _all?: true
  }

  export type ObreirosNaCongregacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObreirosNaCongregacao to aggregate.
     */
    where?: ObreirosNaCongregacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObreirosNaCongregacaos to fetch.
     */
    orderBy?: ObreirosNaCongregacaoOrderByWithRelationInput | ObreirosNaCongregacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObreirosNaCongregacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObreirosNaCongregacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObreirosNaCongregacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ObreirosNaCongregacaos
    **/
    _count?: true | ObreirosNaCongregacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObreirosNaCongregacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObreirosNaCongregacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObreirosNaCongregacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObreirosNaCongregacaoMaxAggregateInputType
  }

  export type GetObreirosNaCongregacaoAggregateType<T extends ObreirosNaCongregacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateObreirosNaCongregacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObreirosNaCongregacao[P]>
      : GetScalarType<T[P], AggregateObreirosNaCongregacao[P]>
  }




  export type ObreirosNaCongregacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObreirosNaCongregacaoWhereInput
    orderBy?: ObreirosNaCongregacaoOrderByWithAggregationInput | ObreirosNaCongregacaoOrderByWithAggregationInput[]
    by: ObreirosNaCongregacaoScalarFieldEnum[] | ObreirosNaCongregacaoScalarFieldEnum
    having?: ObreirosNaCongregacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObreirosNaCongregacaoCountAggregateInputType | true
    _avg?: ObreirosNaCongregacaoAvgAggregateInputType
    _sum?: ObreirosNaCongregacaoSumAggregateInputType
    _min?: ObreirosNaCongregacaoMinAggregateInputType
    _max?: ObreirosNaCongregacaoMaxAggregateInputType
  }

  export type ObreirosNaCongregacaoGroupByOutputType = {
    id: string
    obreirosId: string | null
    congregacaoId: string | null
    position: number | null
    _count: ObreirosNaCongregacaoCountAggregateOutputType | null
    _avg: ObreirosNaCongregacaoAvgAggregateOutputType | null
    _sum: ObreirosNaCongregacaoSumAggregateOutputType | null
    _min: ObreirosNaCongregacaoMinAggregateOutputType | null
    _max: ObreirosNaCongregacaoMaxAggregateOutputType | null
  }

  type GetObreirosNaCongregacaoGroupByPayload<T extends ObreirosNaCongregacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObreirosNaCongregacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObreirosNaCongregacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObreirosNaCongregacaoGroupByOutputType[P]>
            : GetScalarType<T[P], ObreirosNaCongregacaoGroupByOutputType[P]>
        }
      >
    >


  export type ObreirosNaCongregacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    obreirosId?: boolean
    congregacaoId?: boolean
    position?: boolean
    Obreiros?: boolean | ObreirosNaCongregacao$ObreirosArgs<ExtArgs>
    Congregacao?: boolean | ObreirosNaCongregacao$CongregacaoArgs<ExtArgs>
  }, ExtArgs["result"]["obreirosNaCongregacao"]>


  export type ObreirosNaCongregacaoSelectScalar = {
    id?: boolean
    obreirosId?: boolean
    congregacaoId?: boolean
    position?: boolean
  }

  export type ObreirosNaCongregacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Obreiros?: boolean | ObreirosNaCongregacao$ObreirosArgs<ExtArgs>
    Congregacao?: boolean | ObreirosNaCongregacao$CongregacaoArgs<ExtArgs>
  }

  export type $ObreirosNaCongregacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ObreirosNaCongregacao"
    objects: {
      Obreiros: Prisma.$ObreirosPayload<ExtArgs> | null
      Congregacao: Prisma.$CongregacaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      obreirosId: string | null
      congregacaoId: string | null
      position: number | null
    }, ExtArgs["result"]["obreirosNaCongregacao"]>
    composites: {}
  }

  type ObreirosNaCongregacaoGetPayload<S extends boolean | null | undefined | ObreirosNaCongregacaoDefaultArgs> = $Result.GetResult<Prisma.$ObreirosNaCongregacaoPayload, S>

  type ObreirosNaCongregacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ObreirosNaCongregacaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ObreirosNaCongregacaoCountAggregateInputType | true
    }

  export interface ObreirosNaCongregacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ObreirosNaCongregacao'], meta: { name: 'ObreirosNaCongregacao' } }
    /**
     * Find zero or one ObreirosNaCongregacao that matches the filter.
     * @param {ObreirosNaCongregacaoFindUniqueArgs} args - Arguments to find a ObreirosNaCongregacao
     * @example
     * // Get one ObreirosNaCongregacao
     * const obreirosNaCongregacao = await prisma.obreirosNaCongregacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObreirosNaCongregacaoFindUniqueArgs>(args: SelectSubset<T, ObreirosNaCongregacaoFindUniqueArgs<ExtArgs>>): Prisma__ObreirosNaCongregacaoClient<$Result.GetResult<Prisma.$ObreirosNaCongregacaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ObreirosNaCongregacao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ObreirosNaCongregacaoFindUniqueOrThrowArgs} args - Arguments to find a ObreirosNaCongregacao
     * @example
     * // Get one ObreirosNaCongregacao
     * const obreirosNaCongregacao = await prisma.obreirosNaCongregacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObreirosNaCongregacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ObreirosNaCongregacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObreirosNaCongregacaoClient<$Result.GetResult<Prisma.$ObreirosNaCongregacaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ObreirosNaCongregacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreirosNaCongregacaoFindFirstArgs} args - Arguments to find a ObreirosNaCongregacao
     * @example
     * // Get one ObreirosNaCongregacao
     * const obreirosNaCongregacao = await prisma.obreirosNaCongregacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObreirosNaCongregacaoFindFirstArgs>(args?: SelectSubset<T, ObreirosNaCongregacaoFindFirstArgs<ExtArgs>>): Prisma__ObreirosNaCongregacaoClient<$Result.GetResult<Prisma.$ObreirosNaCongregacaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ObreirosNaCongregacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreirosNaCongregacaoFindFirstOrThrowArgs} args - Arguments to find a ObreirosNaCongregacao
     * @example
     * // Get one ObreirosNaCongregacao
     * const obreirosNaCongregacao = await prisma.obreirosNaCongregacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObreirosNaCongregacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ObreirosNaCongregacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObreirosNaCongregacaoClient<$Result.GetResult<Prisma.$ObreirosNaCongregacaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ObreirosNaCongregacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreirosNaCongregacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ObreirosNaCongregacaos
     * const obreirosNaCongregacaos = await prisma.obreirosNaCongregacao.findMany()
     * 
     * // Get first 10 ObreirosNaCongregacaos
     * const obreirosNaCongregacaos = await prisma.obreirosNaCongregacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obreirosNaCongregacaoWithIdOnly = await prisma.obreirosNaCongregacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObreirosNaCongregacaoFindManyArgs>(args?: SelectSubset<T, ObreirosNaCongregacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObreirosNaCongregacaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ObreirosNaCongregacao.
     * @param {ObreirosNaCongregacaoCreateArgs} args - Arguments to create a ObreirosNaCongregacao.
     * @example
     * // Create one ObreirosNaCongregacao
     * const ObreirosNaCongregacao = await prisma.obreirosNaCongregacao.create({
     *   data: {
     *     // ... data to create a ObreirosNaCongregacao
     *   }
     * })
     * 
     */
    create<T extends ObreirosNaCongregacaoCreateArgs>(args: SelectSubset<T, ObreirosNaCongregacaoCreateArgs<ExtArgs>>): Prisma__ObreirosNaCongregacaoClient<$Result.GetResult<Prisma.$ObreirosNaCongregacaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ObreirosNaCongregacaos.
     * @param {ObreirosNaCongregacaoCreateManyArgs} args - Arguments to create many ObreirosNaCongregacaos.
     * @example
     * // Create many ObreirosNaCongregacaos
     * const obreirosNaCongregacao = await prisma.obreirosNaCongregacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObreirosNaCongregacaoCreateManyArgs>(args?: SelectSubset<T, ObreirosNaCongregacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ObreirosNaCongregacao.
     * @param {ObreirosNaCongregacaoDeleteArgs} args - Arguments to delete one ObreirosNaCongregacao.
     * @example
     * // Delete one ObreirosNaCongregacao
     * const ObreirosNaCongregacao = await prisma.obreirosNaCongregacao.delete({
     *   where: {
     *     // ... filter to delete one ObreirosNaCongregacao
     *   }
     * })
     * 
     */
    delete<T extends ObreirosNaCongregacaoDeleteArgs>(args: SelectSubset<T, ObreirosNaCongregacaoDeleteArgs<ExtArgs>>): Prisma__ObreirosNaCongregacaoClient<$Result.GetResult<Prisma.$ObreirosNaCongregacaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ObreirosNaCongregacao.
     * @param {ObreirosNaCongregacaoUpdateArgs} args - Arguments to update one ObreirosNaCongregacao.
     * @example
     * // Update one ObreirosNaCongregacao
     * const obreirosNaCongregacao = await prisma.obreirosNaCongregacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObreirosNaCongregacaoUpdateArgs>(args: SelectSubset<T, ObreirosNaCongregacaoUpdateArgs<ExtArgs>>): Prisma__ObreirosNaCongregacaoClient<$Result.GetResult<Prisma.$ObreirosNaCongregacaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ObreirosNaCongregacaos.
     * @param {ObreirosNaCongregacaoDeleteManyArgs} args - Arguments to filter ObreirosNaCongregacaos to delete.
     * @example
     * // Delete a few ObreirosNaCongregacaos
     * const { count } = await prisma.obreirosNaCongregacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObreirosNaCongregacaoDeleteManyArgs>(args?: SelectSubset<T, ObreirosNaCongregacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObreirosNaCongregacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreirosNaCongregacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ObreirosNaCongregacaos
     * const obreirosNaCongregacao = await prisma.obreirosNaCongregacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObreirosNaCongregacaoUpdateManyArgs>(args: SelectSubset<T, ObreirosNaCongregacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ObreirosNaCongregacao.
     * @param {ObreirosNaCongregacaoUpsertArgs} args - Arguments to update or create a ObreirosNaCongregacao.
     * @example
     * // Update or create a ObreirosNaCongregacao
     * const obreirosNaCongregacao = await prisma.obreirosNaCongregacao.upsert({
     *   create: {
     *     // ... data to create a ObreirosNaCongregacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ObreirosNaCongregacao we want to update
     *   }
     * })
     */
    upsert<T extends ObreirosNaCongregacaoUpsertArgs>(args: SelectSubset<T, ObreirosNaCongregacaoUpsertArgs<ExtArgs>>): Prisma__ObreirosNaCongregacaoClient<$Result.GetResult<Prisma.$ObreirosNaCongregacaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ObreirosNaCongregacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreirosNaCongregacaoCountArgs} args - Arguments to filter ObreirosNaCongregacaos to count.
     * @example
     * // Count the number of ObreirosNaCongregacaos
     * const count = await prisma.obreirosNaCongregacao.count({
     *   where: {
     *     // ... the filter for the ObreirosNaCongregacaos we want to count
     *   }
     * })
    **/
    count<T extends ObreirosNaCongregacaoCountArgs>(
      args?: Subset<T, ObreirosNaCongregacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObreirosNaCongregacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ObreirosNaCongregacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreirosNaCongregacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObreirosNaCongregacaoAggregateArgs>(args: Subset<T, ObreirosNaCongregacaoAggregateArgs>): Prisma.PrismaPromise<GetObreirosNaCongregacaoAggregateType<T>>

    /**
     * Group by ObreirosNaCongregacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreirosNaCongregacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObreirosNaCongregacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObreirosNaCongregacaoGroupByArgs['orderBy'] }
        : { orderBy?: ObreirosNaCongregacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObreirosNaCongregacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObreirosNaCongregacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ObreirosNaCongregacao model
   */
  readonly fields: ObreirosNaCongregacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ObreirosNaCongregacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObreirosNaCongregacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Obreiros<T extends ObreirosNaCongregacao$ObreirosArgs<ExtArgs> = {}>(args?: Subset<T, ObreirosNaCongregacao$ObreirosArgs<ExtArgs>>): Prisma__ObreirosClient<$Result.GetResult<Prisma.$ObreirosPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Congregacao<T extends ObreirosNaCongregacao$CongregacaoArgs<ExtArgs> = {}>(args?: Subset<T, ObreirosNaCongregacao$CongregacaoArgs<ExtArgs>>): Prisma__CongregacaoClient<$Result.GetResult<Prisma.$CongregacaoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ObreirosNaCongregacao model
   */ 
  interface ObreirosNaCongregacaoFieldRefs {
    readonly id: FieldRef<"ObreirosNaCongregacao", 'String'>
    readonly obreirosId: FieldRef<"ObreirosNaCongregacao", 'String'>
    readonly congregacaoId: FieldRef<"ObreirosNaCongregacao", 'String'>
    readonly position: FieldRef<"ObreirosNaCongregacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ObreirosNaCongregacao findUnique
   */
  export type ObreirosNaCongregacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObreirosNaCongregacao
     */
    select?: ObreirosNaCongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosNaCongregacaoInclude<ExtArgs> | null
    /**
     * Filter, which ObreirosNaCongregacao to fetch.
     */
    where: ObreirosNaCongregacaoWhereUniqueInput
  }

  /**
   * ObreirosNaCongregacao findUniqueOrThrow
   */
  export type ObreirosNaCongregacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObreirosNaCongregacao
     */
    select?: ObreirosNaCongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosNaCongregacaoInclude<ExtArgs> | null
    /**
     * Filter, which ObreirosNaCongregacao to fetch.
     */
    where: ObreirosNaCongregacaoWhereUniqueInput
  }

  /**
   * ObreirosNaCongregacao findFirst
   */
  export type ObreirosNaCongregacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObreirosNaCongregacao
     */
    select?: ObreirosNaCongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosNaCongregacaoInclude<ExtArgs> | null
    /**
     * Filter, which ObreirosNaCongregacao to fetch.
     */
    where?: ObreirosNaCongregacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObreirosNaCongregacaos to fetch.
     */
    orderBy?: ObreirosNaCongregacaoOrderByWithRelationInput | ObreirosNaCongregacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObreirosNaCongregacaos.
     */
    cursor?: ObreirosNaCongregacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObreirosNaCongregacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObreirosNaCongregacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObreirosNaCongregacaos.
     */
    distinct?: ObreirosNaCongregacaoScalarFieldEnum | ObreirosNaCongregacaoScalarFieldEnum[]
  }

  /**
   * ObreirosNaCongregacao findFirstOrThrow
   */
  export type ObreirosNaCongregacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObreirosNaCongregacao
     */
    select?: ObreirosNaCongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosNaCongregacaoInclude<ExtArgs> | null
    /**
     * Filter, which ObreirosNaCongregacao to fetch.
     */
    where?: ObreirosNaCongregacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObreirosNaCongregacaos to fetch.
     */
    orderBy?: ObreirosNaCongregacaoOrderByWithRelationInput | ObreirosNaCongregacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObreirosNaCongregacaos.
     */
    cursor?: ObreirosNaCongregacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObreirosNaCongregacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObreirosNaCongregacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObreirosNaCongregacaos.
     */
    distinct?: ObreirosNaCongregacaoScalarFieldEnum | ObreirosNaCongregacaoScalarFieldEnum[]
  }

  /**
   * ObreirosNaCongregacao findMany
   */
  export type ObreirosNaCongregacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObreirosNaCongregacao
     */
    select?: ObreirosNaCongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosNaCongregacaoInclude<ExtArgs> | null
    /**
     * Filter, which ObreirosNaCongregacaos to fetch.
     */
    where?: ObreirosNaCongregacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObreirosNaCongregacaos to fetch.
     */
    orderBy?: ObreirosNaCongregacaoOrderByWithRelationInput | ObreirosNaCongregacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ObreirosNaCongregacaos.
     */
    cursor?: ObreirosNaCongregacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObreirosNaCongregacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObreirosNaCongregacaos.
     */
    skip?: number
    distinct?: ObreirosNaCongregacaoScalarFieldEnum | ObreirosNaCongregacaoScalarFieldEnum[]
  }

  /**
   * ObreirosNaCongregacao create
   */
  export type ObreirosNaCongregacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObreirosNaCongregacao
     */
    select?: ObreirosNaCongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosNaCongregacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a ObreirosNaCongregacao.
     */
    data?: XOR<ObreirosNaCongregacaoCreateInput, ObreirosNaCongregacaoUncheckedCreateInput>
  }

  /**
   * ObreirosNaCongregacao createMany
   */
  export type ObreirosNaCongregacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ObreirosNaCongregacaos.
     */
    data: ObreirosNaCongregacaoCreateManyInput | ObreirosNaCongregacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ObreirosNaCongregacao update
   */
  export type ObreirosNaCongregacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObreirosNaCongregacao
     */
    select?: ObreirosNaCongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosNaCongregacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a ObreirosNaCongregacao.
     */
    data: XOR<ObreirosNaCongregacaoUpdateInput, ObreirosNaCongregacaoUncheckedUpdateInput>
    /**
     * Choose, which ObreirosNaCongregacao to update.
     */
    where: ObreirosNaCongregacaoWhereUniqueInput
  }

  /**
   * ObreirosNaCongregacao updateMany
   */
  export type ObreirosNaCongregacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ObreirosNaCongregacaos.
     */
    data: XOR<ObreirosNaCongregacaoUpdateManyMutationInput, ObreirosNaCongregacaoUncheckedUpdateManyInput>
    /**
     * Filter which ObreirosNaCongregacaos to update
     */
    where?: ObreirosNaCongregacaoWhereInput
  }

  /**
   * ObreirosNaCongregacao upsert
   */
  export type ObreirosNaCongregacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObreirosNaCongregacao
     */
    select?: ObreirosNaCongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosNaCongregacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the ObreirosNaCongregacao to update in case it exists.
     */
    where: ObreirosNaCongregacaoWhereUniqueInput
    /**
     * In case the ObreirosNaCongregacao found by the `where` argument doesn't exist, create a new ObreirosNaCongregacao with this data.
     */
    create: XOR<ObreirosNaCongregacaoCreateInput, ObreirosNaCongregacaoUncheckedCreateInput>
    /**
     * In case the ObreirosNaCongregacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObreirosNaCongregacaoUpdateInput, ObreirosNaCongregacaoUncheckedUpdateInput>
  }

  /**
   * ObreirosNaCongregacao delete
   */
  export type ObreirosNaCongregacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObreirosNaCongregacao
     */
    select?: ObreirosNaCongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosNaCongregacaoInclude<ExtArgs> | null
    /**
     * Filter which ObreirosNaCongregacao to delete.
     */
    where: ObreirosNaCongregacaoWhereUniqueInput
  }

  /**
   * ObreirosNaCongregacao deleteMany
   */
  export type ObreirosNaCongregacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObreirosNaCongregacaos to delete
     */
    where?: ObreirosNaCongregacaoWhereInput
  }

  /**
   * ObreirosNaCongregacao.Obreiros
   */
  export type ObreirosNaCongregacao$ObreirosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obreiros
     */
    select?: ObreirosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosInclude<ExtArgs> | null
    where?: ObreirosWhereInput
  }

  /**
   * ObreirosNaCongregacao.Congregacao
   */
  export type ObreirosNaCongregacao$CongregacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregacao
     */
    select?: CongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregacaoInclude<ExtArgs> | null
    where?: CongregacaoWhereInput
  }

  /**
   * ObreirosNaCongregacao without action
   */
  export type ObreirosNaCongregacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObreirosNaCongregacao
     */
    select?: ObreirosNaCongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosNaCongregacaoInclude<ExtArgs> | null
  }


  /**
   * Model Congregacao
   */

  export type AggregateCongregacao = {
    _count: CongregacaoCountAggregateOutputType | null
    _min: CongregacaoMinAggregateOutputType | null
    _max: CongregacaoMaxAggregateOutputType | null
  }

  export type CongregacaoMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    maps: string | null
    inauguration: Date | null
    email: string | null
    whatsapp: string | null
    telefone: string | null
    instagram: string | null
    facebook: string | null
    tiktok: string | null
    youtube: string | null
    midia: string | null
    midia_telefones: string | null
    created_at: Date | null
    status: boolean | null
  }

  export type CongregacaoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    maps: string | null
    inauguration: Date | null
    email: string | null
    whatsapp: string | null
    telefone: string | null
    instagram: string | null
    facebook: string | null
    tiktok: string | null
    youtube: string | null
    midia: string | null
    midia_telefones: string | null
    created_at: Date | null
    status: boolean | null
  }

  export type CongregacaoCountAggregateOutputType = {
    id: number
    name: number
    address: number
    maps: number
    inauguration: number
    email: number
    whatsapp: number
    telefone: number
    instagram: number
    facebook: number
    tiktok: number
    youtube: number
    midia: number
    midia_telefones: number
    created_at: number
    status: number
    _all: number
  }


  export type CongregacaoMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    maps?: true
    inauguration?: true
    email?: true
    whatsapp?: true
    telefone?: true
    instagram?: true
    facebook?: true
    tiktok?: true
    youtube?: true
    midia?: true
    midia_telefones?: true
    created_at?: true
    status?: true
  }

  export type CongregacaoMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    maps?: true
    inauguration?: true
    email?: true
    whatsapp?: true
    telefone?: true
    instagram?: true
    facebook?: true
    tiktok?: true
    youtube?: true
    midia?: true
    midia_telefones?: true
    created_at?: true
    status?: true
  }

  export type CongregacaoCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    maps?: true
    inauguration?: true
    email?: true
    whatsapp?: true
    telefone?: true
    instagram?: true
    facebook?: true
    tiktok?: true
    youtube?: true
    midia?: true
    midia_telefones?: true
    created_at?: true
    status?: true
    _all?: true
  }

  export type CongregacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Congregacao to aggregate.
     */
    where?: CongregacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Congregacaos to fetch.
     */
    orderBy?: CongregacaoOrderByWithRelationInput | CongregacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CongregacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Congregacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Congregacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Congregacaos
    **/
    _count?: true | CongregacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CongregacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CongregacaoMaxAggregateInputType
  }

  export type GetCongregacaoAggregateType<T extends CongregacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateCongregacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCongregacao[P]>
      : GetScalarType<T[P], AggregateCongregacao[P]>
  }




  export type CongregacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CongregacaoWhereInput
    orderBy?: CongregacaoOrderByWithAggregationInput | CongregacaoOrderByWithAggregationInput[]
    by: CongregacaoScalarFieldEnum[] | CongregacaoScalarFieldEnum
    having?: CongregacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CongregacaoCountAggregateInputType | true
    _min?: CongregacaoMinAggregateInputType
    _max?: CongregacaoMaxAggregateInputType
  }

  export type CongregacaoGroupByOutputType = {
    id: string
    name: string
    address: string
    maps: string | null
    inauguration: Date | null
    email: string | null
    whatsapp: string | null
    telefone: string | null
    instagram: string | null
    facebook: string | null
    tiktok: string | null
    youtube: string | null
    midia: string | null
    midia_telefones: string | null
    created_at: Date
    status: boolean
    _count: CongregacaoCountAggregateOutputType | null
    _min: CongregacaoMinAggregateOutputType | null
    _max: CongregacaoMaxAggregateOutputType | null
  }

  type GetCongregacaoGroupByPayload<T extends CongregacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CongregacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CongregacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CongregacaoGroupByOutputType[P]>
            : GetScalarType<T[P], CongregacaoGroupByOutputType[P]>
        }
      >
    >


  export type CongregacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    maps?: boolean
    inauguration?: boolean
    email?: boolean
    whatsapp?: boolean
    telefone?: boolean
    instagram?: boolean
    facebook?: boolean
    tiktok?: boolean
    youtube?: boolean
    midia?: boolean
    midia_telefones?: boolean
    created_at?: boolean
    status?: boolean
    Obreiros?: boolean | Congregacao$ObreirosArgs<ExtArgs>
    Eventos?: boolean | Congregacao$EventosArgs<ExtArgs>
    _count?: boolean | CongregacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["congregacao"]>


  export type CongregacaoSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    maps?: boolean
    inauguration?: boolean
    email?: boolean
    whatsapp?: boolean
    telefone?: boolean
    instagram?: boolean
    facebook?: boolean
    tiktok?: boolean
    youtube?: boolean
    midia?: boolean
    midia_telefones?: boolean
    created_at?: boolean
    status?: boolean
  }

  export type CongregacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Obreiros?: boolean | Congregacao$ObreirosArgs<ExtArgs>
    Eventos?: boolean | Congregacao$EventosArgs<ExtArgs>
    _count?: boolean | CongregacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CongregacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Congregacao"
    objects: {
      Obreiros: Prisma.$ObreirosNaCongregacaoPayload<ExtArgs>[]
      Eventos: Prisma.$EventosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      maps: string | null
      inauguration: Date | null
      email: string | null
      whatsapp: string | null
      telefone: string | null
      instagram: string | null
      facebook: string | null
      tiktok: string | null
      youtube: string | null
      midia: string | null
      midia_telefones: string | null
      created_at: Date
      status: boolean
    }, ExtArgs["result"]["congregacao"]>
    composites: {}
  }

  type CongregacaoGetPayload<S extends boolean | null | undefined | CongregacaoDefaultArgs> = $Result.GetResult<Prisma.$CongregacaoPayload, S>

  type CongregacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CongregacaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CongregacaoCountAggregateInputType | true
    }

  export interface CongregacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Congregacao'], meta: { name: 'Congregacao' } }
    /**
     * Find zero or one Congregacao that matches the filter.
     * @param {CongregacaoFindUniqueArgs} args - Arguments to find a Congregacao
     * @example
     * // Get one Congregacao
     * const congregacao = await prisma.congregacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CongregacaoFindUniqueArgs>(args: SelectSubset<T, CongregacaoFindUniqueArgs<ExtArgs>>): Prisma__CongregacaoClient<$Result.GetResult<Prisma.$CongregacaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Congregacao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CongregacaoFindUniqueOrThrowArgs} args - Arguments to find a Congregacao
     * @example
     * // Get one Congregacao
     * const congregacao = await prisma.congregacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CongregacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, CongregacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CongregacaoClient<$Result.GetResult<Prisma.$CongregacaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Congregacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongregacaoFindFirstArgs} args - Arguments to find a Congregacao
     * @example
     * // Get one Congregacao
     * const congregacao = await prisma.congregacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CongregacaoFindFirstArgs>(args?: SelectSubset<T, CongregacaoFindFirstArgs<ExtArgs>>): Prisma__CongregacaoClient<$Result.GetResult<Prisma.$CongregacaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Congregacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongregacaoFindFirstOrThrowArgs} args - Arguments to find a Congregacao
     * @example
     * // Get one Congregacao
     * const congregacao = await prisma.congregacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CongregacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, CongregacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CongregacaoClient<$Result.GetResult<Prisma.$CongregacaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Congregacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongregacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Congregacaos
     * const congregacaos = await prisma.congregacao.findMany()
     * 
     * // Get first 10 Congregacaos
     * const congregacaos = await prisma.congregacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const congregacaoWithIdOnly = await prisma.congregacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CongregacaoFindManyArgs>(args?: SelectSubset<T, CongregacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CongregacaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Congregacao.
     * @param {CongregacaoCreateArgs} args - Arguments to create a Congregacao.
     * @example
     * // Create one Congregacao
     * const Congregacao = await prisma.congregacao.create({
     *   data: {
     *     // ... data to create a Congregacao
     *   }
     * })
     * 
     */
    create<T extends CongregacaoCreateArgs>(args: SelectSubset<T, CongregacaoCreateArgs<ExtArgs>>): Prisma__CongregacaoClient<$Result.GetResult<Prisma.$CongregacaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Congregacaos.
     * @param {CongregacaoCreateManyArgs} args - Arguments to create many Congregacaos.
     * @example
     * // Create many Congregacaos
     * const congregacao = await prisma.congregacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CongregacaoCreateManyArgs>(args?: SelectSubset<T, CongregacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Congregacao.
     * @param {CongregacaoDeleteArgs} args - Arguments to delete one Congregacao.
     * @example
     * // Delete one Congregacao
     * const Congregacao = await prisma.congregacao.delete({
     *   where: {
     *     // ... filter to delete one Congregacao
     *   }
     * })
     * 
     */
    delete<T extends CongregacaoDeleteArgs>(args: SelectSubset<T, CongregacaoDeleteArgs<ExtArgs>>): Prisma__CongregacaoClient<$Result.GetResult<Prisma.$CongregacaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Congregacao.
     * @param {CongregacaoUpdateArgs} args - Arguments to update one Congregacao.
     * @example
     * // Update one Congregacao
     * const congregacao = await prisma.congregacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CongregacaoUpdateArgs>(args: SelectSubset<T, CongregacaoUpdateArgs<ExtArgs>>): Prisma__CongregacaoClient<$Result.GetResult<Prisma.$CongregacaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Congregacaos.
     * @param {CongregacaoDeleteManyArgs} args - Arguments to filter Congregacaos to delete.
     * @example
     * // Delete a few Congregacaos
     * const { count } = await prisma.congregacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CongregacaoDeleteManyArgs>(args?: SelectSubset<T, CongregacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Congregacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongregacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Congregacaos
     * const congregacao = await prisma.congregacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CongregacaoUpdateManyArgs>(args: SelectSubset<T, CongregacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Congregacao.
     * @param {CongregacaoUpsertArgs} args - Arguments to update or create a Congregacao.
     * @example
     * // Update or create a Congregacao
     * const congregacao = await prisma.congregacao.upsert({
     *   create: {
     *     // ... data to create a Congregacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Congregacao we want to update
     *   }
     * })
     */
    upsert<T extends CongregacaoUpsertArgs>(args: SelectSubset<T, CongregacaoUpsertArgs<ExtArgs>>): Prisma__CongregacaoClient<$Result.GetResult<Prisma.$CongregacaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Congregacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongregacaoCountArgs} args - Arguments to filter Congregacaos to count.
     * @example
     * // Count the number of Congregacaos
     * const count = await prisma.congregacao.count({
     *   where: {
     *     // ... the filter for the Congregacaos we want to count
     *   }
     * })
    **/
    count<T extends CongregacaoCountArgs>(
      args?: Subset<T, CongregacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CongregacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Congregacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongregacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CongregacaoAggregateArgs>(args: Subset<T, CongregacaoAggregateArgs>): Prisma.PrismaPromise<GetCongregacaoAggregateType<T>>

    /**
     * Group by Congregacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongregacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CongregacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CongregacaoGroupByArgs['orderBy'] }
        : { orderBy?: CongregacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CongregacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCongregacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Congregacao model
   */
  readonly fields: CongregacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Congregacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CongregacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Obreiros<T extends Congregacao$ObreirosArgs<ExtArgs> = {}>(args?: Subset<T, Congregacao$ObreirosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObreirosNaCongregacaoPayload<ExtArgs>, T, "findMany"> | Null>
    Eventos<T extends Congregacao$EventosArgs<ExtArgs> = {}>(args?: Subset<T, Congregacao$EventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Congregacao model
   */ 
  interface CongregacaoFieldRefs {
    readonly id: FieldRef<"Congregacao", 'String'>
    readonly name: FieldRef<"Congregacao", 'String'>
    readonly address: FieldRef<"Congregacao", 'String'>
    readonly maps: FieldRef<"Congregacao", 'String'>
    readonly inauguration: FieldRef<"Congregacao", 'DateTime'>
    readonly email: FieldRef<"Congregacao", 'String'>
    readonly whatsapp: FieldRef<"Congregacao", 'String'>
    readonly telefone: FieldRef<"Congregacao", 'String'>
    readonly instagram: FieldRef<"Congregacao", 'String'>
    readonly facebook: FieldRef<"Congregacao", 'String'>
    readonly tiktok: FieldRef<"Congregacao", 'String'>
    readonly youtube: FieldRef<"Congregacao", 'String'>
    readonly midia: FieldRef<"Congregacao", 'String'>
    readonly midia_telefones: FieldRef<"Congregacao", 'String'>
    readonly created_at: FieldRef<"Congregacao", 'DateTime'>
    readonly status: FieldRef<"Congregacao", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Congregacao findUnique
   */
  export type CongregacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregacao
     */
    select?: CongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregacaoInclude<ExtArgs> | null
    /**
     * Filter, which Congregacao to fetch.
     */
    where: CongregacaoWhereUniqueInput
  }

  /**
   * Congregacao findUniqueOrThrow
   */
  export type CongregacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregacao
     */
    select?: CongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregacaoInclude<ExtArgs> | null
    /**
     * Filter, which Congregacao to fetch.
     */
    where: CongregacaoWhereUniqueInput
  }

  /**
   * Congregacao findFirst
   */
  export type CongregacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregacao
     */
    select?: CongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregacaoInclude<ExtArgs> | null
    /**
     * Filter, which Congregacao to fetch.
     */
    where?: CongregacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Congregacaos to fetch.
     */
    orderBy?: CongregacaoOrderByWithRelationInput | CongregacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Congregacaos.
     */
    cursor?: CongregacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Congregacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Congregacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Congregacaos.
     */
    distinct?: CongregacaoScalarFieldEnum | CongregacaoScalarFieldEnum[]
  }

  /**
   * Congregacao findFirstOrThrow
   */
  export type CongregacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregacao
     */
    select?: CongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregacaoInclude<ExtArgs> | null
    /**
     * Filter, which Congregacao to fetch.
     */
    where?: CongregacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Congregacaos to fetch.
     */
    orderBy?: CongregacaoOrderByWithRelationInput | CongregacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Congregacaos.
     */
    cursor?: CongregacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Congregacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Congregacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Congregacaos.
     */
    distinct?: CongregacaoScalarFieldEnum | CongregacaoScalarFieldEnum[]
  }

  /**
   * Congregacao findMany
   */
  export type CongregacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregacao
     */
    select?: CongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregacaoInclude<ExtArgs> | null
    /**
     * Filter, which Congregacaos to fetch.
     */
    where?: CongregacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Congregacaos to fetch.
     */
    orderBy?: CongregacaoOrderByWithRelationInput | CongregacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Congregacaos.
     */
    cursor?: CongregacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Congregacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Congregacaos.
     */
    skip?: number
    distinct?: CongregacaoScalarFieldEnum | CongregacaoScalarFieldEnum[]
  }

  /**
   * Congregacao create
   */
  export type CongregacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregacao
     */
    select?: CongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Congregacao.
     */
    data: XOR<CongregacaoCreateInput, CongregacaoUncheckedCreateInput>
  }

  /**
   * Congregacao createMany
   */
  export type CongregacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Congregacaos.
     */
    data: CongregacaoCreateManyInput | CongregacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Congregacao update
   */
  export type CongregacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregacao
     */
    select?: CongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Congregacao.
     */
    data: XOR<CongregacaoUpdateInput, CongregacaoUncheckedUpdateInput>
    /**
     * Choose, which Congregacao to update.
     */
    where: CongregacaoWhereUniqueInput
  }

  /**
   * Congregacao updateMany
   */
  export type CongregacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Congregacaos.
     */
    data: XOR<CongregacaoUpdateManyMutationInput, CongregacaoUncheckedUpdateManyInput>
    /**
     * Filter which Congregacaos to update
     */
    where?: CongregacaoWhereInput
  }

  /**
   * Congregacao upsert
   */
  export type CongregacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregacao
     */
    select?: CongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Congregacao to update in case it exists.
     */
    where: CongregacaoWhereUniqueInput
    /**
     * In case the Congregacao found by the `where` argument doesn't exist, create a new Congregacao with this data.
     */
    create: XOR<CongregacaoCreateInput, CongregacaoUncheckedCreateInput>
    /**
     * In case the Congregacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CongregacaoUpdateInput, CongregacaoUncheckedUpdateInput>
  }

  /**
   * Congregacao delete
   */
  export type CongregacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregacao
     */
    select?: CongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregacaoInclude<ExtArgs> | null
    /**
     * Filter which Congregacao to delete.
     */
    where: CongregacaoWhereUniqueInput
  }

  /**
   * Congregacao deleteMany
   */
  export type CongregacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Congregacaos to delete
     */
    where?: CongregacaoWhereInput
  }

  /**
   * Congregacao.Obreiros
   */
  export type Congregacao$ObreirosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObreirosNaCongregacao
     */
    select?: ObreirosNaCongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreirosNaCongregacaoInclude<ExtArgs> | null
    where?: ObreirosNaCongregacaoWhereInput
    orderBy?: ObreirosNaCongregacaoOrderByWithRelationInput | ObreirosNaCongregacaoOrderByWithRelationInput[]
    cursor?: ObreirosNaCongregacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObreirosNaCongregacaoScalarFieldEnum | ObreirosNaCongregacaoScalarFieldEnum[]
  }

  /**
   * Congregacao.Eventos
   */
  export type Congregacao$EventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    where?: EventosWhereInput
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    cursor?: EventosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * Congregacao without action
   */
  export type CongregacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregacao
     */
    select?: CongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregacaoInclude<ExtArgs> | null
  }


  /**
   * Model Eventos
   */

  export type AggregateEventos = {
    _count: EventosCountAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  export type EventosMinAggregateOutputType = {
    id: string | null
    name: string | null
    congregacaoId: string | null
    date: Date | null
    added: boolean | null
    modified: boolean | null
    cancelled: boolean | null
    created_at: Date | null
    status: boolean | null
  }

  export type EventosMaxAggregateOutputType = {
    id: string | null
    name: string | null
    congregacaoId: string | null
    date: Date | null
    added: boolean | null
    modified: boolean | null
    cancelled: boolean | null
    created_at: Date | null
    status: boolean | null
  }

  export type EventosCountAggregateOutputType = {
    id: number
    name: number
    congregacaoId: number
    date: number
    added: number
    modified: number
    cancelled: number
    created_at: number
    status: number
    _all: number
  }


  export type EventosMinAggregateInputType = {
    id?: true
    name?: true
    congregacaoId?: true
    date?: true
    added?: true
    modified?: true
    cancelled?: true
    created_at?: true
    status?: true
  }

  export type EventosMaxAggregateInputType = {
    id?: true
    name?: true
    congregacaoId?: true
    date?: true
    added?: true
    modified?: true
    cancelled?: true
    created_at?: true
    status?: true
  }

  export type EventosCountAggregateInputType = {
    id?: true
    name?: true
    congregacaoId?: true
    date?: true
    added?: true
    modified?: true
    cancelled?: true
    created_at?: true
    status?: true
    _all?: true
  }

  export type EventosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to aggregate.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventosMaxAggregateInputType
  }

  export type GetEventosAggregateType<T extends EventosAggregateArgs> = {
        [P in keyof T & keyof AggregateEventos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventos[P]>
      : GetScalarType<T[P], AggregateEventos[P]>
  }




  export type EventosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventosWhereInput
    orderBy?: EventosOrderByWithAggregationInput | EventosOrderByWithAggregationInput[]
    by: EventosScalarFieldEnum[] | EventosScalarFieldEnum
    having?: EventosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventosCountAggregateInputType | true
    _min?: EventosMinAggregateInputType
    _max?: EventosMaxAggregateInputType
  }

  export type EventosGroupByOutputType = {
    id: string
    name: string
    congregacaoId: string | null
    date: Date
    added: boolean
    modified: boolean
    cancelled: boolean
    created_at: Date
    status: boolean
    _count: EventosCountAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  type GetEventosGroupByPayload<T extends EventosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventosGroupByOutputType[P]>
            : GetScalarType<T[P], EventosGroupByOutputType[P]>
        }
      >
    >


  export type EventosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    congregacaoId?: boolean
    date?: boolean
    added?: boolean
    modified?: boolean
    cancelled?: boolean
    created_at?: boolean
    status?: boolean
    congregacao?: boolean | Eventos$congregacaoArgs<ExtArgs>
  }, ExtArgs["result"]["eventos"]>


  export type EventosSelectScalar = {
    id?: boolean
    name?: boolean
    congregacaoId?: boolean
    date?: boolean
    added?: boolean
    modified?: boolean
    cancelled?: boolean
    created_at?: boolean
    status?: boolean
  }

  export type EventosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    congregacao?: boolean | Eventos$congregacaoArgs<ExtArgs>
  }

  export type $EventosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Eventos"
    objects: {
      congregacao: Prisma.$CongregacaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      congregacaoId: string | null
      date: Date
      added: boolean
      modified: boolean
      cancelled: boolean
      created_at: Date
      status: boolean
    }, ExtArgs["result"]["eventos"]>
    composites: {}
  }

  type EventosGetPayload<S extends boolean | null | undefined | EventosDefaultArgs> = $Result.GetResult<Prisma.$EventosPayload, S>

  type EventosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventosCountAggregateInputType | true
    }

  export interface EventosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Eventos'], meta: { name: 'Eventos' } }
    /**
     * Find zero or one Eventos that matches the filter.
     * @param {EventosFindUniqueArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventosFindUniqueArgs>(args: SelectSubset<T, EventosFindUniqueArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Eventos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventosFindUniqueOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventosFindUniqueOrThrowArgs>(args: SelectSubset<T, EventosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosFindFirstArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventosFindFirstArgs>(args?: SelectSubset<T, EventosFindFirstArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Eventos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosFindFirstOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventosFindFirstOrThrowArgs>(args?: SelectSubset<T, EventosFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.eventos.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.eventos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventosWithIdOnly = await prisma.eventos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventosFindManyArgs>(args?: SelectSubset<T, EventosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Eventos.
     * @param {EventosCreateArgs} args - Arguments to create a Eventos.
     * @example
     * // Create one Eventos
     * const Eventos = await prisma.eventos.create({
     *   data: {
     *     // ... data to create a Eventos
     *   }
     * })
     * 
     */
    create<T extends EventosCreateArgs>(args: SelectSubset<T, EventosCreateArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Eventos.
     * @param {EventosCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventosCreateManyArgs>(args?: SelectSubset<T, EventosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Eventos.
     * @param {EventosDeleteArgs} args - Arguments to delete one Eventos.
     * @example
     * // Delete one Eventos
     * const Eventos = await prisma.eventos.delete({
     *   where: {
     *     // ... filter to delete one Eventos
     *   }
     * })
     * 
     */
    delete<T extends EventosDeleteArgs>(args: SelectSubset<T, EventosDeleteArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Eventos.
     * @param {EventosUpdateArgs} args - Arguments to update one Eventos.
     * @example
     * // Update one Eventos
     * const eventos = await prisma.eventos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventosUpdateArgs>(args: SelectSubset<T, EventosUpdateArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Eventos.
     * @param {EventosDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.eventos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventosDeleteManyArgs>(args?: SelectSubset<T, EventosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const eventos = await prisma.eventos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventosUpdateManyArgs>(args: SelectSubset<T, EventosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Eventos.
     * @param {EventosUpsertArgs} args - Arguments to update or create a Eventos.
     * @example
     * // Update or create a Eventos
     * const eventos = await prisma.eventos.upsert({
     *   create: {
     *     // ... data to create a Eventos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eventos we want to update
     *   }
     * })
     */
    upsert<T extends EventosUpsertArgs>(args: SelectSubset<T, EventosUpsertArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.eventos.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventosCountArgs>(
      args?: Subset<T, EventosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventosAggregateArgs>(args: Subset<T, EventosAggregateArgs>): Prisma.PrismaPromise<GetEventosAggregateType<T>>

    /**
     * Group by Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventosGroupByArgs['orderBy'] }
        : { orderBy?: EventosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Eventos model
   */
  readonly fields: EventosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Eventos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    congregacao<T extends Eventos$congregacaoArgs<ExtArgs> = {}>(args?: Subset<T, Eventos$congregacaoArgs<ExtArgs>>): Prisma__CongregacaoClient<$Result.GetResult<Prisma.$CongregacaoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Eventos model
   */ 
  interface EventosFieldRefs {
    readonly id: FieldRef<"Eventos", 'String'>
    readonly name: FieldRef<"Eventos", 'String'>
    readonly congregacaoId: FieldRef<"Eventos", 'String'>
    readonly date: FieldRef<"Eventos", 'DateTime'>
    readonly added: FieldRef<"Eventos", 'Boolean'>
    readonly modified: FieldRef<"Eventos", 'Boolean'>
    readonly cancelled: FieldRef<"Eventos", 'Boolean'>
    readonly created_at: FieldRef<"Eventos", 'DateTime'>
    readonly status: FieldRef<"Eventos", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Eventos findUnique
   */
  export type EventosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos findUniqueOrThrow
   */
  export type EventosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos findFirst
   */
  export type EventosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * Eventos findFirstOrThrow
   */
  export type EventosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * Eventos findMany
   */
  export type EventosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * Eventos create
   */
  export type EventosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * The data needed to create a Eventos.
     */
    data: XOR<EventosCreateInput, EventosUncheckedCreateInput>
  }

  /**
   * Eventos createMany
   */
  export type EventosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventosCreateManyInput | EventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Eventos update
   */
  export type EventosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * The data needed to update a Eventos.
     */
    data: XOR<EventosUpdateInput, EventosUncheckedUpdateInput>
    /**
     * Choose, which Eventos to update.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos updateMany
   */
  export type EventosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventosUpdateManyMutationInput, EventosUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventosWhereInput
  }

  /**
   * Eventos upsert
   */
  export type EventosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * The filter to search for the Eventos to update in case it exists.
     */
    where: EventosWhereUniqueInput
    /**
     * In case the Eventos found by the `where` argument doesn't exist, create a new Eventos with this data.
     */
    create: XOR<EventosCreateInput, EventosUncheckedCreateInput>
    /**
     * In case the Eventos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventosUpdateInput, EventosUncheckedUpdateInput>
  }

  /**
   * Eventos delete
   */
  export type EventosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter which Eventos to delete.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos deleteMany
   */
  export type EventosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventosWhereInput
  }

  /**
   * Eventos.congregacao
   */
  export type Eventos$congregacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregacao
     */
    select?: CongregacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregacaoInclude<ExtArgs> | null
    where?: CongregacaoWhereInput
  }

  /**
   * Eventos without action
   */
  export type EventosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
  }


  /**
   * Model Lives
   */

  export type AggregateLives = {
    _count: LivesCountAggregateOutputType | null
    _min: LivesMinAggregateOutputType | null
    _max: LivesMaxAggregateOutputType | null
  }

  export type LivesMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    video: string | null
    created_at: Date | null
    status: boolean | null
  }

  export type LivesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    video: string | null
    created_at: Date | null
    status: boolean | null
  }

  export type LivesCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    video: number
    created_at: number
    status: number
    _all: number
  }


  export type LivesMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    video?: true
    created_at?: true
    status?: true
  }

  export type LivesMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    video?: true
    created_at?: true
    status?: true
  }

  export type LivesCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    video?: true
    created_at?: true
    status?: true
    _all?: true
  }

  export type LivesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lives to aggregate.
     */
    where?: LivesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lives to fetch.
     */
    orderBy?: LivesOrderByWithRelationInput | LivesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LivesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lives
    **/
    _count?: true | LivesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivesMaxAggregateInputType
  }

  export type GetLivesAggregateType<T extends LivesAggregateArgs> = {
        [P in keyof T & keyof AggregateLives]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLives[P]>
      : GetScalarType<T[P], AggregateLives[P]>
  }




  export type LivesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivesWhereInput
    orderBy?: LivesOrderByWithAggregationInput | LivesOrderByWithAggregationInput[]
    by: LivesScalarFieldEnum[] | LivesScalarFieldEnum
    having?: LivesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivesCountAggregateInputType | true
    _min?: LivesMinAggregateInputType
    _max?: LivesMaxAggregateInputType
  }

  export type LivesGroupByOutputType = {
    id: string
    title: string
    slug: string
    video: string
    created_at: Date
    status: boolean
    _count: LivesCountAggregateOutputType | null
    _min: LivesMinAggregateOutputType | null
    _max: LivesMaxAggregateOutputType | null
  }

  type GetLivesGroupByPayload<T extends LivesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivesGroupByOutputType[P]>
            : GetScalarType<T[P], LivesGroupByOutputType[P]>
        }
      >
    >


  export type LivesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    video?: boolean
    created_at?: boolean
    status?: boolean
  }, ExtArgs["result"]["lives"]>


  export type LivesSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    video?: boolean
    created_at?: boolean
    status?: boolean
  }


  export type $LivesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lives"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      video: string
      created_at: Date
      status: boolean
    }, ExtArgs["result"]["lives"]>
    composites: {}
  }

  type LivesGetPayload<S extends boolean | null | undefined | LivesDefaultArgs> = $Result.GetResult<Prisma.$LivesPayload, S>

  type LivesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LivesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LivesCountAggregateInputType | true
    }

  export interface LivesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lives'], meta: { name: 'Lives' } }
    /**
     * Find zero or one Lives that matches the filter.
     * @param {LivesFindUniqueArgs} args - Arguments to find a Lives
     * @example
     * // Get one Lives
     * const lives = await prisma.lives.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LivesFindUniqueArgs>(args: SelectSubset<T, LivesFindUniqueArgs<ExtArgs>>): Prisma__LivesClient<$Result.GetResult<Prisma.$LivesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Lives that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LivesFindUniqueOrThrowArgs} args - Arguments to find a Lives
     * @example
     * // Get one Lives
     * const lives = await prisma.lives.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LivesFindUniqueOrThrowArgs>(args: SelectSubset<T, LivesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LivesClient<$Result.GetResult<Prisma.$LivesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Lives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivesFindFirstArgs} args - Arguments to find a Lives
     * @example
     * // Get one Lives
     * const lives = await prisma.lives.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LivesFindFirstArgs>(args?: SelectSubset<T, LivesFindFirstArgs<ExtArgs>>): Prisma__LivesClient<$Result.GetResult<Prisma.$LivesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Lives that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivesFindFirstOrThrowArgs} args - Arguments to find a Lives
     * @example
     * // Get one Lives
     * const lives = await prisma.lives.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LivesFindFirstOrThrowArgs>(args?: SelectSubset<T, LivesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LivesClient<$Result.GetResult<Prisma.$LivesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Lives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lives
     * const lives = await prisma.lives.findMany()
     * 
     * // Get first 10 Lives
     * const lives = await prisma.lives.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const livesWithIdOnly = await prisma.lives.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LivesFindManyArgs>(args?: SelectSubset<T, LivesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Lives.
     * @param {LivesCreateArgs} args - Arguments to create a Lives.
     * @example
     * // Create one Lives
     * const Lives = await prisma.lives.create({
     *   data: {
     *     // ... data to create a Lives
     *   }
     * })
     * 
     */
    create<T extends LivesCreateArgs>(args: SelectSubset<T, LivesCreateArgs<ExtArgs>>): Prisma__LivesClient<$Result.GetResult<Prisma.$LivesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Lives.
     * @param {LivesCreateManyArgs} args - Arguments to create many Lives.
     * @example
     * // Create many Lives
     * const lives = await prisma.lives.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LivesCreateManyArgs>(args?: SelectSubset<T, LivesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lives.
     * @param {LivesDeleteArgs} args - Arguments to delete one Lives.
     * @example
     * // Delete one Lives
     * const Lives = await prisma.lives.delete({
     *   where: {
     *     // ... filter to delete one Lives
     *   }
     * })
     * 
     */
    delete<T extends LivesDeleteArgs>(args: SelectSubset<T, LivesDeleteArgs<ExtArgs>>): Prisma__LivesClient<$Result.GetResult<Prisma.$LivesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Lives.
     * @param {LivesUpdateArgs} args - Arguments to update one Lives.
     * @example
     * // Update one Lives
     * const lives = await prisma.lives.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LivesUpdateArgs>(args: SelectSubset<T, LivesUpdateArgs<ExtArgs>>): Prisma__LivesClient<$Result.GetResult<Prisma.$LivesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Lives.
     * @param {LivesDeleteManyArgs} args - Arguments to filter Lives to delete.
     * @example
     * // Delete a few Lives
     * const { count } = await prisma.lives.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LivesDeleteManyArgs>(args?: SelectSubset<T, LivesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lives
     * const lives = await prisma.lives.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LivesUpdateManyArgs>(args: SelectSubset<T, LivesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lives.
     * @param {LivesUpsertArgs} args - Arguments to update or create a Lives.
     * @example
     * // Update or create a Lives
     * const lives = await prisma.lives.upsert({
     *   create: {
     *     // ... data to create a Lives
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lives we want to update
     *   }
     * })
     */
    upsert<T extends LivesUpsertArgs>(args: SelectSubset<T, LivesUpsertArgs<ExtArgs>>): Prisma__LivesClient<$Result.GetResult<Prisma.$LivesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Lives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivesCountArgs} args - Arguments to filter Lives to count.
     * @example
     * // Count the number of Lives
     * const count = await prisma.lives.count({
     *   where: {
     *     // ... the filter for the Lives we want to count
     *   }
     * })
    **/
    count<T extends LivesCountArgs>(
      args?: Subset<T, LivesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LivesAggregateArgs>(args: Subset<T, LivesAggregateArgs>): Prisma.PrismaPromise<GetLivesAggregateType<T>>

    /**
     * Group by Lives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LivesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivesGroupByArgs['orderBy'] }
        : { orderBy?: LivesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LivesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lives model
   */
  readonly fields: LivesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lives.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LivesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lives model
   */ 
  interface LivesFieldRefs {
    readonly id: FieldRef<"Lives", 'String'>
    readonly title: FieldRef<"Lives", 'String'>
    readonly slug: FieldRef<"Lives", 'String'>
    readonly video: FieldRef<"Lives", 'String'>
    readonly created_at: FieldRef<"Lives", 'DateTime'>
    readonly status: FieldRef<"Lives", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Lives findUnique
   */
  export type LivesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lives
     */
    select?: LivesSelect<ExtArgs> | null
    /**
     * Filter, which Lives to fetch.
     */
    where: LivesWhereUniqueInput
  }

  /**
   * Lives findUniqueOrThrow
   */
  export type LivesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lives
     */
    select?: LivesSelect<ExtArgs> | null
    /**
     * Filter, which Lives to fetch.
     */
    where: LivesWhereUniqueInput
  }

  /**
   * Lives findFirst
   */
  export type LivesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lives
     */
    select?: LivesSelect<ExtArgs> | null
    /**
     * Filter, which Lives to fetch.
     */
    where?: LivesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lives to fetch.
     */
    orderBy?: LivesOrderByWithRelationInput | LivesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lives.
     */
    cursor?: LivesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lives.
     */
    distinct?: LivesScalarFieldEnum | LivesScalarFieldEnum[]
  }

  /**
   * Lives findFirstOrThrow
   */
  export type LivesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lives
     */
    select?: LivesSelect<ExtArgs> | null
    /**
     * Filter, which Lives to fetch.
     */
    where?: LivesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lives to fetch.
     */
    orderBy?: LivesOrderByWithRelationInput | LivesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lives.
     */
    cursor?: LivesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lives.
     */
    distinct?: LivesScalarFieldEnum | LivesScalarFieldEnum[]
  }

  /**
   * Lives findMany
   */
  export type LivesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lives
     */
    select?: LivesSelect<ExtArgs> | null
    /**
     * Filter, which Lives to fetch.
     */
    where?: LivesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lives to fetch.
     */
    orderBy?: LivesOrderByWithRelationInput | LivesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lives.
     */
    cursor?: LivesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lives.
     */
    skip?: number
    distinct?: LivesScalarFieldEnum | LivesScalarFieldEnum[]
  }

  /**
   * Lives create
   */
  export type LivesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lives
     */
    select?: LivesSelect<ExtArgs> | null
    /**
     * The data needed to create a Lives.
     */
    data: XOR<LivesCreateInput, LivesUncheckedCreateInput>
  }

  /**
   * Lives createMany
   */
  export type LivesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lives.
     */
    data: LivesCreateManyInput | LivesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lives update
   */
  export type LivesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lives
     */
    select?: LivesSelect<ExtArgs> | null
    /**
     * The data needed to update a Lives.
     */
    data: XOR<LivesUpdateInput, LivesUncheckedUpdateInput>
    /**
     * Choose, which Lives to update.
     */
    where: LivesWhereUniqueInput
  }

  /**
   * Lives updateMany
   */
  export type LivesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lives.
     */
    data: XOR<LivesUpdateManyMutationInput, LivesUncheckedUpdateManyInput>
    /**
     * Filter which Lives to update
     */
    where?: LivesWhereInput
  }

  /**
   * Lives upsert
   */
  export type LivesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lives
     */
    select?: LivesSelect<ExtArgs> | null
    /**
     * The filter to search for the Lives to update in case it exists.
     */
    where: LivesWhereUniqueInput
    /**
     * In case the Lives found by the `where` argument doesn't exist, create a new Lives with this data.
     */
    create: XOR<LivesCreateInput, LivesUncheckedCreateInput>
    /**
     * In case the Lives was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LivesUpdateInput, LivesUncheckedUpdateInput>
  }

  /**
   * Lives delete
   */
  export type LivesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lives
     */
    select?: LivesSelect<ExtArgs> | null
    /**
     * Filter which Lives to delete.
     */
    where: LivesWhereUniqueInput
  }

  /**
   * Lives deleteMany
   */
  export type LivesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lives to delete
     */
    where?: LivesWhereInput
  }

  /**
   * Lives without action
   */
  export type LivesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lives
     */
    select?: LivesSelect<ExtArgs> | null
  }


  /**
   * Model Galeria
   */

  export type AggregateGaleria = {
    _count: GaleriaCountAggregateOutputType | null
    _min: GaleriaMinAggregateOutputType | null
    _max: GaleriaMaxAggregateOutputType | null
  }

  export type GaleriaMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    image: string | null
    created_at: Date | null
    status: boolean | null
  }

  export type GaleriaMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    image: string | null
    created_at: Date | null
    status: boolean | null
  }

  export type GaleriaCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    image: number
    created_at: number
    status: number
    _all: number
  }


  export type GaleriaMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    image?: true
    created_at?: true
    status?: true
  }

  export type GaleriaMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    image?: true
    created_at?: true
    status?: true
  }

  export type GaleriaCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    image?: true
    created_at?: true
    status?: true
    _all?: true
  }

  export type GaleriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galeria to aggregate.
     */
    where?: GaleriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galerias to fetch.
     */
    orderBy?: GaleriaOrderByWithRelationInput | GaleriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GaleriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galerias
    **/
    _count?: true | GaleriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GaleriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GaleriaMaxAggregateInputType
  }

  export type GetGaleriaAggregateType<T extends GaleriaAggregateArgs> = {
        [P in keyof T & keyof AggregateGaleria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGaleria[P]>
      : GetScalarType<T[P], AggregateGaleria[P]>
  }




  export type GaleriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GaleriaWhereInput
    orderBy?: GaleriaOrderByWithAggregationInput | GaleriaOrderByWithAggregationInput[]
    by: GaleriaScalarFieldEnum[] | GaleriaScalarFieldEnum
    having?: GaleriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GaleriaCountAggregateInputType | true
    _min?: GaleriaMinAggregateInputType
    _max?: GaleriaMaxAggregateInputType
  }

  export type GaleriaGroupByOutputType = {
    id: string
    title: string
    slug: string
    image: string
    created_at: Date
    status: boolean
    _count: GaleriaCountAggregateOutputType | null
    _min: GaleriaMinAggregateOutputType | null
    _max: GaleriaMaxAggregateOutputType | null
  }

  type GetGaleriaGroupByPayload<T extends GaleriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GaleriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GaleriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GaleriaGroupByOutputType[P]>
            : GetScalarType<T[P], GaleriaGroupByOutputType[P]>
        }
      >
    >


  export type GaleriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    image?: boolean
    created_at?: boolean
    status?: boolean
  }, ExtArgs["result"]["galeria"]>


  export type GaleriaSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    image?: boolean
    created_at?: boolean
    status?: boolean
  }


  export type $GaleriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Galeria"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      image: string
      created_at: Date
      status: boolean
    }, ExtArgs["result"]["galeria"]>
    composites: {}
  }

  type GaleriaGetPayload<S extends boolean | null | undefined | GaleriaDefaultArgs> = $Result.GetResult<Prisma.$GaleriaPayload, S>

  type GaleriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GaleriaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GaleriaCountAggregateInputType | true
    }

  export interface GaleriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Galeria'], meta: { name: 'Galeria' } }
    /**
     * Find zero or one Galeria that matches the filter.
     * @param {GaleriaFindUniqueArgs} args - Arguments to find a Galeria
     * @example
     * // Get one Galeria
     * const galeria = await prisma.galeria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GaleriaFindUniqueArgs>(args: SelectSubset<T, GaleriaFindUniqueArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Galeria that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GaleriaFindUniqueOrThrowArgs} args - Arguments to find a Galeria
     * @example
     * // Get one Galeria
     * const galeria = await prisma.galeria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GaleriaFindUniqueOrThrowArgs>(args: SelectSubset<T, GaleriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Galeria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriaFindFirstArgs} args - Arguments to find a Galeria
     * @example
     * // Get one Galeria
     * const galeria = await prisma.galeria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GaleriaFindFirstArgs>(args?: SelectSubset<T, GaleriaFindFirstArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Galeria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriaFindFirstOrThrowArgs} args - Arguments to find a Galeria
     * @example
     * // Get one Galeria
     * const galeria = await prisma.galeria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GaleriaFindFirstOrThrowArgs>(args?: SelectSubset<T, GaleriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Galerias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galerias
     * const galerias = await prisma.galeria.findMany()
     * 
     * // Get first 10 Galerias
     * const galerias = await prisma.galeria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galeriaWithIdOnly = await prisma.galeria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GaleriaFindManyArgs>(args?: SelectSubset<T, GaleriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Galeria.
     * @param {GaleriaCreateArgs} args - Arguments to create a Galeria.
     * @example
     * // Create one Galeria
     * const Galeria = await prisma.galeria.create({
     *   data: {
     *     // ... data to create a Galeria
     *   }
     * })
     * 
     */
    create<T extends GaleriaCreateArgs>(args: SelectSubset<T, GaleriaCreateArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Galerias.
     * @param {GaleriaCreateManyArgs} args - Arguments to create many Galerias.
     * @example
     * // Create many Galerias
     * const galeria = await prisma.galeria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GaleriaCreateManyArgs>(args?: SelectSubset<T, GaleriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Galeria.
     * @param {GaleriaDeleteArgs} args - Arguments to delete one Galeria.
     * @example
     * // Delete one Galeria
     * const Galeria = await prisma.galeria.delete({
     *   where: {
     *     // ... filter to delete one Galeria
     *   }
     * })
     * 
     */
    delete<T extends GaleriaDeleteArgs>(args: SelectSubset<T, GaleriaDeleteArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Galeria.
     * @param {GaleriaUpdateArgs} args - Arguments to update one Galeria.
     * @example
     * // Update one Galeria
     * const galeria = await prisma.galeria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GaleriaUpdateArgs>(args: SelectSubset<T, GaleriaUpdateArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Galerias.
     * @param {GaleriaDeleteManyArgs} args - Arguments to filter Galerias to delete.
     * @example
     * // Delete a few Galerias
     * const { count } = await prisma.galeria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GaleriaDeleteManyArgs>(args?: SelectSubset<T, GaleriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galerias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galerias
     * const galeria = await prisma.galeria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GaleriaUpdateManyArgs>(args: SelectSubset<T, GaleriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Galeria.
     * @param {GaleriaUpsertArgs} args - Arguments to update or create a Galeria.
     * @example
     * // Update or create a Galeria
     * const galeria = await prisma.galeria.upsert({
     *   create: {
     *     // ... data to create a Galeria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Galeria we want to update
     *   }
     * })
     */
    upsert<T extends GaleriaUpsertArgs>(args: SelectSubset<T, GaleriaUpsertArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Galerias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriaCountArgs} args - Arguments to filter Galerias to count.
     * @example
     * // Count the number of Galerias
     * const count = await prisma.galeria.count({
     *   where: {
     *     // ... the filter for the Galerias we want to count
     *   }
     * })
    **/
    count<T extends GaleriaCountArgs>(
      args?: Subset<T, GaleriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GaleriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Galeria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GaleriaAggregateArgs>(args: Subset<T, GaleriaAggregateArgs>): Prisma.PrismaPromise<GetGaleriaAggregateType<T>>

    /**
     * Group by Galeria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GaleriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GaleriaGroupByArgs['orderBy'] }
        : { orderBy?: GaleriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GaleriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGaleriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Galeria model
   */
  readonly fields: GaleriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Galeria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GaleriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Galeria model
   */ 
  interface GaleriaFieldRefs {
    readonly id: FieldRef<"Galeria", 'String'>
    readonly title: FieldRef<"Galeria", 'String'>
    readonly slug: FieldRef<"Galeria", 'String'>
    readonly image: FieldRef<"Galeria", 'String'>
    readonly created_at: FieldRef<"Galeria", 'DateTime'>
    readonly status: FieldRef<"Galeria", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Galeria findUnique
   */
  export type GaleriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Filter, which Galeria to fetch.
     */
    where: GaleriaWhereUniqueInput
  }

  /**
   * Galeria findUniqueOrThrow
   */
  export type GaleriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Filter, which Galeria to fetch.
     */
    where: GaleriaWhereUniqueInput
  }

  /**
   * Galeria findFirst
   */
  export type GaleriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Filter, which Galeria to fetch.
     */
    where?: GaleriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galerias to fetch.
     */
    orderBy?: GaleriaOrderByWithRelationInput | GaleriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galerias.
     */
    cursor?: GaleriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galerias.
     */
    distinct?: GaleriaScalarFieldEnum | GaleriaScalarFieldEnum[]
  }

  /**
   * Galeria findFirstOrThrow
   */
  export type GaleriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Filter, which Galeria to fetch.
     */
    where?: GaleriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galerias to fetch.
     */
    orderBy?: GaleriaOrderByWithRelationInput | GaleriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galerias.
     */
    cursor?: GaleriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galerias.
     */
    distinct?: GaleriaScalarFieldEnum | GaleriaScalarFieldEnum[]
  }

  /**
   * Galeria findMany
   */
  export type GaleriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Filter, which Galerias to fetch.
     */
    where?: GaleriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galerias to fetch.
     */
    orderBy?: GaleriaOrderByWithRelationInput | GaleriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galerias.
     */
    cursor?: GaleriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galerias.
     */
    skip?: number
    distinct?: GaleriaScalarFieldEnum | GaleriaScalarFieldEnum[]
  }

  /**
   * Galeria create
   */
  export type GaleriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * The data needed to create a Galeria.
     */
    data: XOR<GaleriaCreateInput, GaleriaUncheckedCreateInput>
  }

  /**
   * Galeria createMany
   */
  export type GaleriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galerias.
     */
    data: GaleriaCreateManyInput | GaleriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Galeria update
   */
  export type GaleriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * The data needed to update a Galeria.
     */
    data: XOR<GaleriaUpdateInput, GaleriaUncheckedUpdateInput>
    /**
     * Choose, which Galeria to update.
     */
    where: GaleriaWhereUniqueInput
  }

  /**
   * Galeria updateMany
   */
  export type GaleriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galerias.
     */
    data: XOR<GaleriaUpdateManyMutationInput, GaleriaUncheckedUpdateManyInput>
    /**
     * Filter which Galerias to update
     */
    where?: GaleriaWhereInput
  }

  /**
   * Galeria upsert
   */
  export type GaleriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * The filter to search for the Galeria to update in case it exists.
     */
    where: GaleriaWhereUniqueInput
    /**
     * In case the Galeria found by the `where` argument doesn't exist, create a new Galeria with this data.
     */
    create: XOR<GaleriaCreateInput, GaleriaUncheckedCreateInput>
    /**
     * In case the Galeria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GaleriaUpdateInput, GaleriaUncheckedUpdateInput>
  }

  /**
   * Galeria delete
   */
  export type GaleriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Filter which Galeria to delete.
     */
    where: GaleriaWhereUniqueInput
  }

  /**
   * Galeria deleteMany
   */
  export type GaleriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galerias to delete
     */
    where?: GaleriaWhereInput
  }

  /**
   * Galeria without action
   */
  export type GaleriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ObreirosScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    cargo: 'cargo',
    created_at: 'created_at',
    status: 'status'
  };

  export type ObreirosScalarFieldEnum = (typeof ObreirosScalarFieldEnum)[keyof typeof ObreirosScalarFieldEnum]


  export const ObreirosNaCongregacaoScalarFieldEnum: {
    id: 'id',
    obreirosId: 'obreirosId',
    congregacaoId: 'congregacaoId',
    position: 'position'
  };

  export type ObreirosNaCongregacaoScalarFieldEnum = (typeof ObreirosNaCongregacaoScalarFieldEnum)[keyof typeof ObreirosNaCongregacaoScalarFieldEnum]


  export const CongregacaoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    maps: 'maps',
    inauguration: 'inauguration',
    email: 'email',
    whatsapp: 'whatsapp',
    telefone: 'telefone',
    instagram: 'instagram',
    facebook: 'facebook',
    tiktok: 'tiktok',
    youtube: 'youtube',
    midia: 'midia',
    midia_telefones: 'midia_telefones',
    created_at: 'created_at',
    status: 'status'
  };

  export type CongregacaoScalarFieldEnum = (typeof CongregacaoScalarFieldEnum)[keyof typeof CongregacaoScalarFieldEnum]


  export const EventosScalarFieldEnum: {
    id: 'id',
    name: 'name',
    congregacaoId: 'congregacaoId',
    date: 'date',
    added: 'added',
    modified: 'modified',
    cancelled: 'cancelled',
    created_at: 'created_at',
    status: 'status'
  };

  export type EventosScalarFieldEnum = (typeof EventosScalarFieldEnum)[keyof typeof EventosScalarFieldEnum]


  export const LivesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    video: 'video',
    created_at: 'created_at',
    status: 'status'
  };

  export type LivesScalarFieldEnum = (typeof LivesScalarFieldEnum)[keyof typeof LivesScalarFieldEnum]


  export const GaleriaScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    image: 'image',
    created_at: 'created_at',
    status: 'status'
  };

  export type GaleriaScalarFieldEnum = (typeof GaleriaScalarFieldEnum)[keyof typeof GaleriaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ObreirosOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    cargo: 'cargo'
  };

  export type ObreirosOrderByRelevanceFieldEnum = (typeof ObreirosOrderByRelevanceFieldEnum)[keyof typeof ObreirosOrderByRelevanceFieldEnum]


  export const ObreirosNaCongregacaoOrderByRelevanceFieldEnum: {
    id: 'id',
    obreirosId: 'obreirosId',
    congregacaoId: 'congregacaoId'
  };

  export type ObreirosNaCongregacaoOrderByRelevanceFieldEnum = (typeof ObreirosNaCongregacaoOrderByRelevanceFieldEnum)[keyof typeof ObreirosNaCongregacaoOrderByRelevanceFieldEnum]


  export const CongregacaoOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    maps: 'maps',
    email: 'email',
    whatsapp: 'whatsapp',
    telefone: 'telefone',
    instagram: 'instagram',
    facebook: 'facebook',
    tiktok: 'tiktok',
    youtube: 'youtube',
    midia: 'midia',
    midia_telefones: 'midia_telefones'
  };

  export type CongregacaoOrderByRelevanceFieldEnum = (typeof CongregacaoOrderByRelevanceFieldEnum)[keyof typeof CongregacaoOrderByRelevanceFieldEnum]


  export const EventosOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    congregacaoId: 'congregacaoId'
  };

  export type EventosOrderByRelevanceFieldEnum = (typeof EventosOrderByRelevanceFieldEnum)[keyof typeof EventosOrderByRelevanceFieldEnum]


  export const LivesOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    video: 'video'
  };

  export type LivesOrderByRelevanceFieldEnum = (typeof LivesOrderByRelevanceFieldEnum)[keyof typeof LivesOrderByRelevanceFieldEnum]


  export const GaleriaOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    image: 'image'
  };

  export type GaleriaOrderByRelevanceFieldEnum = (typeof GaleriaOrderByRelevanceFieldEnum)[keyof typeof GaleriaOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ObreirosWhereInput = {
    AND?: ObreirosWhereInput | ObreirosWhereInput[]
    OR?: ObreirosWhereInput[]
    NOT?: ObreirosWhereInput | ObreirosWhereInput[]
    id?: StringFilter<"Obreiros"> | string
    name?: StringFilter<"Obreiros"> | string
    phone?: StringNullableFilter<"Obreiros"> | string | null
    cargo?: StringNullableFilter<"Obreiros"> | string | null
    created_at?: DateTimeFilter<"Obreiros"> | Date | string
    status?: BoolFilter<"Obreiros"> | boolean
    Congregacao?: ObreirosNaCongregacaoListRelationFilter
  }

  export type ObreirosOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    cargo?: SortOrderInput | SortOrder
    created_at?: SortOrder
    status?: SortOrder
    Congregacao?: ObreirosNaCongregacaoOrderByRelationAggregateInput
    _relevance?: ObreirosOrderByRelevanceInput
  }

  export type ObreirosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ObreirosWhereInput | ObreirosWhereInput[]
    OR?: ObreirosWhereInput[]
    NOT?: ObreirosWhereInput | ObreirosWhereInput[]
    name?: StringFilter<"Obreiros"> | string
    phone?: StringNullableFilter<"Obreiros"> | string | null
    cargo?: StringNullableFilter<"Obreiros"> | string | null
    created_at?: DateTimeFilter<"Obreiros"> | Date | string
    status?: BoolFilter<"Obreiros"> | boolean
    Congregacao?: ObreirosNaCongregacaoListRelationFilter
  }, "id">

  export type ObreirosOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    cargo?: SortOrderInput | SortOrder
    created_at?: SortOrder
    status?: SortOrder
    _count?: ObreirosCountOrderByAggregateInput
    _max?: ObreirosMaxOrderByAggregateInput
    _min?: ObreirosMinOrderByAggregateInput
  }

  export type ObreirosScalarWhereWithAggregatesInput = {
    AND?: ObreirosScalarWhereWithAggregatesInput | ObreirosScalarWhereWithAggregatesInput[]
    OR?: ObreirosScalarWhereWithAggregatesInput[]
    NOT?: ObreirosScalarWhereWithAggregatesInput | ObreirosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Obreiros"> | string
    name?: StringWithAggregatesFilter<"Obreiros"> | string
    phone?: StringNullableWithAggregatesFilter<"Obreiros"> | string | null
    cargo?: StringNullableWithAggregatesFilter<"Obreiros"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Obreiros"> | Date | string
    status?: BoolWithAggregatesFilter<"Obreiros"> | boolean
  }

  export type ObreirosNaCongregacaoWhereInput = {
    AND?: ObreirosNaCongregacaoWhereInput | ObreirosNaCongregacaoWhereInput[]
    OR?: ObreirosNaCongregacaoWhereInput[]
    NOT?: ObreirosNaCongregacaoWhereInput | ObreirosNaCongregacaoWhereInput[]
    id?: StringFilter<"ObreirosNaCongregacao"> | string
    obreirosId?: StringNullableFilter<"ObreirosNaCongregacao"> | string | null
    congregacaoId?: StringNullableFilter<"ObreirosNaCongregacao"> | string | null
    position?: IntNullableFilter<"ObreirosNaCongregacao"> | number | null
    Obreiros?: XOR<ObreirosNullableRelationFilter, ObreirosWhereInput> | null
    Congregacao?: XOR<CongregacaoNullableRelationFilter, CongregacaoWhereInput> | null
  }

  export type ObreirosNaCongregacaoOrderByWithRelationInput = {
    id?: SortOrder
    obreirosId?: SortOrderInput | SortOrder
    congregacaoId?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    Obreiros?: ObreirosOrderByWithRelationInput
    Congregacao?: CongregacaoOrderByWithRelationInput
    _relevance?: ObreirosNaCongregacaoOrderByRelevanceInput
  }

  export type ObreirosNaCongregacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ObreirosNaCongregacaoWhereInput | ObreirosNaCongregacaoWhereInput[]
    OR?: ObreirosNaCongregacaoWhereInput[]
    NOT?: ObreirosNaCongregacaoWhereInput | ObreirosNaCongregacaoWhereInput[]
    obreirosId?: StringNullableFilter<"ObreirosNaCongregacao"> | string | null
    congregacaoId?: StringNullableFilter<"ObreirosNaCongregacao"> | string | null
    position?: IntNullableFilter<"ObreirosNaCongregacao"> | number | null
    Obreiros?: XOR<ObreirosNullableRelationFilter, ObreirosWhereInput> | null
    Congregacao?: XOR<CongregacaoNullableRelationFilter, CongregacaoWhereInput> | null
  }, "id">

  export type ObreirosNaCongregacaoOrderByWithAggregationInput = {
    id?: SortOrder
    obreirosId?: SortOrderInput | SortOrder
    congregacaoId?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    _count?: ObreirosNaCongregacaoCountOrderByAggregateInput
    _avg?: ObreirosNaCongregacaoAvgOrderByAggregateInput
    _max?: ObreirosNaCongregacaoMaxOrderByAggregateInput
    _min?: ObreirosNaCongregacaoMinOrderByAggregateInput
    _sum?: ObreirosNaCongregacaoSumOrderByAggregateInput
  }

  export type ObreirosNaCongregacaoScalarWhereWithAggregatesInput = {
    AND?: ObreirosNaCongregacaoScalarWhereWithAggregatesInput | ObreirosNaCongregacaoScalarWhereWithAggregatesInput[]
    OR?: ObreirosNaCongregacaoScalarWhereWithAggregatesInput[]
    NOT?: ObreirosNaCongregacaoScalarWhereWithAggregatesInput | ObreirosNaCongregacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ObreirosNaCongregacao"> | string
    obreirosId?: StringNullableWithAggregatesFilter<"ObreirosNaCongregacao"> | string | null
    congregacaoId?: StringNullableWithAggregatesFilter<"ObreirosNaCongregacao"> | string | null
    position?: IntNullableWithAggregatesFilter<"ObreirosNaCongregacao"> | number | null
  }

  export type CongregacaoWhereInput = {
    AND?: CongregacaoWhereInput | CongregacaoWhereInput[]
    OR?: CongregacaoWhereInput[]
    NOT?: CongregacaoWhereInput | CongregacaoWhereInput[]
    id?: StringFilter<"Congregacao"> | string
    name?: StringFilter<"Congregacao"> | string
    address?: StringFilter<"Congregacao"> | string
    maps?: StringNullableFilter<"Congregacao"> | string | null
    inauguration?: DateTimeNullableFilter<"Congregacao"> | Date | string | null
    email?: StringNullableFilter<"Congregacao"> | string | null
    whatsapp?: StringNullableFilter<"Congregacao"> | string | null
    telefone?: StringNullableFilter<"Congregacao"> | string | null
    instagram?: StringNullableFilter<"Congregacao"> | string | null
    facebook?: StringNullableFilter<"Congregacao"> | string | null
    tiktok?: StringNullableFilter<"Congregacao"> | string | null
    youtube?: StringNullableFilter<"Congregacao"> | string | null
    midia?: StringNullableFilter<"Congregacao"> | string | null
    midia_telefones?: StringNullableFilter<"Congregacao"> | string | null
    created_at?: DateTimeFilter<"Congregacao"> | Date | string
    status?: BoolFilter<"Congregacao"> | boolean
    Obreiros?: ObreirosNaCongregacaoListRelationFilter
    Eventos?: EventosListRelationFilter
  }

  export type CongregacaoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    maps?: SortOrderInput | SortOrder
    inauguration?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    tiktok?: SortOrderInput | SortOrder
    youtube?: SortOrderInput | SortOrder
    midia?: SortOrderInput | SortOrder
    midia_telefones?: SortOrderInput | SortOrder
    created_at?: SortOrder
    status?: SortOrder
    Obreiros?: ObreirosNaCongregacaoOrderByRelationAggregateInput
    Eventos?: EventosOrderByRelationAggregateInput
    _relevance?: CongregacaoOrderByRelevanceInput
  }

  export type CongregacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CongregacaoWhereInput | CongregacaoWhereInput[]
    OR?: CongregacaoWhereInput[]
    NOT?: CongregacaoWhereInput | CongregacaoWhereInput[]
    name?: StringFilter<"Congregacao"> | string
    address?: StringFilter<"Congregacao"> | string
    maps?: StringNullableFilter<"Congregacao"> | string | null
    inauguration?: DateTimeNullableFilter<"Congregacao"> | Date | string | null
    email?: StringNullableFilter<"Congregacao"> | string | null
    whatsapp?: StringNullableFilter<"Congregacao"> | string | null
    telefone?: StringNullableFilter<"Congregacao"> | string | null
    instagram?: StringNullableFilter<"Congregacao"> | string | null
    facebook?: StringNullableFilter<"Congregacao"> | string | null
    tiktok?: StringNullableFilter<"Congregacao"> | string | null
    youtube?: StringNullableFilter<"Congregacao"> | string | null
    midia?: StringNullableFilter<"Congregacao"> | string | null
    midia_telefones?: StringNullableFilter<"Congregacao"> | string | null
    created_at?: DateTimeFilter<"Congregacao"> | Date | string
    status?: BoolFilter<"Congregacao"> | boolean
    Obreiros?: ObreirosNaCongregacaoListRelationFilter
    Eventos?: EventosListRelationFilter
  }, "id">

  export type CongregacaoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    maps?: SortOrderInput | SortOrder
    inauguration?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    tiktok?: SortOrderInput | SortOrder
    youtube?: SortOrderInput | SortOrder
    midia?: SortOrderInput | SortOrder
    midia_telefones?: SortOrderInput | SortOrder
    created_at?: SortOrder
    status?: SortOrder
    _count?: CongregacaoCountOrderByAggregateInput
    _max?: CongregacaoMaxOrderByAggregateInput
    _min?: CongregacaoMinOrderByAggregateInput
  }

  export type CongregacaoScalarWhereWithAggregatesInput = {
    AND?: CongregacaoScalarWhereWithAggregatesInput | CongregacaoScalarWhereWithAggregatesInput[]
    OR?: CongregacaoScalarWhereWithAggregatesInput[]
    NOT?: CongregacaoScalarWhereWithAggregatesInput | CongregacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Congregacao"> | string
    name?: StringWithAggregatesFilter<"Congregacao"> | string
    address?: StringWithAggregatesFilter<"Congregacao"> | string
    maps?: StringNullableWithAggregatesFilter<"Congregacao"> | string | null
    inauguration?: DateTimeNullableWithAggregatesFilter<"Congregacao"> | Date | string | null
    email?: StringNullableWithAggregatesFilter<"Congregacao"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"Congregacao"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Congregacao"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"Congregacao"> | string | null
    facebook?: StringNullableWithAggregatesFilter<"Congregacao"> | string | null
    tiktok?: StringNullableWithAggregatesFilter<"Congregacao"> | string | null
    youtube?: StringNullableWithAggregatesFilter<"Congregacao"> | string | null
    midia?: StringNullableWithAggregatesFilter<"Congregacao"> | string | null
    midia_telefones?: StringNullableWithAggregatesFilter<"Congregacao"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Congregacao"> | Date | string
    status?: BoolWithAggregatesFilter<"Congregacao"> | boolean
  }

  export type EventosWhereInput = {
    AND?: EventosWhereInput | EventosWhereInput[]
    OR?: EventosWhereInput[]
    NOT?: EventosWhereInput | EventosWhereInput[]
    id?: StringFilter<"Eventos"> | string
    name?: StringFilter<"Eventos"> | string
    congregacaoId?: StringNullableFilter<"Eventos"> | string | null
    date?: DateTimeFilter<"Eventos"> | Date | string
    added?: BoolFilter<"Eventos"> | boolean
    modified?: BoolFilter<"Eventos"> | boolean
    cancelled?: BoolFilter<"Eventos"> | boolean
    created_at?: DateTimeFilter<"Eventos"> | Date | string
    status?: BoolFilter<"Eventos"> | boolean
    congregacao?: XOR<CongregacaoNullableRelationFilter, CongregacaoWhereInput> | null
  }

  export type EventosOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    congregacaoId?: SortOrderInput | SortOrder
    date?: SortOrder
    added?: SortOrder
    modified?: SortOrder
    cancelled?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
    congregacao?: CongregacaoOrderByWithRelationInput
    _relevance?: EventosOrderByRelevanceInput
  }

  export type EventosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventosWhereInput | EventosWhereInput[]
    OR?: EventosWhereInput[]
    NOT?: EventosWhereInput | EventosWhereInput[]
    name?: StringFilter<"Eventos"> | string
    congregacaoId?: StringNullableFilter<"Eventos"> | string | null
    date?: DateTimeFilter<"Eventos"> | Date | string
    added?: BoolFilter<"Eventos"> | boolean
    modified?: BoolFilter<"Eventos"> | boolean
    cancelled?: BoolFilter<"Eventos"> | boolean
    created_at?: DateTimeFilter<"Eventos"> | Date | string
    status?: BoolFilter<"Eventos"> | boolean
    congregacao?: XOR<CongregacaoNullableRelationFilter, CongregacaoWhereInput> | null
  }, "id">

  export type EventosOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    congregacaoId?: SortOrderInput | SortOrder
    date?: SortOrder
    added?: SortOrder
    modified?: SortOrder
    cancelled?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
    _count?: EventosCountOrderByAggregateInput
    _max?: EventosMaxOrderByAggregateInput
    _min?: EventosMinOrderByAggregateInput
  }

  export type EventosScalarWhereWithAggregatesInput = {
    AND?: EventosScalarWhereWithAggregatesInput | EventosScalarWhereWithAggregatesInput[]
    OR?: EventosScalarWhereWithAggregatesInput[]
    NOT?: EventosScalarWhereWithAggregatesInput | EventosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Eventos"> | string
    name?: StringWithAggregatesFilter<"Eventos"> | string
    congregacaoId?: StringNullableWithAggregatesFilter<"Eventos"> | string | null
    date?: DateTimeWithAggregatesFilter<"Eventos"> | Date | string
    added?: BoolWithAggregatesFilter<"Eventos"> | boolean
    modified?: BoolWithAggregatesFilter<"Eventos"> | boolean
    cancelled?: BoolWithAggregatesFilter<"Eventos"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Eventos"> | Date | string
    status?: BoolWithAggregatesFilter<"Eventos"> | boolean
  }

  export type LivesWhereInput = {
    AND?: LivesWhereInput | LivesWhereInput[]
    OR?: LivesWhereInput[]
    NOT?: LivesWhereInput | LivesWhereInput[]
    id?: StringFilter<"Lives"> | string
    title?: StringFilter<"Lives"> | string
    slug?: StringFilter<"Lives"> | string
    video?: StringFilter<"Lives"> | string
    created_at?: DateTimeFilter<"Lives"> | Date | string
    status?: BoolFilter<"Lives"> | boolean
  }

  export type LivesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    video?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
    _relevance?: LivesOrderByRelevanceInput
  }

  export type LivesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LivesWhereInput | LivesWhereInput[]
    OR?: LivesWhereInput[]
    NOT?: LivesWhereInput | LivesWhereInput[]
    title?: StringFilter<"Lives"> | string
    slug?: StringFilter<"Lives"> | string
    video?: StringFilter<"Lives"> | string
    created_at?: DateTimeFilter<"Lives"> | Date | string
    status?: BoolFilter<"Lives"> | boolean
  }, "id">

  export type LivesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    video?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
    _count?: LivesCountOrderByAggregateInput
    _max?: LivesMaxOrderByAggregateInput
    _min?: LivesMinOrderByAggregateInput
  }

  export type LivesScalarWhereWithAggregatesInput = {
    AND?: LivesScalarWhereWithAggregatesInput | LivesScalarWhereWithAggregatesInput[]
    OR?: LivesScalarWhereWithAggregatesInput[]
    NOT?: LivesScalarWhereWithAggregatesInput | LivesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lives"> | string
    title?: StringWithAggregatesFilter<"Lives"> | string
    slug?: StringWithAggregatesFilter<"Lives"> | string
    video?: StringWithAggregatesFilter<"Lives"> | string
    created_at?: DateTimeWithAggregatesFilter<"Lives"> | Date | string
    status?: BoolWithAggregatesFilter<"Lives"> | boolean
  }

  export type GaleriaWhereInput = {
    AND?: GaleriaWhereInput | GaleriaWhereInput[]
    OR?: GaleriaWhereInput[]
    NOT?: GaleriaWhereInput | GaleriaWhereInput[]
    id?: StringFilter<"Galeria"> | string
    title?: StringFilter<"Galeria"> | string
    slug?: StringFilter<"Galeria"> | string
    image?: StringFilter<"Galeria"> | string
    created_at?: DateTimeFilter<"Galeria"> | Date | string
    status?: BoolFilter<"Galeria"> | boolean
  }

  export type GaleriaOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
    _relevance?: GaleriaOrderByRelevanceInput
  }

  export type GaleriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GaleriaWhereInput | GaleriaWhereInput[]
    OR?: GaleriaWhereInput[]
    NOT?: GaleriaWhereInput | GaleriaWhereInput[]
    title?: StringFilter<"Galeria"> | string
    slug?: StringFilter<"Galeria"> | string
    image?: StringFilter<"Galeria"> | string
    created_at?: DateTimeFilter<"Galeria"> | Date | string
    status?: BoolFilter<"Galeria"> | boolean
  }, "id">

  export type GaleriaOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
    _count?: GaleriaCountOrderByAggregateInput
    _max?: GaleriaMaxOrderByAggregateInput
    _min?: GaleriaMinOrderByAggregateInput
  }

  export type GaleriaScalarWhereWithAggregatesInput = {
    AND?: GaleriaScalarWhereWithAggregatesInput | GaleriaScalarWhereWithAggregatesInput[]
    OR?: GaleriaScalarWhereWithAggregatesInput[]
    NOT?: GaleriaScalarWhereWithAggregatesInput | GaleriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Galeria"> | string
    title?: StringWithAggregatesFilter<"Galeria"> | string
    slug?: StringWithAggregatesFilter<"Galeria"> | string
    image?: StringWithAggregatesFilter<"Galeria"> | string
    created_at?: DateTimeWithAggregatesFilter<"Galeria"> | Date | string
    status?: BoolWithAggregatesFilter<"Galeria"> | boolean
  }

  export type ObreirosCreateInput = {
    id?: string
    name: string
    phone?: string | null
    cargo?: string | null
    created_at?: Date | string
    status: boolean
    Congregacao?: ObreirosNaCongregacaoCreateNestedManyWithoutObreirosInput
  }

  export type ObreirosUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    cargo?: string | null
    created_at?: Date | string
    status: boolean
    Congregacao?: ObreirosNaCongregacaoUncheckedCreateNestedManyWithoutObreirosInput
  }

  export type ObreirosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    Congregacao?: ObreirosNaCongregacaoUpdateManyWithoutObreirosNestedInput
  }

  export type ObreirosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    Congregacao?: ObreirosNaCongregacaoUncheckedUpdateManyWithoutObreirosNestedInput
  }

  export type ObreirosCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    cargo?: string | null
    created_at?: Date | string
    status: boolean
  }

  export type ObreirosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObreirosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObreirosNaCongregacaoCreateInput = {
    id?: string
    position?: number | null
    Obreiros?: ObreirosCreateNestedOneWithoutCongregacaoInput
    Congregacao?: CongregacaoCreateNestedOneWithoutObreirosInput
  }

  export type ObreirosNaCongregacaoUncheckedCreateInput = {
    id?: string
    obreirosId?: string | null
    congregacaoId?: string | null
    position?: number | null
  }

  export type ObreirosNaCongregacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    Obreiros?: ObreirosUpdateOneWithoutCongregacaoNestedInput
    Congregacao?: CongregacaoUpdateOneWithoutObreirosNestedInput
  }

  export type ObreirosNaCongregacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    obreirosId?: NullableStringFieldUpdateOperationsInput | string | null
    congregacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ObreirosNaCongregacaoCreateManyInput = {
    id?: string
    obreirosId?: string | null
    congregacaoId?: string | null
    position?: number | null
  }

  export type ObreirosNaCongregacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ObreirosNaCongregacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    obreirosId?: NullableStringFieldUpdateOperationsInput | string | null
    congregacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CongregacaoCreateInput = {
    id?: string
    name: string
    address: string
    maps?: string | null
    inauguration?: Date | string | null
    email?: string | null
    whatsapp?: string | null
    telefone?: string | null
    instagram?: string | null
    facebook?: string | null
    tiktok?: string | null
    youtube?: string | null
    midia?: string | null
    midia_telefones?: string | null
    created_at?: Date | string
    status: boolean
    Obreiros?: ObreirosNaCongregacaoCreateNestedManyWithoutCongregacaoInput
    Eventos?: EventosCreateNestedManyWithoutCongregacaoInput
  }

  export type CongregacaoUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    maps?: string | null
    inauguration?: Date | string | null
    email?: string | null
    whatsapp?: string | null
    telefone?: string | null
    instagram?: string | null
    facebook?: string | null
    tiktok?: string | null
    youtube?: string | null
    midia?: string | null
    midia_telefones?: string | null
    created_at?: Date | string
    status: boolean
    Obreiros?: ObreirosNaCongregacaoUncheckedCreateNestedManyWithoutCongregacaoInput
    Eventos?: EventosUncheckedCreateNestedManyWithoutCongregacaoInput
  }

  export type CongregacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maps?: NullableStringFieldUpdateOperationsInput | string | null
    inauguration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    midia?: NullableStringFieldUpdateOperationsInput | string | null
    midia_telefones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    Obreiros?: ObreirosNaCongregacaoUpdateManyWithoutCongregacaoNestedInput
    Eventos?: EventosUpdateManyWithoutCongregacaoNestedInput
  }

  export type CongregacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maps?: NullableStringFieldUpdateOperationsInput | string | null
    inauguration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    midia?: NullableStringFieldUpdateOperationsInput | string | null
    midia_telefones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    Obreiros?: ObreirosNaCongregacaoUncheckedUpdateManyWithoutCongregacaoNestedInput
    Eventos?: EventosUncheckedUpdateManyWithoutCongregacaoNestedInput
  }

  export type CongregacaoCreateManyInput = {
    id?: string
    name: string
    address: string
    maps?: string | null
    inauguration?: Date | string | null
    email?: string | null
    whatsapp?: string | null
    telefone?: string | null
    instagram?: string | null
    facebook?: string | null
    tiktok?: string | null
    youtube?: string | null
    midia?: string | null
    midia_telefones?: string | null
    created_at?: Date | string
    status: boolean
  }

  export type CongregacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maps?: NullableStringFieldUpdateOperationsInput | string | null
    inauguration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    midia?: NullableStringFieldUpdateOperationsInput | string | null
    midia_telefones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CongregacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maps?: NullableStringFieldUpdateOperationsInput | string | null
    inauguration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    midia?: NullableStringFieldUpdateOperationsInput | string | null
    midia_telefones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventosCreateInput = {
    id?: string
    name: string
    date: Date | string
    added: boolean
    modified: boolean
    cancelled: boolean
    created_at?: Date | string
    status: boolean
    congregacao?: CongregacaoCreateNestedOneWithoutEventosInput
  }

  export type EventosUncheckedCreateInput = {
    id?: string
    name: string
    congregacaoId?: string | null
    date: Date | string
    added: boolean
    modified: boolean
    cancelled: boolean
    created_at?: Date | string
    status: boolean
  }

  export type EventosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    added?: BoolFieldUpdateOperationsInput | boolean
    modified?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    congregacao?: CongregacaoUpdateOneWithoutEventosNestedInput
  }

  export type EventosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    congregacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    added?: BoolFieldUpdateOperationsInput | boolean
    modified?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventosCreateManyInput = {
    id?: string
    name: string
    congregacaoId?: string | null
    date: Date | string
    added: boolean
    modified: boolean
    cancelled: boolean
    created_at?: Date | string
    status: boolean
  }

  export type EventosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    added?: BoolFieldUpdateOperationsInput | boolean
    modified?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    congregacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    added?: BoolFieldUpdateOperationsInput | boolean
    modified?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LivesCreateInput = {
    id?: string
    title: string
    slug: string
    video: string
    created_at?: Date | string
    status: boolean
  }

  export type LivesUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    video: string
    created_at?: Date | string
    status: boolean
  }

  export type LivesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LivesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LivesCreateManyInput = {
    id?: string
    title: string
    slug: string
    video: string
    created_at?: Date | string
    status: boolean
  }

  export type LivesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LivesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GaleriaCreateInput = {
    id?: string
    title: string
    slug: string
    image: string
    created_at?: Date | string
    status: boolean
  }

  export type GaleriaUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    image: string
    created_at?: Date | string
    status: boolean
  }

  export type GaleriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GaleriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GaleriaCreateManyInput = {
    id?: string
    title: string
    slug: string
    image: string
    created_at?: Date | string
    status: boolean
  }

  export type GaleriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GaleriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ObreirosNaCongregacaoListRelationFilter = {
    every?: ObreirosNaCongregacaoWhereInput
    some?: ObreirosNaCongregacaoWhereInput
    none?: ObreirosNaCongregacaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ObreirosNaCongregacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObreirosOrderByRelevanceInput = {
    fields: ObreirosOrderByRelevanceFieldEnum | ObreirosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ObreirosCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    cargo?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type ObreirosMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    cargo?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type ObreirosMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    cargo?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ObreirosNullableRelationFilter = {
    is?: ObreirosWhereInput | null
    isNot?: ObreirosWhereInput | null
  }

  export type CongregacaoNullableRelationFilter = {
    is?: CongregacaoWhereInput | null
    isNot?: CongregacaoWhereInput | null
  }

  export type ObreirosNaCongregacaoOrderByRelevanceInput = {
    fields: ObreirosNaCongregacaoOrderByRelevanceFieldEnum | ObreirosNaCongregacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ObreirosNaCongregacaoCountOrderByAggregateInput = {
    id?: SortOrder
    obreirosId?: SortOrder
    congregacaoId?: SortOrder
    position?: SortOrder
  }

  export type ObreirosNaCongregacaoAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ObreirosNaCongregacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    obreirosId?: SortOrder
    congregacaoId?: SortOrder
    position?: SortOrder
  }

  export type ObreirosNaCongregacaoMinOrderByAggregateInput = {
    id?: SortOrder
    obreirosId?: SortOrder
    congregacaoId?: SortOrder
    position?: SortOrder
  }

  export type ObreirosNaCongregacaoSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EventosListRelationFilter = {
    every?: EventosWhereInput
    some?: EventosWhereInput
    none?: EventosWhereInput
  }

  export type EventosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CongregacaoOrderByRelevanceInput = {
    fields: CongregacaoOrderByRelevanceFieldEnum | CongregacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CongregacaoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    maps?: SortOrder
    inauguration?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    telefone?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    tiktok?: SortOrder
    youtube?: SortOrder
    midia?: SortOrder
    midia_telefones?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type CongregacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    maps?: SortOrder
    inauguration?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    telefone?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    tiktok?: SortOrder
    youtube?: SortOrder
    midia?: SortOrder
    midia_telefones?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type CongregacaoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    maps?: SortOrder
    inauguration?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    telefone?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    tiktok?: SortOrder
    youtube?: SortOrder
    midia?: SortOrder
    midia_telefones?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EventosOrderByRelevanceInput = {
    fields: EventosOrderByRelevanceFieldEnum | EventosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventosCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    congregacaoId?: SortOrder
    date?: SortOrder
    added?: SortOrder
    modified?: SortOrder
    cancelled?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type EventosMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    congregacaoId?: SortOrder
    date?: SortOrder
    added?: SortOrder
    modified?: SortOrder
    cancelled?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type EventosMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    congregacaoId?: SortOrder
    date?: SortOrder
    added?: SortOrder
    modified?: SortOrder
    cancelled?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type LivesOrderByRelevanceInput = {
    fields: LivesOrderByRelevanceFieldEnum | LivesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LivesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    video?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type LivesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    video?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type LivesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    video?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type GaleriaOrderByRelevanceInput = {
    fields: GaleriaOrderByRelevanceFieldEnum | GaleriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GaleriaCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type GaleriaMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type GaleriaMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type ObreirosNaCongregacaoCreateNestedManyWithoutObreirosInput = {
    create?: XOR<ObreirosNaCongregacaoCreateWithoutObreirosInput, ObreirosNaCongregacaoUncheckedCreateWithoutObreirosInput> | ObreirosNaCongregacaoCreateWithoutObreirosInput[] | ObreirosNaCongregacaoUncheckedCreateWithoutObreirosInput[]
    connectOrCreate?: ObreirosNaCongregacaoCreateOrConnectWithoutObreirosInput | ObreirosNaCongregacaoCreateOrConnectWithoutObreirosInput[]
    createMany?: ObreirosNaCongregacaoCreateManyObreirosInputEnvelope
    connect?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
  }

  export type ObreirosNaCongregacaoUncheckedCreateNestedManyWithoutObreirosInput = {
    create?: XOR<ObreirosNaCongregacaoCreateWithoutObreirosInput, ObreirosNaCongregacaoUncheckedCreateWithoutObreirosInput> | ObreirosNaCongregacaoCreateWithoutObreirosInput[] | ObreirosNaCongregacaoUncheckedCreateWithoutObreirosInput[]
    connectOrCreate?: ObreirosNaCongregacaoCreateOrConnectWithoutObreirosInput | ObreirosNaCongregacaoCreateOrConnectWithoutObreirosInput[]
    createMany?: ObreirosNaCongregacaoCreateManyObreirosInputEnvelope
    connect?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ObreirosNaCongregacaoUpdateManyWithoutObreirosNestedInput = {
    create?: XOR<ObreirosNaCongregacaoCreateWithoutObreirosInput, ObreirosNaCongregacaoUncheckedCreateWithoutObreirosInput> | ObreirosNaCongregacaoCreateWithoutObreirosInput[] | ObreirosNaCongregacaoUncheckedCreateWithoutObreirosInput[]
    connectOrCreate?: ObreirosNaCongregacaoCreateOrConnectWithoutObreirosInput | ObreirosNaCongregacaoCreateOrConnectWithoutObreirosInput[]
    upsert?: ObreirosNaCongregacaoUpsertWithWhereUniqueWithoutObreirosInput | ObreirosNaCongregacaoUpsertWithWhereUniqueWithoutObreirosInput[]
    createMany?: ObreirosNaCongregacaoCreateManyObreirosInputEnvelope
    set?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    disconnect?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    delete?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    connect?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    update?: ObreirosNaCongregacaoUpdateWithWhereUniqueWithoutObreirosInput | ObreirosNaCongregacaoUpdateWithWhereUniqueWithoutObreirosInput[]
    updateMany?: ObreirosNaCongregacaoUpdateManyWithWhereWithoutObreirosInput | ObreirosNaCongregacaoUpdateManyWithWhereWithoutObreirosInput[]
    deleteMany?: ObreirosNaCongregacaoScalarWhereInput | ObreirosNaCongregacaoScalarWhereInput[]
  }

  export type ObreirosNaCongregacaoUncheckedUpdateManyWithoutObreirosNestedInput = {
    create?: XOR<ObreirosNaCongregacaoCreateWithoutObreirosInput, ObreirosNaCongregacaoUncheckedCreateWithoutObreirosInput> | ObreirosNaCongregacaoCreateWithoutObreirosInput[] | ObreirosNaCongregacaoUncheckedCreateWithoutObreirosInput[]
    connectOrCreate?: ObreirosNaCongregacaoCreateOrConnectWithoutObreirosInput | ObreirosNaCongregacaoCreateOrConnectWithoutObreirosInput[]
    upsert?: ObreirosNaCongregacaoUpsertWithWhereUniqueWithoutObreirosInput | ObreirosNaCongregacaoUpsertWithWhereUniqueWithoutObreirosInput[]
    createMany?: ObreirosNaCongregacaoCreateManyObreirosInputEnvelope
    set?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    disconnect?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    delete?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    connect?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    update?: ObreirosNaCongregacaoUpdateWithWhereUniqueWithoutObreirosInput | ObreirosNaCongregacaoUpdateWithWhereUniqueWithoutObreirosInput[]
    updateMany?: ObreirosNaCongregacaoUpdateManyWithWhereWithoutObreirosInput | ObreirosNaCongregacaoUpdateManyWithWhereWithoutObreirosInput[]
    deleteMany?: ObreirosNaCongregacaoScalarWhereInput | ObreirosNaCongregacaoScalarWhereInput[]
  }

  export type ObreirosCreateNestedOneWithoutCongregacaoInput = {
    create?: XOR<ObreirosCreateWithoutCongregacaoInput, ObreirosUncheckedCreateWithoutCongregacaoInput>
    connectOrCreate?: ObreirosCreateOrConnectWithoutCongregacaoInput
    connect?: ObreirosWhereUniqueInput
  }

  export type CongregacaoCreateNestedOneWithoutObreirosInput = {
    create?: XOR<CongregacaoCreateWithoutObreirosInput, CongregacaoUncheckedCreateWithoutObreirosInput>
    connectOrCreate?: CongregacaoCreateOrConnectWithoutObreirosInput
    connect?: CongregacaoWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ObreirosUpdateOneWithoutCongregacaoNestedInput = {
    create?: XOR<ObreirosCreateWithoutCongregacaoInput, ObreirosUncheckedCreateWithoutCongregacaoInput>
    connectOrCreate?: ObreirosCreateOrConnectWithoutCongregacaoInput
    upsert?: ObreirosUpsertWithoutCongregacaoInput
    disconnect?: ObreirosWhereInput | boolean
    delete?: ObreirosWhereInput | boolean
    connect?: ObreirosWhereUniqueInput
    update?: XOR<XOR<ObreirosUpdateToOneWithWhereWithoutCongregacaoInput, ObreirosUpdateWithoutCongregacaoInput>, ObreirosUncheckedUpdateWithoutCongregacaoInput>
  }

  export type CongregacaoUpdateOneWithoutObreirosNestedInput = {
    create?: XOR<CongregacaoCreateWithoutObreirosInput, CongregacaoUncheckedCreateWithoutObreirosInput>
    connectOrCreate?: CongregacaoCreateOrConnectWithoutObreirosInput
    upsert?: CongregacaoUpsertWithoutObreirosInput
    disconnect?: CongregacaoWhereInput | boolean
    delete?: CongregacaoWhereInput | boolean
    connect?: CongregacaoWhereUniqueInput
    update?: XOR<XOR<CongregacaoUpdateToOneWithWhereWithoutObreirosInput, CongregacaoUpdateWithoutObreirosInput>, CongregacaoUncheckedUpdateWithoutObreirosInput>
  }

  export type ObreirosNaCongregacaoCreateNestedManyWithoutCongregacaoInput = {
    create?: XOR<ObreirosNaCongregacaoCreateWithoutCongregacaoInput, ObreirosNaCongregacaoUncheckedCreateWithoutCongregacaoInput> | ObreirosNaCongregacaoCreateWithoutCongregacaoInput[] | ObreirosNaCongregacaoUncheckedCreateWithoutCongregacaoInput[]
    connectOrCreate?: ObreirosNaCongregacaoCreateOrConnectWithoutCongregacaoInput | ObreirosNaCongregacaoCreateOrConnectWithoutCongregacaoInput[]
    createMany?: ObreirosNaCongregacaoCreateManyCongregacaoInputEnvelope
    connect?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
  }

  export type EventosCreateNestedManyWithoutCongregacaoInput = {
    create?: XOR<EventosCreateWithoutCongregacaoInput, EventosUncheckedCreateWithoutCongregacaoInput> | EventosCreateWithoutCongregacaoInput[] | EventosUncheckedCreateWithoutCongregacaoInput[]
    connectOrCreate?: EventosCreateOrConnectWithoutCongregacaoInput | EventosCreateOrConnectWithoutCongregacaoInput[]
    createMany?: EventosCreateManyCongregacaoInputEnvelope
    connect?: EventosWhereUniqueInput | EventosWhereUniqueInput[]
  }

  export type ObreirosNaCongregacaoUncheckedCreateNestedManyWithoutCongregacaoInput = {
    create?: XOR<ObreirosNaCongregacaoCreateWithoutCongregacaoInput, ObreirosNaCongregacaoUncheckedCreateWithoutCongregacaoInput> | ObreirosNaCongregacaoCreateWithoutCongregacaoInput[] | ObreirosNaCongregacaoUncheckedCreateWithoutCongregacaoInput[]
    connectOrCreate?: ObreirosNaCongregacaoCreateOrConnectWithoutCongregacaoInput | ObreirosNaCongregacaoCreateOrConnectWithoutCongregacaoInput[]
    createMany?: ObreirosNaCongregacaoCreateManyCongregacaoInputEnvelope
    connect?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
  }

  export type EventosUncheckedCreateNestedManyWithoutCongregacaoInput = {
    create?: XOR<EventosCreateWithoutCongregacaoInput, EventosUncheckedCreateWithoutCongregacaoInput> | EventosCreateWithoutCongregacaoInput[] | EventosUncheckedCreateWithoutCongregacaoInput[]
    connectOrCreate?: EventosCreateOrConnectWithoutCongregacaoInput | EventosCreateOrConnectWithoutCongregacaoInput[]
    createMany?: EventosCreateManyCongregacaoInputEnvelope
    connect?: EventosWhereUniqueInput | EventosWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ObreirosNaCongregacaoUpdateManyWithoutCongregacaoNestedInput = {
    create?: XOR<ObreirosNaCongregacaoCreateWithoutCongregacaoInput, ObreirosNaCongregacaoUncheckedCreateWithoutCongregacaoInput> | ObreirosNaCongregacaoCreateWithoutCongregacaoInput[] | ObreirosNaCongregacaoUncheckedCreateWithoutCongregacaoInput[]
    connectOrCreate?: ObreirosNaCongregacaoCreateOrConnectWithoutCongregacaoInput | ObreirosNaCongregacaoCreateOrConnectWithoutCongregacaoInput[]
    upsert?: ObreirosNaCongregacaoUpsertWithWhereUniqueWithoutCongregacaoInput | ObreirosNaCongregacaoUpsertWithWhereUniqueWithoutCongregacaoInput[]
    createMany?: ObreirosNaCongregacaoCreateManyCongregacaoInputEnvelope
    set?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    disconnect?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    delete?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    connect?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    update?: ObreirosNaCongregacaoUpdateWithWhereUniqueWithoutCongregacaoInput | ObreirosNaCongregacaoUpdateWithWhereUniqueWithoutCongregacaoInput[]
    updateMany?: ObreirosNaCongregacaoUpdateManyWithWhereWithoutCongregacaoInput | ObreirosNaCongregacaoUpdateManyWithWhereWithoutCongregacaoInput[]
    deleteMany?: ObreirosNaCongregacaoScalarWhereInput | ObreirosNaCongregacaoScalarWhereInput[]
  }

  export type EventosUpdateManyWithoutCongregacaoNestedInput = {
    create?: XOR<EventosCreateWithoutCongregacaoInput, EventosUncheckedCreateWithoutCongregacaoInput> | EventosCreateWithoutCongregacaoInput[] | EventosUncheckedCreateWithoutCongregacaoInput[]
    connectOrCreate?: EventosCreateOrConnectWithoutCongregacaoInput | EventosCreateOrConnectWithoutCongregacaoInput[]
    upsert?: EventosUpsertWithWhereUniqueWithoutCongregacaoInput | EventosUpsertWithWhereUniqueWithoutCongregacaoInput[]
    createMany?: EventosCreateManyCongregacaoInputEnvelope
    set?: EventosWhereUniqueInput | EventosWhereUniqueInput[]
    disconnect?: EventosWhereUniqueInput | EventosWhereUniqueInput[]
    delete?: EventosWhereUniqueInput | EventosWhereUniqueInput[]
    connect?: EventosWhereUniqueInput | EventosWhereUniqueInput[]
    update?: EventosUpdateWithWhereUniqueWithoutCongregacaoInput | EventosUpdateWithWhereUniqueWithoutCongregacaoInput[]
    updateMany?: EventosUpdateManyWithWhereWithoutCongregacaoInput | EventosUpdateManyWithWhereWithoutCongregacaoInput[]
    deleteMany?: EventosScalarWhereInput | EventosScalarWhereInput[]
  }

  export type ObreirosNaCongregacaoUncheckedUpdateManyWithoutCongregacaoNestedInput = {
    create?: XOR<ObreirosNaCongregacaoCreateWithoutCongregacaoInput, ObreirosNaCongregacaoUncheckedCreateWithoutCongregacaoInput> | ObreirosNaCongregacaoCreateWithoutCongregacaoInput[] | ObreirosNaCongregacaoUncheckedCreateWithoutCongregacaoInput[]
    connectOrCreate?: ObreirosNaCongregacaoCreateOrConnectWithoutCongregacaoInput | ObreirosNaCongregacaoCreateOrConnectWithoutCongregacaoInput[]
    upsert?: ObreirosNaCongregacaoUpsertWithWhereUniqueWithoutCongregacaoInput | ObreirosNaCongregacaoUpsertWithWhereUniqueWithoutCongregacaoInput[]
    createMany?: ObreirosNaCongregacaoCreateManyCongregacaoInputEnvelope
    set?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    disconnect?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    delete?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    connect?: ObreirosNaCongregacaoWhereUniqueInput | ObreirosNaCongregacaoWhereUniqueInput[]
    update?: ObreirosNaCongregacaoUpdateWithWhereUniqueWithoutCongregacaoInput | ObreirosNaCongregacaoUpdateWithWhereUniqueWithoutCongregacaoInput[]
    updateMany?: ObreirosNaCongregacaoUpdateManyWithWhereWithoutCongregacaoInput | ObreirosNaCongregacaoUpdateManyWithWhereWithoutCongregacaoInput[]
    deleteMany?: ObreirosNaCongregacaoScalarWhereInput | ObreirosNaCongregacaoScalarWhereInput[]
  }

  export type EventosUncheckedUpdateManyWithoutCongregacaoNestedInput = {
    create?: XOR<EventosCreateWithoutCongregacaoInput, EventosUncheckedCreateWithoutCongregacaoInput> | EventosCreateWithoutCongregacaoInput[] | EventosUncheckedCreateWithoutCongregacaoInput[]
    connectOrCreate?: EventosCreateOrConnectWithoutCongregacaoInput | EventosCreateOrConnectWithoutCongregacaoInput[]
    upsert?: EventosUpsertWithWhereUniqueWithoutCongregacaoInput | EventosUpsertWithWhereUniqueWithoutCongregacaoInput[]
    createMany?: EventosCreateManyCongregacaoInputEnvelope
    set?: EventosWhereUniqueInput | EventosWhereUniqueInput[]
    disconnect?: EventosWhereUniqueInput | EventosWhereUniqueInput[]
    delete?: EventosWhereUniqueInput | EventosWhereUniqueInput[]
    connect?: EventosWhereUniqueInput | EventosWhereUniqueInput[]
    update?: EventosUpdateWithWhereUniqueWithoutCongregacaoInput | EventosUpdateWithWhereUniqueWithoutCongregacaoInput[]
    updateMany?: EventosUpdateManyWithWhereWithoutCongregacaoInput | EventosUpdateManyWithWhereWithoutCongregacaoInput[]
    deleteMany?: EventosScalarWhereInput | EventosScalarWhereInput[]
  }

  export type CongregacaoCreateNestedOneWithoutEventosInput = {
    create?: XOR<CongregacaoCreateWithoutEventosInput, CongregacaoUncheckedCreateWithoutEventosInput>
    connectOrCreate?: CongregacaoCreateOrConnectWithoutEventosInput
    connect?: CongregacaoWhereUniqueInput
  }

  export type CongregacaoUpdateOneWithoutEventosNestedInput = {
    create?: XOR<CongregacaoCreateWithoutEventosInput, CongregacaoUncheckedCreateWithoutEventosInput>
    connectOrCreate?: CongregacaoCreateOrConnectWithoutEventosInput
    upsert?: CongregacaoUpsertWithoutEventosInput
    disconnect?: CongregacaoWhereInput | boolean
    delete?: CongregacaoWhereInput | boolean
    connect?: CongregacaoWhereUniqueInput
    update?: XOR<XOR<CongregacaoUpdateToOneWithWhereWithoutEventosInput, CongregacaoUpdateWithoutEventosInput>, CongregacaoUncheckedUpdateWithoutEventosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ObreirosNaCongregacaoCreateWithoutObreirosInput = {
    id?: string
    position?: number | null
    Congregacao?: CongregacaoCreateNestedOneWithoutObreirosInput
  }

  export type ObreirosNaCongregacaoUncheckedCreateWithoutObreirosInput = {
    id?: string
    congregacaoId?: string | null
    position?: number | null
  }

  export type ObreirosNaCongregacaoCreateOrConnectWithoutObreirosInput = {
    where: ObreirosNaCongregacaoWhereUniqueInput
    create: XOR<ObreirosNaCongregacaoCreateWithoutObreirosInput, ObreirosNaCongregacaoUncheckedCreateWithoutObreirosInput>
  }

  export type ObreirosNaCongregacaoCreateManyObreirosInputEnvelope = {
    data: ObreirosNaCongregacaoCreateManyObreirosInput | ObreirosNaCongregacaoCreateManyObreirosInput[]
    skipDuplicates?: boolean
  }

  export type ObreirosNaCongregacaoUpsertWithWhereUniqueWithoutObreirosInput = {
    where: ObreirosNaCongregacaoWhereUniqueInput
    update: XOR<ObreirosNaCongregacaoUpdateWithoutObreirosInput, ObreirosNaCongregacaoUncheckedUpdateWithoutObreirosInput>
    create: XOR<ObreirosNaCongregacaoCreateWithoutObreirosInput, ObreirosNaCongregacaoUncheckedCreateWithoutObreirosInput>
  }

  export type ObreirosNaCongregacaoUpdateWithWhereUniqueWithoutObreirosInput = {
    where: ObreirosNaCongregacaoWhereUniqueInput
    data: XOR<ObreirosNaCongregacaoUpdateWithoutObreirosInput, ObreirosNaCongregacaoUncheckedUpdateWithoutObreirosInput>
  }

  export type ObreirosNaCongregacaoUpdateManyWithWhereWithoutObreirosInput = {
    where: ObreirosNaCongregacaoScalarWhereInput
    data: XOR<ObreirosNaCongregacaoUpdateManyMutationInput, ObreirosNaCongregacaoUncheckedUpdateManyWithoutObreirosInput>
  }

  export type ObreirosNaCongregacaoScalarWhereInput = {
    AND?: ObreirosNaCongregacaoScalarWhereInput | ObreirosNaCongregacaoScalarWhereInput[]
    OR?: ObreirosNaCongregacaoScalarWhereInput[]
    NOT?: ObreirosNaCongregacaoScalarWhereInput | ObreirosNaCongregacaoScalarWhereInput[]
    id?: StringFilter<"ObreirosNaCongregacao"> | string
    obreirosId?: StringNullableFilter<"ObreirosNaCongregacao"> | string | null
    congregacaoId?: StringNullableFilter<"ObreirosNaCongregacao"> | string | null
    position?: IntNullableFilter<"ObreirosNaCongregacao"> | number | null
  }

  export type ObreirosCreateWithoutCongregacaoInput = {
    id?: string
    name: string
    phone?: string | null
    cargo?: string | null
    created_at?: Date | string
    status: boolean
  }

  export type ObreirosUncheckedCreateWithoutCongregacaoInput = {
    id?: string
    name: string
    phone?: string | null
    cargo?: string | null
    created_at?: Date | string
    status: boolean
  }

  export type ObreirosCreateOrConnectWithoutCongregacaoInput = {
    where: ObreirosWhereUniqueInput
    create: XOR<ObreirosCreateWithoutCongregacaoInput, ObreirosUncheckedCreateWithoutCongregacaoInput>
  }

  export type CongregacaoCreateWithoutObreirosInput = {
    id?: string
    name: string
    address: string
    maps?: string | null
    inauguration?: Date | string | null
    email?: string | null
    whatsapp?: string | null
    telefone?: string | null
    instagram?: string | null
    facebook?: string | null
    tiktok?: string | null
    youtube?: string | null
    midia?: string | null
    midia_telefones?: string | null
    created_at?: Date | string
    status: boolean
    Eventos?: EventosCreateNestedManyWithoutCongregacaoInput
  }

  export type CongregacaoUncheckedCreateWithoutObreirosInput = {
    id?: string
    name: string
    address: string
    maps?: string | null
    inauguration?: Date | string | null
    email?: string | null
    whatsapp?: string | null
    telefone?: string | null
    instagram?: string | null
    facebook?: string | null
    tiktok?: string | null
    youtube?: string | null
    midia?: string | null
    midia_telefones?: string | null
    created_at?: Date | string
    status: boolean
    Eventos?: EventosUncheckedCreateNestedManyWithoutCongregacaoInput
  }

  export type CongregacaoCreateOrConnectWithoutObreirosInput = {
    where: CongregacaoWhereUniqueInput
    create: XOR<CongregacaoCreateWithoutObreirosInput, CongregacaoUncheckedCreateWithoutObreirosInput>
  }

  export type ObreirosUpsertWithoutCongregacaoInput = {
    update: XOR<ObreirosUpdateWithoutCongregacaoInput, ObreirosUncheckedUpdateWithoutCongregacaoInput>
    create: XOR<ObreirosCreateWithoutCongregacaoInput, ObreirosUncheckedCreateWithoutCongregacaoInput>
    where?: ObreirosWhereInput
  }

  export type ObreirosUpdateToOneWithWhereWithoutCongregacaoInput = {
    where?: ObreirosWhereInput
    data: XOR<ObreirosUpdateWithoutCongregacaoInput, ObreirosUncheckedUpdateWithoutCongregacaoInput>
  }

  export type ObreirosUpdateWithoutCongregacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObreirosUncheckedUpdateWithoutCongregacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CongregacaoUpsertWithoutObreirosInput = {
    update: XOR<CongregacaoUpdateWithoutObreirosInput, CongregacaoUncheckedUpdateWithoutObreirosInput>
    create: XOR<CongregacaoCreateWithoutObreirosInput, CongregacaoUncheckedCreateWithoutObreirosInput>
    where?: CongregacaoWhereInput
  }

  export type CongregacaoUpdateToOneWithWhereWithoutObreirosInput = {
    where?: CongregacaoWhereInput
    data: XOR<CongregacaoUpdateWithoutObreirosInput, CongregacaoUncheckedUpdateWithoutObreirosInput>
  }

  export type CongregacaoUpdateWithoutObreirosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maps?: NullableStringFieldUpdateOperationsInput | string | null
    inauguration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    midia?: NullableStringFieldUpdateOperationsInput | string | null
    midia_telefones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    Eventos?: EventosUpdateManyWithoutCongregacaoNestedInput
  }

  export type CongregacaoUncheckedUpdateWithoutObreirosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maps?: NullableStringFieldUpdateOperationsInput | string | null
    inauguration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    midia?: NullableStringFieldUpdateOperationsInput | string | null
    midia_telefones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    Eventos?: EventosUncheckedUpdateManyWithoutCongregacaoNestedInput
  }

  export type ObreirosNaCongregacaoCreateWithoutCongregacaoInput = {
    id?: string
    position?: number | null
    Obreiros?: ObreirosCreateNestedOneWithoutCongregacaoInput
  }

  export type ObreirosNaCongregacaoUncheckedCreateWithoutCongregacaoInput = {
    id?: string
    obreirosId?: string | null
    position?: number | null
  }

  export type ObreirosNaCongregacaoCreateOrConnectWithoutCongregacaoInput = {
    where: ObreirosNaCongregacaoWhereUniqueInput
    create: XOR<ObreirosNaCongregacaoCreateWithoutCongregacaoInput, ObreirosNaCongregacaoUncheckedCreateWithoutCongregacaoInput>
  }

  export type ObreirosNaCongregacaoCreateManyCongregacaoInputEnvelope = {
    data: ObreirosNaCongregacaoCreateManyCongregacaoInput | ObreirosNaCongregacaoCreateManyCongregacaoInput[]
    skipDuplicates?: boolean
  }

  export type EventosCreateWithoutCongregacaoInput = {
    id?: string
    name: string
    date: Date | string
    added: boolean
    modified: boolean
    cancelled: boolean
    created_at?: Date | string
    status: boolean
  }

  export type EventosUncheckedCreateWithoutCongregacaoInput = {
    id?: string
    name: string
    date: Date | string
    added: boolean
    modified: boolean
    cancelled: boolean
    created_at?: Date | string
    status: boolean
  }

  export type EventosCreateOrConnectWithoutCongregacaoInput = {
    where: EventosWhereUniqueInput
    create: XOR<EventosCreateWithoutCongregacaoInput, EventosUncheckedCreateWithoutCongregacaoInput>
  }

  export type EventosCreateManyCongregacaoInputEnvelope = {
    data: EventosCreateManyCongregacaoInput | EventosCreateManyCongregacaoInput[]
    skipDuplicates?: boolean
  }

  export type ObreirosNaCongregacaoUpsertWithWhereUniqueWithoutCongregacaoInput = {
    where: ObreirosNaCongregacaoWhereUniqueInput
    update: XOR<ObreirosNaCongregacaoUpdateWithoutCongregacaoInput, ObreirosNaCongregacaoUncheckedUpdateWithoutCongregacaoInput>
    create: XOR<ObreirosNaCongregacaoCreateWithoutCongregacaoInput, ObreirosNaCongregacaoUncheckedCreateWithoutCongregacaoInput>
  }

  export type ObreirosNaCongregacaoUpdateWithWhereUniqueWithoutCongregacaoInput = {
    where: ObreirosNaCongregacaoWhereUniqueInput
    data: XOR<ObreirosNaCongregacaoUpdateWithoutCongregacaoInput, ObreirosNaCongregacaoUncheckedUpdateWithoutCongregacaoInput>
  }

  export type ObreirosNaCongregacaoUpdateManyWithWhereWithoutCongregacaoInput = {
    where: ObreirosNaCongregacaoScalarWhereInput
    data: XOR<ObreirosNaCongregacaoUpdateManyMutationInput, ObreirosNaCongregacaoUncheckedUpdateManyWithoutCongregacaoInput>
  }

  export type EventosUpsertWithWhereUniqueWithoutCongregacaoInput = {
    where: EventosWhereUniqueInput
    update: XOR<EventosUpdateWithoutCongregacaoInput, EventosUncheckedUpdateWithoutCongregacaoInput>
    create: XOR<EventosCreateWithoutCongregacaoInput, EventosUncheckedCreateWithoutCongregacaoInput>
  }

  export type EventosUpdateWithWhereUniqueWithoutCongregacaoInput = {
    where: EventosWhereUniqueInput
    data: XOR<EventosUpdateWithoutCongregacaoInput, EventosUncheckedUpdateWithoutCongregacaoInput>
  }

  export type EventosUpdateManyWithWhereWithoutCongregacaoInput = {
    where: EventosScalarWhereInput
    data: XOR<EventosUpdateManyMutationInput, EventosUncheckedUpdateManyWithoutCongregacaoInput>
  }

  export type EventosScalarWhereInput = {
    AND?: EventosScalarWhereInput | EventosScalarWhereInput[]
    OR?: EventosScalarWhereInput[]
    NOT?: EventosScalarWhereInput | EventosScalarWhereInput[]
    id?: StringFilter<"Eventos"> | string
    name?: StringFilter<"Eventos"> | string
    congregacaoId?: StringNullableFilter<"Eventos"> | string | null
    date?: DateTimeFilter<"Eventos"> | Date | string
    added?: BoolFilter<"Eventos"> | boolean
    modified?: BoolFilter<"Eventos"> | boolean
    cancelled?: BoolFilter<"Eventos"> | boolean
    created_at?: DateTimeFilter<"Eventos"> | Date | string
    status?: BoolFilter<"Eventos"> | boolean
  }

  export type CongregacaoCreateWithoutEventosInput = {
    id?: string
    name: string
    address: string
    maps?: string | null
    inauguration?: Date | string | null
    email?: string | null
    whatsapp?: string | null
    telefone?: string | null
    instagram?: string | null
    facebook?: string | null
    tiktok?: string | null
    youtube?: string | null
    midia?: string | null
    midia_telefones?: string | null
    created_at?: Date | string
    status: boolean
    Obreiros?: ObreirosNaCongregacaoCreateNestedManyWithoutCongregacaoInput
  }

  export type CongregacaoUncheckedCreateWithoutEventosInput = {
    id?: string
    name: string
    address: string
    maps?: string | null
    inauguration?: Date | string | null
    email?: string | null
    whatsapp?: string | null
    telefone?: string | null
    instagram?: string | null
    facebook?: string | null
    tiktok?: string | null
    youtube?: string | null
    midia?: string | null
    midia_telefones?: string | null
    created_at?: Date | string
    status: boolean
    Obreiros?: ObreirosNaCongregacaoUncheckedCreateNestedManyWithoutCongregacaoInput
  }

  export type CongregacaoCreateOrConnectWithoutEventosInput = {
    where: CongregacaoWhereUniqueInput
    create: XOR<CongregacaoCreateWithoutEventosInput, CongregacaoUncheckedCreateWithoutEventosInput>
  }

  export type CongregacaoUpsertWithoutEventosInput = {
    update: XOR<CongregacaoUpdateWithoutEventosInput, CongregacaoUncheckedUpdateWithoutEventosInput>
    create: XOR<CongregacaoCreateWithoutEventosInput, CongregacaoUncheckedCreateWithoutEventosInput>
    where?: CongregacaoWhereInput
  }

  export type CongregacaoUpdateToOneWithWhereWithoutEventosInput = {
    where?: CongregacaoWhereInput
    data: XOR<CongregacaoUpdateWithoutEventosInput, CongregacaoUncheckedUpdateWithoutEventosInput>
  }

  export type CongregacaoUpdateWithoutEventosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maps?: NullableStringFieldUpdateOperationsInput | string | null
    inauguration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    midia?: NullableStringFieldUpdateOperationsInput | string | null
    midia_telefones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    Obreiros?: ObreirosNaCongregacaoUpdateManyWithoutCongregacaoNestedInput
  }

  export type CongregacaoUncheckedUpdateWithoutEventosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maps?: NullableStringFieldUpdateOperationsInput | string | null
    inauguration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    midia?: NullableStringFieldUpdateOperationsInput | string | null
    midia_telefones?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    Obreiros?: ObreirosNaCongregacaoUncheckedUpdateManyWithoutCongregacaoNestedInput
  }

  export type ObreirosNaCongregacaoCreateManyObreirosInput = {
    id?: string
    congregacaoId?: string | null
    position?: number | null
  }

  export type ObreirosNaCongregacaoUpdateWithoutObreirosInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    Congregacao?: CongregacaoUpdateOneWithoutObreirosNestedInput
  }

  export type ObreirosNaCongregacaoUncheckedUpdateWithoutObreirosInput = {
    id?: StringFieldUpdateOperationsInput | string
    congregacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ObreirosNaCongregacaoUncheckedUpdateManyWithoutObreirosInput = {
    id?: StringFieldUpdateOperationsInput | string
    congregacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ObreirosNaCongregacaoCreateManyCongregacaoInput = {
    id?: string
    obreirosId?: string | null
    position?: number | null
  }

  export type EventosCreateManyCongregacaoInput = {
    id?: string
    name: string
    date: Date | string
    added: boolean
    modified: boolean
    cancelled: boolean
    created_at?: Date | string
    status: boolean
  }

  export type ObreirosNaCongregacaoUpdateWithoutCongregacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    Obreiros?: ObreirosUpdateOneWithoutCongregacaoNestedInput
  }

  export type ObreirosNaCongregacaoUncheckedUpdateWithoutCongregacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    obreirosId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ObreirosNaCongregacaoUncheckedUpdateManyWithoutCongregacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    obreirosId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EventosUpdateWithoutCongregacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    added?: BoolFieldUpdateOperationsInput | boolean
    modified?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventosUncheckedUpdateWithoutCongregacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    added?: BoolFieldUpdateOperationsInput | boolean
    modified?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventosUncheckedUpdateManyWithoutCongregacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    added?: BoolFieldUpdateOperationsInput | boolean
    modified?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ObreirosCountOutputTypeDefaultArgs instead
     */
    export type ObreirosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ObreirosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CongregacaoCountOutputTypeDefaultArgs instead
     */
    export type CongregacaoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CongregacaoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ObreirosDefaultArgs instead
     */
    export type ObreirosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ObreirosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ObreirosNaCongregacaoDefaultArgs instead
     */
    export type ObreirosNaCongregacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ObreirosNaCongregacaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CongregacaoDefaultArgs instead
     */
    export type CongregacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CongregacaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventosDefaultArgs instead
     */
    export type EventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LivesDefaultArgs instead
     */
    export type LivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LivesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GaleriaDefaultArgs instead
     */
    export type GaleriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GaleriaDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}