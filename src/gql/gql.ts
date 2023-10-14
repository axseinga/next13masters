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
    "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      id\n      name\n      description\n      price\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetItemQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}": types.CartSetItemQuantityDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...productListItem\n    variants {\n      ... on ProductColorVariant {\n        name\n      }\n      ... on ProductSizeColorVariant {\n        name\n      }\n    }\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetImage($id: ID!) {\n  product(where: {id: $id}) {\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n  }\n}": types.ProductGetImageDocument,
    "query ProductsGetListByCollection($first: Int!, $skip: Int!, $collection: String!) {\n  products(\n    first: $first\n    skip: $skip\n    where: {collections_some: {slug_in: [$collection]}}\n  ) {\n    ...productListItem\n  }\n}": types.ProductsGetListByCollectionDocument,
    "query ProductGetReviews($id: ID!) {\n  product(where: {id: $id}) {\n    reviews {\n      id\n      ...productReview\n    }\n  }\n}": types.ProductGetReviewsDocument,
    "fragment productListItem on Product {\n  id\n  slug\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "fragment productReview on Review {\n  headline\n  name\n  email\n  content\n  rating\n}": types.ProductReviewFragmentDoc,
    "query ProductsGetCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetCountDocument,
    "query ProductsGetList {\n  products(first: 100) {\n    ...productListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCategory($first: Int!, $skip: Int!, $category: String!) {\n  products(\n    first: $first\n    skip: $skip\n    where: {categories_some: {slug_in: [$category]}}\n  ) {\n    ...productListItem\n  }\n}": types.ProductsGetListByCategoryDocument,
    "query ProductsGetListByPage($first: Int!, $skip: Int!) {\n  products(first: $first, skip: $skip) {\n    ...productListItem\n  }\n}": types.ProductsGetListByPageDocument,
    "query ProductsSearchByQuery($param: String!) {\n  products(where: {name_contains: $param}) {\n    ...productListItem\n  }\n}": types.ProductsSearchByQueryDocument,
    "query ProductsSortByPrice {\n  products(first: 100, orderBy: price_ASC) {\n    ...productListItem\n  }\n}": types.ProductsSortByPriceDocument,
    "mutation ReviewCreate($productId: ID!, $headline: String!, $name: String!, $email: String!, $content: String!, $rating: Int!) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, rating: $rating, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "mutation ReviewPublish($reviewId: ID!) {\n  publishReview(where: {id: $reviewId}, to: PUBLISHED) {\n    id\n  }\n}": types.ReviewPublishDocument,
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
export function graphql(source: "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      id\n      name\n      description\n      price\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
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
export function graphql(source: "query ProductGetImage($id: ID!) {\n  product(where: {id: $id}) {\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n  }\n}"): typeof import('./graphql').ProductGetImageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCollection($first: Int!, $skip: Int!, $collection: String!) {\n  products(\n    first: $first\n    skip: $skip\n    where: {collections_some: {slug_in: [$collection]}}\n  ) {\n    ...productListItem\n  }\n}"): typeof import('./graphql').ProductsGetListByCollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetReviews($id: ID!) {\n  product(where: {id: $id}) {\n    reviews {\n      id\n      ...productReview\n    }\n  }\n}"): typeof import('./graphql').ProductGetReviewsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment productListItem on Product {\n  id\n  slug\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment productReview on Review {\n  headline\n  name\n  email\n  content\n  rating\n}"): typeof import('./graphql').ProductReviewFragmentDoc;
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
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSortByPrice {\n  products(first: 100, orderBy: price_ASC) {\n    ...productListItem\n  }\n}"): typeof import('./graphql').ProductsSortByPriceDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($productId: ID!, $headline: String!, $name: String!, $email: String!, $content: String!, $rating: Int!) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, rating: $rating, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewPublish($reviewId: ID!) {\n  publishReview(where: {id: $reviewId}, to: PUBLISHED) {\n    id\n  }\n}"): typeof import('./graphql').ReviewPublishDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
