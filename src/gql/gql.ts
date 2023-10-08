/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddProduct($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      name\n      description\n      price\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation CartSetItemQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}": types.CartSetItemQuantityDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...productListItem\n    variants {\n      ... on ProductColorVariant {\n        name\n      }\n      ... on ProductSizeColorVariant {\n        name\n      }\n    }\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetListByCollection($first: Int!, $skip: Int!, $collection: String!) {\n  products(\n    first: $first\n    skip: $skip\n    where: {collections_some: {slug_in: [$collection]}}\n  ) {\n    ...productListItem\n  }\n}": types.ProductsGetListByCollectionDocument,
    "fragment productListItem on Product {\n  id\n  slug\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetCountDocument,
    "query ProductsGetList {\n  products(first: 100) {\n    ...productListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCategory($first: Int!, $skip: Int!, $category: String!) {\n  products(\n    first: $first\n    skip: $skip\n    where: {categories_some: {slug_in: [$category]}}\n  ) {\n    ...productListItem\n  }\n}": types.ProductsGetListByCategoryDocument,
    "query ProductsGetListByPage($first: Int!, $skip: Int!) {\n  products(first: $first, skip: $skip) {\n    ...productListItem\n  }\n}": types.ProductsGetListByPageDocument,
    "query ProductsSearchByQuery($param: String!) {\n  products(where: {name_contains: $param}) {\n    ...productListItem\n  }\n}": types.ProductsSearchByQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      name\n      description\n      price\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetItemQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}"): typeof import('./graphql').CartSetItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...productListItem\n    variants {\n      ... on ProductColorVariant {\n        name\n      }\n      ... on ProductSizeColorVariant {\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCollection($first: Int!, $skip: Int!, $collection: String!) {\n  products(\n    first: $first\n    skip: $skip\n    where: {collections_some: {slug_in: [$collection]}}\n  ) {\n    ...productListItem\n  }\n}"): typeof import('./graphql').ProductsGetListByCollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment productListItem on Product {\n  id\n  slug\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products(first: 100) {\n    ...productListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCategory($first: Int!, $skip: Int!, $category: String!) {\n  products(\n    first: $first\n    skip: $skip\n    where: {categories_some: {slug_in: [$category]}}\n  ) {\n    ...productListItem\n  }\n}"): typeof import('./graphql').ProductsGetListByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByPage($first: Int!, $skip: Int!) {\n  products(first: $first, skip: $skip) {\n    ...productListItem\n  }\n}"): typeof import('./graphql').ProductsGetListByPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSearchByQuery($param: String!) {\n  products(where: {name_contains: $param}) {\n    ...productListItem\n  }\n}"): typeof import('./graphql').ProductsSearchByQueryDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
