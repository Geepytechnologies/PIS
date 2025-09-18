import { IUserResponse } from "@/interfaces/responses/user.interface";

export interface ILoginResponse {
    error: boolean;
    message: string;
    user: IUserResponse;
    token: string;
}