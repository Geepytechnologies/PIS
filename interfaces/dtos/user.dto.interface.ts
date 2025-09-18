import { IBaseQueryParams } from "@/interfaces/general.interface";
import { IMessageResponse } from "@/interfaces/responses/general.response";

export interface ICreateUserDTO {
	title: string;
	first_name: string;
	middle_name?: string | undefined;
	last_name: string;
	email: string;
	password: string;
	confirm_password: string;
	phone_number_1: string;
	phone_number_2?: string | undefined;
	role_id: string;
	area_code?: (string | undefined)[] | undefined;
	nin: string;
	employment_type: string;
	employment_id: string;
	user_image: File;
}

export interface IUpdateUserDTO {
	title: string;
	first_name: string;
	middle_name?: string | undefined;
	last_name: string;
	email: string;
	phone_number_1: string;
	phone_number_2?: string | undefined;
	role_id: string;
	area_code?: (string | undefined)[];
	nin: string;
	employment_type: string;
	status: string;
	employment_id: string;
	user_image?: File | undefined;
}

export interface ICreateUserRequest {
	//payload: ICreateUserDTO;
	payload: FormData;
}

export type GetAllUserRequestParams = {
	role_id?: string;
	role_name?: string;
	status?: string;
	search_term?: string;
	creation_date?: string;
	from_creation_date?: string;
	to_creation_date?: string;
} & IBaseQueryParams;

export type GetAllUserRequestParams2 = {
	area_code?: string;
	role_id?: string;
	role_name?: string;
	status?: string;
	search_term?: string;
	creation_date?: string;
	from_creation_date?: string;
	to_creation_date?: string;
	search_by?: string;
} & IBaseQueryParams;

export type UseGetAllUsersProps = {
	params?: GetAllUserRequestParams;
};

export type UseGetAllUsersProps2 = {
	params?: GetAllUserRequestParams2;
};

export interface UseGetUserByIdProps {
	id: string;
	enabler?: boolean;
	showNotice?: boolean;
}

export interface UseUpdateUserProps {
	onSuccess?: (_val: IMessageResponse) => void;
	onError?: (_val: string) => void;
	onReset?: () => void;
}

export interface IUserUpdateRequest {
	//payload: IUpdateUserDTO;
	payload: FormData;
	user_id: string;
}
