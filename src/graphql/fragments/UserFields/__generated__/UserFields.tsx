/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
export type UserFieldsFragment = { id: string, email: string, firstName: string, lastName: string, isStaff: boolean, isActive: boolean, role: Types.AccountsUserRoleChoices, accountType: Types.AccountsUserAccountTypeChoices, emailVerified: boolean, phoneNumber?: string | null, dateJoined: any, lastLogin?: any | null };

export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  id
  email
  firstName
  lastName
  isStaff
  isActive
  role
  accountType
  emailVerified
  phoneNumber
  dateJoined
  lastLogin
}
    `;