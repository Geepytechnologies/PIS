import { IPaginationData } from "@/interfaces/general.interface";

export interface IBuildingUseResponse {
    building_use_id: string;
    building_use: string;
    sub_use: string;
    description: string;
}

export interface IBuildingTypeResponse {
    id: string;
    building_type: string;
    createdby: string;
    createdat: string;
    editedby: string;
    editedat: string;
}

export interface IBuildingResponse {
    property_id: string;
    building_name: string;
    building_type: string;
    building_use_id: number;
    building_use: string;
    number_of_floors: number;
    number_of_apartment: number;
    building_status: string;
    occupancy_status: string;
    number_of_households: number;
    address_type: string;
    address_prefix: string;
    address_no: number;
    address_suffix: string;
    street_name: string;
    address: string;
    closest_bustop: string;
    closest_landmark: string;
    locality: string;
    area_code: string;
    area_name: string;
    ward_code: string;
    ward_name: string;
    landlord_name: string;
    landlord_phone_number_1: string;
    landlord_phone_number_2: string;
    landlord_email: string;
    owner_id: string;
    billing_readiness: boolean;
    land_value: number;
    bill_year: number;
    tax_charge: number;
    payment_arrears: number;
    total_due: number;
    bill_delivery_status: string;
    payment_status: string;
    has_issues: boolean;
    data_issues: string;
    data_confidence_level: string;
    longx_decimal: number;
    laty_decimal: number;
    remark: string;
    update_type: string;
    captured_by: string;
    captured_at: number;
    modified_by: string;
    modified_at: number;
    db_createdby: string;
    db_createdat: string;
    db_editedby: string;
    db_editedat: string;
    ogc_fid: number;
    geom: string;
}

export interface GetAllBuildingResponse {
    error: boolean;
    data: IBuildingResponse[];
    paginationData: IPaginationData;
}

export interface GetAllBuildingUseResponse {
    error: boolean;
    data: IBuildingUseResponse[];
    paginationData: IPaginationData;
}

export interface GetAllBuildingTypeResponse {
    error: boolean;
    data: IBuildingTypeResponse[];
    paginationData: IPaginationData;
}

export interface GetBuildingByIdIdResponse {
    error: boolean;
    building: IBuildingResponse;
}