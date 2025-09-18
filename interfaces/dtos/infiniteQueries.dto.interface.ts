import { IBaseQueryParams } from "../general.interface";

export type GetInfiniteAreaListParams = {
	area_code?: string;
	search_term?: string;
	search_by?: string;
} & IBaseQueryParams;

export type UseGetInfiniteAreaListProps = {
	params?: GetInfiniteAreaListParams;
	enabled?: boolean;
};
