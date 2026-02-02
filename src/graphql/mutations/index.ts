// Export all mutation documents (not types to avoid conflicts with graphql/types)
// Auth mutations
export { TokenCreateDocument } from './TokenCreate/__generated__/TokenCreate';
export type {
  TokenCreateMutation as TokenCreateOperation,
  TokenCreateMutationVariables as TokenCreateOperationVariables,
} from './TokenCreate/__generated__/TokenCreate';

export { UserRegisterDocument } from './UserRegister/__generated__/UserRegister';
export type {
  UserRegisterMutation as UserRegisterOperation,
  UserRegisterMutationVariables as UserRegisterOperationVariables,
} from './UserRegister/__generated__/UserRegister';
export { UserUpdateDocument } from './UserUpdate/__generated__/UserUpdate';
export { UserLogoutDocument } from './UserLogout/__generated__/UserLogout';
export { MeUpdateDocument } from './MeUpdate/__generated__/MeUpdate';
export { VendorUsersCreateDocument } from './VendorUsersCreate/__generated__/VendorUsersCreate';
export { PasswordChangeDocument } from './PasswordChange/__generated__/PasswordChange';
export { PasswordResetDocument } from './PasswordReset/__generated__/PasswordReset';
export { OtpSendDocument } from './OTPSend/__generated__/OTPSend';
export { OtpVerifyDocument } from './OTPVerify/__generated__/OTPVerify';
export { TokenRefreshDocument } from './TokenRefresh/__generated__/TokenRefresh';
export { TokenVerifyDocument } from './TokenVerify/__generated__/TokenVerify';
export { TokenRevokeDocument } from './TokenRevoke/__generated__/TokenRevoke';

// Permission mutations
export { PermissionsGrantToUserDocument } from './PermissionsGrantToUser/__generated__/PermissionsGrantToUser';
export { PermissionsRevokeFromUserDocument } from './PermissionsRevokeFromUser/__generated__/PermissionsRevokeFromUser';
export { PermissionsGrantToGroupDocument } from './PermissionsGrantToGroup/__generated__/PermissionsGrantToGroup';
export { PermissionsRevokeFromGroupDocument } from './PermissionsRevokeFromGroup/__generated__/PermissionsRevokeFromGroup';

// Vendor mutations
export { VendorCreateDocument } from './VendorCreate/__generated__/VendorCreate';
export { VendorUpdateDocument } from './VendorUpdate/__generated__/VendorUpdate';
export { VendorDeleteDocument } from './VendorDelete/__generated__/VendorDelete';
export { VendorActivateDocument } from './VendorActivate/__generated__/VendorActivate';
export { VendorDeactivateDocument } from './VendorDeactivate/__generated__/VendorDeactivate';
export { VendorApplicationCreateDocument } from './VendorApplicationCreate/__generated__/VendorApplicationCreate';
export { VendorApplicationStartReviewDocument } from './VendorApplicationStartReview/__generated__/VendorApplicationStartReview';
export { VendorApplicationApproveDocument } from './VendorApplicationApprove/__generated__/VendorApplicationApprove';
export { VendorApplicationRejectDocument } from './VendorApplicationReject/__generated__/VendorApplicationReject';
export { VendorBankInfoCreateDocument } from './VendorBankInfoCreate/__generated__/VendorBankInfoCreate';
export { VendorBankInfoUpdateDocument } from './VendorBankInfoUpdate/__generated__/VendorBankInfoUpdate';

// Branch mutations
export { BranchUpdateDocument } from './BranchUpdate/__generated__/BranchUpdate';
export { BranchDeleteDocument } from './BranchDelete/__generated__/BranchDelete';
export { BranchActivateDocument } from './BranchActivate/__generated__/BranchActivate';
export { BranchDeactivateDocument } from './BranchDeactivate/__generated__/BranchDeactivate';
export { AssignBranchManagerDocument } from './AssignBranchManager/__generated__/AssignBranchManager';
export { UnassignBranchManagerDocument } from './UnassignBranchManager/__generated__/UnassignBranchManager';
export { BranchMemberCreateDocument } from './BranchMemberCreate/__generated__/BranchMemberCreate';
export { BranchMemberAttachDocument } from './BranchMemberAttach/__generated__/BranchMemberAttach';
export { BranchMemberDetachDocument } from './BranchMemberDetach/__generated__/BranchMemberDetach';
export { BranchMemberMoveDocument } from './BranchMemberMove/__generated__/BranchMemberMove';
