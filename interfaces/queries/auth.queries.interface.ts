import { ILoginResponse } from "@/interfaces/responses/auth.interfaces";

export interface IUseSignInProps {
    onSuccess?: (_val: ILoginResponse) => void;
    onError?: (_val: string) => void;
    onReset?: () => void;
}