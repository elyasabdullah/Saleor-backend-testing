/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { UserFieldsFragmentDoc } from '../../../fragments/UserFields/__generated__/UserFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetBranchMembersQueryVariables = Types.Exact<{
  branchId: Types.Scalars['ID']['input'];
  firstName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  lastName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  email?: Types.InputMaybe<Types.Scalars['String']['input']>;
  phoneNumber?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetBranchMembersQuery = { branchMembers?: Array<{ id: string, user: { id: string, email: string, firstName: string, lastName: string, isStaff: boolean, isActive: boolean, role: Types.AccountsUserRoleChoices, accountType: Types.AccountsUserAccountTypeChoices, emailVerified: boolean, phoneNumber?: string | null, dateJoined: any, lastLogin?: any | null }, branch: { id: string, name: string } } | null> | null };


export const GetBranchMembersDocument = gql`
    query GetBranchMembers($branchId: ID!, $firstName: String, $lastName: String, $email: String, $phoneNumber: String) {
  branchMembers(
    branchId: $branchId
    firstName: $firstName
    lastName: $lastName
    email: $email
    phoneNumber: $phoneNumber
  ) {
    id
    user {
      ...UserFields
    }
    branch {
      id
      name
    }
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useGetBranchMembersQuery__
 *
 * To run a query within a React component, call `useGetBranchMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBranchMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBranchMembersQuery({
 *   variables: {
 *      branchId: // value for 'branchId'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useGetBranchMembersQuery(baseOptions: Apollo.QueryHookOptions<GetBranchMembersQuery, GetBranchMembersQueryVariables> & ({ variables: GetBranchMembersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBranchMembersQuery, GetBranchMembersQueryVariables>(GetBranchMembersDocument, options);
      }
export function useGetBranchMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBranchMembersQuery, GetBranchMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBranchMembersQuery, GetBranchMembersQueryVariables>(GetBranchMembersDocument, options);
        }
// @ts-ignore
export function useGetBranchMembersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBranchMembersQuery, GetBranchMembersQueryVariables>): Apollo.UseSuspenseQueryResult<GetBranchMembersQuery, GetBranchMembersQueryVariables>;
export function useGetBranchMembersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBranchMembersQuery, GetBranchMembersQueryVariables>): Apollo.UseSuspenseQueryResult<GetBranchMembersQuery | undefined, GetBranchMembersQueryVariables>;
export function useGetBranchMembersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBranchMembersQuery, GetBranchMembersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBranchMembersQuery, GetBranchMembersQueryVariables>(GetBranchMembersDocument, options);
        }
export type GetBranchMembersQueryHookResult = ReturnType<typeof useGetBranchMembersQuery>;
export type GetBranchMembersLazyQueryHookResult = ReturnType<typeof useGetBranchMembersLazyQuery>;
export type GetBranchMembersSuspenseQueryHookResult = ReturnType<typeof useGetBranchMembersSuspenseQuery>;
export type GetBranchMembersQueryResult = Apollo.QueryResult<GetBranchMembersQuery, GetBranchMembersQueryVariables>;