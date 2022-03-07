import resourceAPIInstance from './resource-api-instance';
import orgUserService from './org-user.service';
import {AxiosInstance} from 'axios';

export type APIEndPoint = "accountHttpClient" | "resourceHttpClient";
export type TransportInstances = Record<APIEndPoint, AxiosInstance>;
export default {resourceAPILayer: resourceAPIInstance, orgUserService};
