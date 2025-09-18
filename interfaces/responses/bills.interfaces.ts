import { IPaginationData } from "@/interfaces/general.interface";

export interface IBillResponse {
	bill_id: number;
	property_id: string;
	area_code: string;
	area_name: string;
	address: string;
	building_use_id: number;
	building_use: string;
	building_type: string;
	property_owner: string;
	land_value: number;
	bill_delivery_status: string;
	bill_delivery_date: string;
	default_days: number;
	bill_year: number;
	bill_amount: number;
	arrears: number;
	discount: number;
	penalty: number;
	total_bill_due: number;
	payment_status: string;
	payment_date: string;
	createdby: string;
	createdat: string;
	editedby: string;
	editedat: string;
	street_name: string;
	assignment_status: string;
	web_view: string | null;
	download_url: string | null;
}

export interface GetAllBillResponse {
	error: boolean;
	data: IBillResponse[];
	paginationData: IPaginationData;
}

export interface GetBillByIdIdResponse {
	error: boolean;
	bill: IBillResponse;
}
