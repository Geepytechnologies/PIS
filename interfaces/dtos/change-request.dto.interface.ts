import { IBaseQueryParams } from "@/interfaces/general.interface";
import { IMessageResponse } from "@/interfaces/responses/general.response";

export type GetAllChangeRequestRequestParams = {
	request_type_id?: string;
	property_id?: string;
	building_type?: string;
	building_use_id?: string;
	building_status?: string;
	occupancy_status?: string;
	area_code?: string;
	ward_code?: string;
	lga_code?: string;
	approval_status?: string;
	approval_status_role_id?: string;
	captured_by?: string;
	captured_at?: string;
	from_captured_at?: string;
	to_captured_at?: string;
	first_approval_user_id?: string;
	first_approval_date?: string;
	from_first_approval_date?: string;
	to_first_approval_date?: string;
	second_approval_user_id?: string;
	second_approval_date?: string;
	from_second_approval_date?: string;
	to_second_approval_date?: string;
	third_approval_user_id?: string;
	third_approval_date?: string;
	from_third_approval_date?: string;
	to_third_approval_date?: string;
	search_term?: string;
	search_by?: string;
} & IBaseQueryParams;

export type UseGetAllChangeRequestProps = {
	params?: GetAllChangeRequestRequestParams;
};

export type GetAllPublicChangeRequestParams = {
	building_type?: string;
	building_use_id?: string;
	building_status?: string;
	occupancy_status?: string;
	street_name?: string;
	requested_by?: string;
	property_id?: string;
	area_code?: string;
	ward_code?: string;
	lga_code?: string;
	request_status?: string;
	requested_at?: string;
	from_requested_at?: string;
	to_requested_at?: string;
	search_term?: string;
	search_by?: string;
} & IBaseQueryParams;

export type UseGetAllPublicChangeRequestProps = {
	params?: GetAllPublicChangeRequestParams;
};

export interface IAssignChangeRequestTaskDTO {
	user_id: string;
	property_id: (string | undefined)[];
	task_dates: {
		from: string;
		to: string;
	};
	description?: string;
}

export interface IAssignChangeREquestTaskRequest {
	payload: IAssignChangeRequestTaskDTO;
}

export interface AssignChangeRequestTaskProps {
	onSuccess?: (_val: IMessageResponse) => void;
	onReset?: () => void;
	onError?: (message: string) => void;
}

export interface IApproveChangeRequestDTO {
	ogc_fid: string;
	remarks?: string;
}

export interface IRejectChangeRequestDTO {
	ogc_fid: string;
	remarks?: string;
}

export interface ApproveChangeRequestProps {
	onSuccess?: (_val: IMessageResponse) => void;
	onReset?: () => void;
	onError?: (message: string) => void;
}

export interface RejectChangeRequestProps {
	onSuccess?: (_val: IMessageResponse) => void;
	onReset?: () => void;
	onError?: (message: string) => void;
}

export interface IApproveChangeRequestRequest {
	payload: IApproveChangeRequestDTO;
}

export interface IRejectChangeRequestRequest {
	payload: IRejectChangeRequestDTO;
}

export interface IAssignPublicChangeRequestTaskDTO {
	user_id: string;
	web_request_id: (string | undefined)[];
	task_dates: {
		from: string;
		to: string;
	};
	description?: string;
}

export interface IAssignPublicChangeRequestTaskRequest {
	payload: IAssignPublicChangeRequestTaskDTO;
}

export interface AssignPublicChangeRequestTaskProps {
	onSuccess?: (_val: IMessageResponse) => void;
	onReset?: () => void;
	onError?: (message: string) => void;
}
