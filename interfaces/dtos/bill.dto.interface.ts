import { IBaseQueryParams } from "@/interfaces/general.interface";

export interface IAssignStaffDTO {
	staff_id: string;
}

export type GetAllBillRequestParams = {
	property_id?: string;
	area_code?: string;
	building_use_id?: string;
	building_type?: string;
	bill_delivery_status?: string;
	bill_delivery_date?: string;
	from_bill_delivery_date?: string;
	to_bill_delivery_date?: string;
	bill_year?: string;
	payment_status?: string;
	assignment_status?: string;
	payment_date?: string;
	from_payment_date?: string;
	to_payment_date?: string;
	bill_creation_date?: string;
	from_bill_creation_date?: string;
	to_bill_creation_date?: string;
	search_term?: string;
	search_by?: string;
} & IBaseQueryParams;

export type UseGetAllBillProps = {
	params?: GetAllBillRequestParams;
};

export interface UseGetBillByIdProps {
	id: string;
	enabler?: boolean;
	showNotice?: boolean;
}
