import { IBaseQueryParams } from "@/interfaces/general.interface";
import {
	GetAllEtranzactCheckStatusResponse,
	GetAllRemitaCheckStatusResponse,
} from "../responses/payment.response.interface";

export type GetAllPaymentDefaultRequestParams = {
	property_id?: string;
	area_code?: string;
	street_name?: string;
	building_use_id?: string;
	bill_year?: string;
	assignment_status?: string;
	bill_delivery_status?: string;
	bill_delivery_date?: string;
	from_bill_delivery_date?: string;
	to_bill_delivery_date?: string;
	payment_status?: string;
	payment_date?: string;
	from_payment_date?: string;
	to_payment_date?: string;
	search_term?: string;
	search_by?: string;
} & IBaseQueryParams;

export type UseGetAllPaymentDefaultProps = {
	params?: GetAllPaymentDefaultRequestParams;
};

export type GetAllPaymentRequestParams = {
	bill_id?: string;
	property_id?: string;
	area_code?: string;
	bill_year?: string;
	payment_channel?: string;
	gateway?: string;
	transaction_date?: string;
	from_transaction_date?: string;
	to_transaction_date?: string;
	transaction_status?: string;
	search_term?: string;
	search_by?: string;
} & IBaseQueryParams;

export type UseGetAllPaymentProps = {
	params?: GetAllPaymentRequestParams;
	enabled?: boolean;
};

export interface IRemitaCheckStatusDTO {
	rrr: string;
}

export interface IRemitaCheckStatusRequest {
	payload: IRemitaCheckStatusDTO;
}

export interface RemitaCheckStatusRequestProps {
	onSuccess?: (_val: GetAllRemitaCheckStatusResponse) => void;
	onReset?: () => void;
	onError?: (message: string) => void;
}

export interface IEtranzactCheckStatusDTO {
	transRef: string;
}

export interface IEtranzactCheckStatusRequest {
	payload: IEtranzactCheckStatusDTO;
}

export interface EtranzactCheckStatusRequestProps {
	onSuccess?: (_val: GetAllEtranzactCheckStatusResponse) => void;
	onReset?: () => void;
	onError?: (message: string) => void;
}
