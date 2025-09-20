import {
	IForgotPasswordDTO,
	IResetPasswordDTO,
	ISignInDTO,
	IUpdatePasswordDTO,
} from "@/interfaces/dtos/auth.dto.interface";
import {
	IApproveChangeRequestDTO,
	IAssignChangeRequestTaskDTO,
	IAssignPublicChangeRequestTaskDTO,
	IRejectChangeRequestDTO,
} from "@/interfaces/dtos/change-request.dto.interface";
import {
	IEtranzactCheckStatusDTO,
	IRemitaCheckStatusDTO,
} from "@/interfaces/dtos/payment.dto.interface";
import {
	IAssignBillDistributionTaskDTO,
	IAssignEnforcementTaskDTO,
	IReassignTaskDTO,
	IUpdateFeeSettlementStatusDTO,
} from "@/interfaces/dtos/task.dto.interface";
import {
	ICreateUserDTO,
	IUpdateUserDTO,
} from "@/interfaces/dtos/user.dto.interface";

/***************************************** AUTH DEFAULTS *************************************/
export const signInDefaultValues: ISignInDTO = {
	email: "",
	password: "",
};

export const forgotPasswordDefaultValues: IForgotPasswordDTO = {
	email: "",
};

export const resetPasswordDefaultValues: IResetPasswordDTO = {
	email: "",
	salt: "",
	new_password: "",
	confirm_password: "",
};

export const updatePasswordDefaultValues: IUpdatePasswordDTO = {
	current_password: "",
	new_password: "",
	confirm_password: "",
};

/***************************************** DASHBOARD DEFAULTS *************************************/

/***************************************** USER DEFAULTS *************************************/
export const createUserDefaultValues: ICreateUserDTO = {
	title: "",
	first_name: "",
	middle_name: "",
	last_name: "",
	email: "",
	password: "",
	confirm_password: "",
	phone_number_1: "",
	phone_number_2: "",
	role_id: "",
	area_code: [],
	nin: "",
	employment_type: "",
	employment_id: "",
	user_image: undefined!,
};

export const updateUserDefaultValues: IUpdateUserDTO = {
	title: "",
	first_name: "",
	middle_name: "",
	last_name: "",
	email: "",
	phone_number_1: "",
	phone_number_2: "",
	role_id: "",
	area_code: [],
	nin: "",
	employment_type: "",
	status: "",
	employment_id: "",
	/* user_image: undefined! */
};

/***************************************** TASK DEFAULTS *************************************/
export const assignBillDistributionTaskDefaultValues: IAssignBillDistributionTaskDTO =
	{
		user_id: "",
		task_dates: {
			from: "",
			to: "",
		},
		bill_id: undefined!,
		description: "",
	};

export const assignEnforcementTaskDefaultValues: IAssignEnforcementTaskDTO = {
	user_id: "",
	task_dates: {
		from: "",
		to: "",
	},
	bill_id: undefined!,
	description: "",
};

export const assignChangeRequestTaskDefaultValues: IAssignChangeRequestTaskDTO =
	{
		user_id: "",
		task_dates: {
			from: "",
			to: "",
		},
		property_id: undefined!,
		description: "",
	};

export const assignPublicChangeRequestTaskDefaultValues: IAssignPublicChangeRequestTaskDTO =
	{
		user_id: "",
		task_dates: {
			from: "",
			to: "",
		},
		web_request_id: undefined!,
		description: "",
	};

export const reassignTaskDefaultValues: IReassignTaskDTO = {
	user_id: "",
	task_dates: {
		from: "",
		to: "",
	},
	task_id: undefined!,
	description: "",
};

export const updateFeeSettlementStatusDefaultValues: IUpdateFeeSettlementStatusDTO =
	{
		fee_settlement_status: "",
		task_id: undefined!,
	};

/***************************************** CHANGE REQUEST DEFAULTS *************************************/
export const approveChangeRequestDefaultValues: IApproveChangeRequestDTO = {
	ogc_fid: "",
	remarks: "",
};

export const rejectChangeRequestDefaultValues: IRejectChangeRequestDTO = {
	ogc_fid: "",
	remarks: "",
};

/***************************************** REMITA CHECK STATUS DEFAULTS *************************************/
export const remitaCheckStatusDefaults: IRemitaCheckStatusDTO = {
	rrr: "",
};

/***************************************** ETRANZACT CHECK STATUS DEFAULTS *************************************/
export const etranzactCheckStatusDefaults: IEtranzactCheckStatusDTO = {
	transRef: "",
};
