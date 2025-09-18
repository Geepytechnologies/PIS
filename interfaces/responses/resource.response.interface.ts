import { IPaginationData } from "@/interfaces/general.interface";

export interface IAreaResponse {
    area_code: string;
    area_name: string;
    land_value: number;
    residential_charge: number;
    industrial_charge: number;
    commercial_charge: number;
    geom: string;
    ogc_fid: number;
}

export interface GetAllAreaResponse {
    error: boolean;
    data: IAreaResponse[];
    paginationData: IPaginationData;
}

export interface IStreetResponse {
    area_code: string;
    street_name: string;
}

export interface GetAllStreetResponse {
    error: boolean;
    data: IStreetResponse[];
    paginationData: IPaginationData;
}