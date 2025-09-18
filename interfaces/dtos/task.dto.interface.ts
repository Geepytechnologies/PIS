import { IBaseQueryParams } from "@/interfaces/general.interface";
import { IMessageResponse } from "@/interfaces/responses/general.response";

export interface IAssignBillDistributionTaskDTO {
	user_id: string;
	bill_id: (string | undefined)[];
	task_dates: {
		from: string;
		to: string;
	};
	description?: string;
}

export interface IReassignTaskDTO {
	user_id: string;
	task_id: (string | undefined)[];
	task_dates: {
		from: string;
		to: string;
	};
	description?: string;
}

export interface IAssignEnforcementTaskDTO {
	user_id: string;
	bill_id: (string | undefined)[];
	task_dates: {
		from: string;
		to: string;
	};
	description?: string;
}

export interface IUpdateFeeSettlementStatusDTO {
	fee_settlement_status: string;
	task_id: (string | undefined)[];
}

export interface IAssignBillDistributionTaskRequest {
	payload: IAssignBillDistributionTaskDTO;
}

export interface IAssignEnforcementTaskRequest {
	payload: IAssignEnforcementTaskDTO;
}

export interface IReassignTaskRequest {
	payload: IReassignTaskDTO;
}

export interface IUpdateFeeSettlementStatusRequest {
	payload: IUpdateFeeSettlementStatusDTO;
}

export interface AssignBillDistributionTaskProps {
	onSuccess?: (_val: IMessageResponse) => void;
	onReset?: () => void;
	onError?: (message: string) => void;
}

export interface AssignEnforcementTaskProps {
	onSuccess?: (_val: IMessageResponse) => void;
	onReset?: () => void;
	onError?: (message: string) => void;
}

export interface ReassignTaskProps {
	onSuccess?: (_val: IMessageResponse) => void;
	onReset?: () => void;
	onError?: (message: string) => void;
}

export interface UpdateFeeSettlementStatusProps {
	onSuccess?: (_val: IMessageResponse) => void;
	onReset?: () => void;
	onError?: (message: string) => void;
}

export type GetAllTasksRequestParams = {
	area_code?: string;
	property_id?: string;
	building_use?: string;
	task_type_id?: string;
	bill_id?: string;
	bill_year?: string;
	creation_date?: string;
	from_creation_date?: string;
	to_creation_date?: string;
	task_start_date?: string;
	from_task_start_date?: string;
	to_task_start_date?: string;
	task_end_date?: string;
	from_task_end_date?: string;
	to_task_end_date?: string;
	assigner_id?: string;
	assignee_id?: string;
	task_status?: string;
	property_updated?: string;
	search_term: string;
	search_by?: string;
} & IBaseQueryParams;

export type UseGetAllTasksProps = {
	params?: GetAllTasksRequestParams;
};

export type GetAllEnforcementAgentFeeParams = {
	area_code?: string;
	building_use?: string;
	enforcement_agent_id?: string;
	bill_year?: string;
	bill_payment_status?: string;
	fee_settlement_status?: string;
	bill_payment_date?: string;
	from_bill_payment_date?: string;
	to_bill_payment_date?: string;
	search_term?: string;
	search_by?: string;
} & IBaseQueryParams;

export type UseGetAllEnforcementAgentFeeProps = {
	params?: GetAllEnforcementAgentFeeParams;
};
