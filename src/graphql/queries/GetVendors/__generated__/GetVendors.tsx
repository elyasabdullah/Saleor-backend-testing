/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { VendorFieldsFragmentDoc } from '../../../fragments/VendorFields/__generated__/VendorFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetVendorsQueryVariables = Types.Exact<{
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetVendorsQuery = { vendors?: { edges: Array<{ cursor: string, node?: { id: string, name: string, description?: string | null, logo: string, isActive: boolean, createdAt: any, updatedAt: any, owner?: { id: string, email: string, firstName: string, lastName: string } | null } | null } | null>, pageInfo: { hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null };


export const GetVendorsDocument = gql`
    query GetVendors($before: String, $after: String, $first: Int, $last: Int) {
  vendors(before: $before, after: $after, first: $first, last: $last) {
    edges {
      node {
        ...VendorFields
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    ${VendorFieldsFragmentDoc}`;

/**
 * __useGetVendorsQuery__
 *
 * To run a query within a React component, call `useGetVendorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVendorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVendorsQuery({
 *   variables: {
 *      before: // value for 'before'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useGetVendorsQuery(baseOptions?: Apollo.QueryHookOptions<GetVendorsQuery, GetVendorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVendorsQuery, GetVendorsQueryVariables>(GetVendorsDocument, options);
      }
export function useGetVendorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVendorsQuery, GetVendorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVendorsQuery, GetVendorsQueryVariables>(GetVendorsDocument, options);
        }
// @ts-ignore
export function useGetVendorsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetVendorsQuery, GetVendorsQueryVariables>): Apollo.UseSuspenseQueryResult<GetVendorsQuery, GetVendorsQueryVariables>;
export function useGetVendorsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVendorsQuery, GetVendorsQueryVariables>): Apollo.UseSuspenseQueryResult<GetVendorsQuery | undefined, GetVendorsQueryVariables>;
export function useGetVendorsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVendorsQuery, GetVendorsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVendorsQuery, GetVendorsQueryVariables>(GetVendorsDocument, options);
        }
export type GetVendorsQueryHookResult = ReturnType<typeof useGetVendorsQuery>;
export type GetVendorsLazyQueryHookResult = ReturnType<typeof useGetVendorsLazyQuery>;
export type GetVendorsSuspenseQueryHookResult = ReturnType<typeof useGetVendorsSuspenseQuery>;
export type GetVendorsQueryResult = Apollo.QueryResult<GetVendorsQuery, GetVendorsQueryVariables>;