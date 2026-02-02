/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { VendorFieldsFragmentDoc } from '../../../fragments/VendorFields/__generated__/VendorFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetVendorQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetVendorQuery = { vendor?: { id: string, name: string, description?: string | null, logo: string, isActive: boolean, createdAt: any, updatedAt: any, owner?: { id: string, email: string, firstName: string, lastName: string } | null } | null };


export const GetVendorDocument = gql`
    query GetVendor($id: ID!) {
  vendor(id: $id) {
    ...VendorFields
  }
}
    ${VendorFieldsFragmentDoc}`;

/**
 * __useGetVendorQuery__
 *
 * To run a query within a React component, call `useGetVendorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVendorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVendorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVendorQuery(baseOptions: Apollo.QueryHookOptions<GetVendorQuery, GetVendorQueryVariables> & ({ variables: GetVendorQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVendorQuery, GetVendorQueryVariables>(GetVendorDocument, options);
      }
export function useGetVendorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVendorQuery, GetVendorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVendorQuery, GetVendorQueryVariables>(GetVendorDocument, options);
        }
// @ts-ignore
export function useGetVendorSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetVendorQuery, GetVendorQueryVariables>): Apollo.UseSuspenseQueryResult<GetVendorQuery, GetVendorQueryVariables>;
export function useGetVendorSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVendorQuery, GetVendorQueryVariables>): Apollo.UseSuspenseQueryResult<GetVendorQuery | undefined, GetVendorQueryVariables>;
export function useGetVendorSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVendorQuery, GetVendorQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVendorQuery, GetVendorQueryVariables>(GetVendorDocument, options);
        }
export type GetVendorQueryHookResult = ReturnType<typeof useGetVendorQuery>;
export type GetVendorLazyQueryHookResult = ReturnType<typeof useGetVendorLazyQuery>;
export type GetVendorSuspenseQueryHookResult = ReturnType<typeof useGetVendorSuspenseQuery>;
export type GetVendorQueryResult = Apollo.QueryResult<GetVendorQuery, GetVendorQueryVariables>;