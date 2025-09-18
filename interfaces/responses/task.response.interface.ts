import { IPaginationData } from "@/interfaces/general.interface";

export interface ITaskTypeResponse {
    task_type_id: string;
    task_type: string;
}

export interface ITaskResponse {
    task_id: number;
    area_code: string;
    area_name: string;
    property_id: string;
    building_use: string;
    property_address: string;
    street_name: string;
    task_type_id: number;
    task_type: string;
    bill_id: number;
    bill_amount: number;
    bill_year: number;
    payment_arrears: number;
    total_due: number;
    task_description: string;
    creation_date: string;
    task_start_date: string;
    task_end_Date: string;
    assigner_id: string;
    assigned_by: string;
    assignee_id: string;
    assigned_to: string;
    task_status: string;
    task_status_change_date: string;
    issue_category: string;
    issue_remark: string;
    remark: string;
    image_id: string;
    location_longitude: number;
    location_latitude: number;
    property_updated: boolean;
    geom: string;
    createdat: string;
    public_id: string | null;
    public_url: string | null;
    preview_url: string | null;
}

export interface GetAllTaskResponse {
    error: boolean;
    data: ITaskResponse[];
    paginationData: IPaginationData;
}

export interface GetAllTaskTypeResponse {
    error: boolean;
    data: ITaskTypeResponse[];
    paginationData: IPaginationData;
}