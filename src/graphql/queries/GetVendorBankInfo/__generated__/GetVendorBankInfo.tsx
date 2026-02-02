/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetVendorBankInfoQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetVendorBankInfoQuery = { vendorBankInfo?: { edges: Array<{ node?: { id: string, accountName?: string | null, accountNumber: string, bankName: string, iban: string, vendor: { id: string, name: string } } | null } | null> } | null };


export const GetVendorBankInfoDocument = gql`
    query GetVendorBankInfo($id: ID!) {
  vendorBankInfo(id: $id) {
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
    }
  }
}
    `;

/**
 * __useGetVendorBankInfoQuery__
 *
 * To run a query within a React component, call `useGetVendorBankInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVendorBankInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVendorBankInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVendorBankInfoQuery(baseOptions: Apollo.QueryHookOptions<GetVendorBankInfoQuery, GetVendorBankInfoQueryVariables> & ({ variables: GetVendorBankInfoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVendorBankInfoQuery, GetVendorBankInfoQueryVariables>(GetVendorBankInfoDocument, options);
      }
export function useGetVendorBankInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVendorBankInfoQuery, GetVendorBankInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVendorBankInfoQuery, GetVendorBankInfoQueryVariables>(GetVendorBankInfoDocument, options);
        }
// @ts-ignore
export function useGetVendorBankInfoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetVendorBankInfoQuery, GetVendorBankInfoQueryVariables>): Apollo.UseSuspenseQueryResult<GetVendorBankInfoQuery, GetVendorBankInfoQueryVariables>;
export function useGetVendorBankInfoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVendorBankInfoQuery, GetVendorBankInfoQueryVariables>): Apollo.UseSuspenseQueryResult<GetVendorBankInfoQuery | undefined, GetVendorBankInfoQueryVariables>;
export function useGetVendorBankInfoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVendorBankInfoQuery, GetVendorBankInfoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVendorBankInfoQuery, GetVendorBankInfoQueryVariables>(GetVendorBankInfoDocument, options);
        }
export type GetVendorBankInfoQueryHookResult = ReturnType<typeof useGetVendorBankInfoQuery>;
export type GetVendorBankInfoLazyQueryHookResult = ReturnType<typeof useGetVendorBankInfoLazyQuery>;
export type GetVendorBankInfoSuspenseQueryHookResult = ReturnType<typeof useGetVendorBankInfoSuspenseQuery>;
export type GetVendorBankInfoQueryResult = Apollo.QueryResult<GetVendorBankInfoQuery, GetVendorBankInfoQueryVariables>;