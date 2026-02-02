/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { UserFieldsFragmentDoc } from '../../../fragments/UserFields/__generated__/UserFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VendorUsersCreateMutationVariables = Types.Exact<{
  emails: Array<Types.InputMaybe<Types.Scalars['String']['input']>> | Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type VendorUsersCreateMutation = { vendorUsersCreate?: { users?: Array<{ id: string, email: string, firstName: string, lastName: string, isStaff: boolean, isActive: boolean, role: Types.AccountsUserRoleChoices, accountType: Types.AccountsUserAccountTypeChoices, emailVerified: boolean, phoneNumber?: string | null, dateJoined: any, lastLogin?: any | null } | null> | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const VendorUsersCreateDocument = gql`
    mutation VendorUsersCreate($emails: [String]!) {
  vendorUsersCreate(emails: $emails) {
    users {
      ...UserFields
    }
    errors {
      field
      message
      code
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export type VendorUsersCreateMutationFn = Apollo.MutationFunction<VendorUsersCreateMutation, VendorUsersCreateMutationVariables>;

/**
 * __useVendorUsersCreateMutation__
 *
 * To run a mutation, you first call `useVendorUsersCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVendorUsersCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vendorUsersCreateMutation, { data, loading, error }] = useVendorUsersCreateMutation({
 *   variables: {
 *      emails: // value for 'emails'
 *   },
 * });
 */
export function useVendorUsersCreateMutation(baseOptions?: Apollo.MutationHookOptions<VendorUsersCreateMutation, VendorUsersCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VendorUsersCreateMutation, VendorUsersCreateMutationVariables>(VendorUsersCreateDocument, options);
      }
export type VendorUsersCreateMutationHookResult = ReturnType<typeof useVendorUsersCreateMutation>;
export type VendorUsersCreateMutationResult = Apollo.MutationResult<VendorUsersCreateMutation>;
export type VendorUsersCreateMutationOptions = Apollo.BaseMutationOptions<VendorUsersCreateMutation, VendorUsersCreateMutationVariables>;