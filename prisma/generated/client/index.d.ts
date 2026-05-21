
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
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Properties
 * const properties = await prisma.property.findMany()
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
   * // Fetch zero or more Properties
   * const properties = await prisma.property.findMany()
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
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs>;
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
    Property: 'Property',
    Photo: 'Photo'
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
      modelProps: "property" | "photo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
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
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    photos: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | PropertyCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    id: number | null
    PrecoVenda: number | null
    PrecoLocacao: number | null
    PrecoLocacaoTemporada: number | null
    AreaUtil: number | null
    AreaTotal: number | null
    QtdDormitorios: number | null
    QtdSuites: number | null
    QtdBanheiros: number | null
    QtdSalas: number | null
    QtdVagas: number | null
    QtdElevador: number | null
    QtdUnidadesAndar: number | null
    QtdAndar: number | null
    ArCondicionado: number | null
    Varanda: number | null
    ProntoMorar: number | null
    Lavabo: number | null
    TipoOferta: number | null
    Churrasqueira: number | null
    Copa: number | null
    WCEmpregada: number | null
    Piscina: number | null
    EstacionamentoVisitantes: number | null
    Playground: number | null
    QuadraTenis: number | null
    QuadraPoliEsportiva: number | null
    SalaGinastica: number | null
    SalaoFestas: number | null
    SalaoJogos: number | null
    Interfone: number | null
    campodefutebol: number | null
    PrecoCondominio: number | null
  }

  export type PropertySumAggregateOutputType = {
    id: number | null
    PrecoVenda: number | null
    PrecoLocacao: number | null
    PrecoLocacaoTemporada: number | null
    AreaUtil: number | null
    AreaTotal: number | null
    QtdDormitorios: number | null
    QtdSuites: number | null
    QtdBanheiros: number | null
    QtdSalas: number | null
    QtdVagas: number | null
    QtdElevador: number | null
    QtdUnidadesAndar: number | null
    QtdAndar: number | null
    ArCondicionado: number | null
    Varanda: number | null
    ProntoMorar: number | null
    Lavabo: number | null
    TipoOferta: number | null
    Churrasqueira: number | null
    Copa: number | null
    WCEmpregada: number | null
    Piscina: number | null
    EstacionamentoVisitantes: number | null
    Playground: number | null
    QuadraTenis: number | null
    QuadraPoliEsportiva: number | null
    SalaGinastica: number | null
    SalaoFestas: number | null
    SalaoJogos: number | null
    Interfone: number | null
    campodefutebol: number | null
    PrecoCondominio: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: number | null
    CodigoImovel: string | null
    TipoImovel: string | null
    SubTipoImovel: string | null
    CategoriaImovel: string | null
    Cidade: string | null
    Bairro: string | null
    Endereco: string | null
    CEP: string | null
    PrecoVenda: number | null
    PrecoLocacao: number | null
    PrecoLocacaoTemporada: number | null
    AreaUtil: number | null
    AreaTotal: number | null
    QtdDormitorios: number | null
    QtdSuites: number | null
    QtdBanheiros: number | null
    QtdSalas: number | null
    QtdVagas: number | null
    QtdElevador: number | null
    QtdUnidadesAndar: number | null
    QtdAndar: number | null
    Observacao: string | null
    ArCondicionado: number | null
    Varanda: number | null
    ProntoMorar: number | null
    Lavabo: number | null
    TipoOferta: number | null
    Churrasqueira: number | null
    Copa: number | null
    WCEmpregada: number | null
    Piscina: number | null
    EstacionamentoVisitantes: number | null
    Playground: number | null
    QuadraTenis: number | null
    QuadraPoliEsportiva: number | null
    SalaGinastica: number | null
    SalaoFestas: number | null
    SalaoJogos: number | null
    Interfone: number | null
    campodefutebol: number | null
    PrecoCondominio: number | null
    NomeCondominio: string | null
    video: string | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: number | null
    CodigoImovel: string | null
    TipoImovel: string | null
    SubTipoImovel: string | null
    CategoriaImovel: string | null
    Cidade: string | null
    Bairro: string | null
    Endereco: string | null
    CEP: string | null
    PrecoVenda: number | null
    PrecoLocacao: number | null
    PrecoLocacaoTemporada: number | null
    AreaUtil: number | null
    AreaTotal: number | null
    QtdDormitorios: number | null
    QtdSuites: number | null
    QtdBanheiros: number | null
    QtdSalas: number | null
    QtdVagas: number | null
    QtdElevador: number | null
    QtdUnidadesAndar: number | null
    QtdAndar: number | null
    Observacao: string | null
    ArCondicionado: number | null
    Varanda: number | null
    ProntoMorar: number | null
    Lavabo: number | null
    TipoOferta: number | null
    Churrasqueira: number | null
    Copa: number | null
    WCEmpregada: number | null
    Piscina: number | null
    EstacionamentoVisitantes: number | null
    Playground: number | null
    QuadraTenis: number | null
    QuadraPoliEsportiva: number | null
    SalaGinastica: number | null
    SalaoFestas: number | null
    SalaoJogos: number | null
    Interfone: number | null
    campodefutebol: number | null
    PrecoCondominio: number | null
    NomeCondominio: string | null
    video: string | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    CodigoImovel: number
    TipoImovel: number
    SubTipoImovel: number
    CategoriaImovel: number
    Cidade: number
    Bairro: number
    Endereco: number
    CEP: number
    PrecoVenda: number
    PrecoLocacao: number
    PrecoLocacaoTemporada: number
    AreaUtil: number
    AreaTotal: number
    QtdDormitorios: number
    QtdSuites: number
    QtdBanheiros: number
    QtdSalas: number
    QtdVagas: number
    QtdElevador: number
    QtdUnidadesAndar: number
    QtdAndar: number
    Observacao: number
    ArCondicionado: number
    Varanda: number
    ProntoMorar: number
    Lavabo: number
    TipoOferta: number
    Churrasqueira: number
    Copa: number
    WCEmpregada: number
    Piscina: number
    EstacionamentoVisitantes: number
    Playground: number
    QuadraTenis: number
    QuadraPoliEsportiva: number
    SalaGinastica: number
    SalaoFestas: number
    SalaoJogos: number
    Interfone: number
    campodefutebol: number
    PrecoCondominio: number
    NomeCondominio: number
    video: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    id?: true
    PrecoVenda?: true
    PrecoLocacao?: true
    PrecoLocacaoTemporada?: true
    AreaUtil?: true
    AreaTotal?: true
    QtdDormitorios?: true
    QtdSuites?: true
    QtdBanheiros?: true
    QtdSalas?: true
    QtdVagas?: true
    QtdElevador?: true
    QtdUnidadesAndar?: true
    QtdAndar?: true
    ArCondicionado?: true
    Varanda?: true
    ProntoMorar?: true
    Lavabo?: true
    TipoOferta?: true
    Churrasqueira?: true
    Copa?: true
    WCEmpregada?: true
    Piscina?: true
    EstacionamentoVisitantes?: true
    Playground?: true
    QuadraTenis?: true
    QuadraPoliEsportiva?: true
    SalaGinastica?: true
    SalaoFestas?: true
    SalaoJogos?: true
    Interfone?: true
    campodefutebol?: true
    PrecoCondominio?: true
  }

  export type PropertySumAggregateInputType = {
    id?: true
    PrecoVenda?: true
    PrecoLocacao?: true
    PrecoLocacaoTemporada?: true
    AreaUtil?: true
    AreaTotal?: true
    QtdDormitorios?: true
    QtdSuites?: true
    QtdBanheiros?: true
    QtdSalas?: true
    QtdVagas?: true
    QtdElevador?: true
    QtdUnidadesAndar?: true
    QtdAndar?: true
    ArCondicionado?: true
    Varanda?: true
    ProntoMorar?: true
    Lavabo?: true
    TipoOferta?: true
    Churrasqueira?: true
    Copa?: true
    WCEmpregada?: true
    Piscina?: true
    EstacionamentoVisitantes?: true
    Playground?: true
    QuadraTenis?: true
    QuadraPoliEsportiva?: true
    SalaGinastica?: true
    SalaoFestas?: true
    SalaoJogos?: true
    Interfone?: true
    campodefutebol?: true
    PrecoCondominio?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    CodigoImovel?: true
    TipoImovel?: true
    SubTipoImovel?: true
    CategoriaImovel?: true
    Cidade?: true
    Bairro?: true
    Endereco?: true
    CEP?: true
    PrecoVenda?: true
    PrecoLocacao?: true
    PrecoLocacaoTemporada?: true
    AreaUtil?: true
    AreaTotal?: true
    QtdDormitorios?: true
    QtdSuites?: true
    QtdBanheiros?: true
    QtdSalas?: true
    QtdVagas?: true
    QtdElevador?: true
    QtdUnidadesAndar?: true
    QtdAndar?: true
    Observacao?: true
    ArCondicionado?: true
    Varanda?: true
    ProntoMorar?: true
    Lavabo?: true
    TipoOferta?: true
    Churrasqueira?: true
    Copa?: true
    WCEmpregada?: true
    Piscina?: true
    EstacionamentoVisitantes?: true
    Playground?: true
    QuadraTenis?: true
    QuadraPoliEsportiva?: true
    SalaGinastica?: true
    SalaoFestas?: true
    SalaoJogos?: true
    Interfone?: true
    campodefutebol?: true
    PrecoCondominio?: true
    NomeCondominio?: true
    video?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    CodigoImovel?: true
    TipoImovel?: true
    SubTipoImovel?: true
    CategoriaImovel?: true
    Cidade?: true
    Bairro?: true
    Endereco?: true
    CEP?: true
    PrecoVenda?: true
    PrecoLocacao?: true
    PrecoLocacaoTemporada?: true
    AreaUtil?: true
    AreaTotal?: true
    QtdDormitorios?: true
    QtdSuites?: true
    QtdBanheiros?: true
    QtdSalas?: true
    QtdVagas?: true
    QtdElevador?: true
    QtdUnidadesAndar?: true
    QtdAndar?: true
    Observacao?: true
    ArCondicionado?: true
    Varanda?: true
    ProntoMorar?: true
    Lavabo?: true
    TipoOferta?: true
    Churrasqueira?: true
    Copa?: true
    WCEmpregada?: true
    Piscina?: true
    EstacionamentoVisitantes?: true
    Playground?: true
    QuadraTenis?: true
    QuadraPoliEsportiva?: true
    SalaGinastica?: true
    SalaoFestas?: true
    SalaoJogos?: true
    Interfone?: true
    campodefutebol?: true
    PrecoCondominio?: true
    NomeCondominio?: true
    video?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    CodigoImovel?: true
    TipoImovel?: true
    SubTipoImovel?: true
    CategoriaImovel?: true
    Cidade?: true
    Bairro?: true
    Endereco?: true
    CEP?: true
    PrecoVenda?: true
    PrecoLocacao?: true
    PrecoLocacaoTemporada?: true
    AreaUtil?: true
    AreaTotal?: true
    QtdDormitorios?: true
    QtdSuites?: true
    QtdBanheiros?: true
    QtdSalas?: true
    QtdVagas?: true
    QtdElevador?: true
    QtdUnidadesAndar?: true
    QtdAndar?: true
    Observacao?: true
    ArCondicionado?: true
    Varanda?: true
    ProntoMorar?: true
    Lavabo?: true
    TipoOferta?: true
    Churrasqueira?: true
    Copa?: true
    WCEmpregada?: true
    Piscina?: true
    EstacionamentoVisitantes?: true
    Playground?: true
    QuadraTenis?: true
    QuadraPoliEsportiva?: true
    SalaGinastica?: true
    SalaoFestas?: true
    SalaoJogos?: true
    Interfone?: true
    campodefutebol?: true
    PrecoCondominio?: true
    NomeCondominio?: true
    video?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: number
    CodigoImovel: string
    TipoImovel: string | null
    SubTipoImovel: string | null
    CategoriaImovel: string | null
    Cidade: string
    Bairro: string | null
    Endereco: string | null
    CEP: string | null
    PrecoVenda: number | null
    PrecoLocacao: number | null
    PrecoLocacaoTemporada: number | null
    AreaUtil: number | null
    AreaTotal: number | null
    QtdDormitorios: number | null
    QtdSuites: number | null
    QtdBanheiros: number | null
    QtdSalas: number | null
    QtdVagas: number | null
    QtdElevador: number | null
    QtdUnidadesAndar: number | null
    QtdAndar: number | null
    Observacao: string | null
    ArCondicionado: number | null
    Varanda: number | null
    ProntoMorar: number | null
    Lavabo: number | null
    TipoOferta: number | null
    Churrasqueira: number | null
    Copa: number | null
    WCEmpregada: number | null
    Piscina: number | null
    EstacionamentoVisitantes: number | null
    Playground: number | null
    QuadraTenis: number | null
    QuadraPoliEsportiva: number | null
    SalaGinastica: number | null
    SalaoFestas: number | null
    SalaoJogos: number | null
    Interfone: number | null
    campodefutebol: number | null
    PrecoCondominio: number | null
    NomeCondominio: string | null
    video: string | null
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CodigoImovel?: boolean
    TipoImovel?: boolean
    SubTipoImovel?: boolean
    CategoriaImovel?: boolean
    Cidade?: boolean
    Bairro?: boolean
    Endereco?: boolean
    CEP?: boolean
    PrecoVenda?: boolean
    PrecoLocacao?: boolean
    PrecoLocacaoTemporada?: boolean
    AreaUtil?: boolean
    AreaTotal?: boolean
    QtdDormitorios?: boolean
    QtdSuites?: boolean
    QtdBanheiros?: boolean
    QtdSalas?: boolean
    QtdVagas?: boolean
    QtdElevador?: boolean
    QtdUnidadesAndar?: boolean
    QtdAndar?: boolean
    Observacao?: boolean
    ArCondicionado?: boolean
    Varanda?: boolean
    ProntoMorar?: boolean
    Lavabo?: boolean
    TipoOferta?: boolean
    Churrasqueira?: boolean
    Copa?: boolean
    WCEmpregada?: boolean
    Piscina?: boolean
    EstacionamentoVisitantes?: boolean
    Playground?: boolean
    QuadraTenis?: boolean
    QuadraPoliEsportiva?: boolean
    SalaGinastica?: boolean
    SalaoFestas?: boolean
    SalaoJogos?: boolean
    Interfone?: boolean
    campodefutebol?: boolean
    PrecoCondominio?: boolean
    NomeCondominio?: boolean
    video?: boolean
    photos?: boolean | Property$photosArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CodigoImovel?: boolean
    TipoImovel?: boolean
    SubTipoImovel?: boolean
    CategoriaImovel?: boolean
    Cidade?: boolean
    Bairro?: boolean
    Endereco?: boolean
    CEP?: boolean
    PrecoVenda?: boolean
    PrecoLocacao?: boolean
    PrecoLocacaoTemporada?: boolean
    AreaUtil?: boolean
    AreaTotal?: boolean
    QtdDormitorios?: boolean
    QtdSuites?: boolean
    QtdBanheiros?: boolean
    QtdSalas?: boolean
    QtdVagas?: boolean
    QtdElevador?: boolean
    QtdUnidadesAndar?: boolean
    QtdAndar?: boolean
    Observacao?: boolean
    ArCondicionado?: boolean
    Varanda?: boolean
    ProntoMorar?: boolean
    Lavabo?: boolean
    TipoOferta?: boolean
    Churrasqueira?: boolean
    Copa?: boolean
    WCEmpregada?: boolean
    Piscina?: boolean
    EstacionamentoVisitantes?: boolean
    Playground?: boolean
    QuadraTenis?: boolean
    QuadraPoliEsportiva?: boolean
    SalaGinastica?: boolean
    SalaoFestas?: boolean
    SalaoJogos?: boolean
    Interfone?: boolean
    campodefutebol?: boolean
    PrecoCondominio?: boolean
    NomeCondominio?: boolean
    video?: boolean
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    CodigoImovel?: boolean
    TipoImovel?: boolean
    SubTipoImovel?: boolean
    CategoriaImovel?: boolean
    Cidade?: boolean
    Bairro?: boolean
    Endereco?: boolean
    CEP?: boolean
    PrecoVenda?: boolean
    PrecoLocacao?: boolean
    PrecoLocacaoTemporada?: boolean
    AreaUtil?: boolean
    AreaTotal?: boolean
    QtdDormitorios?: boolean
    QtdSuites?: boolean
    QtdBanheiros?: boolean
    QtdSalas?: boolean
    QtdVagas?: boolean
    QtdElevador?: boolean
    QtdUnidadesAndar?: boolean
    QtdAndar?: boolean
    Observacao?: boolean
    ArCondicionado?: boolean
    Varanda?: boolean
    ProntoMorar?: boolean
    Lavabo?: boolean
    TipoOferta?: boolean
    Churrasqueira?: boolean
    Copa?: boolean
    WCEmpregada?: boolean
    Piscina?: boolean
    EstacionamentoVisitantes?: boolean
    Playground?: boolean
    QuadraTenis?: boolean
    QuadraPoliEsportiva?: boolean
    SalaGinastica?: boolean
    SalaoFestas?: boolean
    SalaoJogos?: boolean
    Interfone?: boolean
    campodefutebol?: boolean
    PrecoCondominio?: boolean
    NomeCondominio?: boolean
    video?: boolean
  }

  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | Property$photosArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      photos: Prisma.$PhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      CodigoImovel: string
      TipoImovel: string | null
      SubTipoImovel: string | null
      CategoriaImovel: string | null
      Cidade: string
      Bairro: string | null
      Endereco: string | null
      CEP: string | null
      PrecoVenda: number | null
      PrecoLocacao: number | null
      PrecoLocacaoTemporada: number | null
      AreaUtil: number | null
      AreaTotal: number | null
      QtdDormitorios: number | null
      QtdSuites: number | null
      QtdBanheiros: number | null
      QtdSalas: number | null
      QtdVagas: number | null
      QtdElevador: number | null
      QtdUnidadesAndar: number | null
      QtdAndar: number | null
      Observacao: string | null
      ArCondicionado: number | null
      Varanda: number | null
      ProntoMorar: number | null
      Lavabo: number | null
      TipoOferta: number | null
      Churrasqueira: number | null
      Copa: number | null
      WCEmpregada: number | null
      Piscina: number | null
      EstacionamentoVisitantes: number | null
      Playground: number | null
      QuadraTenis: number | null
      QuadraPoliEsportiva: number | null
      SalaGinastica: number | null
      SalaoFestas: number | null
      SalaoJogos: number | null
      Interfone: number | null
      campodefutebol: number | null
      PrecoCondominio: number | null
      NomeCondominio: string | null
      video: string | null
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photos<T extends Property$photosArgs<ExtArgs> = {}>(args?: Subset<T, Property$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Property model
   */ 
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'Int'>
    readonly CodigoImovel: FieldRef<"Property", 'String'>
    readonly TipoImovel: FieldRef<"Property", 'String'>
    readonly SubTipoImovel: FieldRef<"Property", 'String'>
    readonly CategoriaImovel: FieldRef<"Property", 'String'>
    readonly Cidade: FieldRef<"Property", 'String'>
    readonly Bairro: FieldRef<"Property", 'String'>
    readonly Endereco: FieldRef<"Property", 'String'>
    readonly CEP: FieldRef<"Property", 'String'>
    readonly PrecoVenda: FieldRef<"Property", 'Float'>
    readonly PrecoLocacao: FieldRef<"Property", 'Float'>
    readonly PrecoLocacaoTemporada: FieldRef<"Property", 'Float'>
    readonly AreaUtil: FieldRef<"Property", 'Float'>
    readonly AreaTotal: FieldRef<"Property", 'Float'>
    readonly QtdDormitorios: FieldRef<"Property", 'Int'>
    readonly QtdSuites: FieldRef<"Property", 'Int'>
    readonly QtdBanheiros: FieldRef<"Property", 'Int'>
    readonly QtdSalas: FieldRef<"Property", 'Int'>
    readonly QtdVagas: FieldRef<"Property", 'Int'>
    readonly QtdElevador: FieldRef<"Property", 'Int'>
    readonly QtdUnidadesAndar: FieldRef<"Property", 'Int'>
    readonly QtdAndar: FieldRef<"Property", 'Int'>
    readonly Observacao: FieldRef<"Property", 'String'>
    readonly ArCondicionado: FieldRef<"Property", 'Int'>
    readonly Varanda: FieldRef<"Property", 'Int'>
    readonly ProntoMorar: FieldRef<"Property", 'Int'>
    readonly Lavabo: FieldRef<"Property", 'Int'>
    readonly TipoOferta: FieldRef<"Property", 'Int'>
    readonly Churrasqueira: FieldRef<"Property", 'Int'>
    readonly Copa: FieldRef<"Property", 'Int'>
    readonly WCEmpregada: FieldRef<"Property", 'Int'>
    readonly Piscina: FieldRef<"Property", 'Int'>
    readonly EstacionamentoVisitantes: FieldRef<"Property", 'Int'>
    readonly Playground: FieldRef<"Property", 'Int'>
    readonly QuadraTenis: FieldRef<"Property", 'Int'>
    readonly QuadraPoliEsportiva: FieldRef<"Property", 'Int'>
    readonly SalaGinastica: FieldRef<"Property", 'Int'>
    readonly SalaoFestas: FieldRef<"Property", 'Int'>
    readonly SalaoJogos: FieldRef<"Property", 'Int'>
    readonly Interfone: FieldRef<"Property", 'Int'>
    readonly campodefutebol: FieldRef<"Property", 'Int'>
    readonly PrecoCondominio: FieldRef<"Property", 'Int'>
    readonly NomeCondominio: FieldRef<"Property", 'String'>
    readonly video: FieldRef<"Property", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
  }

  /**
   * Property.photos
   */
  export type Property$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoAvgAggregateOutputType = {
    id: number | null
    property_id: number | null
    Principal: number | null
    Alterada: number | null
  }

  export type PhotoSumAggregateOutputType = {
    id: number | null
    property_id: number | null
    Principal: number | null
    Alterada: number | null
  }

  export type PhotoMinAggregateOutputType = {
    id: number | null
    property_id: number | null
    URLArquivo: string | null
    Principal: number | null
    Alterada: number | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: number | null
    property_id: number | null
    URLArquivo: string | null
    Principal: number | null
    Alterada: number | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    property_id: number
    URLArquivo: number
    Principal: number
    Alterada: number
    _all: number
  }


  export type PhotoAvgAggregateInputType = {
    id?: true
    property_id?: true
    Principal?: true
    Alterada?: true
  }

  export type PhotoSumAggregateInputType = {
    id?: true
    property_id?: true
    Principal?: true
    Alterada?: true
  }

  export type PhotoMinAggregateInputType = {
    id?: true
    property_id?: true
    URLArquivo?: true
    Principal?: true
    Alterada?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    property_id?: true
    URLArquivo?: true
    Principal?: true
    Alterada?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    property_id?: true
    URLArquivo?: true
    Principal?: true
    Alterada?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _avg?: PhotoAvgAggregateInputType
    _sum?: PhotoSumAggregateInputType
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: number
    property_id: number
    URLArquivo: string | null
    Principal: number | null
    Alterada: number | null
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    property_id?: boolean
    URLArquivo?: boolean
    Principal?: boolean
    Alterada?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    property_id?: boolean
    URLArquivo?: boolean
    Principal?: boolean
    Alterada?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    id?: boolean
    property_id?: boolean
    URLArquivo?: boolean
    Principal?: boolean
    Alterada?: boolean
  }

  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      property_id: number
      URLArquivo: string | null
      Principal: number | null
      Alterada: number | null
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {PhotoCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
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
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Photo model
   */ 
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'Int'>
    readonly property_id: FieldRef<"Photo", 'Int'>
    readonly URLArquivo: FieldRef<"Photo", 'String'>
    readonly Principal: FieldRef<"Photo", 'Int'>
    readonly Alterada: FieldRef<"Photo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo createManyAndReturn
   */
  export type PhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
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


  export const PropertyScalarFieldEnum: {
    id: 'id',
    CodigoImovel: 'CodigoImovel',
    TipoImovel: 'TipoImovel',
    SubTipoImovel: 'SubTipoImovel',
    CategoriaImovel: 'CategoriaImovel',
    Cidade: 'Cidade',
    Bairro: 'Bairro',
    Endereco: 'Endereco',
    CEP: 'CEP',
    PrecoVenda: 'PrecoVenda',
    PrecoLocacao: 'PrecoLocacao',
    PrecoLocacaoTemporada: 'PrecoLocacaoTemporada',
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
    Observacao: 'Observacao',
    ArCondicionado: 'ArCondicionado',
    Varanda: 'Varanda',
    ProntoMorar: 'ProntoMorar',
    Lavabo: 'Lavabo',
    TipoOferta: 'TipoOferta',
    Churrasqueira: 'Churrasqueira',
    Copa: 'Copa',
    WCEmpregada: 'WCEmpregada',
    Piscina: 'Piscina',
    EstacionamentoVisitantes: 'EstacionamentoVisitantes',
    Playground: 'Playground',
    QuadraTenis: 'QuadraTenis',
    QuadraPoliEsportiva: 'QuadraPoliEsportiva',
    SalaGinastica: 'SalaGinastica',
    SalaoFestas: 'SalaoFestas',
    SalaoJogos: 'SalaoJogos',
    Interfone: 'Interfone',
    campodefutebol: 'campodefutebol',
    PrecoCondominio: 'PrecoCondominio',
    NomeCondominio: 'NomeCondominio',
    video: 'video'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    property_id: 'property_id',
    URLArquivo: 'URLArquivo',
    Principal: 'Principal',
    Alterada: 'Alterada'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PropertyOrderByRelevanceFieldEnum: {
    CodigoImovel: 'CodigoImovel',
    TipoImovel: 'TipoImovel',
    SubTipoImovel: 'SubTipoImovel',
    CategoriaImovel: 'CategoriaImovel',
    Cidade: 'Cidade',
    Bairro: 'Bairro',
    Endereco: 'Endereco',
    CEP: 'CEP',
    Observacao: 'Observacao',
    NomeCondominio: 'NomeCondominio',
    video: 'video'
  };

  export type PropertyOrderByRelevanceFieldEnum = (typeof PropertyOrderByRelevanceFieldEnum)[keyof typeof PropertyOrderByRelevanceFieldEnum]


  export const PhotoOrderByRelevanceFieldEnum: {
    URLArquivo: 'URLArquivo'
  };

  export type PhotoOrderByRelevanceFieldEnum = (typeof PhotoOrderByRelevanceFieldEnum)[keyof typeof PhotoOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: IntFilter<"Property"> | number
    CodigoImovel?: StringFilter<"Property"> | string
    TipoImovel?: StringNullableFilter<"Property"> | string | null
    SubTipoImovel?: StringNullableFilter<"Property"> | string | null
    CategoriaImovel?: StringNullableFilter<"Property"> | string | null
    Cidade?: StringFilter<"Property"> | string
    Bairro?: StringNullableFilter<"Property"> | string | null
    Endereco?: StringNullableFilter<"Property"> | string | null
    CEP?: StringNullableFilter<"Property"> | string | null
    PrecoVenda?: FloatNullableFilter<"Property"> | number | null
    PrecoLocacao?: FloatNullableFilter<"Property"> | number | null
    PrecoLocacaoTemporada?: FloatNullableFilter<"Property"> | number | null
    AreaUtil?: FloatNullableFilter<"Property"> | number | null
    AreaTotal?: FloatNullableFilter<"Property"> | number | null
    QtdDormitorios?: IntNullableFilter<"Property"> | number | null
    QtdSuites?: IntNullableFilter<"Property"> | number | null
    QtdBanheiros?: IntNullableFilter<"Property"> | number | null
    QtdSalas?: IntNullableFilter<"Property"> | number | null
    QtdVagas?: IntNullableFilter<"Property"> | number | null
    QtdElevador?: IntNullableFilter<"Property"> | number | null
    QtdUnidadesAndar?: IntNullableFilter<"Property"> | number | null
    QtdAndar?: IntNullableFilter<"Property"> | number | null
    Observacao?: StringNullableFilter<"Property"> | string | null
    ArCondicionado?: IntNullableFilter<"Property"> | number | null
    Varanda?: IntNullableFilter<"Property"> | number | null
    ProntoMorar?: IntNullableFilter<"Property"> | number | null
    Lavabo?: IntNullableFilter<"Property"> | number | null
    TipoOferta?: IntNullableFilter<"Property"> | number | null
    Churrasqueira?: IntNullableFilter<"Property"> | number | null
    Copa?: IntNullableFilter<"Property"> | number | null
    WCEmpregada?: IntNullableFilter<"Property"> | number | null
    Piscina?: IntNullableFilter<"Property"> | number | null
    EstacionamentoVisitantes?: IntNullableFilter<"Property"> | number | null
    Playground?: IntNullableFilter<"Property"> | number | null
    QuadraTenis?: IntNullableFilter<"Property"> | number | null
    QuadraPoliEsportiva?: IntNullableFilter<"Property"> | number | null
    SalaGinastica?: IntNullableFilter<"Property"> | number | null
    SalaoFestas?: IntNullableFilter<"Property"> | number | null
    SalaoJogos?: IntNullableFilter<"Property"> | number | null
    Interfone?: IntNullableFilter<"Property"> | number | null
    campodefutebol?: IntNullableFilter<"Property"> | number | null
    PrecoCondominio?: IntNullableFilter<"Property"> | number | null
    NomeCondominio?: StringNullableFilter<"Property"> | string | null
    video?: StringNullableFilter<"Property"> | string | null
    photos?: PhotoListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    CodigoImovel?: SortOrder
    TipoImovel?: SortOrderInput | SortOrder
    SubTipoImovel?: SortOrderInput | SortOrder
    CategoriaImovel?: SortOrderInput | SortOrder
    Cidade?: SortOrder
    Bairro?: SortOrderInput | SortOrder
    Endereco?: SortOrderInput | SortOrder
    CEP?: SortOrderInput | SortOrder
    PrecoVenda?: SortOrderInput | SortOrder
    PrecoLocacao?: SortOrderInput | SortOrder
    PrecoLocacaoTemporada?: SortOrderInput | SortOrder
    AreaUtil?: SortOrderInput | SortOrder
    AreaTotal?: SortOrderInput | SortOrder
    QtdDormitorios?: SortOrderInput | SortOrder
    QtdSuites?: SortOrderInput | SortOrder
    QtdBanheiros?: SortOrderInput | SortOrder
    QtdSalas?: SortOrderInput | SortOrder
    QtdVagas?: SortOrderInput | SortOrder
    QtdElevador?: SortOrderInput | SortOrder
    QtdUnidadesAndar?: SortOrderInput | SortOrder
    QtdAndar?: SortOrderInput | SortOrder
    Observacao?: SortOrderInput | SortOrder
    ArCondicionado?: SortOrderInput | SortOrder
    Varanda?: SortOrderInput | SortOrder
    ProntoMorar?: SortOrderInput | SortOrder
    Lavabo?: SortOrderInput | SortOrder
    TipoOferta?: SortOrderInput | SortOrder
    Churrasqueira?: SortOrderInput | SortOrder
    Copa?: SortOrderInput | SortOrder
    WCEmpregada?: SortOrderInput | SortOrder
    Piscina?: SortOrderInput | SortOrder
    EstacionamentoVisitantes?: SortOrderInput | SortOrder
    Playground?: SortOrderInput | SortOrder
    QuadraTenis?: SortOrderInput | SortOrder
    QuadraPoliEsportiva?: SortOrderInput | SortOrder
    SalaGinastica?: SortOrderInput | SortOrder
    SalaoFestas?: SortOrderInput | SortOrder
    SalaoJogos?: SortOrderInput | SortOrder
    Interfone?: SortOrderInput | SortOrder
    campodefutebol?: SortOrderInput | SortOrder
    PrecoCondominio?: SortOrderInput | SortOrder
    NomeCondominio?: SortOrderInput | SortOrder
    video?: SortOrderInput | SortOrder
    photos?: PhotoOrderByRelationAggregateInput
    _relevance?: PropertyOrderByRelevanceInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    CodigoImovel?: StringFilter<"Property"> | string
    TipoImovel?: StringNullableFilter<"Property"> | string | null
    SubTipoImovel?: StringNullableFilter<"Property"> | string | null
    CategoriaImovel?: StringNullableFilter<"Property"> | string | null
    Cidade?: StringFilter<"Property"> | string
    Bairro?: StringNullableFilter<"Property"> | string | null
    Endereco?: StringNullableFilter<"Property"> | string | null
    CEP?: StringNullableFilter<"Property"> | string | null
    PrecoVenda?: FloatNullableFilter<"Property"> | number | null
    PrecoLocacao?: FloatNullableFilter<"Property"> | number | null
    PrecoLocacaoTemporada?: FloatNullableFilter<"Property"> | number | null
    AreaUtil?: FloatNullableFilter<"Property"> | number | null
    AreaTotal?: FloatNullableFilter<"Property"> | number | null
    QtdDormitorios?: IntNullableFilter<"Property"> | number | null
    QtdSuites?: IntNullableFilter<"Property"> | number | null
    QtdBanheiros?: IntNullableFilter<"Property"> | number | null
    QtdSalas?: IntNullableFilter<"Property"> | number | null
    QtdVagas?: IntNullableFilter<"Property"> | number | null
    QtdElevador?: IntNullableFilter<"Property"> | number | null
    QtdUnidadesAndar?: IntNullableFilter<"Property"> | number | null
    QtdAndar?: IntNullableFilter<"Property"> | number | null
    Observacao?: StringNullableFilter<"Property"> | string | null
    ArCondicionado?: IntNullableFilter<"Property"> | number | null
    Varanda?: IntNullableFilter<"Property"> | number | null
    ProntoMorar?: IntNullableFilter<"Property"> | number | null
    Lavabo?: IntNullableFilter<"Property"> | number | null
    TipoOferta?: IntNullableFilter<"Property"> | number | null
    Churrasqueira?: IntNullableFilter<"Property"> | number | null
    Copa?: IntNullableFilter<"Property"> | number | null
    WCEmpregada?: IntNullableFilter<"Property"> | number | null
    Piscina?: IntNullableFilter<"Property"> | number | null
    EstacionamentoVisitantes?: IntNullableFilter<"Property"> | number | null
    Playground?: IntNullableFilter<"Property"> | number | null
    QuadraTenis?: IntNullableFilter<"Property"> | number | null
    QuadraPoliEsportiva?: IntNullableFilter<"Property"> | number | null
    SalaGinastica?: IntNullableFilter<"Property"> | number | null
    SalaoFestas?: IntNullableFilter<"Property"> | number | null
    SalaoJogos?: IntNullableFilter<"Property"> | number | null
    Interfone?: IntNullableFilter<"Property"> | number | null
    campodefutebol?: IntNullableFilter<"Property"> | number | null
    PrecoCondominio?: IntNullableFilter<"Property"> | number | null
    NomeCondominio?: StringNullableFilter<"Property"> | string | null
    video?: StringNullableFilter<"Property"> | string | null
    photos?: PhotoListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    CodigoImovel?: SortOrder
    TipoImovel?: SortOrderInput | SortOrder
    SubTipoImovel?: SortOrderInput | SortOrder
    CategoriaImovel?: SortOrderInput | SortOrder
    Cidade?: SortOrder
    Bairro?: SortOrderInput | SortOrder
    Endereco?: SortOrderInput | SortOrder
    CEP?: SortOrderInput | SortOrder
    PrecoVenda?: SortOrderInput | SortOrder
    PrecoLocacao?: SortOrderInput | SortOrder
    PrecoLocacaoTemporada?: SortOrderInput | SortOrder
    AreaUtil?: SortOrderInput | SortOrder
    AreaTotal?: SortOrderInput | SortOrder
    QtdDormitorios?: SortOrderInput | SortOrder
    QtdSuites?: SortOrderInput | SortOrder
    QtdBanheiros?: SortOrderInput | SortOrder
    QtdSalas?: SortOrderInput | SortOrder
    QtdVagas?: SortOrderInput | SortOrder
    QtdElevador?: SortOrderInput | SortOrder
    QtdUnidadesAndar?: SortOrderInput | SortOrder
    QtdAndar?: SortOrderInput | SortOrder
    Observacao?: SortOrderInput | SortOrder
    ArCondicionado?: SortOrderInput | SortOrder
    Varanda?: SortOrderInput | SortOrder
    ProntoMorar?: SortOrderInput | SortOrder
    Lavabo?: SortOrderInput | SortOrder
    TipoOferta?: SortOrderInput | SortOrder
    Churrasqueira?: SortOrderInput | SortOrder
    Copa?: SortOrderInput | SortOrder
    WCEmpregada?: SortOrderInput | SortOrder
    Piscina?: SortOrderInput | SortOrder
    EstacionamentoVisitantes?: SortOrderInput | SortOrder
    Playground?: SortOrderInput | SortOrder
    QuadraTenis?: SortOrderInput | SortOrder
    QuadraPoliEsportiva?: SortOrderInput | SortOrder
    SalaGinastica?: SortOrderInput | SortOrder
    SalaoFestas?: SortOrderInput | SortOrder
    SalaoJogos?: SortOrderInput | SortOrder
    Interfone?: SortOrderInput | SortOrder
    campodefutebol?: SortOrderInput | SortOrder
    PrecoCondominio?: SortOrderInput | SortOrder
    NomeCondominio?: SortOrderInput | SortOrder
    video?: SortOrderInput | SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Property"> | number
    CodigoImovel?: StringWithAggregatesFilter<"Property"> | string
    TipoImovel?: StringNullableWithAggregatesFilter<"Property"> | string | null
    SubTipoImovel?: StringNullableWithAggregatesFilter<"Property"> | string | null
    CategoriaImovel?: StringNullableWithAggregatesFilter<"Property"> | string | null
    Cidade?: StringWithAggregatesFilter<"Property"> | string
    Bairro?: StringNullableWithAggregatesFilter<"Property"> | string | null
    Endereco?: StringNullableWithAggregatesFilter<"Property"> | string | null
    CEP?: StringNullableWithAggregatesFilter<"Property"> | string | null
    PrecoVenda?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    PrecoLocacao?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    PrecoLocacaoTemporada?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    AreaUtil?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    AreaTotal?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    QtdDormitorios?: IntNullableWithAggregatesFilter<"Property"> | number | null
    QtdSuites?: IntNullableWithAggregatesFilter<"Property"> | number | null
    QtdBanheiros?: IntNullableWithAggregatesFilter<"Property"> | number | null
    QtdSalas?: IntNullableWithAggregatesFilter<"Property"> | number | null
    QtdVagas?: IntNullableWithAggregatesFilter<"Property"> | number | null
    QtdElevador?: IntNullableWithAggregatesFilter<"Property"> | number | null
    QtdUnidadesAndar?: IntNullableWithAggregatesFilter<"Property"> | number | null
    QtdAndar?: IntNullableWithAggregatesFilter<"Property"> | number | null
    Observacao?: StringNullableWithAggregatesFilter<"Property"> | string | null
    ArCondicionado?: IntNullableWithAggregatesFilter<"Property"> | number | null
    Varanda?: IntNullableWithAggregatesFilter<"Property"> | number | null
    ProntoMorar?: IntNullableWithAggregatesFilter<"Property"> | number | null
    Lavabo?: IntNullableWithAggregatesFilter<"Property"> | number | null
    TipoOferta?: IntNullableWithAggregatesFilter<"Property"> | number | null
    Churrasqueira?: IntNullableWithAggregatesFilter<"Property"> | number | null
    Copa?: IntNullableWithAggregatesFilter<"Property"> | number | null
    WCEmpregada?: IntNullableWithAggregatesFilter<"Property"> | number | null
    Piscina?: IntNullableWithAggregatesFilter<"Property"> | number | null
    EstacionamentoVisitantes?: IntNullableWithAggregatesFilter<"Property"> | number | null
    Playground?: IntNullableWithAggregatesFilter<"Property"> | number | null
    QuadraTenis?: IntNullableWithAggregatesFilter<"Property"> | number | null
    QuadraPoliEsportiva?: IntNullableWithAggregatesFilter<"Property"> | number | null
    SalaGinastica?: IntNullableWithAggregatesFilter<"Property"> | number | null
    SalaoFestas?: IntNullableWithAggregatesFilter<"Property"> | number | null
    SalaoJogos?: IntNullableWithAggregatesFilter<"Property"> | number | null
    Interfone?: IntNullableWithAggregatesFilter<"Property"> | number | null
    campodefutebol?: IntNullableWithAggregatesFilter<"Property"> | number | null
    PrecoCondominio?: IntNullableWithAggregatesFilter<"Property"> | number | null
    NomeCondominio?: StringNullableWithAggregatesFilter<"Property"> | string | null
    video?: StringNullableWithAggregatesFilter<"Property"> | string | null
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: IntFilter<"Photo"> | number
    property_id?: IntFilter<"Photo"> | number
    URLArquivo?: StringNullableFilter<"Photo"> | string | null
    Principal?: IntNullableFilter<"Photo"> | number | null
    Alterada?: IntNullableFilter<"Photo"> | number | null
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    property_id?: SortOrder
    URLArquivo?: SortOrderInput | SortOrder
    Principal?: SortOrderInput | SortOrder
    Alterada?: SortOrderInput | SortOrder
    property?: PropertyOrderByWithRelationInput
    _relevance?: PhotoOrderByRelevanceInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    property_id?: IntFilter<"Photo"> | number
    URLArquivo?: StringNullableFilter<"Photo"> | string | null
    Principal?: IntNullableFilter<"Photo"> | number | null
    Alterada?: IntNullableFilter<"Photo"> | number | null
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    property_id?: SortOrder
    URLArquivo?: SortOrderInput | SortOrder
    Principal?: SortOrderInput | SortOrder
    Alterada?: SortOrderInput | SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _avg?: PhotoAvgOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
    _sum?: PhotoSumOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Photo"> | number
    property_id?: IntWithAggregatesFilter<"Photo"> | number
    URLArquivo?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    Principal?: IntNullableWithAggregatesFilter<"Photo"> | number | null
    Alterada?: IntNullableWithAggregatesFilter<"Photo"> | number | null
  }

  export type PropertyCreateInput = {
    CodigoImovel: string
    TipoImovel?: string | null
    SubTipoImovel?: string | null
    CategoriaImovel?: string | null
    Cidade: string
    Bairro?: string | null
    Endereco?: string | null
    CEP?: string | null
    PrecoVenda?: number | null
    PrecoLocacao?: number | null
    PrecoLocacaoTemporada?: number | null
    AreaUtil?: number | null
    AreaTotal?: number | null
    QtdDormitorios?: number | null
    QtdSuites?: number | null
    QtdBanheiros?: number | null
    QtdSalas?: number | null
    QtdVagas?: number | null
    QtdElevador?: number | null
    QtdUnidadesAndar?: number | null
    QtdAndar?: number | null
    Observacao?: string | null
    ArCondicionado?: number | null
    Varanda?: number | null
    ProntoMorar?: number | null
    Lavabo?: number | null
    TipoOferta?: number | null
    Churrasqueira?: number | null
    Copa?: number | null
    WCEmpregada?: number | null
    Piscina?: number | null
    EstacionamentoVisitantes?: number | null
    Playground?: number | null
    QuadraTenis?: number | null
    QuadraPoliEsportiva?: number | null
    SalaGinastica?: number | null
    SalaoFestas?: number | null
    SalaoJogos?: number | null
    Interfone?: number | null
    campodefutebol?: number | null
    PrecoCondominio?: number | null
    NomeCondominio?: string | null
    video?: string | null
    photos?: PhotoCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: number
    CodigoImovel: string
    TipoImovel?: string | null
    SubTipoImovel?: string | null
    CategoriaImovel?: string | null
    Cidade: string
    Bairro?: string | null
    Endereco?: string | null
    CEP?: string | null
    PrecoVenda?: number | null
    PrecoLocacao?: number | null
    PrecoLocacaoTemporada?: number | null
    AreaUtil?: number | null
    AreaTotal?: number | null
    QtdDormitorios?: number | null
    QtdSuites?: number | null
    QtdBanheiros?: number | null
    QtdSalas?: number | null
    QtdVagas?: number | null
    QtdElevador?: number | null
    QtdUnidadesAndar?: number | null
    QtdAndar?: number | null
    Observacao?: string | null
    ArCondicionado?: number | null
    Varanda?: number | null
    ProntoMorar?: number | null
    Lavabo?: number | null
    TipoOferta?: number | null
    Churrasqueira?: number | null
    Copa?: number | null
    WCEmpregada?: number | null
    Piscina?: number | null
    EstacionamentoVisitantes?: number | null
    Playground?: number | null
    QuadraTenis?: number | null
    QuadraPoliEsportiva?: number | null
    SalaGinastica?: number | null
    SalaoFestas?: number | null
    SalaoJogos?: number | null
    Interfone?: number | null
    campodefutebol?: number | null
    PrecoCondominio?: number | null
    NomeCondominio?: string | null
    video?: string | null
    photos?: PhotoUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    CodigoImovel?: StringFieldUpdateOperationsInput | string
    TipoImovel?: NullableStringFieldUpdateOperationsInput | string | null
    SubTipoImovel?: NullableStringFieldUpdateOperationsInput | string | null
    CategoriaImovel?: NullableStringFieldUpdateOperationsInput | string | null
    Cidade?: StringFieldUpdateOperationsInput | string
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    Endereco?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    PrecoVenda?: NullableFloatFieldUpdateOperationsInput | number | null
    PrecoLocacao?: NullableFloatFieldUpdateOperationsInput | number | null
    PrecoLocacaoTemporada?: NullableFloatFieldUpdateOperationsInput | number | null
    AreaUtil?: NullableFloatFieldUpdateOperationsInput | number | null
    AreaTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    QtdDormitorios?: NullableIntFieldUpdateOperationsInput | number | null
    QtdSuites?: NullableIntFieldUpdateOperationsInput | number | null
    QtdBanheiros?: NullableIntFieldUpdateOperationsInput | number | null
    QtdSalas?: NullableIntFieldUpdateOperationsInput | number | null
    QtdVagas?: NullableIntFieldUpdateOperationsInput | number | null
    QtdElevador?: NullableIntFieldUpdateOperationsInput | number | null
    QtdUnidadesAndar?: NullableIntFieldUpdateOperationsInput | number | null
    QtdAndar?: NullableIntFieldUpdateOperationsInput | number | null
    Observacao?: NullableStringFieldUpdateOperationsInput | string | null
    ArCondicionado?: NullableIntFieldUpdateOperationsInput | number | null
    Varanda?: NullableIntFieldUpdateOperationsInput | number | null
    ProntoMorar?: NullableIntFieldUpdateOperationsInput | number | null
    Lavabo?: NullableIntFieldUpdateOperationsInput | number | null
    TipoOferta?: NullableIntFieldUpdateOperationsInput | number | null
    Churrasqueira?: NullableIntFieldUpdateOperationsInput | number | null
    Copa?: NullableIntFieldUpdateOperationsInput | number | null
    WCEmpregada?: NullableIntFieldUpdateOperationsInput | number | null
    Piscina?: NullableIntFieldUpdateOperationsInput | number | null
    EstacionamentoVisitantes?: NullableIntFieldUpdateOperationsInput | number | null
    Playground?: NullableIntFieldUpdateOperationsInput | number | null
    QuadraTenis?: NullableIntFieldUpdateOperationsInput | number | null
    QuadraPoliEsportiva?: NullableIntFieldUpdateOperationsInput | number | null
    SalaGinastica?: NullableIntFieldUpdateOperationsInput | number | null
    SalaoFestas?: NullableIntFieldUpdateOperationsInput | number | null
    SalaoJogos?: NullableIntFieldUpdateOperationsInput | number | null
    Interfone?: NullableIntFieldUpdateOperationsInput | number | null
    campodefutebol?: NullableIntFieldUpdateOperationsInput | number | null
    PrecoCondominio?: NullableIntFieldUpdateOperationsInput | number | null
    NomeCondominio?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: PhotoUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    CodigoImovel?: StringFieldUpdateOperationsInput | string
    TipoImovel?: NullableStringFieldUpdateOperationsInput | string | null
    SubTipoImovel?: NullableStringFieldUpdateOperationsInput | string | null
    CategoriaImovel?: NullableStringFieldUpdateOperationsInput | string | null
    Cidade?: StringFieldUpdateOperationsInput | string
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    Endereco?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    PrecoVenda?: NullableFloatFieldUpdateOperationsInput | number | null
    PrecoLocacao?: NullableFloatFieldUpdateOperationsInput | number | null
    PrecoLocacaoTemporada?: NullableFloatFieldUpdateOperationsInput | number | null
    AreaUtil?: NullableFloatFieldUpdateOperationsInput | number | null
    AreaTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    QtdDormitorios?: NullableIntFieldUpdateOperationsInput | number | null
    QtdSuites?: NullableIntFieldUpdateOperationsInput | number | null
    QtdBanheiros?: NullableIntFieldUpdateOperationsInput | number | null
    QtdSalas?: NullableIntFieldUpdateOperationsInput | number | null
    QtdVagas?: NullableIntFieldUpdateOperationsInput | number | null
    QtdElevador?: NullableIntFieldUpdateOperationsInput | number | null
    QtdUnidadesAndar?: NullableIntFieldUpdateOperationsInput | number | null
    QtdAndar?: NullableIntFieldUpdateOperationsInput | number | null
    Observacao?: NullableStringFieldUpdateOperationsInput | string | null
    ArCondicionado?: NullableIntFieldUpdateOperationsInput | number | null
    Varanda?: NullableIntFieldUpdateOperationsInput | number | null
    ProntoMorar?: NullableIntFieldUpdateOperationsInput | number | null
    Lavabo?: NullableIntFieldUpdateOperationsInput | number | null
    TipoOferta?: NullableIntFieldUpdateOperationsInput | number | null
    Churrasqueira?: NullableIntFieldUpdateOperationsInput | number | null
    Copa?: NullableIntFieldUpdateOperationsInput | number | null
    WCEmpregada?: NullableIntFieldUpdateOperationsInput | number | null
    Piscina?: NullableIntFieldUpdateOperationsInput | number | null
    EstacionamentoVisitantes?: NullableIntFieldUpdateOperationsInput | number | null
    Playground?: NullableIntFieldUpdateOperationsInput | number | null
    QuadraTenis?: NullableIntFieldUpdateOperationsInput | number | null
    QuadraPoliEsportiva?: NullableIntFieldUpdateOperationsInput | number | null
    SalaGinastica?: NullableIntFieldUpdateOperationsInput | number | null
    SalaoFestas?: NullableIntFieldUpdateOperationsInput | number | null
    SalaoJogos?: NullableIntFieldUpdateOperationsInput | number | null
    Interfone?: NullableIntFieldUpdateOperationsInput | number | null
    campodefutebol?: NullableIntFieldUpdateOperationsInput | number | null
    PrecoCondominio?: NullableIntFieldUpdateOperationsInput | number | null
    NomeCondominio?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: PhotoUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: number
    CodigoImovel: string
    TipoImovel?: string | null
    SubTipoImovel?: string | null
    CategoriaImovel?: string | null
    Cidade: string
    Bairro?: string | null
    Endereco?: string | null
    CEP?: string | null
    PrecoVenda?: number | null
    PrecoLocacao?: number | null
    PrecoLocacaoTemporada?: number | null
    AreaUtil?: number | null
    AreaTotal?: number | null
    QtdDormitorios?: number | null
    QtdSuites?: number | null
    QtdBanheiros?: number | null
    QtdSalas?: number | null
    QtdVagas?: number | null
    QtdElevador?: number | null
    QtdUnidadesAndar?: number | null
    QtdAndar?: number | null
    Observacao?: string | null
    ArCondicionado?: number | null
    Varanda?: number | null
    ProntoMorar?: number | null
    Lavabo?: number | null
    TipoOferta?: number | null
    Churrasqueira?: number | null
    Copa?: number | null
    WCEmpregada?: number | null
    Piscina?: number | null
    EstacionamentoVisitantes?: number | null
    Playground?: number | null
    QuadraTenis?: number | null
    QuadraPoliEsportiva?: number | null
    SalaGinastica?: number | null
    SalaoFestas?: number | null
    SalaoJogos?: number | null
    Interfone?: number | null
    campodefutebol?: number | null
    PrecoCondominio?: number | null
    NomeCondominio?: string | null
    video?: string | null
  }

  export type PropertyUpdateManyMutationInput = {
    CodigoImovel?: StringFieldUpdateOperationsInput | string
    TipoImovel?: NullableStringFieldUpdateOperationsInput | string | null
    SubTipoImovel?: NullableStringFieldUpdateOperationsInput | string | null
    CategoriaImovel?: NullableStringFieldUpdateOperationsInput | string | null
    Cidade?: StringFieldUpdateOperationsInput | string
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    Endereco?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    PrecoVenda?: NullableFloatFieldUpdateOperationsInput | number | null
    PrecoLocacao?: NullableFloatFieldUpdateOperationsInput | number | null
    PrecoLocacaoTemporada?: NullableFloatFieldUpdateOperationsInput | number | null
    AreaUtil?: NullableFloatFieldUpdateOperationsInput | number | null
    AreaTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    QtdDormitorios?: NullableIntFieldUpdateOperationsInput | number | null
    QtdSuites?: NullableIntFieldUpdateOperationsInput | number | null
    QtdBanheiros?: NullableIntFieldUpdateOperationsInput | number | null
    QtdSalas?: NullableIntFieldUpdateOperationsInput | number | null
    QtdVagas?: NullableIntFieldUpdateOperationsInput | number | null
    QtdElevador?: NullableIntFieldUpdateOperationsInput | number | null
    QtdUnidadesAndar?: NullableIntFieldUpdateOperationsInput | number | null
    QtdAndar?: NullableIntFieldUpdateOperationsInput | number | null
    Observacao?: NullableStringFieldUpdateOperationsInput | string | null
    ArCondicionado?: NullableIntFieldUpdateOperationsInput | number | null
    Varanda?: NullableIntFieldUpdateOperationsInput | number | null
    ProntoMorar?: NullableIntFieldUpdateOperationsInput | number | null
    Lavabo?: NullableIntFieldUpdateOperationsInput | number | null
    TipoOferta?: NullableIntFieldUpdateOperationsInput | number | null
    Churrasqueira?: NullableIntFieldUpdateOperationsInput | number | null
    Copa?: NullableIntFieldUpdateOperationsInput | number | null
    WCEmpregada?: NullableIntFieldUpdateOperationsInput | number | null
    Piscina?: NullableIntFieldUpdateOperationsInput | number | null
    EstacionamentoVisitantes?: NullableIntFieldUpdateOperationsInput | number | null
    Playground?: NullableIntFieldUpdateOperationsInput | number | null
    QuadraTenis?: NullableIntFieldUpdateOperationsInput | number | null
    QuadraPoliEsportiva?: NullableIntFieldUpdateOperationsInput | number | null
    SalaGinastica?: NullableIntFieldUpdateOperationsInput | number | null
    SalaoFestas?: NullableIntFieldUpdateOperationsInput | number | null
    SalaoJogos?: NullableIntFieldUpdateOperationsInput | number | null
    Interfone?: NullableIntFieldUpdateOperationsInput | number | null
    campodefutebol?: NullableIntFieldUpdateOperationsInput | number | null
    PrecoCondominio?: NullableIntFieldUpdateOperationsInput | number | null
    NomeCondominio?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    CodigoImovel?: StringFieldUpdateOperationsInput | string
    TipoImovel?: NullableStringFieldUpdateOperationsInput | string | null
    SubTipoImovel?: NullableStringFieldUpdateOperationsInput | string | null
    CategoriaImovel?: NullableStringFieldUpdateOperationsInput | string | null
    Cidade?: StringFieldUpdateOperationsInput | string
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    Endereco?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    PrecoVenda?: NullableFloatFieldUpdateOperationsInput | number | null
    PrecoLocacao?: NullableFloatFieldUpdateOperationsInput | number | null
    PrecoLocacaoTemporada?: NullableFloatFieldUpdateOperationsInput | number | null
    AreaUtil?: NullableFloatFieldUpdateOperationsInput | number | null
    AreaTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    QtdDormitorios?: NullableIntFieldUpdateOperationsInput | number | null
    QtdSuites?: NullableIntFieldUpdateOperationsInput | number | null
    QtdBanheiros?: NullableIntFieldUpdateOperationsInput | number | null
    QtdSalas?: NullableIntFieldUpdateOperationsInput | number | null
    QtdVagas?: NullableIntFieldUpdateOperationsInput | number | null
    QtdElevador?: NullableIntFieldUpdateOperationsInput | number | null
    QtdUnidadesAndar?: NullableIntFieldUpdateOperationsInput | number | null
    QtdAndar?: NullableIntFieldUpdateOperationsInput | number | null
    Observacao?: NullableStringFieldUpdateOperationsInput | string | null
    ArCondicionado?: NullableIntFieldUpdateOperationsInput | number | null
    Varanda?: NullableIntFieldUpdateOperationsInput | number | null
    ProntoMorar?: NullableIntFieldUpdateOperationsInput | number | null
    Lavabo?: NullableIntFieldUpdateOperationsInput | number | null
    TipoOferta?: NullableIntFieldUpdateOperationsInput | number | null
    Churrasqueira?: NullableIntFieldUpdateOperationsInput | number | null
    Copa?: NullableIntFieldUpdateOperationsInput | number | null
    WCEmpregada?: NullableIntFieldUpdateOperationsInput | number | null
    Piscina?: NullableIntFieldUpdateOperationsInput | number | null
    EstacionamentoVisitantes?: NullableIntFieldUpdateOperationsInput | number | null
    Playground?: NullableIntFieldUpdateOperationsInput | number | null
    QuadraTenis?: NullableIntFieldUpdateOperationsInput | number | null
    QuadraPoliEsportiva?: NullableIntFieldUpdateOperationsInput | number | null
    SalaGinastica?: NullableIntFieldUpdateOperationsInput | number | null
    SalaoFestas?: NullableIntFieldUpdateOperationsInput | number | null
    SalaoJogos?: NullableIntFieldUpdateOperationsInput | number | null
    Interfone?: NullableIntFieldUpdateOperationsInput | number | null
    campodefutebol?: NullableIntFieldUpdateOperationsInput | number | null
    PrecoCondominio?: NullableIntFieldUpdateOperationsInput | number | null
    NomeCondominio?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhotoCreateInput = {
    URLArquivo?: string | null
    Principal?: number | null
    Alterada?: number | null
    property: PropertyCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: number
    property_id: number
    URLArquivo?: string | null
    Principal?: number | null
    Alterada?: number | null
  }

  export type PhotoUpdateInput = {
    URLArquivo?: NullableStringFieldUpdateOperationsInput | string | null
    Principal?: NullableIntFieldUpdateOperationsInput | number | null
    Alterada?: NullableIntFieldUpdateOperationsInput | number | null
    property?: PropertyUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    property_id?: IntFieldUpdateOperationsInput | number
    URLArquivo?: NullableStringFieldUpdateOperationsInput | string | null
    Principal?: NullableIntFieldUpdateOperationsInput | number | null
    Alterada?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PhotoCreateManyInput = {
    id?: number
    property_id: number
    URLArquivo?: string | null
    Principal?: number | null
    Alterada?: number | null
  }

  export type PhotoUpdateManyMutationInput = {
    URLArquivo?: NullableStringFieldUpdateOperationsInput | string | null
    Principal?: NullableIntFieldUpdateOperationsInput | number | null
    Alterada?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    property_id?: IntFieldUpdateOperationsInput | number
    URLArquivo?: NullableStringFieldUpdateOperationsInput | string | null
    Principal?: NullableIntFieldUpdateOperationsInput | number | null
    Alterada?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyOrderByRelevanceInput = {
    fields: PropertyOrderByRelevanceFieldEnum | PropertyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    CodigoImovel?: SortOrder
    TipoImovel?: SortOrder
    SubTipoImovel?: SortOrder
    CategoriaImovel?: SortOrder
    Cidade?: SortOrder
    Bairro?: SortOrder
    Endereco?: SortOrder
    CEP?: SortOrder
    PrecoVenda?: SortOrder
    PrecoLocacao?: SortOrder
    PrecoLocacaoTemporada?: SortOrder
    AreaUtil?: SortOrder
    AreaTotal?: SortOrder
    QtdDormitorios?: SortOrder
    QtdSuites?: SortOrder
    QtdBanheiros?: SortOrder
    QtdSalas?: SortOrder
    QtdVagas?: SortOrder
    QtdElevador?: SortOrder
    QtdUnidadesAndar?: SortOrder
    QtdAndar?: SortOrder
    Observacao?: SortOrder
    ArCondicionado?: SortOrder
    Varanda?: SortOrder
    ProntoMorar?: SortOrder
    Lavabo?: SortOrder
    TipoOferta?: SortOrder
    Churrasqueira?: SortOrder
    Copa?: SortOrder
    WCEmpregada?: SortOrder
    Piscina?: SortOrder
    EstacionamentoVisitantes?: SortOrder
    Playground?: SortOrder
    QuadraTenis?: SortOrder
    QuadraPoliEsportiva?: SortOrder
    SalaGinastica?: SortOrder
    SalaoFestas?: SortOrder
    SalaoJogos?: SortOrder
    Interfone?: SortOrder
    campodefutebol?: SortOrder
    PrecoCondominio?: SortOrder
    NomeCondominio?: SortOrder
    video?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    id?: SortOrder
    PrecoVenda?: SortOrder
    PrecoLocacao?: SortOrder
    PrecoLocacaoTemporada?: SortOrder
    AreaUtil?: SortOrder
    AreaTotal?: SortOrder
    QtdDormitorios?: SortOrder
    QtdSuites?: SortOrder
    QtdBanheiros?: SortOrder
    QtdSalas?: SortOrder
    QtdVagas?: SortOrder
    QtdElevador?: SortOrder
    QtdUnidadesAndar?: SortOrder
    QtdAndar?: SortOrder
    ArCondicionado?: SortOrder
    Varanda?: SortOrder
    ProntoMorar?: SortOrder
    Lavabo?: SortOrder
    TipoOferta?: SortOrder
    Churrasqueira?: SortOrder
    Copa?: SortOrder
    WCEmpregada?: SortOrder
    Piscina?: SortOrder
    EstacionamentoVisitantes?: SortOrder
    Playground?: SortOrder
    QuadraTenis?: SortOrder
    QuadraPoliEsportiva?: SortOrder
    SalaGinastica?: SortOrder
    SalaoFestas?: SortOrder
    SalaoJogos?: SortOrder
    Interfone?: SortOrder
    campodefutebol?: SortOrder
    PrecoCondominio?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    CodigoImovel?: SortOrder
    TipoImovel?: SortOrder
    SubTipoImovel?: SortOrder
    CategoriaImovel?: SortOrder
    Cidade?: SortOrder
    Bairro?: SortOrder
    Endereco?: SortOrder
    CEP?: SortOrder
    PrecoVenda?: SortOrder
    PrecoLocacao?: SortOrder
    PrecoLocacaoTemporada?: SortOrder
    AreaUtil?: SortOrder
    AreaTotal?: SortOrder
    QtdDormitorios?: SortOrder
    QtdSuites?: SortOrder
    QtdBanheiros?: SortOrder
    QtdSalas?: SortOrder
    QtdVagas?: SortOrder
    QtdElevador?: SortOrder
    QtdUnidadesAndar?: SortOrder
    QtdAndar?: SortOrder
    Observacao?: SortOrder
    ArCondicionado?: SortOrder
    Varanda?: SortOrder
    ProntoMorar?: SortOrder
    Lavabo?: SortOrder
    TipoOferta?: SortOrder
    Churrasqueira?: SortOrder
    Copa?: SortOrder
    WCEmpregada?: SortOrder
    Piscina?: SortOrder
    EstacionamentoVisitantes?: SortOrder
    Playground?: SortOrder
    QuadraTenis?: SortOrder
    QuadraPoliEsportiva?: SortOrder
    SalaGinastica?: SortOrder
    SalaoFestas?: SortOrder
    SalaoJogos?: SortOrder
    Interfone?: SortOrder
    campodefutebol?: SortOrder
    PrecoCondominio?: SortOrder
    NomeCondominio?: SortOrder
    video?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    CodigoImovel?: SortOrder
    TipoImovel?: SortOrder
    SubTipoImovel?: SortOrder
    CategoriaImovel?: SortOrder
    Cidade?: SortOrder
    Bairro?: SortOrder
    Endereco?: SortOrder
    CEP?: SortOrder
    PrecoVenda?: SortOrder
    PrecoLocacao?: SortOrder
    PrecoLocacaoTemporada?: SortOrder
    AreaUtil?: SortOrder
    AreaTotal?: SortOrder
    QtdDormitorios?: SortOrder
    QtdSuites?: SortOrder
    QtdBanheiros?: SortOrder
    QtdSalas?: SortOrder
    QtdVagas?: SortOrder
    QtdElevador?: SortOrder
    QtdUnidadesAndar?: SortOrder
    QtdAndar?: SortOrder
    Observacao?: SortOrder
    ArCondicionado?: SortOrder
    Varanda?: SortOrder
    ProntoMorar?: SortOrder
    Lavabo?: SortOrder
    TipoOferta?: SortOrder
    Churrasqueira?: SortOrder
    Copa?: SortOrder
    WCEmpregada?: SortOrder
    Piscina?: SortOrder
    EstacionamentoVisitantes?: SortOrder
    Playground?: SortOrder
    QuadraTenis?: SortOrder
    QuadraPoliEsportiva?: SortOrder
    SalaGinastica?: SortOrder
    SalaoFestas?: SortOrder
    SalaoJogos?: SortOrder
    Interfone?: SortOrder
    campodefutebol?: SortOrder
    PrecoCondominio?: SortOrder
    NomeCondominio?: SortOrder
    video?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    id?: SortOrder
    PrecoVenda?: SortOrder
    PrecoLocacao?: SortOrder
    PrecoLocacaoTemporada?: SortOrder
    AreaUtil?: SortOrder
    AreaTotal?: SortOrder
    QtdDormitorios?: SortOrder
    QtdSuites?: SortOrder
    QtdBanheiros?: SortOrder
    QtdSalas?: SortOrder
    QtdVagas?: SortOrder
    QtdElevador?: SortOrder
    QtdUnidadesAndar?: SortOrder
    QtdAndar?: SortOrder
    ArCondicionado?: SortOrder
    Varanda?: SortOrder
    ProntoMorar?: SortOrder
    Lavabo?: SortOrder
    TipoOferta?: SortOrder
    Churrasqueira?: SortOrder
    Copa?: SortOrder
    WCEmpregada?: SortOrder
    Piscina?: SortOrder
    EstacionamentoVisitantes?: SortOrder
    Playground?: SortOrder
    QuadraTenis?: SortOrder
    QuadraPoliEsportiva?: SortOrder
    SalaGinastica?: SortOrder
    SalaoFestas?: SortOrder
    SalaoJogos?: SortOrder
    Interfone?: SortOrder
    campodefutebol?: SortOrder
    PrecoCondominio?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type PropertyRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type PhotoOrderByRelevanceInput = {
    fields: PhotoOrderByRelevanceFieldEnum | PhotoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    property_id?: SortOrder
    URLArquivo?: SortOrder
    Principal?: SortOrder
    Alterada?: SortOrder
  }

  export type PhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    property_id?: SortOrder
    Principal?: SortOrder
    Alterada?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    property_id?: SortOrder
    URLArquivo?: SortOrder
    Principal?: SortOrder
    Alterada?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    property_id?: SortOrder
    URLArquivo?: SortOrder
    Principal?: SortOrder
    Alterada?: SortOrder
  }

  export type PhotoSumOrderByAggregateInput = {
    id?: SortOrder
    property_id?: SortOrder
    Principal?: SortOrder
    Alterada?: SortOrder
  }

  export type PhotoCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PhotoCreateWithoutPropertyInput, PhotoUncheckedCreateWithoutPropertyInput> | PhotoCreateWithoutPropertyInput[] | PhotoUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutPropertyInput | PhotoCreateOrConnectWithoutPropertyInput[]
    createMany?: PhotoCreateManyPropertyInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PhotoCreateWithoutPropertyInput, PhotoUncheckedCreateWithoutPropertyInput> | PhotoCreateWithoutPropertyInput[] | PhotoUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutPropertyInput | PhotoCreateOrConnectWithoutPropertyInput[]
    createMany?: PhotoCreateManyPropertyInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PhotoUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PhotoCreateWithoutPropertyInput, PhotoUncheckedCreateWithoutPropertyInput> | PhotoCreateWithoutPropertyInput[] | PhotoUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutPropertyInput | PhotoCreateOrConnectWithoutPropertyInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutPropertyInput | PhotoUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PhotoCreateManyPropertyInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutPropertyInput | PhotoUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutPropertyInput | PhotoUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PhotoUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PhotoCreateWithoutPropertyInput, PhotoUncheckedCreateWithoutPropertyInput> | PhotoCreateWithoutPropertyInput[] | PhotoUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutPropertyInput | PhotoCreateOrConnectWithoutPropertyInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutPropertyInput | PhotoUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PhotoCreateManyPropertyInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutPropertyInput | PhotoUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutPropertyInput | PhotoUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutPhotosInput = {
    create?: XOR<PropertyCreateWithoutPhotosInput, PropertyUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPhotosInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<PropertyCreateWithoutPhotosInput, PropertyUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPhotosInput
    upsert?: PropertyUpsertWithoutPhotosInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutPhotosInput, PropertyUpdateWithoutPhotosInput>, PropertyUncheckedUpdateWithoutPhotosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type PhotoCreateWithoutPropertyInput = {
    URLArquivo?: string | null
    Principal?: number | null
    Alterada?: number | null
  }

  export type PhotoUncheckedCreateWithoutPropertyInput = {
    id?: number
    URLArquivo?: string | null
    Principal?: number | null
    Alterada?: number | null
  }

  export type PhotoCreateOrConnectWithoutPropertyInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutPropertyInput, PhotoUncheckedCreateWithoutPropertyInput>
  }

  export type PhotoCreateManyPropertyInputEnvelope = {
    data: PhotoCreateManyPropertyInput | PhotoCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PhotoUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutPropertyInput, PhotoUncheckedUpdateWithoutPropertyInput>
    create: XOR<PhotoCreateWithoutPropertyInput, PhotoUncheckedCreateWithoutPropertyInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutPropertyInput, PhotoUncheckedUpdateWithoutPropertyInput>
  }

  export type PhotoUpdateManyWithWhereWithoutPropertyInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: IntFilter<"Photo"> | number
    property_id?: IntFilter<"Photo"> | number
    URLArquivo?: StringNullableFilter<"Photo"> | string | null
    Principal?: IntNullableFilter<"Photo"> | number | null
    Alterada?: IntNullableFilter<"Photo"> | number | null
  }

  export type PropertyCreateWithoutPhotosInput = {
    CodigoImovel: string
    TipoImovel?: string | null
    SubTipoImovel?: string | null
    CategoriaImovel?: string | null
    Cidade: string
    Bairro?: string | null
    Endereco?: string | null
    CEP?: string | null
    PrecoVenda?: number | null
    PrecoLocacao?: number | null
    PrecoLocacaoTemporada?: number | null
    AreaUtil?: number | null
    AreaTotal?: number | null
    QtdDormitorios?: number | null
    QtdSuites?: number | null
    QtdBanheiros?: number | null
    QtdSalas?: number | null
    QtdVagas?: number | null
    QtdElevador?: number | null
    QtdUnidadesAndar?: number | null
    QtdAndar?: number | null
    Observacao?: string | null
    ArCondicionado?: number | null
    Varanda?: number | null
    ProntoMorar?: number | null
    Lavabo?: number | null
    TipoOferta?: number | null
    Churrasqueira?: number | null
    Copa?: number | null
    WCEmpregada?: number | null
    Piscina?: number | null
    EstacionamentoVisitantes?: number | null
    Playground?: number | null
    QuadraTenis?: number | null
    QuadraPoliEsportiva?: number | null
    SalaGinastica?: number | null
    SalaoFestas?: number | null
    SalaoJogos?: number | null
    Interfone?: number | null
    campodefutebol?: number | null
    PrecoCondominio?: number | null
    NomeCondominio?: string | null
    video?: string | null
  }

  export type PropertyUncheckedCreateWithoutPhotosInput = {
    id?: number
    CodigoImovel: string
    TipoImovel?: string | null
    SubTipoImovel?: string | null
    CategoriaImovel?: string | null
    Cidade: string
    Bairro?: string | null
    Endereco?: string | null
    CEP?: string | null
    PrecoVenda?: number | null
    PrecoLocacao?: number | null
    PrecoLocacaoTemporada?: number | null
    AreaUtil?: number | null
    AreaTotal?: number | null
    QtdDormitorios?: number | null
    QtdSuites?: number | null
    QtdBanheiros?: number | null
    QtdSalas?: number | null
    QtdVagas?: number | null
    QtdElevador?: number | null
    QtdUnidadesAndar?: number | null
    QtdAndar?: number | null
    Observacao?: string | null
    ArCondicionado?: number | null
    Varanda?: number | null
    ProntoMorar?: number | null
    Lavabo?: number | null
    TipoOferta?: number | null
    Churrasqueira?: number | null
    Copa?: number | null
    WCEmpregada?: number | null
    Piscina?: number | null
    EstacionamentoVisitantes?: number | null
    Playground?: number | null
    QuadraTenis?: number | null
    QuadraPoliEsportiva?: number | null
    SalaGinastica?: number | null
    SalaoFestas?: number | null
    SalaoJogos?: number | null
    Interfone?: number | null
    campodefutebol?: number | null
    PrecoCondominio?: number | null
    NomeCondominio?: string | null
    video?: string | null
  }

  export type PropertyCreateOrConnectWithoutPhotosInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPhotosInput, PropertyUncheckedCreateWithoutPhotosInput>
  }

  export type PropertyUpsertWithoutPhotosInput = {
    update: XOR<PropertyUpdateWithoutPhotosInput, PropertyUncheckedUpdateWithoutPhotosInput>
    create: XOR<PropertyCreateWithoutPhotosInput, PropertyUncheckedCreateWithoutPhotosInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutPhotosInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutPhotosInput, PropertyUncheckedUpdateWithoutPhotosInput>
  }

  export type PropertyUpdateWithoutPhotosInput = {
    CodigoImovel?: StringFieldUpdateOperationsInput | string
    TipoImovel?: NullableStringFieldUpdateOperationsInput | string | null
    SubTipoImovel?: NullableStringFieldUpdateOperationsInput | string | null
    CategoriaImovel?: NullableStringFieldUpdateOperationsInput | string | null
    Cidade?: StringFieldUpdateOperationsInput | string
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    Endereco?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    PrecoVenda?: NullableFloatFieldUpdateOperationsInput | number | null
    PrecoLocacao?: NullableFloatFieldUpdateOperationsInput | number | null
    PrecoLocacaoTemporada?: NullableFloatFieldUpdateOperationsInput | number | null
    AreaUtil?: NullableFloatFieldUpdateOperationsInput | number | null
    AreaTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    QtdDormitorios?: NullableIntFieldUpdateOperationsInput | number | null
    QtdSuites?: NullableIntFieldUpdateOperationsInput | number | null
    QtdBanheiros?: NullableIntFieldUpdateOperationsInput | number | null
    QtdSalas?: NullableIntFieldUpdateOperationsInput | number | null
    QtdVagas?: NullableIntFieldUpdateOperationsInput | number | null
    QtdElevador?: NullableIntFieldUpdateOperationsInput | number | null
    QtdUnidadesAndar?: NullableIntFieldUpdateOperationsInput | number | null
    QtdAndar?: NullableIntFieldUpdateOperationsInput | number | null
    Observacao?: NullableStringFieldUpdateOperationsInput | string | null
    ArCondicionado?: NullableIntFieldUpdateOperationsInput | number | null
    Varanda?: NullableIntFieldUpdateOperationsInput | number | null
    ProntoMorar?: NullableIntFieldUpdateOperationsInput | number | null
    Lavabo?: NullableIntFieldUpdateOperationsInput | number | null
    TipoOferta?: NullableIntFieldUpdateOperationsInput | number | null
    Churrasqueira?: NullableIntFieldUpdateOperationsInput | number | null
    Copa?: NullableIntFieldUpdateOperationsInput | number | null
    WCEmpregada?: NullableIntFieldUpdateOperationsInput | number | null
    Piscina?: NullableIntFieldUpdateOperationsInput | number | null
    EstacionamentoVisitantes?: NullableIntFieldUpdateOperationsInput | number | null
    Playground?: NullableIntFieldUpdateOperationsInput | number | null
    QuadraTenis?: NullableIntFieldUpdateOperationsInput | number | null
    QuadraPoliEsportiva?: NullableIntFieldUpdateOperationsInput | number | null
    SalaGinastica?: NullableIntFieldUpdateOperationsInput | number | null
    SalaoFestas?: NullableIntFieldUpdateOperationsInput | number | null
    SalaoJogos?: NullableIntFieldUpdateOperationsInput | number | null
    Interfone?: NullableIntFieldUpdateOperationsInput | number | null
    campodefutebol?: NullableIntFieldUpdateOperationsInput | number | null
    PrecoCondominio?: NullableIntFieldUpdateOperationsInput | number | null
    NomeCondominio?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    CodigoImovel?: StringFieldUpdateOperationsInput | string
    TipoImovel?: NullableStringFieldUpdateOperationsInput | string | null
    SubTipoImovel?: NullableStringFieldUpdateOperationsInput | string | null
    CategoriaImovel?: NullableStringFieldUpdateOperationsInput | string | null
    Cidade?: StringFieldUpdateOperationsInput | string
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    Endereco?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    PrecoVenda?: NullableFloatFieldUpdateOperationsInput | number | null
    PrecoLocacao?: NullableFloatFieldUpdateOperationsInput | number | null
    PrecoLocacaoTemporada?: NullableFloatFieldUpdateOperationsInput | number | null
    AreaUtil?: NullableFloatFieldUpdateOperationsInput | number | null
    AreaTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    QtdDormitorios?: NullableIntFieldUpdateOperationsInput | number | null
    QtdSuites?: NullableIntFieldUpdateOperationsInput | number | null
    QtdBanheiros?: NullableIntFieldUpdateOperationsInput | number | null
    QtdSalas?: NullableIntFieldUpdateOperationsInput | number | null
    QtdVagas?: NullableIntFieldUpdateOperationsInput | number | null
    QtdElevador?: NullableIntFieldUpdateOperationsInput | number | null
    QtdUnidadesAndar?: NullableIntFieldUpdateOperationsInput | number | null
    QtdAndar?: NullableIntFieldUpdateOperationsInput | number | null
    Observacao?: NullableStringFieldUpdateOperationsInput | string | null
    ArCondicionado?: NullableIntFieldUpdateOperationsInput | number | null
    Varanda?: NullableIntFieldUpdateOperationsInput | number | null
    ProntoMorar?: NullableIntFieldUpdateOperationsInput | number | null
    Lavabo?: NullableIntFieldUpdateOperationsInput | number | null
    TipoOferta?: NullableIntFieldUpdateOperationsInput | number | null
    Churrasqueira?: NullableIntFieldUpdateOperationsInput | number | null
    Copa?: NullableIntFieldUpdateOperationsInput | number | null
    WCEmpregada?: NullableIntFieldUpdateOperationsInput | number | null
    Piscina?: NullableIntFieldUpdateOperationsInput | number | null
    EstacionamentoVisitantes?: NullableIntFieldUpdateOperationsInput | number | null
    Playground?: NullableIntFieldUpdateOperationsInput | number | null
    QuadraTenis?: NullableIntFieldUpdateOperationsInput | number | null
    QuadraPoliEsportiva?: NullableIntFieldUpdateOperationsInput | number | null
    SalaGinastica?: NullableIntFieldUpdateOperationsInput | number | null
    SalaoFestas?: NullableIntFieldUpdateOperationsInput | number | null
    SalaoJogos?: NullableIntFieldUpdateOperationsInput | number | null
    Interfone?: NullableIntFieldUpdateOperationsInput | number | null
    campodefutebol?: NullableIntFieldUpdateOperationsInput | number | null
    PrecoCondominio?: NullableIntFieldUpdateOperationsInput | number | null
    NomeCondominio?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhotoCreateManyPropertyInput = {
    id?: number
    URLArquivo?: string | null
    Principal?: number | null
    Alterada?: number | null
  }

  export type PhotoUpdateWithoutPropertyInput = {
    URLArquivo?: NullableStringFieldUpdateOperationsInput | string | null
    Principal?: NullableIntFieldUpdateOperationsInput | number | null
    Alterada?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PhotoUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    URLArquivo?: NullableStringFieldUpdateOperationsInput | string | null
    Principal?: NullableIntFieldUpdateOperationsInput | number | null
    Alterada?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PhotoUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    URLArquivo?: NullableStringFieldUpdateOperationsInput | string | null
    Principal?: NullableIntFieldUpdateOperationsInput | number | null
    Alterada?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PropertyCountOutputTypeDefaultArgs instead
     */
    export type PropertyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyDefaultArgs instead
     */
    export type PropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhotoDefaultArgs instead
     */
    export type PhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhotoDefaultArgs<ExtArgs>

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