import { IPaginationData } from "@/interfaces/general.interface";

export interface IChangeRequestTypeResponse {
    request_type_id: number;
    request_type: string;
    request_description: string;
    first_approval_role: number;
    second_approval_role: number;
    third_approval_role: number;
    first_approval_role_name: string;
    second_approval_role_name: string;
    third_approval_role_name: string;
}

export interface IChangeRequestResponse {
    task_id: number;
    request_type_id: number;
    request_type: string;
    property_id: string;
    building_name: string | null;
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
    closest_bustop: string;
    closest_landmark: string;
    locality: string;
    area_code: string;
    area_name: string;
    ward_code: number;
    ward_name: string;
    lga_code: number;
    lga_name: string;
    landlord_name: string;
    landlord_phone_number_1: string;
    landlord_phone_number_2: string | null;
    landlord_email: string | null;
    land_value: number;
    tax_charge: number;
    captured_by: string;
    captured_by_name: string;
    to_timestamp: string;
    approval_status: string;
    approval_status_role_id: number;
    first_approval_user_id: string | null;
    first_approval_by: string | null;
    first_approval_date: string | null;
    first_approval_remark: string | null;
    second_approval_user_id: string | null;
    second_approval_by: string | null;
    second_approval_date: string | null;
    second_approval_remark: string | null;
    third_approval_user_id: string | null;
    third_approval_by: string | null;
    third_approval_date: string | null;
    third_approval_remark: string | null;
    db_createdby: string;
    db_createdat: string;
    db_editedby: string | null;
    db_editedat: string | null;
    longx_decimal: number;
    laty_decimal: number;
    ogc_fid: number;
    geom: string;
}

export interface IPublicChangeRequestResponse {
    web_request_id: number;
    task_id: number;
    property_id: string;
    building_name: string | null;
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
    address_no: number | null;
    address_suffix: string;
    street_name: string | null;
    closest_bustop: string | null;
    closest_landmark: string | null;
    locality: string | null;
    area_code: string;
    area_name: string;
    ward_code: number;
    ward_name: string;
    lga_code: number;
    lga_name: string;
    landlord_name: string | null;
    landlord_phone_number_1: string | null;
    landlord_phone_number_2: string | null;
    landlord_email: string | null;
    requested_by: string;
    requested_by_name: string;
    request_date: string;
    request_status: string;
    db_createdby: string;
    db_createdat: string;
    db_editedby: string | null;
    db_editedat: string | null;
    ogc_fid: number;
    geom: string;
}

export interface GetAllChangeRequestResponse {
    error: boolean;
    data: IChangeRequestResponse[];
    paginationData: IPaginationData;
}

export interface GetAllChangeRequestTypeResponse {
    error: boolean;
    data: IChangeRequestTypeResponse[];
    paginationData: IPaginationData;
}

export interface GetAllPublicChangeRequestResponse {
    error: boolean;
    data: IPublicChangeRequestResponse[];
    paginationData: IPaginationData;
}
  