export interface ILoginFormData {
  orgCode: string;
  password: string;
  username: string;
}
export interface LoginInfo {
  providerID: string;
  providerKey: string;
}

export interface PostalAddress {
  addressID: string;
  street1: string;
  suburb: string;
  postcode: string;
  state: string;
  country: string;
}

export interface BillingAddress {
  addressID: string;
  street1: string;
  suburb: string;
  postcode: string;
  state: string;
  country: string;
}

export interface AdminGroup {
  adminGroupID: string;
  name: string;
}

export interface User {
  userID: string;
  loginInfo: LoginInfo;
  username: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  mobile: string;
  phone: string;
  postalAddress: PostalAddress;
  billingAddress: BillingAddress;
  profilePicURL: string;
  timezone: string;
  stripeCustID: string;
  adminGroup: AdminGroup;
  createDate: Date;
}

export interface UserDetail {
  userID: string;
  username: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  mobile: string;
  phone: string;
  profilePicURL: string;
  timezone: string;
  stripeCustID: string;
  createDate: Date;
}

export interface Work {
  workID: string;
  owner: string;
  workplace: string;
}

export interface JobRoleModel {
  jobRoleID: string;
  orgID: string;
  isActive: boolean;
  title: string;
  createDate: Date;
  updateDate: Date;
  description: string;
}

export interface JobRoleTaken {
  jobRoleTakenID: string;
  orgUser: string;
  jobRole: string;
  jobRoleModel: JobRoleModel;
  startDate: string;
  endDate: string;
  startDateUTC: Date;
  endDateUTC: Date;
}

export interface TeamModel {
  teamID: string;
  orgID: string;
  isActive: boolean;
  name: string;
  description: string;
  teamType: string;
  upperTeam: string;
  upperTeams: string[];
  createDate: Date;
  updateDate: Date;
  lowerTeams: string[];
  allLowerTeams: string[];
}

export interface ManagedTeamModel {
  teamID: string;
  orgID: string;
  isActive: boolean;
  name: string;
  description: string;
  teamType: string;
  createDate: Date;
  updateDate: Date;
  upperTeam: string;
  upperTeams: string[];
}

export interface JobRoleModel2 {
  jobRoleID: string;
  orgID: string;
  isActive: boolean;
  title: string;
  createDate: Date;
  updateDate: Date;
  description: string;
}

export interface JobRoleTaken2 {
  jobRoleTakenID: string;
  orgUser: string;
  jobRole: string;
  jobRoleModel: JobRoleModel2;
  startDate: string;
  endDate: string;
  startDateUTC: Date;
  endDateUTC: Date;
}

export interface OrgUserDetail {
  teamModels: TeamModel[];
  managedTeamModels: ManagedTeamModel[];
  managedAllTeams: string[];
  jobRoleTakens: JobRoleTaken2[];
}

export interface Profile {
  firstName: string;
  lastName: string;
}

export interface IOrgUser {
  orgUserID: string;
  userID: string;
  orgID: string;
  isManager: boolean;
  staffID: string;
  userDetail: UserDetail;
  work: Work;
  teams: string[];
  managedTeams: string[];
  jobRoleTakens: JobRoleTaken[];
  status: string;
  startDate: Date;
  orgMobile: string;
  orgUserDetail: OrgUserDetail;
  profile: Profile;
}

export interface Address {
  addressID: string;
  street1: string;
  suburb: string;
  postcode: string;
  state: string;
  country: string;
}

export interface PostalAddress2 {
  addressID: string;
  street1: string;
  suburb: string;
  postcode: string;
  state: string;
  country: string;
}

export interface BillingContact {
  billingContactName: string;
  billingEmail: string;
}

export interface MtConfig {
  managerRefreshReport: boolean;
  staffNewAssignReminder: boolean;
  staffNewOverdueReminder: boolean;
  staffDueTodayReminder: boolean;
  staffDueTomorrowReminder: boolean;
  staffDueIn2DaysReminder: boolean;
  staffDueIn3DaysReminder: boolean;
  staffDueIn4DaysReminder: boolean;
  staffDueIn5DaysReminder: boolean;
  staffDueIn6DaysReminder: boolean;
  staffDueIn7DaysReminder: boolean;
}

export interface AccreditationConfig {
  accreditorID: string;
  isEnabled: boolean;
  accreditedProviderName: string;
  authIndividualName: string;
  authIndividualPostNominal: string;
  authIndividualPosition: string;
  authIndividualSigImgPath: string;
}

export interface CustomConfig {
  logoLink: string;
  bannerLink: string;
  lmsName: string;
}

export interface LmsSetting {
  orgBillingName: string;
  billingContact: BillingContact;
  allowDownloadCertificate: boolean;
  allowCPDButton: boolean;
  allowFeedback: boolean;
  allowInlineAssessment: boolean;
  industry: string;
  reportingMeasure: string;
  reportingWindow: string;
  complianceFrameworks: string[];
  mtConfig: MtConfig;
  accreditationConfigs: AccreditationConfig[];
  customConfig: CustomConfig;
  mainContact: string;
  stripeCustID: string;
}

export interface IOrganisation {
  orgID: string;
  name: string;
  code: string;
  campus: string;
  department: string;
  email: string;
  phone: string;
  fax: string;
  address: Address;
  postalAddress: PostalAddress2;
  verifiedDate: Date;
  abn: string;
  lmsSetting: LmsSetting;
  allowDownloadCertificate: boolean;
  allowCPDButton: boolean;
  allowFeedback: boolean;
  timezone: string;
  createDate: Date;
  updateDate: Date;
}

export interface Product {
  productName: string;
  priceName: string;
  priceNetCent: number;
  priceTaxCent: number;
  contentOrgID: string;
}

export interface Billing {
  tierName: string;
  products: Product[];
  contractStartDate: string;
  contractEndDate: string;
  usageType: string;
  usageMinimal: number;
  usagePaymentType: string;
  stripeSubID: string;
  syncDate: Date;
  syncMessage: string;
}

export interface CurrentContract {
  contractID: string;
  orgID: string;
  status: string;
  contractType: string;
  features: string[];
  enableMT: boolean;
  startDate: string;
  quota: number;
  tolerance: number;
  priceNetCent: number;
  priceTaxCent: number;
  currency: string;
  billingIntervalMonth: number;
  billing: Billing;
}

export interface InitPayload {
  user: User;
  orgUser: IOrgUser;
  org: IOrganisation;
  currentContract: CurrentContract;
  token: string;
}

export type LoginFormEntries = keyof ILoginFormData;
