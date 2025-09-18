import { IBaseQueryParams } from "@/interfaces/general.interface";

export type GetAllBuildingRequestParams = {
	property_id?: string;
	building_type?: string;
	building_use_id?: string;
	building_status?: string;
	occupancy_status?: string;
	area_code?: string;
	ward_code?: string;
	billing_readiness?: string;
	street_name?: string;
	landlord_name?: string;
	search_term?: string;
	search_by?: string;
} & IBaseQueryParams;

export type UseGetAllBuildingProps = {
	params?: GetAllBuildingRequestParams;
};

export interface UseGetPropertyByIdProps {
	id: string;
	enabler?: boolean;
	showNotice?: boolean;
}
