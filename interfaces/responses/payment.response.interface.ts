import { IPaginationData } from "@/interfaces/general.interface";

export interface IPaymentDefaultResponse {
	bill_id: number;
	property_id: string;
	area_code: string;
	area_name: string;
	address: string;
	street_name: string;
	building_use_id: number;
	building_use: string;
	building_type: string;
	property_owner: string;
	land_value: number;
	bill_year: number;
	bill_amount: number;
	arrears: number;
	total_due: number;
	assignment_status: string;
	bill_delivery_status: string;
	bill_delivery_date: string;
	default_days: number;
	payment_status: string;
	payment_date: string;
	payment_amount: number;
	total_payment_amount: number;
}

export interface IPaymentResponse {
	transaction_id: string;
	bill_id: number;
	property_id: string;
	area_code: string;
	area_name: string;
	address: string;
	property_owner: string;
	bill_year: number;
	bill_amount: number;
	arrears: number;
	total_due: number;
	business_reference: string;
	business_code: string;
	customer_email: string;
	transaction_status: string;
	currency: string;
	transaction_amount: number;
	transaction_fee: number;
	transaction_date: string;
	transaction_description: string;
	payment_channel: string;
	gateway: string;
	gateway_platform: string;
	response_status: string;
	response_message: string;
	db_createdat: string;
}

export interface IEnforcementAgentFeeResponse {
	task_id: number;
	area_code: string;
	area_name: string;
	property_id: string;
	building_use: string;
	property_address: string;
	task_type_id: number;
	bill_id: number;
	task_status: string;
	task_completion_date: number;
	enforcement_agent_id: string;
	enforcement_agent: string;
	bill_year: number;
	bill_amount: number;
	arrears: number;
	total_due: number;
	bill_payment_status: string;
	bill_payment_date: string;
	enforcement_agent_fee: number;
	fee_settlement_status: string;
	location_longitude: number;
	location_latitude: number;
}

interface CustomField {
	COLVAL: string;
	DESCRIPTION: string;
	COLUMNNAME: string;
}

export interface IRemitaCheckStatusResponse {
	status: string;
	message: string;
	rrr: string;
	billerName: string;
	channel: string;
	amount: number;
	chargeFee: number;
	transactionDate: string;
	paymentDate: string;
	bank: string;
	bankName: string;
	serviceTypeId: string;
	orderId: string;
	payerName: string;
	payerPhoneNumber: string;
	payerEmail: string;
	customFields: CustomField[];
	lineItems: string[];
	paymentDescription: string;
}

export interface IEtranzactCheckStatusMetaResponse {
	insightTag: string;
	insightTagValue: string;
	insightTagDisplay: string;
}

export interface IEtranzactCheckStatusDataResponse {
	businessName: string;
	businessCode: string;
	serviceCode: string;
	transRef: string;
	businessRef: string;
	debitedAmount: number;
	transAmount: number;
	transFeeAmount: number;
	settlementAmount: number;
	customerId: string;
	transactionDate: string;
	channelId: number;
	currencyCode: string;
	status: number;
	statusMessage: string;
	metadata: IEtranzactCheckStatusMetaResponse[];
	crn: string;
}

export interface IEtranzactCheckStatusResponse {
	status: number;
	message: string;
	data: IEtranzactCheckStatusDataResponse;
	execTime: number;
	error: object[];
}

export interface GetAllRemitaCheckStatusResponse {
	error: boolean;
	data: IRemitaCheckStatusResponse;
}

export interface GetAllEtranzactCheckStatusResponse {
	error: boolean;
	data: IEtranzactCheckStatusResponse;
}

export interface GetAllPaymentDefaultResponse {
	error: boolean;
	data: IPaymentDefaultResponse[];
	paginationData: IPaginationData;
}

export interface GetAllPaymentResponse {
	error: boolean;
	data: IPaymentResponse[];
	paginationData: IPaginationData;
}

export interface GetAllEnforcementAgentFeeResponse {
	error: boolean;
	data: IEnforcementAgentFeeResponse[];
	paginationData: IPaginationData;
}
