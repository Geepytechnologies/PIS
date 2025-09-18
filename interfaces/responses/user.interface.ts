import { IPaginationData, IRolesType } from "@/interfaces/general.interface";
import { JwtPayload } from "jwt-decode";

export type IUserStatus = "active" | "inactive";

export interface IUserZonesResponse {
    area_code: string;
    area_name: string;
}

export interface IUserRoleResponse {
    role_id: string;
    role_name: string;
}

export interface IUserResponse extends JwtPayload {
    user_id: string;
    email: string;
    role_id: string;
    title: string;
    first_name: string;
    middle_name: string | null;
    last_name: string;
    phone_number_1: string | null;
    phone_number_2: string | null;
    user_image: string | null;
    token_provider: string | null;
    status: IUserStatus,
    captured_by: string | null;
    captured_at: string | null;
    modified_by: string | null;
    modified_at: string | null;
    createdby: string;
    createdat: string;
    editedby: string | null;
    editedat: string | null;
    nin: string | null;
    nin_verified: boolean | null;
    employment_type: string | null;
    employment_id: string | null;
    designation: string | null;
    image_id: string | null;
    image_public_url: string| null;
    otp: number | null;
    role_name: IRolesType;
    zones: IUserZonesResponse[];
}

export interface IUserResponse2 extends JwtPayload {
    user_id: string;
    email: string;
    role_id: string;
    title: string;
    first_name: string;
    middle_name: string | null;
    last_name: string;
    phone_number_1: string | null;
    phone_number_2: string | null;
    user_image: string | null;
    token_provider: string | null;
    status: IUserStatus,
    captured_by: string | null;
    captured_at: string | null;
    modified_by: string | null;
    modified_at: string | null;
    createdby: string;
    createdat: string;
    editedby: string | null;
    editedat: string | null;
    nin: string | null;
    nin_verified: boolean | null;
    employment_type: string | null;
    employment_id: string | null;
    designation: string | null;
    role_name: IRolesType;
    area_codes: string[];
    area_names: string[];
    public_id: string | null;
    public_url: string | null;
    otp: number | null;
}

export interface GetAllUserResponse {
    error: boolean;
    data: IUserResponse[];
    paginationData: IPaginationData;
}

export interface GetAllUserResponse2 {
    error: boolean;
    data: IUserResponse2[];
    paginationData: IPaginationData;
}

export interface GetAllUserRoleResponse {
    error: boolean;
    data: IUserRoleResponse[];
    paginationData: IPaginationData;
}

export interface GetUserByIdResponse {
    error: boolean;
    user: IUserResponse
}