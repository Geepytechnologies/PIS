import { IPaginationData } from "@/interfaces/general.interface";

export interface IActivityLogResponse {
    activity_id: number;
    user_id: string;
    user_name: string;
    area_code: string;
    area_name: string;
    role_id: number;
    user_role: string;
    activity: string;
    action: string;
    ip_address: string;
    user_agent: string;
    longitude: number;
    latitude: number;
    db_createdat: string;
    geom: string;
}

export interface GetAllActivityLogResponse {
    error: boolean;
    data: IActivityLogResponse[];
    paginationData: IPaginationData;
}