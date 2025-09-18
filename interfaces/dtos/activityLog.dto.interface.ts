import { IBaseQueryParams } from "@/interfaces/general.interface";

export type GetAllActivitiesRequestParams = {
	user_id?: string;
	role_id?: string;
	area_code?: string;
	action?: string;
	creation_date?: string;
	from_creation_date?: string;
	to_creation_date?: string;
	search_term?: string;
	search_by?: string;
} & IBaseQueryParams;

export type UseGetAllActivitiesProps = {
	params?: GetAllActivitiesRequestParams;
};
