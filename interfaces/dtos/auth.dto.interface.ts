import { IMessageResponse } from "@/interfaces/responses/general.response";

export interface ISignInDTO {
    email: string;
    password: string;
}

export interface IForgotPasswordDTO {
    email: string;
}

export interface IResetPasswordDTO {
    email: string;
    salt: string;
    new_password: string;
    confirm_password: string;
}

export interface IUpdatePasswordDTO {
    current_password: string;
    new_password: string;
    confirm_password:string;
}

export interface UpdatePasswordProps {
    onSuccess?: (_val: IMessageResponse) => void;
    onReset?: () => void;
    onError?: (message: string) => void;
}

export interface IUpdatePasswordRequest {
    payload: IUpdatePasswordDTO;
}

export interface ForgotPasswordProps {
    onSuccess?: (_val: IMessageResponse) => void;
    onReset?: () => void;
    onError?: (message: string) => void;
}

export interface IForgotPasswordRequest {
    payload: IForgotPasswordDTO;
}

export interface ResetPasswordProps {
    onSuccess?: (_val: IMessageResponse) => void;
    onReset?: () => void;
    onError?: (message: string) => void;
}

export interface IResetPasswordRequest {
    payload: IResetPasswordDTO;
}