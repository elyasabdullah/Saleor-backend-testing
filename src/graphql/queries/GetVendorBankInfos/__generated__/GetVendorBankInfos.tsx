/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetVendorBankInfosQueryVariables = Types.Exact<{
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetVendorBankInfosQuery = { vendorBankInfos?: { edges: Array<{ cursor: string, node?: { id: string, accountName?: string | null, accountNumber: string, bankName: string, iban: string, vendor: { id: string, name: string } } | null } | null>, pageInfo: { hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null };


export const GetVendorBankInfosDocument = gql`
    query GetVendorBankInfos($before: String, $after: String, $first: Int, $last: Int) {
  vendorBankInfos(before: $before, after: $after, first: $first, last: $last) {
    edges {
      node {
        id
        accountName
        accountNumber
        bankName
        iban
        vendor {
          id
          name
        }
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
    `;

/**
 * __useGetVendorBankInfosQuery__
 *
 * To run a query within a React component, call `useGetVendorBankInfosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVendorBankInfosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVendorBankInfosQuery({
 *   variables: {
 *      before: // value for 'before'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useGetVendorBankInfosQuery(baseOptions?: Apollo.QueryHookOptions<GetVendorBankInfosQuery, GetVendorBankInfosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVendorBankInfosQuery, GetVendorBankInfosQueryVariables>(GetVendorBankInfosDocument, options);
      }
export function useGetVendorBankInfosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVendorBankInfosQuery, GetVendorBankInfosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVendorBankInfosQuery, GetVendorBankInfosQueryVariables>(GetVendorBankInfosDocument, options);
        }
// @ts-ignore
export function useGetVendorBankInfosSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetVendorBankInfosQuery, GetVendorBankInfosQueryVariables>): Apollo.UseSuspenseQueryResult<GetVendorBankInfosQuery, GetVendorBankInfosQueryVariables>;
export function useGetVendorBankInfosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVendorBankInfosQuery, GetVendorBankInfosQueryVariables>): Apollo.UseSuspenseQueryResult<GetVendorBankInfosQuery | undefined, GetVendorBankInfosQueryVariables>;
export function useGetVendorBankInfosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVendorBankInfosQuery, GetVendorBankInfosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVendorBankInfosQuery, GetVendorBankInfosQueryVariables>(GetVendorBankInfosDocument, options);
        }
export type GetVendorBankInfosQueryHookResult = ReturnType<typeof useGetVendorBankInfosQuery>;
export type GetVendorBankInfosLazyQueryHookResult = ReturnType<typeof useGetVendorBankInfosLazyQuery>;
export type GetVendorBankInfosSuspenseQueryHookResult = ReturnType<typeof useGetVendorBankInfosSuspenseQuery>;
export type GetVendorBankInfosQueryResult = Apollo.QueryResult<GetVendorBankInfosQuery, GetVendorBankInfosQueryVariables>;