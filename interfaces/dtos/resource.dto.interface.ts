import { IBaseQueryParams } from "@/interfaces/general.interface";

export type GetAllStreetParams = {
	area_code?: string;
	street_name?: string;
	search_term?: string;
} & IBaseQueryParams;

export type GetAllAreasRequestParams = {
	area_code?: string;
	search_term?: string;
	search_by?: string;
} & IBaseQueryParams;

export type GetAllBuildingTypesRequestParams = {
	building_type?: string;
	id?: string;
	search_term?: string;
	search_by?: string;
} & IBaseQueryParams;

export type UseGetAllAreasProps = {
	params?: GetAllAreasRequestParams;
};

export type UseGetAllBuildingTypesProps = {
	params?: GetAllBuildingTypesRequestParams;
};
