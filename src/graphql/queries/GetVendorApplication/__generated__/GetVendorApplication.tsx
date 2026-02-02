/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetVendorApplicationQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetVendorApplicationQuery = { vendorApplication?: { edges: Array<{ node?: { id: string, status: Types.VendorsVendorApplicationStatusChoices, rejectionReason?: string | null, reviewedAt?: any | null, owner?: { id: string, email: string, firstName: string, lastName: string } | null } | null } | null> } | null };


export const GetVendorApplicationDocument = gql`
    query GetVendorApplication($id: ID!) {
  vendorApplication(id: $id) {
    edges {
      node {
        id
        status
        rejectionReason
        reviewedAt
        owner {
          id
          email
          firstName
          lastName
        }
      }
    }
  }
}
    `;

/**
 * __useGetVendorApplicationQuery__
 *
 * To run a query within a React component, call `useGetVendorApplicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVendorApplicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVendorApplicationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVendorApplicationQuery(baseOptions: Apollo.QueryHookOptions<GetVendorApplicationQuery, GetVendorApplicationQueryVariables> & ({ variables: GetVendorApplicationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVendorApplicationQuery, GetVendorApplicationQueryVariables>(GetVendorApplicationDocument, options);
      }
export function useGetVendorApplicationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVendorApplicationQuery, GetVendorApplicationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVendorApplicationQuery, GetVendorApplicationQueryVariables>(GetVendorApplicationDocument, options);
        }
// @ts-ignore
export function useGetVendorApplicationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetVendorApplicationQuery, GetVendorApplicationQueryVariables>): Apollo.UseSuspenseQueryResult<GetVendorApplicationQuery, GetVendorApplicationQueryVariables>;
export function useGetVendorApplicationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVendorApplicationQuery, GetVendorApplicationQueryVariables>): Apollo.UseSuspenseQueryResult<GetVendorApplicationQuery | undefined, GetVendorApplicationQueryVariables>;
export function useGetVendorApplicationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVendorApplicationQuery, GetVendorApplicationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVendorApplicationQuery, GetVendorApplicationQueryVariables>(GetVendorApplicationDocument, options);
        }
export type GetVendorApplicationQueryHookResult = ReturnType<typeof useGetVendorApplicationQuery>;
export type GetVendorApplicationLazyQueryHookResult = ReturnType<typeof useGetVendorApplicationLazyQuery>;
export type GetVendorApplicationSuspenseQueryHookResult = ReturnType<typeof useGetVendorApplicationSuspenseQuery>;
export type GetVendorApplicationQueryResult = Apollo.QueryResult<GetVendorApplicationQuery, GetVendorApplicationQueryVariables>;